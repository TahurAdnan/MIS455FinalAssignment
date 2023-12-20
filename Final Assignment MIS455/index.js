var url = `https://restcountries.com/v3.1/all`;

fetch(url)
  .then((res) => res.json())
  .then((data) => displayCountries(data));

function displayCountries(data) {
  console.log(data);

  //console.log (data);

  for (var i = 0; i < data.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `Country Name: ${data[i].name.common}  <br>
                        <img src="${data[i].flags.png}"> <br> <br>
                        <button class="bg-dark text-light" onClick="showDetails('${data[i].name.common}', '${data[i].flags.png}','${data[i].continents}','${data[i].capital[0]}','${data[i].region}','${data[i].population}','${data[i].area}','${data[i].timezones[0]}')">See More</button>
                        `;

    newDiv.classList.add("countryStyle");
    document.getElementById("container").appendChild(newDiv);
  }
}
displayCountries();

function connect() {
  var searchTerm = document.getElementById("searchBox").value;

  var url = `https://restcountries.com/v3.1/name/${searchTerm}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data));
}

function display(data) {
  console.log(data);

  //console.log (data);

  var oldContent = document.getElementById("container");
  oldContent.textContent = "";

  for (var i = 0; i < data.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `Country Name: ${data[i].name.common}  <br>
                        <img src="${data[i].flags.png}"> <br> <br>
                        <button class="bg-dark text-light" onClick="showDetails('${data[i].name.common}', '${data[i].flags.png}','${data[i].continents}','${data[i].capital[0]}','${data[i].region}','${data[i].population}','${data[i].area}','${data[i].timezones[0]}')">See More</button>
                        `;

    newDiv.classList.add("countryStyle");
    oldContent.appendChild(newDiv);
  }
}

function showDetails(countryName, flagUrl, continents,capital,region,population,area,timezones) {
  var oldContent = document.getElementById("container");
  oldContent.textContent = "";

  var newDiv = document.createElement("div");
  newDiv.innerHTML = `Country Name: ${countryName}  <br>
                        <img src="${flagUrl}">
                        <div class="details">
                        <p>Continent : ${continents}</p>
                        <p>Capital : ${capital}</p>
                        <p>Region : ${region}</p>
                        <p>Population : ${population}</p>
                        <p>Area : ${area}</p>
                        <p>TimeZone : ${timezones}</p>
                        </div>
                        `;

  newDiv.classList.add("countryDetails");
  oldContent.appendChild(newDiv);
}
