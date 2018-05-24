const galleryItems = [
    {preview: 'img/preview-01.jpeg', fullview: 'img/fullview-01.jpeg', alt: "alt text 01"},
    {preview: 'img/preview-02.jpeg', fullview: 'img/fullview-02.jpeg', alt: "alt text 02"},
    {preview: 'img/preview-03.jpeg', fullview: 'img/fullview-03.jpeg', alt: "alt text 03"},
    {preview: 'img/preview-04.jpeg', fullview: 'img/fullview-04.jpeg', alt: "alt text 04"},
    {preview: 'img/preview-05.jpeg', fullview: 'img/fullview-05.jpeg', alt: "alt text 05"},
    {preview: 'img/preview-06.jpeg', fullview: 'img/fullview-06.jpeg', alt: "alt text 06"},
    {preview: 'img/preview-07.jpeg', fullview: 'img/fullview-07.jpeg', alt: "alt text 07"},
    {preview: 'img/preview-08.jpeg', fullview: 'img/fullview-08.jpeg', alt: "alt text 08"},
    {preview: 'img/preview-09.jpeg', fullview: 'img/fullview-09.jpeg', alt: "alt text 09"},
    {preview: 'img/preview-10.jpeg', fullview: 'img/fullview-10.jpeg', alt: "alt text 10"},
    {preview: 'img/preview-11.jpeg', fullview: 'img/fullview-11.jpeg', alt: "alt text 11"},
    {preview: 'img/preview-12.jpeg', fullview: 'img/fullview-12.jpeg', alt: "alt text 12"},
];

const divGallery = document.querySelector('.image-gallery');

const fullview = function (galleryItems) {
    let code = `<div class="fullview">
        <img src="${galleryItems[0]['fullview']}" alt="${galleryItems[0]['alt']}">
    </div>`;
    divGallery.insertAdjacentHTML('beforeend', code);
};

const preview = function (galleryItems) {
    let code = `<ul class="preview">${galleryItems.reduce((acc, item) => acc + `<li><img src ="${item.preview}" data-fullview = "${item.fullview}" alt="${item.alt}"></li>`, '')}</ul>`;
    divGallery.insertAdjacentHTML('beforeend', code);
};

const createGalerry = function (info) {
    fullview(info);
    preview(info);
};

createGalerry(galleryItems);

const bigImg = document.querySelector('.fullview');
const miniImg = document.querySelector('.preview');

const handleImg = function (event) {
    for (let item of miniImg.children) {
        item.firstElementChild.classList.remove('active');
    }
    if (event.target.tagName === 'IMG') {
        bigImg.firstElementChild.setAttribute('src', event.target.dataset.fullview);
        bigImg.firstElementChild.setAttribute('alt', event.target.alt);
        event.target.classList.toggle('active');
    }
    // $('.active').slideUp(500).slideDown(500).slideDown(500);

    $('.fullview').fadeOut(1).fadeIn(1000);
    $('.active').fadeOut(1).fadeIn(1000);
};
miniImg.addEventListener('click', handleImg);