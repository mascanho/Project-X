// document.querySelector("#banner .inner h2").style.color = "blue";


// document.querySelector("#banner .inner h2").hover.innerHTML = "<em>marco</>"

// var msg = 'fdfdfsdfsdfsfssfgsdfgsdgsdgsgsg';
// function updateMessage () {
// var el = document.getElementById('banner');
// el.textContent = msg;
// }
// updateMessage();


// $("#banner .inner h2").hover(function() {
//     $(this).addClass("blue");
//   }, function() {
//     $(this).removeClass("blue");
//   });


const output = document.querySelector('.moto')
const text = 'Marketing and Media Solutions for everyday businesses.'

const ResetState = (event) => {
  output.innerHTML = ''
  DisplayText(text)
}

const DisplayText = line => {
  let charPosition = 0
  const waitForMilliseconds = 25

  setInterval(() => {
    if (charPosition < line.length) {
      output.innerHTML += line.charAt(charPosition)
      charPosition++
    }
  }, waitForMilliseconds)
}

const resetButton = document.querySelector('.moto')


DisplayText(text)


// document.querySelector("#banner .inner h2").innerHTML = "<em>marco</>"



      
