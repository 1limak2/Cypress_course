//Deklaracja funkcji
function pierwszaFunkcja() {
    return console.log("To ja pierwsza funkcja!")
}

pierwszaFunkcja();

//Drugi sposob deklarowania funkcji

const drugaFunkcja = () => {
    return console.log("To ja druga funkcja!")
}

drugaFunkcja();

//Kolejny sposob

function pierwszaFunkcja() {
    const suma = 2+5;
    return console.log("To ja kolejna funkcja!" + suma)
}

