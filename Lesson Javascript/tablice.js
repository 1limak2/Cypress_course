const imiona = ["Jas", "Krzys", "Ola", "Cecylia", "Antek", "Kamil", "Zenek"];
const imiona2 = ["Rysiu", "Ewa", "Karol"]

//1. Weryfikacja dlugosci tablicy
// console.log(imiona.length > 3)

//2. Dostp do elementw tablicy [w nawiasie [] podajemy index]
// console.log(imiona[3])

//3. Nadpisywanie elementow w tablicy
// imiona[0] = "Wojtek"
// console.log(imiona)

//4. Dodawanie elementow w tablicy
// imiona.push("Ania", "Bartek", "Kuba");
// console.log(imiona)

//5. Usuwanie elementu z koca tablicy
// imiona.pop();
// console.log(imiona)

//6. Usuwanie elementu z poczatku tablicy
// imiona.shift();
// console.log(imiona)

//7. Dodawanie elementu na poczatku tablicy
// imiona.unshift("Kasia", "Oliwka");
// console.log(imiona)

//8. Usuwaniew wybranego elementu z "tablicy
// const indexElement = imiona.indexOf("Antek")
// imiona.splice(indexElement, 1)
// console.log(imiona)

//9. Przerobienie tablicy na string metoda JOIN
// const string = imiona.join("-");
// console.log(string);

//10. Odwrocanie elmentow w tablicy
// imiona.reverse();
// console.log(imiona)

//11. Sortowanie elementow w tablicy
// imiona.sort();
// console.log(imiona)

//12. Mapowanie elementow w tablicy
// imiona.map(imie => {
//     console.log(imie.length + " " + imie)
// })

//13. Laczenie tablic
const imiona3 = imiona.concat(imiona2);
console.log(imiona3)