import type { question } from "../types"
import { Languages } from "../types"

export let testQuestions:question[] = [
    {
        question: 'Can you guess the language?',
        explanation: 'Thai alphabet\'s tiny loops and hooks are dead giveaways',
        image: 'thai.png',
        answer: Languages.th,
    },
    {
        question: 'Tämä kieli tunnetaan monimutkaisista ja laatikkomaisista kirjoitusmerkeistään',
        explanation: 'Especially traditional Mandarin Chinese is known for it\'s dense and blocky characters',
        image: 'zh-1.jpg',
        answer: Languages.zh,
    },
    {
        question: 'mites tan laita?',
        explanation: 'The Japanese language is famous for mixing both complex and simple characters',
        image: 'ja.jpg',
        answer: Languages.ja
    },
    {
        question: 'mites tan laita?',
        explanation: 'jep, just tammone',
        image: 'zh-2.jpg',
        answer: Languages.zh
    },
];
