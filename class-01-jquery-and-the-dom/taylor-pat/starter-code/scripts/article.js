var articles = [];

function Article(opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Article.prototype.toHtml = function () {
  var $newArticle = $('article.template').clone();

  $newArticle.attr('data-category', this.category);

  //Include title in h1 tag
  $newArticle.find('h1').text(this.title);

  //Include author name in link tag and set href attribute to authorURL
  $newArticle.find('.byline a').text(this.author).attr('href', this.authorUrl);

  //Include text into .article-body class
  $newArticle.find('section.article-body').html(this.body);

  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);

  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');

  $newArticle.append('<hr>');

  $newArticle.removeClass('template');
  return $newArticle;
};

rawData.sort(function (a, b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function (ele) {
  articles.push(new Article(ele));
});

articles.forEach(function (a) {
  $('#articles').append(a.toHtml());
});
