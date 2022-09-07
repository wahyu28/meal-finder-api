const searchBtn = document.querySelector("#search-btn");
const mealList = document.querySelector("#meal");

searchBtn.addEventListener("click", searchMeal);

function searchMeal() {
    const searchInputText = document.querySelector("#search-input").value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                console.log(data.meals);
                data.meals.forEach(meal => {
                    html += `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <img src="${meal.strMealThumb}"
                                class="card-img-top" alt="testing-image">
                            <div class="card-body text-center">
                                <h5 class="card-title">${meal.strMeal}</h5>
                                <a href="#" class="btn btn-success">Get Recipe</a>
                            </div>
                        </div>
                    </div>
                    `;
                    mealList.innerHTML = html;
                })
            } else {
                alert('Meal not found');
            }
        });
}