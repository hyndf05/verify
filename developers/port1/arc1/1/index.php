<?php 
$reUrl = $_GET['re'];
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>VERIFY</title>
    <link rel="stylesheet" href="/with-iify/pack/css/main1.css" />
    <link rel="stylesheet" href="/with-iify/pack/css/bc.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script defer src="/with-iify/pack/js/ja00.js"></script>
    <script defer src="/with-iify/pack/js/ja1.js"></script>
  </head>
  <body>
    <div class="wrap">
      <div class="scl">
        <div class="rotate">
          <div class="lb"></div>
        </div>
        <div>
          <div class="sj"></div>
        </div>
      </div>
      <div class="ccl">
        <div class="hhd">
          <span></span>
          <span>보이는 숫자를 입력하세요.</span>
        </div>
        <div class="spc">
          <div>
            <input type="number">
          </div>
          <div>
            <span class="material-symbols-outlined">check</span>
          </div>
          <div class="bh" style="display:none;">
            <span><?php echo $reUrl; ?></span>
          </div>
        </div>
      </div>
      <div class="mhd">
        <span>&copy; 2022 <span class="mhd-cpg">iify</span>.</span>
      </div>
    </div>
    <div class="ret"></div>
  </body>
</html>