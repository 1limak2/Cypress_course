class Obliczenia {
    get tekst() {
        return "Twoje obliczenie to: "
    }

    get komunikat() {
        return "Twoja liczba jest mniejsza od 10!"
    }

    dodawanie() {
        return 2+6
    }

    mnozenie() {
        return 4*6
    }

    koncowyRezultat(koncowaWartosc) {
        console.log(this.tekst +" "+ koncowaWartosc)
        if(koncowaWartosc < 10) {
            console.log(this.komunikat)
        }
    }
}

const wykonajObliczenie = new Obliczenia();
console.log(wykonajObliczenie.koncowyRezultat(wykonajObliczenie.mnozenie()))