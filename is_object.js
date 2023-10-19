// オブジェクト
// 辞書みたいな感じ
const unko2 = {
    color: 'pink', // キー, 値 で１組になる、これを、
    size: 'large', // プロパティと呼ぶ。
    purfume: 'mint',
    goToile: () => {console.log('トイレ行く')} // プロパティに関数を持てます。
};
console.log(unko2.color, unko2.size); // .プロパティ名(キー)で、値を取り出せます。

// デフォルトで設定されているオブジェクトがあります。
// その１：window -> webブラウザ全体のオブジェクト
console.log(window) // こいつはめちゃめちゃプロパティを持っています。
console.log(window.innerHeight) // ディスプレイの高さを取得できます。ex) 783
console.log(window.innerWidth) // 画面の幅によって、処理を変えることなどができます。

window.alert('Hello World'); // window.alert -> ポップアップを呼んでくる関数

// その２：document -> 表示しているページ全体のオブジェクト
// document は、たくさん関数を持っています。
// 表示されているこのページ自体に、アクションを起こしたい時、
// このページの、ボタンとか、タグとかに、アクションを加えられる。
console.log(document)
document.getElementsByTagName('button') // getElementsByTagName -> HTMLのタグを取得、参照できる。

// その３：event -> ユーザーがアクションをしたタイミングで何かをしたいときに使う。
// ボタンをクリックした時、ユーザーがスクロールした時、にアクションを起こすことができる。
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
    console.log('一つ目のボタンが押された')
})
document.getElementsByTagName('button')[1].addEventListener('click', ()=> {
    window.alert('二つ目のボタンが押されたよ')
})
// addEventListener -> 第一引数、eventのタイプ, 第二引数、関数