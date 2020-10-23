document.addEventListener('DOMContentLoaded', function () {
    var next = document.querySelector('.main .product .wrapperSlideProduct .nextSlide'),
        previous = document.querySelector('.main .product .wrapperSlideProduct .backSlide'),
        slideProduct = document.querySelector('.main .product .wrapperSlideProduct .slideProduct');
    next.addEventListener('click', function () {
        var slideChild = slideProduct.children[0];
        slideProduct.removeChild(slideChild);
        slideProduct.appendChild(slideChild);
    })
    previous.addEventListener('click', function () {
        var slideChild2 = slideProduct.children[6];
        slideProduct.removeChild(slideChild2);
        slideProduct.insertBefore(slideChild2, slideProduct.firstChild);
    })
}, false)