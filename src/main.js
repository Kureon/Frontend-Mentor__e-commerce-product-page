// Mobile navigation
const primaryHeader = document.querySelector('.primary-header')
const navToggle = document.querySelector(".mobile-nav-toggle")
const primaryNavigation = document.querySelector('.primary-navigation')

navToggle.addEventListener('click', function() {
    primaryNavigation.toggleAttribute('data-visible')
    
    if (primaryNavigation.hasAttribute('data-visible') ) {
        navToggle.setAttribute('aria-expanded', true)
        primaryHeader.setAttribute('overlay', true)

    } else {
        navToggle.setAttribute('aria-expanded', false)
        primaryHeader.removeAttribute('overlay', false)
    }
}) 

// Shopping cart
const cartButton = document.querySelector('.cart-button')
const shoppingCart = document.querySelector('.cart')

cartButton.addEventListener('click', function() {
    shoppingCart.toggleAttribute('hidden')
})

// Mobile slider
const previous = document.querySelector('.prev')
const next = document.querySelector('next')

let slides = document.querySelectorAll('.img_big')

next.addEventListener('click', function() {
    for (i = 0, i < slides.length, i++) {
        console.log(slides)
    }
})