// 同期処理とは？
// 同期処理とは、処理が順番に行われるプログラミングモデルです。
// 現在のステップが完了してから次のステップに進みます。

// 非同期処理とは？
// 実行した処理の完了を待たずに次の処理を実行します。

/* -----Javascriptの処理を担う４つのメカニズム----- */
// コールスタック = 呼び出された関数などを管理、追跡する。
// タスクキュー = コールバック関数は、タスクキューで待機する
// WebAPI = ブラウザが提供する機能
// ヒープ = データを格納する場所

// Javascriptは、同期処理なので基本的なコードであれば、
// コールスタックに関数を、登録、実行、削除、という順番になります。
// 下記の、スタックというデータ構造を用いて、
// 関数を、登録、実行、削除、を行なっております。


// データ構造について

// スタック = Last In , First Out
// 最後に保存したデータから取り出し、
// 最初に保存したデータは、最後に取り出されるデータ構造

// キュー = First In , First Out
// 一番初めに保存したデータを、一番最初に取り出すデータ構造


// API とは？
// API のイメージは、コンセントです。

// WebAPI の例
// setTimeout関数 , setInterval関数
// これらは、ブラウザが提供するTimerAPIという外部APIを利用しています。
// Javascriptでは、このWebAPIに処理を任せるのでシングルスレッドにも、
// かかわらず、非同期処理を実現できます。
console.log('start')
setTimeout(()=>{console.log('webAPI')},0)
console.log('end')
// >> start
// >> end
// >> webAPI
// 上記の処理から分かる通り、たとえ、setTimeout関数が0秒で設定していても、
// webAPIの性質上、タスクキューを介して、コールスタックに登録されるので、
// 処理の優先順位が下がるのです。

/* ------------------------------------------- */

// 非同期処理を、丁寧に解説してみた。

// then = 非同期処理成功時のコールバック, returnされた値を運用できる。
//      普通の関数に対して使うthenは、Promiseオブジェクトの返り値が必要
//      非同期関数(async/await)に対しては、返り値なしでも、動作はする。
// catch = 非同期処理失敗時のコールバック
// fetch = httpリクエストを送るメソッド。=> 非同期処理をするAPI

const url01 = 'https://api.github.com/search/repositories?q=test1'
const url02 = 'https://api.github.com/search/repositories?q=test2'
const url03 = 'https://api.github.com/search/repositories?q=test3'

// fetchメソッドは、Promiseを返す。
const result01 = fetch(url01)
console.log(result) // >> Promise {<pending>}

// 第２引数に、Httpメソッドや、リクエストボディを設定できる。
fetch('api/v1/users', {
    method: 'POST',
    body: JSON.stringify({
    name: 'Whopper',
    age: 24
    })
})

// thenの特性を使った、thenチェイン
const result02 = fetch(url01)
result02
    .then(()=> fetch(url02))
    .then(()=> fetch(url02))
    .then(()=> fetch(url02))
    .then(()=> fetch(url02)) // しっかり、順番に動作しています。

// thenに引数を設定して、Promiseを開封して、Response本体を取得できる。
const result03 = fetch(url01)
result03.then( res => console.log(res)) // >> Response {type: 'cors'...}

// 異なる非同期処理を、１つに集合させる。
const result1 = fetch(url01)
const result2 = fetch(url02)
const result3 = Promise.all([result1,result2])
result3.then()

// 基本的なPromiseを外部に運用する方法。
const wantReturnValue = ()=>{
    return fetch('https://api.github.com/search/repositories?q=test1')
}
wantReturnValue().then(res => console.log(res))

// setTimeoutで、非同期処理の結果を待つこともできる。
function dealing02(){
    return fetch('https://api.github.com/search/repositories?q=test1')
}
let cont02
dealing02().then(res => {cont02 = res})
setTimeout(()=>{
    console.log(cont02)
},3000)

// Promiseコンストラクタを使うと、
// 例え、.thenで、responseをreturnしたとしても、
// 関数に返される値は、Promiseオブジェクトになる。
const wantReturnValue01 = ()=>{
    return new Promise((resolve,reject)=>{
        return resolve('ここにいられることに感謝しよう')
    }) 
}
wantReturnValue01()
    .then(res => {return res})
    .then(res => {return res})
    .then(res => console.log(res)) // >> ここにいられることに感謝しよう
    .then(_ => console.log(wantReturnValue01())) // >> Promise {<fulfilled>: 'ここにいられることに感謝しよう'}

// async/awaitの使い方。
// async/awaitを使えば、Promiseより、すっきりかける。

// asyncキーワード
// 関数を非同期関数にするキーワード
// 返り値が暗黙的にPromiseになる。

// awaitキーワード
// async関数の中でしか使えない。
// Promiseオブジェクトの前につける。
// Promiseが、resolveを返すまで処理を中断できるので、
// コードを同期的に書くことができる。

// awaitをつけることで、.thenを使うことなく、Response本体を取得できる。
async function f_run(){
    const result = fetch('https://api.github.com/search/repositories?q=test1')
    console.log(result) // >> Promise {<pending>}
    console.log(await result) // >> Response {type: 'cors'...}
}

// async/await を外部に運用することも可能です。
// async/await をreturn すると、関数に返される値は、Promiseオブジェクト
async function dealing(){
    return await fetch(url01)
}
dealing().then(_ => console.log(dealing())) // >> Promise {<pending>}

// async/awaitの場合でも、returnがないと、thenで運用はできません。
async function dealing(){
    const cont01 = await fetch(url01)
}
dealing().then(res => console.log(res)) // >> undefined

/* ------------------------------------------- */

// fetchメソッドで非同期処理をしてみよう。

const learn_api = ()=>{
    fetch('https://api.github.com/users/deatiger')
        .then(res => res.json())
        .then(json => {
            console.log('非同期処理、完了')
            return json.login // learn_api に値を返します。
        }).catch(error => {
            console.log('非同期処理、失敗')
        })
}
// 非同期処理を実行
learn_api() 
// 非同期処理の中で、returnされた値を表示させますが、
// 非同期処理はタスクキューを介しますので、コールスタックに間に合わず、
// undefined となります。
console.log(learn_api()) 
// 関数自体を渡しても、returnされた値は取得できません。
console.log(learn_api)

/* ------------------------------------------- */


/* ------------------------------------------- */

// Promiseについて
// 非同期処理を、制御、コントロールしたい時に、使います。

// promiseの状態
// pending: 初期状態
// fulfilled: 処理が成功して完了した状態
// rejected: 処理が失敗して完了した状態

// コンストラクタ
const promise = new Promise()

// Promiseの使い方。
// Promiseのコンストラクタの引数に指定した、resolveと、reject、が、
// returnされるまで、次の処理(.then, .catch)に進まないという仕組みで、
// 非同期処理を制御します。
const learn_api01 = ()=>{
    return new Promise((resolve,reject)=>{
        fetch('https://api.github.com/users/deatiger')
            .then(res => res.json())
            .then(json => {
                console.log('非同期処理、完了')
                return resolve(json.login)
            }).catch(error =>{
                console.log('非同期処理、失敗')
                return reject(null)
            })
    })
}
learn_api01().then((any)=>{console.log(any)})

/* ------------------------------------------- */

// async/awaitの使い方

// Promiseより、async/awaitの方が、
// 記述がシンプルで、直感的で分かりやすいのでおすすめです。

// 基本的な書き方
const learn_api03 = async()=>{
    const f_json = await fetch('https://api.github.com/users/deatiger')
        .then(res => res.json())
        .then(json => {
            console.log('非同期処理、成功')
            return json.login // f_json に、値がreturnされます。
        }).catch(error => {
            console.log('非同期処理、失敗')
        })
        console.log(f_json) // f_json にreturnした値を出力
}
learn_api03()

// 省略した書き方
const learn_api04 = async()=>{
    const func_json = await fetch('https://api.github.com/users/deatiger')
        .then(res => {
            console.log('非同期処理、成功')
            return res.json() // jsonに変換したオブジェクトをreturn
        }).catch(error => {
            console.log('非同期処理、失敗')
        })
        console.log(func_json.login) // returnされた値を、出力
}
learn_api04()

// async/awaitでは、関数外で、引数として受け取る方法がわからない。
const learn_api05 = async()=>{
    const json = await fetch('https://api.github.com/users/deatiger')
        then() // 以下省略...
}
learn_api05().then((args)=> console.log(args))