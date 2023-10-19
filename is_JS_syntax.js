// 変数
// var で定義する変数は、一つ前のバージョンで
// 今は、let, const 一般的。
let unko = 'good morning';



// 定数 = 書き換えができない。
const bigUnko = 'good afternoon';



// 四則演算
// int + string で、string になるらしい。
// プログラミング言語ごとに、四則演算のルール違うから覚えにくい。
let snowSize = 5
let what = snowSize + "px"
console.log(typeof snowSize) // number
console.log(typeof what) // string



// 配列
let inoki = ['いち', 'にー', 'さん', 'だぁ']
console.log(inoki[2]) // -> さん
// pushメソッド
// 配列データの末尾に任意の要素を追加するために利用されます。
items.push( 追加する要素, 要素, 要素) // pythonでいう、append()メソッドだね。


// ループ文
let count = 0;
while(count < inoki.length){// .length で要素の数
    count++; // 繰り返したい命令
}



// 条件文
if(inoki > 5){
    console.log('ボンバイエ')
}
else{
    console.log('elseだぜ!')
}
// Javascript false判定、５大条件
// ・0（数値の0）
// ・null（値が空であることを示す型）
// ・NaN（数値ではないことを示すプロパティ）
// ・undefined（値が未定義であることを示す型）
// ・""（空の文字列）



// 関数 
// 関数の書き方は色々あるが、この書き方が一番モダンでいいのではないか？
const test = (arg) => {
    // ここに実行したい命令を書く
}
test(); // 関数の実行



// forEach文について
// 配列データ.forEach(コールバック関数)
// 配列データ1つずつに対して、コールバック関数の処理をあてることができます。
// breakやcontinueは使えません。
// コールバック関数に持たせることができる引数一覧
// 第1引数: 配列データの値
// 第2引数: 配列のインデックス番号
// 第3引数: 現在処理している配列
Array = ['ぶどう', 'メロン', '桃', 'ペプシ']
arg = '引数'
Array.forEach(function(value){
    console.log(value) // ぶどう メロン 桃 ペプシ
})
Array.forEach((i, fruit, arg)=>{
    console.log(i)
    console.log(fruit)
    console.log(arg)
})
// forEach関数の、第二引数にオブジェクト(辞書)を設定できる。
lists.forEach( function( value ) {
    console.log( value + 'の価格は' + this[value] + '円です' );
}, priceLists )



// 等価演算子について
// == -> 等価演算子, === -> 厳密等価演算子(型の判定までチェックする)
console.log('1' ==  1);
// true
console.log('1' ===  1);
// false
console.log(0 == false);
// true
console.log(0 === false);
// false


// switch文について
// if文で問題なくかける。
// 一致してるかの判定が、厳密等価演算子なので、
// 融通が効きません。
let pref = 'Osaka';

switch (pref){
  case 'Tokyo':
    console.log('住所は東京都です');
    break;
  case 'Osaka':
    console.log('住所は大阪府です');
    break;
  default:
    console.log('住所はその他です');
}


// map関数について
// 配列の要素、それぞれに関数の処理を当てることができる。
// これも、for文でこと足ります。
let array = [1,2,3,4]
empty = array.map(function(value){
    return value + 1 // ちゃんとreturn書かんとあかんで！
})
console.log(empty) // 処理結果 -> (4) [2, 3, 4, 5]



// 三項演算子について
// 条件式 ? Trueの処理 : Falseの処理
5<2 ? console.log('trueの処理じゃ') : console.log('falseの処理じゃ')
// req.body.profileがnullじゃない場合、profileにreq.body.profileの値を代入。
const profile = req.body.profile ? req.body.profile : ""
// めちゃ簡単で、便利やね？？？











