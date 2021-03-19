const url = 'https://catfact.ninja/fact?max_length=140';

const factContainer = document.querySelector('#fact');

async function getFact() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const html = `
    <style>
    #fact div {
        max-width: 80%;
        width: fit-content;
        height: fit-content;
        margin: 0 auto;
        margin-top: 1em;
        margin-bottom: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: inset 2px 2px 2px 400px rgba(0, 0, 0, 0.459);
        border-radius: 10px;
        padding: 15px 20px 10px 20px;
        border: 1px solid black;
      }
      
      #fact span {
        color: #7989c2;
        display: block;
      }

      h3 {
          color: #7989c2;
      }
      </style>
    <div>
    <h3>Today's cat facts:</h3>
    <h5>- ${data.fact}</h5>
    </div>`;
    factContainer.insertAdjacentHTML('beforeend', html);
  } catch (err) {
    console.log(err);
  }
}

getFact();
