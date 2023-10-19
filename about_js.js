// Javascriptとかいう最強の汎用性を持つ言語をマスターしよう。

// Javascriptで何ができるか？
// Webページの制御 フロントエンド？
// Webサイトの制御 バックエンド? (Node.js)
// デスクトップ/スマホアプリの開発

// Javascript採用例
// Bootstrap HTMLフレームワーク
// Googleマップ Webサービス(フロントエンド)
// Netflix, Paypal Webサービス(Node.js)

// Javascriptの特徴
// 主要なWebブラウザに搭載のスクリプト言語
// Node.jsの登場で、サーバサイドでも利用が広がる。

// Javascriptコーディングルール
// DOM要素を格納する変数は"$"を先頭につける。
// Javascriptで動かすDOMには、できるだけid属性をつけて、
// 名前は、'js-'、で始めるようにする。

// Javascriptの保守性を高めるには、
// ファイルをできるだけ分割する = カプセル化
// 機能ごとにファイルを分割
// ファイル内のコードを即時関数でラップ
// カプセル化のメリット
//    スコープを限定できる
//    擬似的なオブジェクト指向開発
<return>
    <script src="./cont1.js"></script>
    <script> console.log(addition) </script>
// 上記のように、他Javascriptファイルの実行結果を、運用できる。

    <script src="./cont1.js"></script>
    <script>
        addition.func_1()
        addition.func_2()
    </script>
// 上記のように、returnされた関数を運用することができる。
</return>