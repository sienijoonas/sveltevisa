export type Question = {
  questions: {
    title: string
    explanation: string,
    image: string,
    answer: Languages | Guitars
  }[],
  answers: Languages[] | Guitars[]
}

export enum Languages {
  ja = 'Japanese',
  zh = 'Mandarin',
  th = 'Thai',
  kr = 'Korean',
}

export enum Guitars {
  gibson = 'Gibson',
  jackson = 'Jackson',
  ibanez = 'Ibanez',
  fender = 'Fender',
}
