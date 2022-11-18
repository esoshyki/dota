import { HeroesRateRequest, HeroesRateResponse, HeroRate } from "../types";
import { banNumbers } from "./banNumbers";
const heroes = new Array(121).fill(0).map((_, el) => el + 1).filter(el => !banNumbers.includes(el));

console.log(heroes);

export const mocks = {
  getHeroes: (request: HeroesRateRequest): { data: HeroesRateResponse } => {
    const dire = heroes
      .filter((el) => !request.dire.includes(el))
      .map((el) => {
        const rate: HeroRate = [
          el,
          Number(
            Math.random() > 0.5
              ? Math.random().toFixed(4)
              : -Math.random().toFixed(4)
          ),
        ] as HeroRate;
        return rate;
      });

    const radiant = heroes
      .filter((el) => !request.radiant.includes(el))
      .map(
        (el) =>
          [
            el,
            Number(
              Math.random() > 0.5
                ? Math.random().toFixed(4)
                : -Math.random().toFixed(4)
            ),
          ] as HeroRate
      );

    const score = Math.random();

    const response: HeroesRateResponse = {
      dire,
      radiant,
      score,
    };

    return { data: response };
  },
};
