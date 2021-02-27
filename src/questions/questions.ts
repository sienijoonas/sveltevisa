import type { Question } from "../types"
import { Languages, Guitars } from "../types"

export let languages:Question = {
  questions: [
    {
      title: 'Can you guess the language?',
      explanation: 'The right answer is Thai!',
      image: 'thai.png',
      answer: Languages.th,
    },
    {
      title: 'Tämä kieli tunnetaan monimutkaisista ja laatikkomaisista kirjoitusmerkeistään',
      explanation: 'The right answer is Mandarin Chinese!',
      image: 'zh-1.jpg',
      answer: Languages.zh,
    },
    {
      title: 'mites tan laita?',
      explanation: 'The right answer is Japanese!',
      image: 'ja.jpg',
      answer: Languages.ja
    },
    {
      title: 'How about these?',
      explanation: 'The right answer is Korean!',
      image: 'kr-2.jpg',
      answer: Languages.kr
    },
    {
      title: 'mites tan laita?',
      explanation: 'The right answer is Mandarin Chinese!',
      image: 'zh-2.jpg',
      answer: Languages.zh
    },
    {
      title: 'How about these?',
      explanation: 'The right answer is Korean!',
      image: 'kr-1.jpg',
      answer: Languages.kr
    }
  ],
  answers: [
    Languages.ja,
    Languages.kr,
    Languages.th,
    Languages.zh
  ]
}

export let guitars:Question = {
  questions: [
    {
      title: 'a',
      explanation: 'The one and only Gibson Flying V!',
      image: 'flyingv.jpg',
      answer: Guitars.gibson,
    },
    {
      title: 'z',
      explanation: 'Fender Telecaster!',
      image: 'tele.jpg',
      answer: Guitars.fender,
    },
    {
      title: 'x',
      explanation: 'Fender Stratocaster!',
      image: 'strato.jpg',
      answer: Guitars.fender,
    },
    {
      title: 'b',
      explanation: 'Jackson Randy Rhoads, a favourite among metal guitarists!',
      image: 'rhoads.jpg',
      answer: Guitars.jackson,
    },
    {
      title: 'c',
      explanation: 'Ibanez Jem, used by the legendary guitarist Steve Vai!',
      image: 'jem.jpg',
      answer: Guitars.ibanez,
    },
    {
      title: 'd',
      explanation: 'Can\'t go wrong with Gibson Les Paul',
      image: 'lespaul.jpg',
      answer: Guitars.gibson,
    },
  ],
  answers: [
    Guitars.fender,
    Guitars.gibson,
    Guitars.ibanez,
    Guitars.jackson,
  ]
}
