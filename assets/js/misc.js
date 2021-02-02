$('.rad2').on('mouseenter mouseleave', function() {
    $('.box2, .line2').toggleClass('open');
});


// Pop  up warning 

document.getElementById("pt-active").addEventListener("click", changeLanguage);

function changeLanguage() {
    alert('You will now be redirected to the Portuguese version of this website')
}