"use strict";

// const galleryItems = {
//    images: [
//         { img: 'https://placeimg.com/300/150/animals', text: 'animals' },
// { img: 'https://placeimg.com/300/150/arch', text: 'architecture' },
// { img: 'https://placeimg.com/300/150/nature', text: 'nature' },
// { img: 'https://placeimg.com/300/150/people', text: 'people' },
// { img: 'https://placeimg.com/300/150/tech', text: 'tech' },
// { img: 'https://placeimg.com/300/150/any', text: 'random' }
// ]
// } ;
// const source = document.querySelector('#photo').innerHTML.trim();
// //
// console.log(source);
// //
// const template = Handlebars.compile(source);
// // console.log(template);
// //
// const markup = template(galleryItems);
// // console.log(markup);
//
// const container = document.querySelector('.gallery-content');
// // console.log(container);
// container.innerHTML = markup;

// const listItems = [
//     { name: 'item 1', count: 2 },
//     { name: 'item 2', count: 4 },
//     { name: 'item 3', count: 12 },
//     { name: 'item 4', count: 29 },
// ];
// const list = document.querySelector('#list').innerHTML;
// const template = Handlebars.compile(list);
// const markup = listItems.reduce((acc,el)=>acc+template(el),'');
// document.body.insertAdjacentHTML('beforeend', markup);
//
// const listItems2 = {
//     itemsArr:[
//         { name: 'item 5', count: 2 },
//         { name: 'item 6', count: 4 },
//         { name: 'item 7', count: 12 },
//         { name: 'item 8', count: 29 },
//     ],
// };
//
// const list2 = document.querySelector('#list2').innerHTML.trim();
// const template2 = Handlebars.compile(list2);
// const markup2 = template2(listItems2);
// console.log(markup2);
// const body = document.body;
// body.insertAdjacentHTML('beforeend', markup2);

let phones = [
    {
        id: "1",
        categoryId: "1",
        name: "Apple iPhone 5c",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 823,
        image: "/uploads/iphone5c-selection-hero-2013.png",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "2",
        categoryId: "1",
        name: "Apple iPhone 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 953,
        image: "/uploads/51u6y9Rm8QL._SY300_.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "3",
        categoryId: "4",
        name: "Lenovo A6000",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 764,
        image: "/uploads/_35%20(1).JPG",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "4",
        categoryId: "5",
        name: "Nokia Lumia 1520",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "/uploads/Lumia1520-Front-Back-png.png",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "5",
        categoryId: "3",
        name: "HTC One",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "/uploads/htc-one-m7-802w-dual-sim-silver.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "6",
        categoryId: "2",
        name: "Samsung Galaxy S6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "/uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    }
];

const bodyCard = document.querySelector('.body__card');
let btn = document.querySelectorAll('.module-card-button');
const btnAllphones = document.querySelector('.btn__allphones');
const btnPhone = document.querySelector('.btn__iphone');
const input = document.querySelector('.find__brand');

function createCardPhone(arr) {
    const bodyCard = document.querySelector('.body__card');
    const card = document.querySelector('#card').innerHTML.trim();
    const template = Handlebars.compile(card);
    const markup = arr.reduce((acc,el) => acc + template(el),'');
    bodyCard.innerHTML = markup;
    btn = document.querySelectorAll('.module-card-button');
    bodyCard.addEventListener('click', handleInfo);
}

createCardPhone(phones);

function handleInfo(event) {
    console.log(event.target);
    if(Array.from(btn).includes(event.target)){
        event.target.previousElementSibling.classList.toggle('active');
    } else {
        return
    }
}

function handleShowPhone() {
    let newPhones = phones.filter(el => el.name.split(' ')[0].toLowerCase() === `${input.value.toLowerCase()}`);
    createCardPhone(newPhones);
}

btnPhone.addEventListener('click', handleShowPhone);
btnAllphones.addEventListener('click', ()=> createCardPhone(phones));
window.addEventListener('keypress', (e) => e.keyCode === 13 ? handleShowPhone(): null);
