const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", searchMeal);

function searchMeal() {
    const searchInputText = document.querySelector("#search-input").value.trim();
    fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
        .then(response => response.json())
        .then(data => console.log(data));
}