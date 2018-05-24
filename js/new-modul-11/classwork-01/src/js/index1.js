"use strict";

const keyLinkPreview = '5af3ee3b2ae36d7729b60340108b41f64a8af2fb59920';
const inputInfoUrl = document.querySelector('.url');
const btnAdd = document.querySelector('.btn');

let arrBookmark;
if (JSON.parse(localStorage.getItem('arrBookmark'))=== null){
    arrBookmark = [];
} else {
    arrBookmark = JSON.parse(localStorage.getItem('arrBookmark'))
}

function handleCreateCardLocalStorage() {
    if (arrBookmark.length > 0){
        for (let item of arrBookmark){
            fetch(`http://api.linkpreview.net/?key=${keyLinkPreview}&q=https:${item}`)
                .then(response => response.json())
                // .then(info => console.log(info));
                .then(info => createCard(info));
        }
    }
}

document.addEventListener('DOMContentLoaded', handleCreateCardLocalStorage);


function handleCreateCard () {
    if (arrBookmark.includes(inputInfoUrl.value)){
        alert('такая закладка уже есть');
    } else{
        arrBookmark.push(inputInfoUrl.value);

        fetch(`http://api.linkpreview.net/?key=${keyLinkPreview}&q=https:${inputInfoUrl.value}`)
            .then(response => response.json())
            .then(info => createCard(info));

        localStorage.setItem('arrBookmark', JSON.stringify(arrBookmark));

        console.log(arrBookmark);
    }
}

btnAdd.addEventListener('click', handleCreateCard);

const bodyCard = document.querySelector('.body__card');

function createCard (info) {
    let card =
        `
    <div class="card">
        <button class="close" name=${inputInfoUrl.value}>x</button>
        <img src=${info.image} alt="" class="img">
        <p class="description">${info.description}</p>
        <a href=${info.url} class="link" target="_blank">${info.title}</a>
    </div>
    `;
    return bodyCard.insertAdjacentHTML('afterbegin',card);
}

function handleDeleteCard (event) {
    event.target.parentElement.remove();
    arrBookmark = arrBookmark.filter(el => el !== event.target.attributes.name.textContent);
    localStorage.setItem('arrBookmark', JSON.stringify(arrBookmark));
    console.log(arrBookmark);
}

bodyCard.addEventListener('click', handleDeleteCard);
