/* --------------------------------------------------------------- */
// json の使い方

// 書き方は、ほとんどJavascriptのオブジェクトと似たようなものです。
// 基本的には、JSONデータは、
// data.json のように、拡張子をjson として、
// 別ファイルで保存します。
// jsonファイルには、json記述のデータ以外は、何も書きません。

// HTMLで読み込む場合は、下記のように、
// 外部ファイルを読み込む時と同様の記述です。
<script type="module">
    import data from "./data.json" assert {type: "json"}
</script>
// JSONは、PHPやJAVAなどの言語でも利用される。
// MYsqlなどと違って、エディタで直接編集できるデータ形式なので、好んで使われる。


// jsonはそのままだとプロパティにアクセスできない。
// jsonはバッククォート + 波括弧で囲んでオブジェクト(辞書)のように扱います。
const json01 = `{"id": "0001", "name": "AAA", "age": 20}`
// json.id ではプロパティにアクセスできないことが、オブジェクト(辞書)との違いですかね。
console.log(json.id)

// JSONデータを、Javascriptオブジェクトに変換 = JSON.parse()
const json02 = `{"id": "0001", "name": "AAA", "age": 20}`
const parsed = JSON.parse(json02)
console.log(parsed) // >> {"id": "0001", "name": "AAA", "age": 20}
console.log(parsed.id) // >> 0001
console.log(parsed.name) // >> AAA

// javascriptオブジェクトをJSONに変換する = JSON.stringify()
const data = {id: "0001", name: "AAA", age: 20}
const jsonData = JSON.stringify(data)

/* --------------------------------------------------------------- */

// jsonとは？
// JSON/XML/CSV などのデータ形式の一種
// データ形式 = データを扱うルールのこと

// どういう時に使うの？
// システム間のデータのやりとり
// ECサイト => Httpリクエスト
// Httpレスポンス <= クレジットカード会社

// CSV形式の書き方
// カンマ区切りで書きます。
id, 店舗名
1,吉野家
2,スシロー

// JSON形式の書き方
// 波括弧記号の中に、keyと値をセットで書く。
[
    {"id" : "1", "店舗名" : "吉野家"},
    {"id" : "2", "店舗名" : "スシロー"}
]
