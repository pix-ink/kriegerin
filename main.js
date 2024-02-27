/**KRIEGERIN KENNELS**/

/***** BACK TO TOP *****/

function scrollFunction() {
    document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ? document.getElementById("myBtn").style.display = "block" : document.getElementById("myBtn").style.display = "none"
}

function topFunction() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}

var element, btDiv = document.createElement("div");
btDiv.innerHTML = '<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>', document.body.appendChild(btDiv), window.onscroll = function () {
    scrollFunction()
}

/***** FAQs *****/

$('.togglefaq').click(function (e) {
    e.preventDefault();
    var notthis = $('.active').not(this);
    notthis.find('.la-minus-square').addClass('la-plus-square').removeClass('la-minus-square');
    notthis.toggleClass('active').next('.faqanswer').slideToggle(300);
    $(this).toggleClass('active').next().slideToggle("fast");
    $(this).children('i').toggleClass('la-plus-square la-minus-square');
});

/***** TABS *****/

function _class(name) {
    return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for (let i = 0; i < tabPanes.length; i++) {
    tabPanes[i].addEventListener("click", function () {
        _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");

        _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;

        _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
        _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");

    });
}