$(function(){
    //chrome用の分岐処理
    var _ua = (function(){
     return {
        Blink:window.chrome
     }
    })();
     
    if(_ua.Blink){
        //chromeの文字サイズ対策
        document.body.style.webkitTransform = "scale(1)";
    }
});


//スライドショー
$(function() {
    /* スライドバナー */
    var slider = $('#gallery .slideFrame ul');
    var img = $('#gallery .slideFrame li');
    var imgW = img.width();
    var imgM = parseInt(img.css('margin-right'));
    var sliderWidth = (imgW + imgM) * img.length;
    var imgID = 1;
    slider.css('width', sliderWidth);
    //console.log(sliderWidth);
    
    $('#gallery .nav li:not(.cur), #gallery p').click(function() {
        if ($(this).is('.prev')) {
            if (imgID <= 1) {
                imgID = img.length;
            } else {
                imgID = imgID - 1;
            }
        } else if ($(this).is('.next')) {
            if (imgID >= img.length) {
                imgID = 1;
            } else {
                imgID = imgID + 1;
            }
        } else if ($(this).is('li')) {
            imgID = $(this).index() + 1;
        }
        //console.log(imgID);
        slider.animate({ left: -(imgW + imgM) * (imgID - 1) + 70 }, 1000);
        $('#gallery .nav li').removeClass('cur').eq(imgID - 1).addClass('cur');
        return false;
    });
});


//アコーディオン
$(function(){
    $('.list').hide();
    $('.ac').click(function() {
        if($(this).next('.list').is(':visible')) {
            $(this).next('.list').slideUp(300);
        } else {
         $(this).next('.list').slideDown(300).siblings('.list').slideUp(300);
        }
    });
});


//hover
$(function(){
    $('a img.toggle').not('[src*="'+ '_h' +'."]').each(function() {
        var src = $(this).attr('src');
                var src_on = src.substr(0, src.lastIndexOf('.'))
         + '_h'
         + src.substr(src.lastIndexOf('.'));
        $(this).hover(
            function() {
                $(this).attr('src', src_on);
            },
            function() {
                $(this).attr('src', src);
            }
        );
    });
});





