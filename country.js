const countryContainer = document.querySelector(".country-container");
const modes = document.querySelector("header p")

const countryName = new URLSearchParams(location.search).get("name");
let countryData

function createButton(border){
    const btn = document.createElement("a")
    btn.classList.add("btn")
    btn.innerText = border
    btn.href = `/country.html?name=${border}`
    return btn
}

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
    countryData = data[0]
    console.log(countryData.borders)
    countryContainer.innerHTML = `<div class="country-flag">
                                        <img src="${data[0].flags.svg}" alt="">
                                    </div>
                                    <div class="country-details">
                                        <h1>${data[0].name.common}</h1>
                                        <div class="content">
                                            <div class="sub-content1">
                                                <p><b>Native Name: </b>${data[0].name.official}</p>
                                                <p><b>Population: </b>${data[0].population.toLocaleString('en-IN')}</p>
                                                <p><b>Region: </b>${data[0].region}</p>
                                                <p><b>Sub Region: </b>${data[0].subregion}</p>
                                                <p><b>Capital: </b>${data[0].capital}</p>
                                            </div>
                                            <div class="sub-content2">
                                                <p><b>Top Level Domain: </b>${data[0].tld}</p>
                                                <p><b>Currencies: </b>${Object.values(data[0].currencies)[0].name}</p>
                                                <p><b>Languages: </b>${Object.values(data[0].languages)}</p>
                                            </div>
                                        </div>
                                        <div class="border-container">
                                            <p><b>Border Countries: </b></p>
                                            <div class="near-countries"></div>
                                        </div>
                                    </div>`;
                                    return data
    
  }).then((data)=>{
    data[0].borders.forEach((element) => {
        fetch(`https://restcountries.com/v3.1/alpha/${element}`).then((res) => res.json())
            .then((data) =>{
                const border = data[0].name.common
                const borderCountriesList = document.querySelector(".near-countries")
                borderCountriesList.appendChild(createButton(border))
            })
    });
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