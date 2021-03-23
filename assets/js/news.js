const newsContainer = document.getElementById('news-container');

const ptNewsUrl =
  'https://newsapi.org/v2/top-headlines?country=pt&category=business&apiKey=e7b5ce9f5b684b069398444c129c33ff';

async function getPtNews() {
  try {
    const res = await fetch(ptNewsUrl);
    const { articles } = await res.json();
    // console.log(articles[0]);

    articles.forEach((article, index) => {
      console.log(articles[index]);
      const html = `
          <div class="card">
          <img src="${articles[index].urlToImage}" alt="" srcset="">
          <h3>${articles[index].title.substr(0, 200)}</h3>
          <p>${articles[index].description}</p>
          <button> <a href="${
            articles[index].url
          }" target="_blank" rel="noopener noreferrer"> View More</a></button>
        </div>
          `;
      newsContainer.insertAdjacentHTML('afterbegin', html);
    });
  } catch (err) {
    console.log(res.status);
  }
}

getPtNews();

Date.prototype.getMonthName = function () {
  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthNames[this.getMonth()];
};

//

/* <div class="news-card">
  <figure class="snip1208">
    <img src="${articles[index].urlToImage}" alt="sample66" />
    <div class="date">
      <span class="day">28</span>
      <span class="month">Oct</span>
    </div>
    <i class="ion-film-marker"></i>
    <figcaption>
      <h3></h3>
      <p></p>
    </figcaption>
    <a href=""></a>
    <button>READ MORE</button>
  </figure>
</div>; */
const month_Name = new Date().getMonthName();
console.log(month_Name);
