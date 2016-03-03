// set event listener on li's within nav-list ul - log text content on click
$('.nav-list').on('click', 'li', function() {
  console.log($(this).text());
});

// set color of each li element within nav-list ul to red
$('.nav-list li').each(function(){
  $(this).css('color', 'red');
});
