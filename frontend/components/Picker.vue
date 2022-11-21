

<template>
  <div class="container-flex-col fw">
    <div class="loader" v-if="$data.pending">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
    <div class="container-flex-col fw picker" v-if="!!$data.response">
      <v-sheet :theme="'dark'" :tag="'h2'"> Dota 2 picker </v-sheet>

      <v-item-group class="fw">
        <v-container :fluid="true" class="fw">
          <v-row class="fw">
            <v-col cols="12" md="6">
              <v-item v-slot="{ active, toggle }">
                <v-card :theme="'dark'">
                  <v-badge class="fw" left :content="$data.response.score + ' %'" :value="$data.response.score > 0">
                    <v-row class="fw" :style="{ height: '20px', padding: '0 20px' }">
                      <v-card-title class="team-title" text="Radiant" color="success" :tag="'span'">Radiant
                      </v-card-title>
                    </v-row>
                  </v-badge>
                  <div class="heroes">
                    <v-img v-for="(hero, index) in $data.request.radiant"
                      v-on:click="() => removeFromTeam('radiant', hero)" :key="hero + index"
                      :src="require(`~/assets/images/${hero}.jpg`)" />
                  </div>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="6">
              <v-item v-slot="{ active, toggle }">
                <v-card :theme="'dark'">
                  <v-badge right class="fw" :content="-$data.response.score + ' %'" :value="$data.response.score < 0">
                    <v-row class="fw" :style="{ height: '20px', padding: '0 20px' }">
                      <v-card-title class="team-title" text="Dire" color="success" :tag="'span'">Dire</v-card-title>
                    </v-row>
                  </v-badge>
                  <div class="heroes">
                    <v-img v-for="(hero, index) in $data.request.dire" v-on:click="() => removeFromTeam('dire', hero)"
                      :key="hero + index" :src="require(`~/assets/images/${hero}.jpg`)" />
                  </div>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>

      <div class="d-flex justify-center fw" :theme="'dark'">
        <v-btn color="success" v-on:click="() => setMode('radiant')" :active="mode === 'radiant'"
          :class="{ 'disabled-button-radiant': mode !== 'radiant' }" dark>Radiant pick</v-btn>
        <v-btn color="none" v-on:click="() => setMode('ban')" :active="mode === 'ban'"
          :class="{ 'disabled-button-ban': mode !== 'ban' }" class="btn-ban">Ban</v-btn>
        <v-btn color="red" v-on:click="() => setMode('dire')" :active="mode === 'dire'"
          :class="{ 'disabled-button-dire': mode !== 'dire' }">Dire pick</v-btn>

        <!-- <v-text-field :theme="'dark'" label="Search" v-model="search"></v-text-field> -->
      </div>

      <v-card v-if="$data.heroes" :theme="'dark'" class="d-flex justify-center fw flex-wrap"
        style="gap: 5px; padding: 10px 0px">
        <v-hover v-for="item in $data.heroes" :key="item" class="pointer">
          <v-col :style="{ padding: 0 }" :md="1">
            <v-img :src="require(`~/assets/images/${item}.jpg`)" class="all-heroes-image pointer"
              v-on:click="() => onHeroClick(item)" :class="{
                banned: bans.includes(item),
                'radiant-pick': request.radiant.includes(item),
                'dire-pick': request.dire.includes(item),
              }" />
          </v-col>
        </v-hover>
      </v-card>

    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import { HeroesRateRequest, HeroesRateResponse } from "../types";
import { banNumbers } from "../api/banNumbers";
import { AxiosResponse } from "axios";

type Teams = "radiant" | "dire";
type Modes = Teams | "ban";

export default defineComponent({
  methods: {
    setMode(mode: Modes) {
      this.mode = mode;
      this.getHeroList();
    },
    filterHeroes() {
      return this.heroes.filter(el => !this.request.dire.includes(el) && !this.request.radiant.includes(el))
    },
    onHeroClick(hero: number) {
      if (this.mode === 'ban') {
        this.toggleBanHero(hero)
      } else if (this.mode === 'radiant') {
        this.addHeroToTeam('radiant', hero)
      } else if (this.mode === 'dire') {
        this.addHeroToTeam('dire', hero)
      }
    },
    addHeroToTeam(team: Teams, n: number) {
      const targetTeam =
        team === "radiant" ? this.request.radiant : this.request.dire;
      const opositeTeam =
        team === "radiant" ? this.request.dire : this.request.radiant;
      if (opositeTeam.includes(n)) {
        return;
      }
      const exist = targetTeam.findIndex((el) => el === n);
      if (exist < 0) {
        const firstZeroIndex = targetTeam.findIndex((el) => el === 0);
        if (firstZeroIndex >= 0) {
          targetTeam[firstZeroIndex] = n;
          this.fetchHeroes();
          if (team === 'radiant') {
            this.$data.request.radiant = [...targetTeam]
          } else {
            this.$data.request.dire = [...targetTeam]
          }

        }
      } else {
        this.removeFromTeam(team, n);
      }
    },
    removeFromTeam(team: Teams, n: number) {
      const targetTeam =
        team === "radiant" ? this.request.radiant : this.request.dire;
      const idx = targetTeam.findIndex((el) => el === n);
      if (idx >= 0) {
        targetTeam[idx] = 0;
        this.fetchHeroes();
      }
    },
    toggleBanHero(n: number) {
      if (!this.bans.includes(n)) {
        this.bans.push(n);
      } else {
        this.bans = this.bans.filter((el) => el !== n);
      }
    },
    getHeroList() {
      let heroList = [] as number[];
      if (this.mode === 'dire') {
        if (this.response.dire.length) {
          console.log(this.response.dire.length)
          heroList = this.response.dire.map(([hero, rating]) => {
            return hero
          }).filter(el => !this.request.dire.includes(el) && !this.request.radiant.includes(el))
        } else {
          heroList = this.heroes.filter(el => {
          return !this.request.dire.includes(el) && !this.request.radiant.includes(el)
        })
        }
      };

      if (this.mode === 'radiant') {
        if (this.response.radiant.length) {
          heroList = this.response.radiant.map(([hero, rating]) => {
            return hero
          }).filter(el => !this.request.radiant.includes(el) && !this.request.radiant.includes(el));
        } else {
          heroList = this.heroes.filter(el => {
          return !this.request.dire.includes(el) && !this.request.radiant.includes(el)
        })
        }
      };

      if (this.mode === 'ban') {
        heroList = this.heroes.filter(el => {
          return !this.request.dire.includes(el) && !this.request.radiant.includes(el)
        })
      }

     this.heroes = heroList;
    },
    fetchHeroes() {
      this.pending = true;
      this.$axios.post('/picker', this.$data.request).then((res) => {

        if (res.data) {
          const data = res.data as HeroesRateResponse;
          if (data.radiant.length) {
            this.$data.response.radiant = data.radiant.sort(
              (a, b) => b[1] - a[1]
            );
          } else {
            this.$data.response.radiant = [] as any[];
          }
          if (data.dire.length) {
            this.$data.response.dire = data.dire.sort(
              (a, b) => b[1] - a[1]
            );
          } else {
            this.$data.response.dire = [] as any[];
          }

          this.$data.response.score = Math.round(100 * data.score / 2);
        }
      })
        .finally(() => {
          (this.$data.pending = false)
          this.getHeroList();
        });
    },
  },
  updated() {

  },
  mounted() {
    this.fetchHeroes();

  },
  name: "picker",

  data() {
    return {
      pending: true,
      bans: [] as number[],
      mode: "radiant" as "radiant" | "dire" | "ban",
      heroes: new Array(121)
        .fill(0)
        .map((_, idx) => idx + 1)
        .filter((el) => !banNumbers.includes(el)),
      request: {
        dire: [0, 0, 0, 0, 0],
        radiant: [0, 0, 0, 0, 0],
      } as HeroesRateRequest,
      response: {
        dire: [],
        radiant: [],
        score: 0,
      } as HeroesRateResponse,
      search: "",
    };
  },
});
</script>

<style>
.picker {
  padding: 20px;
  gap: 15px;
  max-width: 1000px;
  margin: auto;
}

@media screen and (max-width: 1000px) {
  .picker {
    padding: 10px;
  }
}

.heroes {
  padding: 10px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
}

.heroes img {
  height: 100%;
  width: 100%;
}

.all-heroes {
  gap: 5px;
  flex-wrap: wrap;
}

.all-heroes-image {
  width: 69px;
  height: 38px;
}

.all-heroes-image:hover {
  transform: scale(1.03);
  transition: transform 300ms ease;
}

.banned {
  filter: grayscale(1);
}

.banned img {
  filter: blur(1px);
}

.radiant-pick-button-active {
  background-color: red;
}

.disabled-button-ban,
.disabled-button-radiant,
.disabled-button-dire {
  transform: scale(0.8);
}

.radiant-pick::after,
.dire-pick::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.radiant-pick::after {
  background-color: #69f0ae;
  opacity: 0.7;
}

.disabled-button-dire {
  transform: scale(0.8) translateX(-20px);
}

.disabled-button-radiant {
  transform: scale(0.8) translateX(30px);
}

.btn-ban {
  z-index: 2;
}

.dire-pick::after {
  background-color: #e53935;
  opacity: 0.7;
}

.team-title {
  font-size: 12px;
  line-height: 12px;
  padding: 5px;
}
</style>
