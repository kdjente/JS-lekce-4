const pocet = prompt("Zadej pocet kusu tricek:")

    if(pocet < 50) {
        document.body.innerHTML += `Celkova cena Vasi objednavky je: ${pocet*300}`
    } else if(pocet >= 50 && pocet <= 199) {
        document.body.innerHTML = `Celkova cena Vasi objednavky je: ${pocet*250}`
    } else if(pocet >= 200 && pocet <= 499) {
        document.body.innerHTML = `Celkova cena Vasi objednavky je: ${pocet*200}`
    } else if(pocet >= 500 && pocet <= 999) {
        document.body.innerHTML = `Celkova cena Vasi objednavky je: ${pocet*150}`
    } else if(pocet >= 1000) {
        document.body.innerHTML = `Celkova cena Vasi objednavky je: ${pocet*120}`
    } else {
        document.body.innerHTML = `spatne zadany pocet`
    }