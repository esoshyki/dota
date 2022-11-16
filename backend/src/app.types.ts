export type HeroRate = [number, number];

export type HeroesRateResponse = {
  dire: HeroRate[]
  radiant: HeroRate[]
  score: number
}

export type HeroesRateRequest = {
  dire: [number, number, number, number, number]
  radiant: [number, number, number, number, number]
}

export type ErrorResponse = {
  error: string
}

