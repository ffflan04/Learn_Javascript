// DOM操作メソッドについて

/* イベント関係 */

// addEventListenerについて
// addEventListenerのコールバック関数に、引数を持たせたい。
// これでは、test(0)の処理結果が返ってくる。
document.getElementsByTagName('button')[num].addEventListener('click', test(0))
// こうすることで、イベントトリガーが返す、メソッドに設定できる。
document.getElementsByTagName('button')[num].addEventListener('click', test)
// addEventListenerのリスナー関数に、引数を持たせたい。
document.getElementById('cont01').addEventListener('click', {message:'ken', handleEvent: punch})
function punch(e){
    console.log(this.message)
}
// addEventListenerでキーダウンイベントを受け取る
document.addEventListener('keypress', func_arg)
const func_arg = function(e){
    console.log(e.key)
}
// e.preventDefaultについて
// イベントに対するデフォルトの動作を止めることができます。
// Event.cancelable プロパティの値が true のイベントのみキャンセル可能です。
e.preventDefault() 

// Event.targetについて
e.target.textContent // タグで囲まれている文字列を取得します。
e.target.dataset.nav // date-nav="1" -> dateset.nav >>> 1 ))) そのDOM要素のデータ属性を取ります。
e.target.classList // クリックした要素のクラスを取得できるよ。
e.target.id // クリックした要素のidを取得できるよ。

// Event.classListについて
// 特定のクラスの、css処理に、分岐を加えることができる。
// <div class="cont is-active"></div>
// <div class="cont"></div>
// 上記の二つのDOM要素は、同じクラス
Event.classList.add('is-active')
Event.classList.remove('is-active')



// document.onkeydownについて
// 押したキーを取得できる便利な関数。
document.onkeydown = function test(e){
    console.log(e.key) // 押したキーが出力される。
}
document.onkeyup = (e)=>{
    console.log(typeof e.key) // 押した後のキーが押される。
}



// document.onclick について
// onclickとaddEventListenerの違い -> 追加でイベントを追加出来るか・出来ないかの違い
<input type="button" value="ぼたん" onclick="hoge()"></input>
// onclick は、htmlに”属性”として加えることもできる。
$upBtn.onclick = function(){
    $circle.style.transform += 'rotate(-90deg)'
}



// window.pageYOffsetについて
// DOM要素.offsetTopで、DOM要素の高さを取得できます！
// DOM要素.getBoundingClientRect() でDOM要素の座標を取得できます!
// Y軸座標0 から見て、スクロールした距離を出力します。
window.addEventListener('scroll', ()=>{
    console.log(window.pageYOffset) 
    console.log($menu.offsetTop) // document.offsetTopで、DOM要素の高さを取得できます！
})
$a = document.querySelector('.subMenu-1')
console.log($a.getBoundingClientRect())


// マウスポインターの座標を随時取得
document.addEventListener('mousemove', (e)=>{
    const mouseX = e.clientX // ポインターのX軸を取得
    const mouseY = e.clientY // ポインターのY軸を取得
})





/* ------------------------------------------------------- */

/* DOM取得関係 */

// querySelectとは？
// querySelectorメソッドとは、指定したセレクタに一致する最初のHTML要素(Element)を取得するメソッドです。
document.querySelector('input') // inputタグのついた要素を一つ取得する。
document.querySelector('.my_class') // my_classというクラスを持った要素を一つ取得する。
document.querySelector('input[name="two"]') // inputタグの、name属性に"two"と記載されてる要素を一つ取得する
document.querySelectorAll('li.my_class') // liタグの、my_class というクラスを持った要素を全て取得する
document..querySelectorAll('[data-nav]') // data-navというデータ属性を持つ要素を全て取得する。



// createElement, innerHTML, appendChildについて
// document.createElement -> DOM要素を生成
// innerHTML -> HTMLとしての文字列を挿入
// DOM要素.appendChild(DOM要素) -> DOM要素内(タグ内)に、DOM要素を挿入。 
let p = document.createElement('p') // <p></p>
p.innerHTML = '下らない歌を歌いたい' // <p>下らない歌を歌いたい</p>
document.getElementById('cont01').appendChild(p) // <div>おはよう山口<p>下らない歌を歌いたい</p></div>
// textContent, innerHTML 違い。
// textContent -> 文字列を返す。
// innerHTML -> HTMLとしての文字列を返す。
// innerText と、textContentは、ほとんど同じ。



// テキストエリア内の文字列を取得します。
// TextArea要素.value
// DOM要素タグ内のテキストではなく、GUI上のテキストだからね!!
$typeInput.value



// 【JavaScript】classListの使い方まとめ(add.remove.contains.toggle)
classList.add	    // クラスを追加する
classList.remove	// クラスを削除する
classList.contains	// クラスが含まれているか確認する
classList.toggle	// クラスが含まれていれば削除、含まれていなければ追加する



// 凄い！Javascriptで擬似要素を取得
// getComputedStyle()を使えば可能です。
const $cont03 = document.querySelector('.cont03')
const $cont03_pseudo = getComputedStyle($cont03, '::before')
console.log($cont03_pseudo.width)
// 取得のみなんです..
// javascriptで疑似要素は直接操作できない。
// なので、
// javascriptでクラスを変更すること、などで、
// 擬似要素の値を操作できるんじゃないですか。



// Javascriptで、DOW要素に、属性を追加できます！
// id も付与できます。
// setAttributeメソッドですねぇ！
$input.setAttribute('type', 'checkbox')
$input.id = 'bool'



// DOM要素の子要素を取得できます.
// DOM要素.children[num]
$img_wrap.map((item,index)=>{
    console.log(item.children[0])
})


// Javascriptで音楽を再生することができます。
// htmlに音源を記述する方法もありますが、
// 下記のように、インスタンス化するのがスマートですよね？
const typeSound = new Audio('./audio/typing-sound.mp3')
music.play();
music.pause();
music.volume = 0.5;
music.currentTime = 60; // 音楽の再生位置を秒単位で決定します。
$mySong.paused // これは、音源がポースしてるときの判定ですね笑。




/* ----------------------------------------------------------------------- */

// JavaScriptで、CSSを操作します。


// ハイフン（-）があるプロパティを記述する時は注意してください。
// backgroundImageのようにキャメルケースで記述してください。
box.style.backgroundImage = ''; /*background-image*/
box.style.fontSize = '';  /*font-size*/


// css の値を変更, 追加
const box = document.querySelectorAll(".box");
box.style.width = '90%';
box.style.height = '100px';
box.style.background = 'blue';


// cssText -> cssをまとめて追加
// これは、まじですげぇ。
const $cont01 = document.querySelector('.cont01')
$cont01.style.cssText = 'width: 100%; height: 100vh; background: blue;'


// css の値を削除
// html のstyleプロパティからも消えます。
$cont01.style.background = ''
// あれ。displayプロパティ削除できなんだけど。









/* ----------------------------------------------------------------------- */

// ゲーム作るための知識

// <canvas>.getContext("2d")とは？
// canvas要素を取得
const canvas = document.getElementById('canvas');
// canvas要素が持つgetContext()メソッドを実行し、
// グラフィック描画のためのメソッドやプロパティを
// 持つオブジェクトを取得する。
// 引数を"2d"とすることで2Dグラフィックの描画に
// 特化したメソッドやプロパティを持つオブジェクトを取得し、
// 定数ctxに格納する。
const ctx = canvas.getContext("2d");
// 定数ctxに格納したオブジェクトがもつプロパティやメソッドは
// ctx.プロパティ名、ctx.メソッド名() で呼び出せる
// 描画する色を指定するプロパティflillStyle
ctx.fillStyle = 'black';
// 四角形を描画するメソッドfillRect()
ctx.fillRect(15, 10, 150, 100);
// 四角形の外枠を描画するメソッド

canvas.width = SCREEN_W // 横のキャンバスサイズを設定。
canvas.height = SCREEN_H // 縦のキャンバスサイズを設定。
canvas.clearRect(0,0,SCREEN_W,SCREEN_H) // 指定の座標の、四角形の描画を消す。
canvas.style.border = '3px solid #555' // canvasに外枠を付与します。
con.fillStyle = 'red' // 描画する四角形の色を指定。
con.fillRect(30, 100, 50, 50) // 四角形を描画。x座標, y座標, 横幅, 高さ
con.strokeStyle = "black" // 描画する四角形の色を決定します。
con.strokeRect(100, 100, 20, 20) // 描画する四角形の外枠を付与します。x座標, y座標, 横幅, 高さ







