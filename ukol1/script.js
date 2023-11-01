const jmeno = prompt("Zadej krestni jmeno bez diakritiky:").trim().toLowerCase()
const prijmeni = prompt("Zadej prijmeni bez diakritiky:").trim().toLowerCase()


document.body.innerHTML += "<p>" + "Vas email:" + "</p>"
document.body.innerHTML += prijmeni.slice(0, 5) + jmeno.slice(0, 3) + "@fit.cvut.cz"