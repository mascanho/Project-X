// COOKIES

function PopUp(hideOrshow) {
  if (hideOrshow === 'hide') {
    document.getElementById('ac-wrapper').style.display = 'none';
  } else if (
    localStorage.getItem('popupWasShown') !== '1' &&
    hideOrshow === 'show'
  ) {
    document.getElementById('ac-wrapper').removeAttribute('style');
    localStorage.setItem('popupWasShown', '1');
  }
}

// window.onload = function () {
//   setTimeout(function () {
//     PopUp('show');
//   }, 1000);
// };

window.addEventListener('load', function () {
  setTimeout(function () {
    PopUp('show');
  }, 1000);
});

function hideNow(e) {
  if (e.target.id == 'ac-wrapper') {
    document.getElementById('ac-wrapper').style.display = 'none';
    localStorage.setItem('popupWasShown', '1');
  }
}

document.getElementById('reset').onclick = function () {
  localStorage.setItem('popupWasShown', '3');
};
