// global
var d = document;

// preloader
window.onload = function () {
    d.body.style.cssText = 'overflow: hidden;';
    window.setTimeout(function(){
        d.body.style.cssText = 'overflow: auto;'
        d.body.classList.add('preload_hide');
    }, 900)
    window.setTimeout(function () {
        d.body.classList.add('preload');
        d.body.classList.remove('preload_hide');
        d.body.removeAttribute('style');
    }, 1200);
}

//navb anim
var nav = d.querySelector('.navbar');
var navbar_brand = d.querySelector('.navbar-brand');
var ml_auto = d.querySelector('.ml-auto');
window.onscroll = function() {
    const wn = window.scrollY;
    if (wn >= 10) {
        nav.style.cssText = 'background: rgba(22,22,22, 0.722); z-index: 99999;';
        navbar_brand.style.cssText = 'display: none;' ;
        ml_auto.style.cssText = 'margin-left: auto; margin-right: auto;';
    }else {
        nav.removeAttribute('style');
        navbar_brand.removeAttribute('style');
        ml_auto.removeAttribute('style');
    }
}

// ours servers
var play____btn = d.querySelector('.play');
var box_servers = d.querySelector('.box_servers');
var close__play = d.querySelector('.box_servers button');

play____btn.addEventListener('click', function(){
    box_servers.style.cssText = 'display: block; opacity: 0;';
    d.body.style.cssText = 'overflow: hidden;';
    window.setTimeout(function(){
        box_servers.style.cssText = 'display: block; opacity: 1;';
    }, 100);
});

close__play.addEventListener('click', function(){
    box_servers.style.cssText = 'display: block; opacity: 0;';
    window.setTimeout(function(){
        box_servers.style.cssText = 'display: none; opacity: 0;';
    }, 100);
    window.setTimeout(function(){
        box_servers.removeAttribute('style');
        d.body.removeAttribute('style');
    }, 120);
});