export type question = {
    question: string
    explanation: string
    image: string
    answer: boolean | Languages
}

export enum Languages {
    ja = 'Japanese',
    zh = 'Mandarin',
    th = 'Thai',
    kr = 'Korean',
}