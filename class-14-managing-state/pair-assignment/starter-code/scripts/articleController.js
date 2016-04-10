(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // COMMENT: What does this method do?  What is it's execution path?

  //loadById calls Article.findWhere and passes it the 'id' field, ctx.params.id which represents the id of the article, and then sets the ctx.articles property to the instance of the article we're working with.
  //articlesloadById is kicked off when we click on a "read me" link, as set in routes.js. next() represents articlesController.index which calls articleView.index to render.
  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };

    Article.findWhere('id', ctx.params.id, articleData);
  };

  // COMMENT: What does this method do?  What is it's execution path?

  //loadByAuthor calls Article.findWhere and passes it the 'author' field, ctx.params.authorName which represents the author of the article (also replaces '+' with a ' '), and then sets the ctx.articles property to all the articles by that author.
  //articlesloadByAuthor is kicked off when we use the author filter. the route is setup to call articlesloadByAuthor once it gets a URL that matches the '/author/:authorName' format  and then next() represents articlesController.index which calls articleView.index to render.
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };

    console.log(ctx);
    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // COMMENT: What does this method do?  What is it's execution path?

  //loadByCategory calls Article.findWhere and passes it the 'category' field, ctx.params.categoryName which represents the category of the article, and then sets the ctx.articles property to all the articles within that category.
  //articlesloadByCategory is kicked off when we use the category filter. the route is setup to call articlesloadByCategory once it gets a URL that matches the '/category/:categoryName' format  and then next() represents articlesController.index which calls articleView.index to render.
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // DONE COMMENT: What does this method do?  What is it's execution path?

  // This method has two parameters ctx and next.
    // if the are already articles in Aticle.all, then they will be set as variables on the ctx object, calls next which goes to the articleContcoller.index which passes  cxt.articles to articleView.index, which renders the page.
    // else, it will fetchAll - make the JSON request for the articles by calling articleData (which does the same thing as the if branch).

  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };


  module.articlesController = articlesController;
})(window);
