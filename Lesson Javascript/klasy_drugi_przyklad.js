class WyswietlImie {
    constructor(pierwImie, drugieImie) {
        this.pierwszeImie = pierwimie;
        this.drugieImie = drugieImie;
    }

    koncowyTekst() {
        return console.log("Podane imie to: " + this.pierwszeImie + " oraz " + this.drugieImie)
    }
}

const renderujImie = new WyswietlImie("Wiola", "Tomasz");
console.log(renderujImie.koncowyTekst())


