(function() {
  if (document.getElementById('search') === null) {
    return false;
  }

  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search'),
    resultsContainer: document.getElementById('posts'),
    json: '/search.json',
    searchResultTemplate: '<article class="post"><img src="{image}" alt="" class="post_image"><h2><a href="{url}">{title}</a></h2><div class="meta"><p class="meta_text">Published on {date}</p></div><a href="{url}" class="big_link" tabindex="-1" aria-hidden="true"></a></article>',
    noResultsText: '<p>No posts found. Sorry</p><img src="https://media1.giphy.com/media/W5YVAfSttCqre/giphy.gif" class="no_results_image" alt="Nope" />',
    saveState: true,
    fuzzy: true,
    success: function() {
      var all_posts = document.getElementById('posts');
      var cached_html = all_posts.innerHTML;
      document.addEventListener("keyup", function() {
        if (all_posts.innerHTML == "") {
          all_posts.innerHTML = cached_html;
        };
      });
    }
  })
})();
