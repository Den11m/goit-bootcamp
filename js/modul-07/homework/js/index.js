"use strict";

// const createPostCard = function () {
//     let card = document.createElement('div');
//     card.setAttribute('class', 'post');
//
//     let img = document.createElement('img');
//     img.classList.add('post__image');
//     img.setAttribute('src', 'http://via.placeholder.com/400x150');
//     img.setAttribute('alt', 'post image');
//     card.appendChild(img);
//
//     let h2 = document.createElement('h2');
//     h2.classList.add('post__title');
//     h2.textContent ='Lorem ipsum dolor';
//     card.appendChild(h2);
//
//     let p = document.createElement('p');
//     p.classList.add('post__text');
//     p.textContent ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
//     card.appendChild(p);
//
//     let ul = document.createElement('ul');
//     ul.classList.add('actions', 'post__actions');
//     card.appendChild(ul);
//
//     let li1 = document.createElement('li');
//     li1.classList.add('post__item');
//
//     let btn = document.createElement('button');
//     btn.classList.add('actions__btn');
//     li1.appendChild(btn);
//
//     let span1 = document.createElement('span');
//     span1.classList.add('actions__icon');
//     btn.appendChild(span1);
//
//     let span2 = document.createElement('span');
//     span2.classList.add('actions__count');
//     span2.textContent = 0;
//     btn.appendChild(span2);
//
//     let li2 = li1.cloneNode(true);
//     let li3 = li1.cloneNode(true);
//
// li1.children[0].children[0].classList.add('actions__icon--like');
// li2.children[0].children[0].classList.add('actions__icon--dislike');
// li3.children[0].children[0].classList.add('actions__icon--fav');
//
//     ul.appendChild(li1);
//     ul.appendChild(li2);
//     ul.appendChild(li3);
//
//     return card;
// };

const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        stats: {
            likes: 6,
            dislikes: 2,
            fav: 3
        }
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        stats: {
            likes: 124,
            dislikes: 8,
            fav: 36
        }
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        stats: {
            likes: 800,
            dislikes: 36,
            fav: 147
        }
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        stats: {
            likes: 880,
            dislikes: 40,
            fav: 47
        }
    },
];

const createPostCard = function (post) {
let codePost = `<div class="post">
    <img class="post__image" src= "${post.img}" alt="post image">
    <h2 class="post__title">${post.title}</h2>
    <p class="post__text">${post.text}</p>
    <ul class="actions post__actions">
        <li class="actions__item">
            <button class="actions__btn ">
                <span class="actions__icon actions__icon--like"></span>
                <span class="actions__count">${post.stats.likes}</span>
            </button>
        </li>
        <li class="actions__item">
            <button class="actions__btn">
                <span class="actions__icon actions__icon--dislike"></span>
                <span class="actions__count">${post.stats.dislikes}</span>
            </button>
        </li>
        <li class="actions__item">
            <button class="actions__btn">
                <span class="actions__icon actions__icon--fav"></span>
                <span class="actions__count">${post.stats.fav}</span>
            </button>
        </li>
    </ul>
</div>`;
return codePost;
};


// *** 1 вариант ***
// const makeCards = function (posts) {
//     let allCode = '';
//     for (let i=0, max = posts.length; i < max; i++){
//        allCode += createPostCard(posts[i]);
//     }
//     document.body.insertAdjacentHTML('beforeend', allCode);
// };

// *** 2 вариант ***
// const makeCards = function (posts) {
//     let allCode = '<ul>';
//     for (let i=0, max = posts.length; i < max; i++){
//        allCode += `<li>${createPostCard(posts[i])}</li>`;
//     }
//     document.body.insertAdjacentHTML('beforeend', `${allCode}</ul>`);
// };

// *** 3 вариант ***
// const makeCards = function (posts) {
//     const arr =[];
//     for (let i=0, max = posts.length; i < max; i++) {
//         arr.push(createPostCard(posts[i]));
//     };
//     let allCode = `<ul>${arr.reduce((all, item) => all + `<li>${item}</li>`,'')}</ul>`;
//     document.body.insertAdjacentHTML('beforeend', allCode);
// };

// *** 4 вариант ***
const makeCards = function (posts) {
    let allCode = `<ul>${posts.reduce((acc, item) => acc + `<li>${createPostCard(item)}</li>`,'')}</ul>`;
    document.body.insertAdjacentHTML('beforeend', allCode);
};

makeCards(posts);

// *** счетчик ***
const counter = ({target}) => {
    let num = index => ++index;
    target.nextElementSibling.textContent = num(+target.nextElementSibling.textContent);
};
for (let item of document.querySelectorAll('.actions__icon')){
    item.onclick = counter;
}

