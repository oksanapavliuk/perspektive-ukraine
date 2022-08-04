// news section
//fetch the news
fetch("./data/news.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => fillNews(data));

//append the news
function fillNews(data) {
  const news = document.getElementById("news");
  //find out language
  const lang = news.getAttribute("lang");

  // extract the required data
  const langData = data.filter((dataPoint) => {
    return dataPoint["language"] === lang;
  });
  let newsData = langData[0].news;

  //append data to the DOM
  newsData.forEach((dataPoint) => {
    //div container for news
    const newsItem = document.createElement("div");
    newsItem.classList.add("news");
    //newsheader
    let newsHeader = document.createElement("div");
    newsHeader.classList.add("news-header");
    //title
    const h3 = document.createElement("h3");
    h3.textContent = dataPoint.title;
    newsHeader.appendChild(h3);
    // date
    const date = document.createElement("span");
    date.classList.add("date");
    date.textContent = dataPoint.date;
    newsHeader.appendChild(date);

    newsItem.appendChild(newsHeader);
    // news message
    const message = document.createElement("p");
    message.textContent = dataPoint.message;
    newsItem.appendChild(message);

    news.appendChild(newsItem);
  });
}
