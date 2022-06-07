/* Credit */
var y = '2022';
var c = 'iffy';

/* URL Sheet */
var iffy = 'vy1.iify.repl.co/';
var iffyVerify = '/verify';
var iffyWeb = '/web';

/* Work */
$('.mhd-year').text(y);
$('.mhd-cpg').text(c);
$('.mhd-cpg').click(function(){window.open(`https://${iffy}`);})