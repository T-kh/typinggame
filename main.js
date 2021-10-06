'use strict';

{

  //新しいボタンのセッティング
  function setting () {
    const target = document.getElementById('target');
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;     //locを0にリセットしないと、次の単語をタイピングできない。
  }

  const words = ['red', 'pink', 'blue'];
  let word;
  let loc = 0;    //wordの文字列を操作する。
  let startTime;
  let isPlaying = false;


  //クリックしてゲームを開始する処理。
  document.addEventListener('click', () => {
    if(isPlaying === true) {        //trueを代入するわけではなく、isPlayingイコールtrueの状態の時としたいので、=== を使う
      return;
    }
    isPlaying = true;    //1回目のクリックでtruenにしておいて、二回目のクリックではもうすでにtrueなので、早期returnされているから、複数回クリックしても、再度ゲームがスタートしないようにする。
    setting();
    startTime = Date.now();
  });

  document.addEventListener('keydown', e => {

    //タイピングした文字がwordのlocと違えば、あっている時の動作をしないようにする。なのでそうきreturnを使う。
    if(e.key !== word[loc]) {
      return;
    }
    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);

     
    //wordを全て打ち終わったとき
    if(loc === word.length) {
      //かつ配列wordsのlengthが0になったとき
      if(words.length === 0) {
        const result = document.getElementById('result');
        const finishTime = ((Date.now() - startTime) / 1000).toFixed(2);         //Date.now()は千ミリ秒で出力されるので、/ 1000 をして秒に直す。かつtoFiexd(2)で小数第2位まで表示させる。
        result.textContent = `Finish! ${finishTime}seconds`;
        return;                 //wordsのlangthが0になれば、新しい単語をセットしないでいいので、早期returnを使う。
      }
      setting();
    
    }

  });


}


