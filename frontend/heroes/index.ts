const attributes = {
  agi: {
    en: "Agility",
    ru: "Ловкость",
  },
  int: {
    en: "Intellect",
    ru: "Интеллект",
  },
  str: {
    en: "Strength",
    ru: "Сида",
  },
};

export type HeroAttribute = keyof typeof attributes;

const roles = {
  carry: {
    ru: "Кэрри",
    en: "Carry",
  },
  escape: {
    ru: "Спасение",
    en: "Escape",
  },
  fastDamage: {
    ru: "Быстрый урон",
    en: "Fast Damage",
  },
  durability: {
    ru: "Стойкость",
    en: "Durability",
  },
  initiation: {
    ru: "Инициация",
    en: "Initiation",
  },
  control: {
    ru: "Контроль",
    en: "Control",
  },
  forest: {
    ru: "Лес",
    en: "Forest",
  },
  support: {
    ru: "Поддержка",
    en: "Support",
  },
  towerDamage: {
    ru: "Урон по вышками",
    en: "Tower damage",
  },
  push: {
    ru: "Пуш",
    en: "Push",
  },
};

export type HeroRole = keyof typeof roles;

export const attackes = {
  melee: {
    en: "Melee",
    ru: "Ближний бой",
  },
  range: {
    en: "Range",
    ru: "Дальний бой",
  },
};

export type AttackType = keyof typeof attackes;

type Heroes = {
  [k: number]: {
    id: number;
    attribute: HeroAttribute;
    roles: HeroRole[];
    en: string;
    ru: string;
    attackType: AttackType;
  };
};

export const heroes: Heroes = {
  1: {
    id: 1,
    attribute: "agi",
    roles: ["carry", "escape", "fastDamage"],
    en: "Antimage",
    ru: "Антимаг",
    attackType: "melee",
  },
  2: {
    id: 2,
    attribute: "str",
    roles: ["initiation", "durability", "control", "forest"],
    en: "Axe",
    ru: "Акс",
    attackType: "melee",
  },
  3: {
    id: 3,
    attribute: "int",
    roles: ["support", "durability", "control", "fastDamage"],
    en: "Bane",
    ru: "Бэйн",
    attackType: "range",
  },
  4: {
    id: 4,
    attribute: "agi",
    roles: ["carry", "control", "forest", "fastDamage", "initiation"],
    en: "Bloodseeker",
    ru: "Блудсикер",
    attackType: "melee",
  },
  5: {
    id: 5,
    attribute: "int",
    roles: ["support", "control", "fastDamage", "forest"],
    en: "Crystal Maiden",
    ru: "Кристал Мэйден",
    attackType: "range",
  },
  6: {
    id: 6,
    attribute: "agi",
    roles: ["carry", "control", "fastDamage"],
    en: "Drow Ranger",
    ru: "Дроу Рэйнджер",
    attackType: "range",
  },
  7: {
    id: 7,
    attribute: "str",
    roles: ["support", "initiation", "control", "fastDamage"],
    en: "Earthshaker",
    ru: "Шэйкер",
    attackType: "melee",
  },
  8: {
    id: 8,
    attribute: "agi",
    roles: ["carry", "initiation", "fastDamage", "escape"],
    en: "Juggernaut",
    ru: "Джаггернаут",
    attackType: "melee",
  },
  9: {
    id: 9,
    attribute: "agi",
    roles: ["carry", "support", "initiation", "escape"],
    en: "Mirana",
    ru: "Мирана",
    attackType: "range",
  },
  10: {
    id: 10,
    attribute: "agi",
    roles: ["carry", "initiation", "escape"],
    en: "Morhpling",
    ru: "Морфлинг",
    attackType: "range",
  },
  11: {
    id: 11,
    attribute: "agi",
    roles: ["carry", "initiation", "fastDamage", "durability"],
    en: "Shadow Fiend",
    ru: "СФ",
    attackType: "range",
  },
  12: {
    id: 12,
    attribute: "agi",
    roles: ["carry", "durability", "escape"],
    en: "Phantom Lancer",
    ru: "Фантом Лансер",
    attackType: "melee",
  },
  13: {
    id: 13,
    attribute: "int",
    roles: ["fastDamage", "durability", "escape", "control"],
    en: "Puck",
    ru: "Пак",
    attackType: "range",
  },
  14: {
    id: 14,
    attribute: "str",
    roles: ["fastDamage", "durability", "control"],
    en: "Pudge",
    ru: "Пудж",
    attackType: "melee",
  },
  15: {
    id: 15,
    attribute: "agi",
    roles: ["carry", "durability", "initiation"],
    en: "Razor",
    ru: "Разор",
    attackType: "range",
  },
  16: {
    id: 16,
    attribute: "str",
    roles: ["control", "fastDamage", "durability", "initiation"],
    en: "Sand King",
    ru: "Сэнд Кинг",
    attackType: "melee",
  },
  17: {
    id: 17,
    attribute: "int",
    roles: ["control", "fastDamage", "escape", "initiation"],
    en: "Storm Spirit",
    ru: "Шторм спирит",
    attackType: "range",
  },
  18: {
    id: 18,
    attribute: "str",
    roles: ["carry", "control", "fastDamage", "escape", "initiation"],
    en: "Sven",
    ru: "Свен",
    attackType: "melee",
  },
  19: {
    id: 19,
    attribute: "str",
    roles: ["carry", "control", "fastDamage", "initiation", "towerDamage"],
    en: "Tiny",
    ru: "Тини",
    attackType: "melee",
  },
  20: {
    id: 20,
    attribute: "agi",
    roles: ["support", "control", "initiation"],
    en: "Vengeful Spirit",
    ru: "Венга",
    attackType: "range",
  },
  21: {
    id: 21,
    attribute: "int",
    roles: ["fastDamage", "control", "initiation", "towerDamage", "escape"],
    en: "Windranger",
    ru: "Виндрэйнджер",
    attackType: "range",
  },
  22: {
    id: 22,
    attribute: "int",
    roles: ["fastDamage", "initiation"],
    en: "Zeus",
    ru: "Зевс",
    attackType: "range",
  },
  23: {
    id: 23,
    attribute: "str",
    roles: ["fastDamage", "initiation", "control", "carry"],
    en: "Kunkka",
    ru: "Кунка",
    attackType: "melee",
  },
  25: {
    id: 25,
    attribute: "int",
    roles: ["fastDamage", "initiation", "control", "carry"],
    en: "Lina",
    ru: "Лина",
    attackType: "range",
  },
  26: {
    id: 26,
    attribute: "int",
    roles: ["support", "fastDamage", "initiation", "control"],
    en: "Lion",
    ru: "Лион",
    attackType: "range",
  },
  27: {
    id: 27,
    attribute: "int",
    roles: ["support", "initiation", "control"],
    en: "Shadow Shaman",
    ru: "Шаман",
    attackType: "range",
  },
  28: {
    id: 28,
    attribute: "str",
    roles: ["carry", "initiation", "control", "durability"],
    en: "Slardar",
    ru: "Слардар",
    attackType: "melee",
  },
  29: {
    id: 29,
    attribute: "str",
    roles: ["initiation", "control", "durability"],
    en: "Tidehunter",
    ru: "Тайд",
    attackType: "melee",
  },
  30: {
    id: 30,
    attribute: "int",
    roles: ["support", "initiation", "control", "fastDamage"],
    en: "Witch doctor",
    ru: "Витч доктор",
    attackType: "range",
  },
  31: {
    id: 31,
    attribute: "int",
    roles: ["support", "initiation", "control", "fastDamage"],
    en: "Lich",
    ru: "Лич",
    attackType: "range",
  },
  32: {
    id: 32,
    attribute: "agi",
    roles: ["carry", "initiation", "fastDamage", "escape"],
    en: "Riki",
    ru: "Рики",
    attackType: "melee",
  },
  33: {
    id: 33,
    attribute: "int",
    roles: [
      "initiation",
      "fastDamage",
      "towerDamage",
      "forest",
      "push",
      "control",
    ],
    en: "Enigma",
    ru: "Энигма",
    attackType: "range",
  },
  34: {
    id: 34,
    attribute: "int",
    roles: ["initiation", "fastDamage", "push", "control"],
    en: "Tinker",
    ru: "Тинкер",
    attackType: "range",
  },
  35: {
    id: 35,
    attribute: "agi",
    roles: ["carry", "fastDamage", "push", "towerDamage"],
    en: "Sniper",
    ru: "Снайпер",
    attackType: "range",
  },
  36: {
    id: 36,
    attribute: "int",
    roles: ["durability", "fastDamage", "control"],
    en: "Necrophos",
    ru: "Некр",
    attackType: "range",
  },
  37: {
    id: 37,
    attribute: "int",
    roles: ["support", "fastDamage", "control"],
    en: "Warlock",
    ru: "Варлок",
    attackType: "range",
  },
  38: {
    id: 38,
    attribute: "str",
    roles: ["towerDamage", "push", "control"],
    en: "Beastmaster",
    ru: "Бистмастер",
    attackType: "range",
  },
  39: {
    id: 39,
    attribute: "int",
    roles: ["escape", "fastDamage", "push", "control"],
    en: "Queen of Paing",
    ru: "Квопа",
    attackType: "range",
  },
  40: {
    id: 40,
    attribute: "agi",
    roles: ["fastDamage", "push"],
    en: "Venomancer",
    ru: "Веномансер",
    attackType: "range",
  },
  41: {
    id: 41,
    attribute: "agi",
    roles: ["carry", "control", "escape", "fastDamage", "push"],
    en: "Void",
    ru: "Войд",
    attackType: "melee",
  },
  42: {
    id: 42,
    attribute: "str",
    roles: ["carry", "control", "durability", "fastDamage", "push", "forest"],
    en: "Wraith King",
    ru: "Врайс кинг",
    attackType: "melee",
  },
  43: {
    id: 43,
    attribute: "int",
    roles: ["towerDamage", "fastDamage", "push"],
    en: "Death Prophet",
    ru: "Банша",
    attackType: "range",
  },
  44: {
    id: 44,
    attribute: "agi",
    roles: ["carry", "escape", "towerDamage", "fastDamage", "push"],
    en: "Phantom Assassin",
    ru: "Фантомка",
    attackType: "melee",
  },
  45: {
    id: 45,
    attribute: "int",
    roles: ["towerDamage", "fastDamage", "push"],
    en: "Pugna",
    ru: "Пугна",
    attackType: "range",
  },
  46: {
    id: 46,
    attribute: "agi",
    roles: ["towerDamage", "fastDamage", "escape", "initiation"],
    en: "Templar Assassing",
    ru: "Тэмпларка",
    attackType: "range",
  },
  47: {
    id: 47,
    attribute: "agi",
    roles: ["push", "fastDamage", "durability", "initiation"],
    en: "Viper",
    ru: "Вайпер",
    attackType: "range",
  },
  48: {
    id: 48,
    attribute: "agi",
    roles: ["push", "fastDamage", "durability", "forest"],
    en: "Luna",
    ru: "Луна",
    attackType: "range",
  },
  49: {
    id: 49,
    attribute: "str",
    roles: ["push", "durability", "initiation"],
    en: "Dragon Knight",
    ru: "Дрэгон Найт",
    attackType: "melee",
  },
  50: {
    id: 50,
    attribute: "int",
    roles: ["escape", "durability"],
    en: "Dazzle",
    ru: "Даззл",
    attackType: "range",
  },
  51: {
    id: 51,
    attribute: "str",
    roles: ["escape", "durability", "initiation", "control"],
    en: "Clockwerk",
    ru: "Клокверк",
    attackType: "melee",
  },
  52: {
    id: 52,
    attribute: "int",
    roles: ["towerDamage", "push", "durability", "initiation", "control"],
    en: "Leshrak",
    ru: "Лешрак",
    attackType: "range",
  },
  53: {
    id: 53,
    attribute: "int",
    roles: ["towerDamage", "push", "initiation", "control"],
    en: "Natural Prophet",
    ru: "Фурион",
    attackType: "range",
  },
  54: {
    id: 54,
    attribute: "str",
    roles: ["carry", "initiation", "durability"],
    en: "Naix",
    ru: "Найкс",
    attackType: "melee",
  },
  55: {
    id: 55,
    attribute: "int",
    roles: ["initiation", "escape"],
    en: "Dark Seer",
    ru: "Дарк Сир",
    attackType: "melee",
  },
  56: {
    id: 56,
    attribute: "agi",
    roles: ["carry", "fastDamage", "towerDamage", "initiation", "escape"],
    en: "Clinkz",
    ru: "Клинкз",
    attackType: "range",
  },
  57: {
    id: 57,
    attribute: "str",
    roles: ["support", "escape"],
    en: "Omniknight",
    ru: "Омнинайт",
    attackType: "melee",
  },
  58: {
    id: 58,
    attribute: "int",
    roles: ["support", "escape", "durability", "forest"],
    en: "Enchantress",
    ru: "Энчантресс",
    attackType: "range",
  },
  59: {
    id: 59,
    attribute: "str",
    roles: ["durability", "initiation"],
    en: "Huskar",
    ru: "Хускар",
    attackType: "range",
  },
  60: {
    id: 60,
    attribute: "str",
    roles: ["durability", "initiation"],
    en: "Balanar",
    ru: "Баланар",
    attackType: "melee",
  },
  61: {
    id: 61,
    attribute: "agi",
    roles: ["carry", "push", "forest", "durability"],
    en: "Broodmother",
    ru: "Брудмазер",
    attackType: "melee",
  },
  62: {
    id: 62,
    attribute: "agi",
    roles: ["escape", "support"],
    en: "Bounty Hunter",
    ru: "Баунти Хантер",
    attackType: "melee",
  },
  63: {
    id: 63,
    attribute: "agi",
    roles: ["escape", "support", "carry", "durability"],
    en: "Weaver",
    ru: "Вивер",
    attackType: "range",
  },
  64: {
    id: 64,
    attribute: "int",
    roles: [
      "support",
      "towerDamage",
      "fastDamage",
      "carry",
      "durability",
      "control",
    ],
    en: "Jakiro",
    ru: "Джакиро",
    attackType: "range",
  },
  65: {
    id: 65,
    attribute: "int",
    roles: ["initiation", "control", "fastDamage"],
    en: "Batrider",
    ru: "Бэтрайдер",
    attackType: "range",
  },
  66: {
    id: 66,
    attribute: "int",
    roles: ["support", "control", "towerDamage"],
    en: "Chen",
    ru: "Чен",
    attackType: "range",
  },
  67: {
    id: 67,
    attribute: "agi",
    roles: ["carry", "durability", "escape"],
    en: "Spectre",
    ru: "Спектра",
    attackType: "melee",
  },
  68: {
    id: 68,
    attribute: "int",
    roles: ["support", "fastDamage", "control"],
    en: "Ancient Apparat",
    ru: "Аппарат",
    attackType: "range",
  },
  69: {
    id: 69,
    attribute: "str",
    roles: ["initiation", "fastDamage", "control", "forest"],
    en: "Doom",
    ru: "Дум",
    attackType: "melee",
  },
  70: {
    id: 70,
    attribute: "agi",
    roles: ["initiation", "fastDamage", "control", "forest"],
    en: "Ursa",
    ru: "Урса",
    attackType: "melee",
  },
  71: {
    id: 71,
    attribute: "str",
    roles: ["initiation", "fastDamage", "control", "escape"],
    en: "Barathrum",
    ru: "Баратрум",
    attackType: "melee",
  },
  72: {
    id: 72,
    attribute: "agi",
    roles: ["carry", "initiation", "fastDamage", "control"],
    en: "Gyrocopter",
    ru: "Гирокоптер",
    attackType: "melee",
  },
  73: {
    id: 73,
    attribute: "str",
    roles: ["carry", "initiation", "control"],
    en: "Alchemist",
    ru: "Алхимик",
    attackType: "melee",
  },
  74: {
    id: 74,
    attribute: "int",
    roles: ["carry", "initiation", "control", "fastDamage", "push"],
    en: "Invoker",
    ru: "Инвокер",
    attackType: "range",
  },
  75: {
    id: 75,
    attribute: "int",
    roles: ["support"],
    en: "Silencer",
    ru: "Сайленсер",
    attackType: "range",
  },
  76: {
    id: 76,
    attribute: "int",
    roles: ["carry", "fastDamage", "control", "escape"],
    en: "Outworld Destroyer",
    ru: "ОД",
    attackType: "range",
  },
  77: {
    id: 77,
    attribute: "str",
    roles: [
      "initiation",
      "fastDamage",
      "control",
      "escape",
      "push",
      "towerDamage",
    ],
    en: "Lycan",
    ru: "Ликантроп",
    attackType: "melee",
  },
  78: {
    id: 78,
    attribute: "str",
    roles: ["initiation", "fastDamage", "control", "escape"],
    en: "Brewmaster",
    ru: "Брюмастер",
    attackType: "melee",
  },
  79: {
    id: 79,
    attribute: "int",
    roles: ["initiation", "control", "escape"],
    en: "Shadow Demon",
    ru: "Шэдоу Демон",
    attackType: "range",
  },
  80: {
    id: 80,
    attribute: "agi",
    roles: ["initiation", "control", "escape", "towerDamage", "push"],
    en: "Lone Druid",
    ru: "Лон друид",
    attackType: "range",
  },
  81: {
    id: 81,
    attribute: "str",
    roles: ["initiation", "control", "fastDamage", "towerDamage", "carry"],
    en: "Chaos Knight",
    ru: "Чаос Найт",
    attackType: "melee",
  },
  82: {
    id: 82,
    attribute: "agi",
    roles: ["initiation", "control", "fastDamage", "carry"],
    en: "Meepo",
    ru: "Мипо",
    attackType: "melee",
  },
  83: {
    id: 83,
    attribute: "str",
    roles: ["initiation", "control", "support"],
    en: "Treant Protector",
    ru: "Трент Протектор",
    attackType: "melee",
  },
  84: {
    id: 84,
    attribute: "str",
    roles: ["initiation", "control", "support", "fastDamage"],
    en: "Ogre Mage",
    ru: "Огр Маг",
    attackType: "melee",
  },
  85: {
    id: 85,
    attribute: "str",
    roles: ["support", "fastDamage", "durability"],
    en: "Undying",
    ru: "Зомби",
    attackType: "melee",
  },
  86: {
    id: 86,
    attribute: "int",
    roles: ["support", "control"],
    en: "Rubick",
    ru: "Рубик",
    attackType: "range",
  },
  87: {
    id: 87,
    attribute: "int",
    roles: ["support", "control", 'fastDamage'],
    en: "Disraptor",
    ru: "Дизраптор",
    attackType: "range",
  },
};
