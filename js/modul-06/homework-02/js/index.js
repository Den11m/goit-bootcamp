"use strict";
/*
  Создайте функцию createPostCard(), которая
  создает и возвращает DOM-узел карточки поста.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
const createPostCard = function () {
    let card = document.createElement('div');
    card.setAttribute('class', 'post');

    let img = document.createElement('img');
    img.classList.add('post__image');
    img.setAttribute('src', 'http://via.placeholder.com/400x150');
    img.setAttribute('alt', 'post image');
    card.appendChild(img);

    let h2 = document.createElement('h2');
    h2.classList.add('post__title');
    h2.textContent ='Lorem ipsum dolor';
    card.appendChild(h2);

    let p = document.createElement('p');
    p.classList.add('post__text');
    p.textContent ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
    card.appendChild(p);

    let ul = document.createElement('ul');
    ul.classList.add('actions', 'post__actions');
    card.appendChild(ul);

    let li1 = document.createElement('li');
    li1.classList.add('post__item');

    let btn = document.createElement('button');
    btn.classList.add('actions__btn');
    li1.appendChild(btn);

    let span1 = document.createElement('span');
    span1.classList.add('actions__icon');
    btn.appendChild(span1);

    let span2 = document.createElement('span');
    span2.classList.add('actions__count');
    span2.textContent = 0;
    btn.appendChild(span2);

    let li2 = li1.cloneNode(true);
    let li3 = li1.cloneNode(true);

li1.children[0].children[0].classList.add('actions__icon--like');
li2.children[0].children[0].classList.add('actions__icon--dislike');
li3.children[0].children[0].classList.add('actions__icon--fav');

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    return card;
};

createPostCard();
document.body.appendChild(createPostCard());

let i = 1;
const counter = function({target}){
    target.nextElementSibling.textContent = i;
    i++;
    // console.log(target);
};
for (let item of document.querySelectorAll('.actions__icon')){
    item.onclick = counter;
}