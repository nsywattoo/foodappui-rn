const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
     .then(response = response.json())
     .then(data => {
         data.forEach(news => {
             const newsItem = `<div> <h3>` + news.title + `</h3><p>` + news.url
            feedDisplay.insertAdjacentHTML("beforeend", newsItem)
            })
     })