import type { question } from "../types"
import { Languages } from "../types"

export let testQuestions:question[] = [
  {
    question: 'Can you guess the language?',
    explanation: 'The right answer is Thai!',
    image: 'thai.png',
    answer: Languages.th,
  },
  {
    question: 'Tämä kieli tunnetaan monimutkaisista ja laatikkomaisista kirjoitusmerkeistään',
    explanation: 'The right answer is Mandarin Chinese!',
    image: 'zh-1.jpg',
    answer: Languages.zh,
  },
  {
    question: 'mites tan laita?',
    explanation: 'The right answer is Japanese!',
    image: 'ja.jpg',
    answer: Languages.ja
  },
  {
    question: 'How about these?',
    explanation: 'The right answer is Korean!',
    image: 'kr-2.jpg',
    answer: Languages.kr
  },
  {
    question: 'mites tan laita?',
    explanation: 'The right answer is Mandarin Chinese!',
    image: 'zh-2.jpg',
    answer: Languages.zh
  },
  {
    question: 'How about these?',
    explanation: 'The right answer is Korean!',
    image: 'kr-1.jpg',
    answer: Languages.kr
  },
];
