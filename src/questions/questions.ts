import type { question } from "../types"
import { Languages } from "../types"

export let testQuestions:question[] = [
  {
    question: 'Can you guess the language?',
    explanation: 'The right answer is Thai!',
    // explanation: 'Thai alphabet\'s tiny loops and hooks are dead giveaways',
    image: 'thai.png',
    answer: Languages.th,
  },
  {
    question: 'Tämä kieli tunnetaan monimutkaisista ja laatikkomaisista kirjoitusmerkeistään',
    explanation: 'The right answer is Mandarin Chinese!',
    // explanation: 'Especially traditional Mandarin Chinese is known for it\'s dense and blocky characters',
    image: 'zh-1.jpg',
    answer: Languages.zh,
  },
  {
    question: 'mites tan laita?',
    explanation: 'The right answer is Japanese!',
    // explanation: 'The Japanese language is famous for mixing both complex and simple characters',
    image: 'ja.jpg',
    answer: Languages.ja
  },
  {
    question: 'How about these?',
    explanation: 'The right answer is Korean!',
    // explanation: 'Straight horizontal and vertical lines are very common in the Korean script',
    image: 'kr-2.jpg',
    answer: Languages.kr
  },
  {
    question: 'mites tan laita?',
    explanation: 'The right answer is Mandarin Chinese!',
    // explanation: 'jep, just tammone',
    image: 'zh-2.jpg',
    answer: Languages.zh
  },
  {
    question: 'How about these?',
    explanation: 'The right answer is Korean!',
    // explanation: 'Characterised by very uniform looking characters, comprising of hard angles and round circles',
    image: 'kr-1.jpg',
    answer: Languages.kr
  },
];
