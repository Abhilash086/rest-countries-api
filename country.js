const countryContainer = document.querySelector(".country-container");

const countryName = new URLSearchParams(location.search).get("name");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
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
                                        <div>
                                            <span><b>Border Countries: </b></span>
                                        </div>
                                    </div>`;
    
  });
