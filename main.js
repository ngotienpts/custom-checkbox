var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var checkbox = $('input[type="checkbox"]');
var radio = $$('input[type="radio"]');
checkbox.onclick = function(e) {
    console.log(e.target.checked);
};
radio.forEach(function(tab, index) {
    tab.onclick = function(e) {
        console.log(e.target.value);
    };
});