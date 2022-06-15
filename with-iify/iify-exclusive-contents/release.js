var jswir, usedcontentsid, getscalesfor;

function undo() {
  jswir --;
  screenset(0);
}

function redo() {
  jswir ++;
  screenset(1);
}

function screenset(uor) {
  if (uor == 0) {
    alert('activities not allowed');
    usercontentsid = '75a';
    getscalesfor = $('body > .wrap').length + 57;
  } else {
    alert('activities allowed');
    usercontentsid = '75b';
    getscalesfor = $('body > .wrap').length - 57;
  }
}