/* Javascriptライブラリコーナー */



// font awesome
// 幅広いアイコンを使うことができる。



// fancy border radius
// このサイトは、border radius をGUI上で変更でき、任意のサークルをつくれます



// スクロール時に、ふわっと出現するライブラリ
// ScrollRevealライブラリの使い方。
// まず、基本の使い方。
// reset: <繰り返しanimationを行うか？>
<script src="https://unpkg.com/scrollreveal"></script>A
<script>
    // 初期値 -> これからクラスに指定するアニメーションの初期値。
    ScrollReveal({ reset: true, distance: 距離, duration: <変化時間ミリ秒> });
    // 実際に指定するクラス
    ScrollReveal().reveal('.クラス名', {delay: <遅延時間ミリ秒>})
</script>
// 左から出現させたいとき
// distance = 距離, origin = 出現させる方向
ScrollReveal({ reset: true, distance: '60px' }); 
ScrollReveal().reveal('.main-title', {delay: 200, origin: "left" })
// 複数のDOM要素を、遅延をかけて出現させたいとき
// interval = 要素ごとに、遅延をかける。
ScrollReveal().reveal('.media-icons i', {delay: 500, origin: 'bottom', interval: 200})



// Javascriptで、アニメーションを実装するための、
// 豊富な機能を備えたライブラリ。
// アニメーション関係なら、これ使えば、なんでもできそうですね。
// 以下のコードは、ポインターの座標に、要素を移動させるアニメーションです。
<!-- gsap cdn を読み込みます。必ず、scriptの上で読み込むようにしてください。-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
    document.addEventListener('mousemove', (e)=>{
        const mouseX = e.clientX // ポインターのX軸を取得
        const mouseY = e.clientY // ポインターのY軸を取得

        // gsap.to = 指定の位置へ要素を移動させます。変化時間に少し遅延がありますが。。
        // stagger = アニメーション開始の遅延を設けます。
        // stagger = 負の値 -> 連なる要素の場合、反対から順に遅延を設けます。
        // stagger = 正の値 -> 連なる要素の場合、頭から順に遅延を設けます。
        gsap.to('.circle', {x: mouseX, y: mouseY, stagger: -0.1})
        // gsap.set = プロパティとその値の指定します。アニメーションの挙動はありませんが、要素のCSS変更ができます。
        // アニメーションの挙動がないっても、translateくらいはしますよ。
        gsap.set('.cursor', {x: mouseX, y: mouseY})
    })
</script>