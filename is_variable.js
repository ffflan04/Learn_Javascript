// 変数について
// Javascriptは動的に型宣言を行います。

// 変数を宣言する 
var hoge01
// 変数を初期化する -> 変数に最初の値を代入すること
var hoge01 = 'この処理は、変数の宣言 + 初期化'

// varの巻き上げ
// varによる変数の宣言は、必ず最初に行われるので、
// 処理の後に変数を宣言しても、エラーにはならない。
document.write(value) // 宣言はされても、初期化はされてないので、実行結果は、undefind
var value = 10; 

// var と、let の違い
// var -> 関数スコープ(ローカルスコープ)
// var は、関数内で宣言した場合、関数内でのみのアクセスになる。

// let は、ブロックスコープ -> {}
// let は、for,if などの{} の中で、宣言した場合、{} 内でのみのアクセスになる。
// let は、宣言を巻き上げることができません。

// constは、再代入不可、初期化必要
// constは、ブロックスコープ

// グローバルスコープとは？
// val, let を使わずに、宣言+初期化された変数
// 全てのスコープからアクセス可能
// しかし、変数の内容が意図せず変更されてしまう点で、
// 実際の使用は避けた方がいいです。

// これらの点を踏まえて、
// varではなくletやconstを使う理由
// constを使う理由
// 可読性を上げて、バグを未然に防ぐため
// 積極的に、let , const を使うようにしましょう。








