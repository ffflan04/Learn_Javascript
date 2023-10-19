// JavaScriptメソッドの応用コード


// 配列の中身をDOM要素として全て出力
// Array配列の中身を、liタグとして、ulタグ内に、全て挿入する。
Array = ['りんご', 'メリー', '今だけは', '涙が']
Array.forEach((merry)=>{
    const list = document.createElement('li') // <li></li> 宣言+初期化
    list.innerText = merry // list変数のプロパティに全ての、配列データをセット。
    document.getElementById('ul').appendChild(list) // ulタグに挿入。
})































