

<template>
  <div class="container-flex-col fw">
    <div class="loader" v-if="$data.pending">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <div class="container-flex-col fw picker" v-if="!!$data.response">
      <v-sheet :theme="'dark'" :tag="'h2'"> Dota 2 picker </v-sheet>

      <v-item-group class="fw">
        <v-container :fluid="true" class="fw">
          <v-row class="fw">
            <v-col cols="12" md="6">
              <v-item v-slot="{ active, toggle }">
                <v-card :theme="'dark'">
                  <v-card-title text="Radiant" color="success"
                    >Radiant</v-card-title
                  >

                  <div class="heroes">
                    <v-img
                      v-for="(hero, index) in request.radiant"
                      :key="hero + index"
                      :src="require(`~/assets/images/${hero}.jpg`)"
                    />
                  </div>
                </v-card>
              </v-item>
            </v-col>

            <v-col cols="12" md="6">
              <v-item v-slot="{ active, toggle }">
                <v-card :theme="'dark'">
                  <v-card-title text="Radiant" color="success"
                    >Dire</v-card-title
                  >
                  <div class="heroes">
                    <v-img
                      v-for="(hero, index) in request.dire"
                      :key="hero + index"
                      :src="require(`~/assets/images/${hero}.jpg`)"
                    />
                  </div>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>

      <div class="d-flex justify-center fw" :theme="'dark'">
        <v-btn
          color="success"
          v-on:click="() => setMode('radiant')"
          :active="mode === 'radiant'"
          :class="{ 'disabled-button-radiant': mode !== 'radiant' }"
          dark
          >Radiant pick</v-btn
        >
        <v-btn
          color="none"
          v-on:click="() => setMode('ban')"
          :active="mode === 'ban'"
          :class="{ 'disabled-button-ban': mode !== 'ban' }"
          class="btn-ban"
          >Ban</v-btn
        >
        <v-btn
          color="red"
          v-on:click="() => setMode('dire')"
          :active="mode === 'dire'"
          :class="{ 'disabled-button-dire': mode !== 'dire' }"
          >Dire pick</v-btn
        >

        <!-- <v-text-field :theme="'dark'" label="Search" v-model="search"></v-text-field> -->
      </div>

      <v-card
        v-if="mode === 'ban'"
        :theme="'dark'"
        class="d-flex justify-start fw flex-wrap"
        style="gap: 5px; padding: 10px 0px"
      >
        <v-hover v-for="item in allHeroes" :key="item" class="pointer">
          <v-img
            :src="require(`~/assets/images/${item}.jpg`)"
            class="all-heroes-image pointer"
            v-on:click="() => toggleBanHero(item)"
            :class="{
              banned: bans.includes(item),
              'radiant-pick': request.radiant.includes(item),
              'dire-pick': request.dire.includes(item),
            }"
          />
        </v-hover>
      </v-card>

      <v-card
        v-if="mode === 'radiant' && !!response.radiant"
        :theme="'dark'"
        class="d-flex justify-start fw flex-wrap"
        style="gap: 5px; padding: 10px 0px"
      >
        <v-hover
          v-for="item in response.radiant"
          :key="item[0]"
          class="pointer"
        >
          <v-img
            :src="require(`~/assets/images/${item[0]}.jpg`)"
            class="all-heroes-image pointer"
            v-on:click="() => addHeroToTeam('radiant', item[0])"
            :class="{
              banned: bans.includes(item[0]),
              'radiant-pick': request.radiant.includes(item[0]),
              'dire-pick': request.dire.includes(item[0]),
            }"
          />
        </v-hover>
      </v-card>

      <v-card
        v-if="mode === 'dire' && !!response.dire"
        :theme="'dark'"
        class="d-flex justify-start fw flex-wrap"
        style="gap: 5px; padding: 10px 0px"
      >
        <v-hover v-for="item in response.dire" :key="item[0]" class="pointer">
          <v-img
            :src="require(`~/assets/images/${item[0]}.jpg`)"
            class="all-heroes-image pointer"
            v-on:click="() => addHeroToTeam('dire', item[0])"
            :class="{
              banned: bans.includes(item[0]),
              'dire-pick': request.dire.includes(item[0]),
              'radiant-pick': request.radiant.includes(item[0]),
            }"
          />
        </v-hover>
      </v-card>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { HeroesRateRequest, HeroesRateResponse } from "../types";
import { banNumbers } from "../api/banNumbers";
import { AxiosResponse } from "axios";

type Teams = "radiant" | "dire";
type Modes = Teams | "ban";

export default defineComponent({
  methods: {
    setMode(mode: Modes) {
      this.mode = mode;
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
    fetchHeroes() {
      this.pending = true;
      this.$axios.post('/picker', this.$data.request).then((res) => {

          if (res.data) {
            const data = res.data as HeroesRateResponse;
            console.log(`data`);
            console.log(data)
            this.$data.response.radiant = data.radiant.sort(
              (a, b) => b[1] - a[1]
            );
            this.$data.response.dire = data.dire.sort(
              (a, b) => b[1] - a[1]
            );
            this.$data.response.score = data.score;
          }
        })
        .finally(() => (this.$data.pending = false));
    },
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
      allHeroes: new Array(121)
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
</style>
