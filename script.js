const cardContainer = document.querySelector(".countries-container")

const api = "https://restcountries.com/v3.1/all"

fetch(api).then((res) => res.json())
    .then((data) => {
        data.forEach((country) => {
            const card = document.createElement("a")
            card.classList.add("country-card")
            card.innerHTML = `<img src="${country.flags.svg}" alt="" />
                            <div class="card-text">
                                <h3 class="card-title">${country.name.common}</h3>
                                <p><b>Population: </b><span>${country.population.toLocaleString('en-IN')}</span></p>
                                <p><b>Region: </b><span>${country.region}</span></p>
                                <p><b>Capital: </b><span>${country.capital}</span></p>
                            </div>`
            card.href = `/country.html?name=${country.name.common}`
            cardContainer.appendChild(card)
            
        });
    })