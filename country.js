const countryFlag = document.querySelector(".country-flag img")

const countryName = new URLSearchParams(location.search).get("name")

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res) => res.json())
    .then((data) => {
        countryFlag.src = data[0].flags.svg
    })