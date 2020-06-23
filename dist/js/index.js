import {searchBtn} from './elements.js';
import {displaySearchresults,getSearchInputValue} from './view/displaySearch.js';
import {SearchModel} from './model/searchModel.js';
import {recipeDetailsModel} from './model/recipeDetails.js';
import {displayRecipeDetails} from './view/displayDetails.js'

let controlSearch = ()=>{
    let query = getSearchInputValue();
    let search = new SearchModel(query);
    search.getResultSearch(displaySearchresults);
    
}

searchBtn.addEventListener('click',controlSearch );


let controlRecipe  = () =>{
    let recipeId = window.location.hash.replace('#','');
    let recipeDetails = new recipeDetailsModel(recipeId);
    recipeDetails.getDetailsResult(displayRecipeDetails);
    
}


window.addEventListener('hashchange',controlRecipe);