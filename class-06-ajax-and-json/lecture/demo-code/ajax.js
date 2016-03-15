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


// Load data from the server and place the returned HTML into the matched element.
// $('#content').load('lod.html');


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
//   $.getJSON('hackerIpsu.json', function(data) {
//     data.forEach(function(article) {
//       $('#content').append('<p>' + article.title + '</p>');
//     })
//   }).fail(function(e) {
//     console.log('Error: ' + e.responseText);
//   });
// })
