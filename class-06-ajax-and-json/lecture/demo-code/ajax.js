// Low Level AJAX
// $.ajax({
//   type: 'GET',
//   url: 'hackerIpsu.json',
//   success: function(data, status, xhr) {
//     data.forEach(function(article) {
//       $('#content').append('<p>' + article.title + '</p>');
//     })
//   },
//   error: function(request, status, error) {
//     console.dir(request);
//     console.log('status: ' + status, 'error: ' + error);
//   }
// }).done(function() {
//   console.log('Complete');
// })

// $.ajax({
//   type: 'HEAD',
//   url: 'hackerIpsum.json',
//   success: function(data, status, xhr) {
//     console.log(xhr); // Want to see what you are getting back from the server??
//     var eTag = xhr.getResponseHeader('eTag');
//     if (!localStorage.eTag || eTag !== localStorage.eTag) {
//       localStorage.eTag = eTag;
//       // Article.getAll();
//     } else {
//       // Article.loadAll(JSON.parse(localStorage.rawData));
//       // articleView.initIndexPage();
//     }
//   },
//   error: function(request, status, error) {
//     console.dir(request);
//     console.log('status: ' + status, 'error: ' + error);
//   }
// }).done(function() {
//   console.log('Complete');
// })


// Load data from the server and place the returned HTML into the matched element.
// $('#content').load('load.html');


// Load data from the server using a HTTP GET request.
// Equivalent to:
// $.ajax({
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// })

// $.get('hackerIpsum.json', function(data) {
//   data.forEach(function(article) {
//     $('#content').append('<p>' + article.title + '</p>');
//   })
// }).always(function() {
//   console.log('GET completed with success or error');
// })


// Load JSON-encoded data from the server using a GET HTTP request.
// $('#get-json').on('click', function(e) {
//   e.preventDefault();
//   $.getJSON('hackerIpsum.json', function(data) {
//     data.forEach(function(article) {
//       $('#content').append('<p>' + article.title + '</p>');
//     })
//   }).fail(function(e) {
//     console.log('Error: ' + e.responseText);
//   });
// })
