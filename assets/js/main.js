console.log("hello")

var sjs = SimpleJekyllSearch({
  searchInput: document.getElementById('search'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
