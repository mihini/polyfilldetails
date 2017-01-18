var detailsSupported = !!window.HTMLDetailsElement;
var att = $('details').attr('open');

var triDown = "▼";

if(!detailsSupported){
  var btn = $('<button>', {
    'class': 'summary',
    'html': triDown + $('summary').text(),
    click: function () {
      $('.summary').empty();
      var triRight = '►';
      if(att){
        $('.summary').text("Closed Form");
        makeTriangle(triRight);
        $('.contentDetails').hide();
        att = false;
      }else{
        $('.summary').text("Open Form");
        makeTriangle(triDown);
        $('.contentDetails').show();
        att = true;
      }
    }
  });
  $('summary').empty().append(btn);
  //put btn in summary
  $('summary').append(btn);

  var makeTriangle = function(triangle) {
    // var str = $('.summary').text();
    // $('.summary').text(str.substring(1));
    $('.summary').prepend(triangle);
  };
}
