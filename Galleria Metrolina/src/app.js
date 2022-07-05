import {pictures} from '../data/pictures.js';

let header = document.querySelector('.picturesList');
let reset = document.querySelector('.reset');
let field = document.querySelector('.field')
let button = document.querySelector('.search');





// html-פונקצייה שלוקחת רשימה של תמונות ומזריקה אותן עם תבנית עיצובית ב
function displayPicture(picList){
    console.log("displayPictures IS ACTIVATED");
    if (picList.length === pictures.length) {
        header.innerHTML = `Shows all Pictures (${pictures.length})`;
        reset.innerHTML = ``;
    } else if(picList.length === 0){
        header.innerHTML = `No Pictures Found &nbsp`;
        reset.innerHTML = `reset`;
    } else {
        header.innerHTML = `Shows ${picList.length} Pictures &nbsp`;
        reset.innerHTML = `reset`;
    }

    let html = '';

    picList.forEach((pic) =>{
 
        html += 
        `
        <div class="col">
            <div class="card">
                <img src="./data/pics/${pic.getImage()}" class="card-img-top" alt="${pic.getName()}">
                <div class="card-body">
                  <h4 class="card-title">${pic.getName()}</h4>
                  <h6 class="card-title">${pic.getArtist()}</h6>
                  <p class="card-text">${pic.getPrice()}$</p>
                  <p class="card-text">${pic.getAv()}</p>
                </div>
            </div>
        </div>
        `;
    });

    document.querySelector('.picsField').innerHTML = html;
};






// displayPicture-פונקציית החיפוש שמרכיבה רשימה של תמונות מיוצגו בדף, אותן תשלח לפונקציה
function searchPicture(){
    console.log('searchPicture is ACTIVATED');
    const searchList = pictures.filter(pic => {
        return pic.name.toLowerCase().includes(field.value.trim().toLowerCase()); // מחזירה אך רק שמות של תמונות המכילים את ערך תיבת החיפוש
    });
    console.log("Pictures Found: " + searchList.length);
    displayPicture(searchList);
};









button.addEventListener('click', searchPicture);

reset.addEventListener('click', ()=>{
    displayPicture(pictures);
    field.value = '';
});

document.querySelector('.navbar-brand').addEventListener('click', ()=>{
    displayPicture(pictures);
    field.value = '';
});

displayPicture(pictures);