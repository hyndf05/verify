var t = '2344';
var hmt = '3';
var v = '3.0.0';
var bc = `c${t}`;
var ou = `rs${hmt}`;
var tv = `v${v}-${bc}-${ou}`;
var cnst = 'font-size:16px;color:#000000;font-family:"paybooc";padding:7px;';
console.log(`%c${tv}`, cnst);

const re = $('div.bh span').text();
var num = Math.floor((Math.random() * 10000) + 1);
$('.hhd > span:nth-child(1)').text(num);
var reUrlLength = $('.redirect').text().length;

if (reUrlLength > 19) {
  $('.redirect').text('er1');
} else if (reUrlLength == 0) {
  $('.redirect').text('er2');
}

$('.spc > div:nth-child(2)').click(function(){
  click();
})

$('input').on('keyup', function(p){
  if (p.keyCode == 13) {
    click();
    $('input').blur();
  }
})

function click() {
  $('.lb').removeClass('error');
  var input = $('.spc div:nth-child(1) input').val();
  if (input == '') {
    console.log('er3');
  } else {
    if (num == input) {
      location.href = re;
    } else {
      num = Math.floor((Math.random() * 10000) + 1);
      $('.spc div:nth-child(1) input').val('');
      $('.lb').addClass('error');
      $('.ret').addClass('g');
      var forlb = setInterval(function(){
        $('.hhd > span:nth-child(1)').text(num);$('.hhd > span:nth-child(1)').text(num);$('.hhd > span:nth-child(1)').text(num);$('.hhd > span:nth-child(1)').text(num);$('.hhd > span:nth-child(1)').text(num);
        $('.lb').removeClass('grounding');
        clearInterval(forlb);
        $('.rotate').addClass('r');
        var forlb2 = setInterval(function(){
          clearInterval(forlb2);
          $('.rotate').removeClass('r');
          $('.ret').removeClass('g');
          $('input').focus();
        }, 750);
      }, 750);
    }
    $('.lb').addClass('grounding');
  }
}