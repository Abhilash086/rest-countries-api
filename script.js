const cardContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");
const searchBar = document.querySelector(".search-bar")
const modes = document.querySelector("header p")

let allCountriesData

function renderCountries(data) {
    cardContainer.innerHTML = "";
    data.forEach((country) => {
      const card = document.createElement("a");
      card.classList.add("country-card");
      card.innerHTML = `<img src="${country.flags.svg}" alt="" />
                          <div class="card-text">
                              <h3 class="card-title">${country.name.common}</h3>
                              <p><b>Population: </b><span>${country.population.toLocaleString(
                                "en-IN"
                              )}</span></p>
                              <p><b>Region: </b><span>${country.region}</span></p>
                              <p><b>Capital: </b><span>${
                                country.capital
                              }</span></p>
                          </div>`;
      card.href = `/country.html?name=${country.name.common}`;
      cardContainer.appendChild(card);
    });
}

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    allCountriesData = data
    renderCountries(data)
  })

filterByRegion.addEventListener("change", (e) => {
  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => res.json())
    .then(renderCountries)
});

searchBar.addEventListener("input",(e)=>{
    const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    return renderCountries(filteredCountries)
})

modes.addEventListener("click",()=>{
    const body = document.querySelector("body")
    body.classList.toggle("dark")
    if(modes.querySelector("span").innerHTML === `&nbsp;&nbsp;Light Mode`){
        modes.innerHTML = `<i class="fa-regular fa-moon"></i><span>&nbsp;&nbsp;Dark mode</span>`
    }else if(modes.querySelector("span").innerHTML = `&nbsp;&nbsp;Dark Mode`){
        modes.innerHTML = `<i class="fa-regular fa-sun"></i><span>&nbsp&nbspLight Mode</span>`    
    }
})