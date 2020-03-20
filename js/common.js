const activateAnimation = () => {
    // .each()は、.slide-inのclassが着いた要素を全てに処理を行う
    $(".slide-in").each(function() {
        const targetBottomPosition = $(this).offset().top + ($(this).innerHeight() * 0.5);// スライドインさせる要素の真ん中の位置
        const scroll = $(window).scrollTop();// ページトップからのスクロール量
        const windowHeight = $(window).height();// 画面のサイズ
        const showTimingRate = 0.15;// 画面の下から何割の位置にきたら表示するか
        const showOffset = windowHeight * showTimingRate;// 画面の下から何pxの位置にきたら表示するか

        // スクロールがスライドインする高さまで行ったかをチェック
        if ((targetBottomPosition + showOffset) < (scroll + windowHeight)) {
            // スライドインのアニメーションCSSが動くようクラスを追加する
            // 詳細：
            //   --activeが付いてないクラスに設定されるCSSは、要素を非表示にするよう実装されていて
            //   --activeが付いてるクラスに設定されるCSSには、要素を表示したうえで左から塗りつぶしが現れるアニメーションなどが設定されている。
            $(this).addClass("--active");
        }
    });
}
 
// スクロール操作の度に全ての.slide-inの要素が表示位置に来てるか確認するように設定する
$(window).scroll(function(){
    activateAnimation();
});