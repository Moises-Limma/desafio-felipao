
let hero = "Chuseuan";
let xpHero = 1.001;
let nivel;

if(xpHero <= 1.000) {
    nivel = "Ferro"
} else if(xpHero > 1.000 && xpHero <= 2.000) {
    nivel = "Bronze"
} else if(xpHero > 2.000 && xpHero <= 5.000) {
    nivel = "Prata"
} else if(xpHero > 5.000 && xpHero <= 7.000) {
    nivel = "Ouro"
} else if(xpHero > 7.000 && xpHero <= 8.000) {
    nivel = "Platina"
} else if(xpHero > 8.000 && xpHero <= 9.000) {
    nivel = "Ascendente"
} else if(xpHero > 9.000 && xpHero <= 10.000) {
    nivel = "Imortal"
} else if(xpHero >= 10.001) {
    nivel = "Radiante"
}

console.log(`O herói de nome ${hero} está no nível de ${nivel}`)