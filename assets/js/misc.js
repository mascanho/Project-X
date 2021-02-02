$('.rad2').on('mouseenter mouseleave', function() {
    $('.box2, .line2').toggleClass('open');
});


// Pop  up warning 

document.getElementById("pt-active").addEventListener("click", changeLanguage);

function changeLanguage() {
    // alert('You will now be redirected to the Portuguese version of this website')
    // setTimeout("window.location.href = 'http://walkerwines.com.au/' ", 10000);
    alert('You will be going to the Portuguese of This website')
    window.location.href = "#";

}


// Sending use to another link after a timeout

// setTimeout("window.location.href = 'http://walkerwines.com.au/' ", 5 * 1000);