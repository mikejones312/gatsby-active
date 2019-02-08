function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;'
}

function acceptCookies() {
    setCookie('cookiesOk', 'true', 365);
    closeCookieWindow()
}

function rejectCookies() {
    document.cookie = "";
    setCookie('cookiesOk', 'false', 7);
    closeCookieWindow()
}

function closeCookieWindow() {
    document.getElementById('.cookie-notification').remove()
}


// (function() {
//     var burger = document.getElementById('.burger');
//     console.log(burger);
//     var menu = document.getElementById('#' + burger.dataset.target);
//     burger.addEventListener('click', function() {
//         burger.classList.toggle('is-active');
//         menu.classList.toggle('is-active')
//     })
// })();
window.addEventListener('scroll', function(e) {
    let breakpoint = 10;
    if (window.scrollY < breakpoint) {
        document.querySelector('.navbar').classList.remove('is-dark');
        document.querySelector('.navbar').classList.remove('has-background-dark');
        document.querySelector('.navbar').classList.add('is-link')
    }
    if (window.scrollY > breakpoint) {
        document.querySelector('.navbar').classList.add('is-dark');
        document.querySelector('.navbar').classList.add('has-background-dark');
        document.querySelector('.navbar').classList.remove('is-link')
    }
});

function smoothScrollTo(selector) {
    document.querySelector(selector).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })
};


function addAtTags() {
    var key, href, links = document.getElementsByTagName('a');
    for (key in links) {
        if (links.hasOwnProperty && links.hasOwnProperty(key) && links[key].getAttribute) {
            href = links[key].getAttribute('href');
            if (href != '/' && href !== null && href.length !== 0 && links[key].parentNode.className != 'crumb' && href == window.location.pathname.substr(0, (href.length - 1))) {
                links[key].className += ' at'
            }
        }
    }
};
window.onload = addAtTags
