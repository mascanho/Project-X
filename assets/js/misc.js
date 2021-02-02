$('.rad2').on('mouseenter mouseleave', function() {
    $('.box2, .line2').toggleClass('open');
});


// Pop  up warning 

document.getElementById("pt-active").addEventListener("click", changeLanguage);

function changeLanguage() {
    // alert('You will now be redirected to the Portuguese version of this website')
    // setTimeout("window.location.href = 'http://walkerwines.com.au/' ", 10000);
    alert('You have selected Portuguese 🇵🇹 . ')
    setTimeout(window.location.href = "#", 1 * 10000);


}

// Function when the page loads

// window.onload = function() {
//     alert('You are now on the Portuguese Language cdscsdcsdcd')
//     doSomethingElse();
// };



// Sending use to another link after a timeout

// setTimeout("window.location.href = 'http://walkerwines.com.au/' ", 5 * 1000);

// When it click the CSS class .english
const modalBtn = document.querySelector('.english');


const modalBg = document.querySelector('.modal-bg');

const modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active');

});