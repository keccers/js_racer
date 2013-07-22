$(document).ready(function() {

  $('body').keydown(function(event) {
  // first player movements
    if(event.which == 65) {
     //console.log($('#player1_strip td'));
     $('#player1_strip td.active').removeClass('active').next().addClass('active');
     //.next('td').addClass('active');
     //alert('You hit A whatup'); 
    }
     //second player movements
    if (event.which == 76) {
      $('#player2_strip td.active').removeClass('active').next().addClass('active');
    }
    if ($('table.racer_table tr td:last-child').hasClass('active')) {
      $('body').unbind();
      $('table.racer_table tr td:last-child.active').css('background-image', 'url(file:///Users/apprentice/Dropbox/DBC-Chicago/Grasshoppers/rburbank/p2_week5/js-racer/img/winner.gif)');
    }
  });


});

