// API Info

const weatherAPIURL = "https://api.openweathermap.org";
const weatherAPIKey = "";

// Variables

let searchInput = $("#search-input");
let searchForm = $("#search-form");

// Functions

function fetchCoordinate(search) {
    let queryURL = `${weatherAPIURL}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherAPIKey}`;
}

function submitSearchForm(event) {
    event.preventDefault();
    //alert(searchInput.val().trim());
    let search = searchInput.val().trim();
    fetchCoordinate(search);
}

searchForm.on("submit", submitSearchForm);