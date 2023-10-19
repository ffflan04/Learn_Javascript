// 関数について

// 普通の関数
function hoge(){}

// 無名関数
function(){}

// アロー関数 // アロー関数はthisを持たない？？
()=>{}

// 即時関数 => 関数を定義すると同時に実行するための構文
(function(arg1,arg2){ここに処理}(1,2))
// ソースコードをファイルで分割し、即時関数でラップすることで、
// オブジェクト指向のような、形にすることができる。
const blessing = (()=>{
    const func1 = ()=>{
        console.log('誰かが描いたイメージじゃなくて')
    }
    const func2 = ()=>{
        console.log('誰かが選んだステージじゃなくて')
    }
    return {func1,func2} // 即時関数で、関数を返すことができる。
})()

// 無名関数は関数名がないので、
// このように変数に代入することで、アクセスできるようにします。
const yourname = function(){
    console.log('君の名は')
}
yourname() // 無名関数をyournameという名前でアクセスできるようにした。

// 関数を変数に代入することもできます。
var morning = function breakfast(){
    console.log('朝ごはんはパンです')
}
morning()

// 引数を持つ関数でも、問題なく代入できます。
let addition = function add(x,y){
    return x + y
}
console.log(addition(1,2)) // 処理結果 -> 3


// setIntervalとは?
setInterval(関数, ミリ秒) // これがデフォルトの書き方。
setInterval(timeCount, 1000);
// setIntervalとは、JavaScriptに標準で搭載されている機能で、
// 「ミリ秒」ごとに「関数」を、自動で発火してくれます。
// 第二引数には、何ミリ秒ごとに発火させたいかの数字を、第一引数には発火させたい関数を入れることがルールとして決まっています。
// 関数に引数を持たせたい場合は、引数を持った関数を、別の関数で囲ってあげることでできます。
// clearInterval関数で、タイマーをとめることができます。


// setTimeout関数とは？
// setTimeoutは、指定した時間後に一度だけ動作するもの
// setTimeout(関数, numミリ秒)
var fn = function() {
console.log("10秒経過しました");
};

setTimeout(fn,1000);
// clearTimeout関数を使って、タイマーを停止できます。
// clearTimeoutには、setTimeoutの返り値が必要です。
clearTimeout(id);


// ランダムな数値を返すランダム関数。
// ２つの値の間の乱数を得る。
// この例は指定した値の間の乱数を返します。返値は min 以上、 max 未満です。
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// 1~100までのランダムな数値を返す、即席セット
let num = Math.random() * 100 
// 小数点以下を切り捨てるMath.floorメソッド
piano_play_num = Math.random() * (max - min) + min
piano_play_num = Math.floor(piano_play_num)


// JSONデータをオブジェクトに変換する、JSON.parseメソッド
var json = '{"taro":[30,"Tokyo"],"bob":[33,"Nagoya"]}'
var obj = JSON.parse(json);


// オブジェクトを、配列化するメソッド
const j_dict = {mat:'土',bob:'普通',mike:'陽キャ'}
Object.keys(j_dict) // [ 'mat', 'bob', 'mike' ]
Object.values(j_dict) // [ '土', '普通', '陽キャ' ]



// スプレッド演算子（Spread Operator）とは？
// {...travel} はスプレッド演算子（Spread Operator）を使用して、
// 既存のオブジェクト travel のプロパティを新しいオブジェクトにコピーします。
travel = {...travel}; 



// ビルトインメソッドとは？
// JavaScriptにはtoString以外にも、オブジェクトに自動的に実装されるメソッドがあります。
// これらのオブジェクトに組み込まれたメソッドをビルトインメソッドと呼びます。
const obj = {};
console.log(obj.toString()); // "[object Object]"
// console.logで、文字列と出力すると、デコードされて出力されるのは、
// ビルトインメソッドのお陰なのです。
req.on('data',(data)=>{
    console.log('ASCII文字に変換' + data)
})



// Shift JISエンコーディングとは？
// Shift JISエンコードの文字列をUTF-8に変換し、それを日本語のテキストに変換します。
// Chat-GPTに教えてもらったけど、
// ちゃんと動作しなかった。
// まぁ、そういうのもあるんだよ的な、感じで覚えて。
let j_Text = new TextEncoder('utf-8').encode(ASCII.message)
let text = new TextDecoder('shift-jis').decode(j_Text)



// Bufferクラスとは？
// Node.js内でバイナリデータを扱うためのBufferクラス 
Buffer.from('今日は晴天なり') // <Buffer e4 bb 8a e6 97 a5 e3 81 af e6 99 b4 e5 a4 a9 e3 81 aa e3 82 8a>
Buffer.isBuffer(encoded) // >> true
binary.toString() // バイナリデータをテキストデータに変換します。