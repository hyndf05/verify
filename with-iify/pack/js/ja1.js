console.log('v1.3.7');

const re = $('div.bh span').text();
var num = Math.floor((Math.random() * 10000) + 1);
$('.hhd span:nth-child(1)').text(num);

$('.spc > div:nth-child(2)').click(function(){
  sub();
})

function sub() {
  $('.lb').removeClass('error');
  var input = $('.spc div:nth-child(1) input').val();
  if (input == '') {
    console.log('a');
  } else {
    if (num == input) {
      location.href = re;
    } else {
      num = Math.floor((Math.random() * 10000) + 1);
      $('.hhd span:nth-child(1)').text(num);
      $('.spc div:nth-child(1) input').val('');
      $('.lb').addClass('error');
      $('.ret').addClass('g');
      var forlb = setInterval(function(){
        $('.lb').removeClass('grounding');
        clearInterval(forlb);
        $('.rotate').addClass('r');
        var forlb2 = setInterval(function(){
          clearInterval(forlb2);
          $('.rotate').removeClass('r');
          $('.ret').removeClass('g');
        }, 750);
      }, 750);
    }
    $('.lb').addClass('grounding');
  }
}