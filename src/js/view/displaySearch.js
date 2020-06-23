import {searchResults} from '../elements.js';
import {searchInput} from '../elements.js';

export let getSearchInputValue = () => searchInput.value;
export function    displaySearchresults(recipes){
        let markUp = ``;
        for(let i=0 ; i<recipes.length ; i++){
            markUp += `
                <div class='media py-3'>
                    <img src=${recipes[i].image_url} class='align-self-center mr-3 rounded-circle'>
                    <div class='media-body'>
                    <a href='#${recipes[i].recipe_id}'>
                        <h6 class='mt-0'>${recipes[i].title}</h6>
                        <p>by <span>${recipes[i].publisher}</span></p>
                    </a>    
                    </div>
                </div>
            `;
        }
        searchResults.innerHTML=markUp;
    }