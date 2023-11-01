/*const password = prompt("Zadej heslo:").length

document.body.innerHTML = password

document.body.innerHTML = "Katarina".toUpperCase()

document.body.innerHTML = "Katarina".trim()

document.body.innerHTML = "Katarina".slice(0, 2)

document.body.innerHTML = "Katarina".indexOf("r")

document.body.innerHTML = "20".padStart(3, "0")

const order = {
    id: 37214,
    product: 'pěnová matrace',
    delivery: '21.8.2023',
  };
  
  /* bud takto komplikovane- 
  
    document.body.innerHTML =
    '<h2>Objednávka: ' +
    order.id +
    '</h2>' +
    '<p>Zboží ' +
    order.product +
    ' bude doručeno ' +
    order.delivery +
    '.</p>';

    document.body.innerHTML = `
    <h2>Detail objednavky</h2>

    <p>ID objednavky: ${order.id}</p> 
    <p>Nazev produktu: ${order.product}</p>
    <p>Ocekavane dodani: ${order.delivery}</p>
    <p>Delka jmena produktu ${order.product.length}</p>
    <p>Matematicka operace: ${365 + 44 - 12}</p>`


    const vek = 18
    const preference = "cervene"
    const naSklade = true
    const dostupne = false

    // < <= > >=
    // === ==
    // != !==

    if(vek >= 18) {
        document.body.innerHTML = `je Ti vic nez 18, muzes nakupovat`
        if(preference === "cervene") {
            document.body.innerHTML = `je Ti vic nez 18, muzes nakupovat, tady je vyber cerveneho vina`
        }
    } else {
        document.body.innerHTML = `je Ti mene nez 18, nemuzes nakupovat`
    }

    if(naSklade === true) {
        document.body.innerHTML = `<p>produkt je na sklade</p>
    } else {
        document.body.innerHTML = `<p>produkt neni na sklade</p>
    }*/

    const znamka = 3

    if(znamka === 1) {
        document.body.innerHTML += `vyborny`
    } else if(znamka === 2) {
        document.body.innerHTML = `chvalitebny`
    } else if(znamka === 3) {
        document.body.innerHTML = `dobry`
    } else if(znamka === 4) {
        document.body.innerHTML = `dostatecny`
    } else if(znamka === 5) {
        document.body.innerHTML = `nedostatecny`
    } else {
        document.body.innerHTML = `spatne zadana znamka`
    }

    switch(znamka) {
        case 1:
            document.body.innerHTML += `vyborny`
        case 2: 
            document.body.innerHTML += `chvalitebny`
        default:
            document.body.innerHTML += `spatne zadana znamka`
    }