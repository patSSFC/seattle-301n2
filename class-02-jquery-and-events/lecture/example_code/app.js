// These are two different ways to select a button element by ID,
// and add an event to the button which console.log's Hello World.

// var btnEl = document.getElementById('btn-one');
// btnEl.addEventListener('click', function(event) {
//   event.preventDefault();
//   console.log('Hello World.');
// });

// $('#btn-one').on('click', function(event) {
//   event.preventDefault();
//   console.log('Hello World');
// });


// $('.nav-list').on('click', 'li', function() {
//   console.log($(this).text());
// });


// $('.nav-list li').each(function() {
//   $(this).css('color', 'red');
// });
//
//
$('.nav-list').on('click', 'li', function() {
  $('.main-sects').hide();
  $('#' + $(this).data('content')).fadeIn();
});

// $('.nav-list .tab:first').click();
