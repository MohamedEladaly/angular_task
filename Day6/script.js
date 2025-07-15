async function getMeal(meal) {
    var response =
        await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
    var data = await response.json()
     createMeal(data.recipes)
}
function createMeal(recipes) {

    let container = document.getElementById('container');
    container.innerHTML = '';
    document.getElementById('spany').textContent = 'The Recipe';
    let home =document.querySelector('.home');
    home.style.display = 'none';

    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];

        let card = document.createElement("div");
        card.className = 'food-card';
        card.innerHTML =
           ` <img src="${recipe.image_url}" alt="${recipe.title}"> 
            <h3>${recipe.title}</h3> 
            <p>${recipe.publisher}</p> `
            let cild=document.createElement("div");
        cild.className = 'the-info';
        cild.innerHTML =
            `<a href="${recipe.source_url}" target="_blank">Go To Sourse</a>
           <button onclick='showDetails(${JSON.stringify(recipe)})'>Show recipe</button>`;

        card.appendChild(cild);

        document.getElementById('container').appendChild(card);
    }
}

async function showDetails(recipe) {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipe.recipe_id}`);
    const data = await res.json();
    const r_detales = data.recipe;

    document.getElementById('spany').textContent = 'The Recipe Details';

    const ingredientsHTML = r_detales.ingredients.map(ing => `<li>${ing}</li>`).join('');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <img src="${r_detales.image_url}" alt="">
        <h3>${r_detales.title}</h3>
        <ul>${ingredientsHTML}</ul>
        <button onclick="back()">Back</button>
    `;

    showModel();
}

function showModel() {
    document.getElementById('modal').style.transform = "scale(1)";
}

function back() {
    document.getElementById('modal').style.transform = "scale(0)";
}
function gotohome(){
    let home =document.querySelector('.home');
    home.style.display = 'block';
    let container = document.getElementById('container');
    container.innerHTML = '';
    document.getElementById('spany').textContent = 'The Home Page';
}
