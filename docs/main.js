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
