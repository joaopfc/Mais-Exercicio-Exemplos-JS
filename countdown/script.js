import Countdown from './countdown.js';

const tempoParaONatal = new Countdown('24 December 2020 23:59:59 GMT-0300')
const tempoParaOMeuAniversario = new Countdown('9 july 2021 23:59:59 GMT-0300')

console.log(tempoParaONatal.total)

setInterval(()=> {
    console.log(tempoParaOMeuAniversario.total)
},1000)


// console.log(diasParaONatal.days);
// console.log(diasParaONatal.hours);
// console.log(diasParaONatal.minutes);
// console.log(diasParaONatal.seconds);