
export class recipeDetailsModel{
    constructor(id){
        this.id  = id;
    }

    getDetailsResult(callback){
        let http = new XMLHttpRequest();
        http.open('GET' , `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
        http.send();
        http.addEventListener('readystatechange' , function(){
            if(http.readyState == 4 && http.status == 200){
                let recipeDetails = JSON.parse(http.response).recipe;
                callback(recipeDetails);
            }
        })
    }
}