$(document).ready(function () {

    $('.rightB .tab li').click(function () {
        $('.rightB .tab li').removeClass('on')
        $(this).addClass('on')
    })

    $('.rightB .tab .b_btn').click(function () {
        $('.trading_box').removeClass('on')
        $('.trading_box.buy').addClass('on')
    })

    $('.rightB .tab .s_btn').click(function () {
        $('.trading_box').removeClass('on')
        $('.trading_box.sell').addClass('on')
    })

    $('.rightB .tab .t_btn').click(function () {
        $('.trading_box').removeClass('on')
        $('.trading_box.trade_list').addClass('on')
    })


    $("input[name=price_buy]:radio").click(function () {
        if ($('input[name=price_buy]:checked').val() == "0") {
            $('.trading_box.buy .order_box_wrap').removeClass('on')
            $('.trading_box.buy .order_box_wrap.price').addClass('on')
        } else if ($('input[name=price_buy]:checked').val() == "1") {
            $('.trading_box.buy .order_box_wrap').removeClass('on')
            $('.trading_box.buy .order_box_wrap.price_market').addClass('on')
        }
    });

    $("input[name=price_sell]:radio").click(function () {
        if ($('input[name=price_sell]:checked').val() == "0") {
            $('.trading_box.sell .order_box_wrap').removeClass('on')
            $('.trading_box.sell .order_box_wrap.price').addClass('on')
        } else if ($('input[name=price_sell]:checked').val() == "1") {
            $('.trading_box.sell .order_box_wrap').removeClass('on')
            $('.trading_box.sell .order_box_wrap.price_market').addClass('on')
        }
    });

    $("input[name=conclusion]:radio").click(function () {
        if ($('input[name=conclusion]:checked').val() == "0") {
            $('.trading_box.trade_list .order_box_wrap').removeClass('on')
            $('.trading_box.trade_list .order_box_wrap.un_conclusion').addClass('on')
        } else if ($('input[name=conclusion]:checked').val() == "1") {
            $('.trading_box.trade_list .order_box_wrap').removeClass('on')
            $('.trading_box.trade_list .order_box_wrap.conclusion').addClass('on')
        }
    });

    $('.order_box_wrap input[type=range]').on('input', function () {
        var val = $(this).val();
        $(this).css('background', 'linear-gradient(to right, #0E1766 0%, #0E1766 ' + val + '%, #CDCED0 ' + val + '%, #CDCED0 100%)');
    });

    $('.pay_list input[type=range]').on('input', function () {
        var val = $(this).val();
        $(this).css('background', 'linear-gradient(to right, #fff 0%, #fff ' + val + '%, rgba(8,12,21,0.2) ' + val + '%, rgba(8,12,21,0.2) 100%)');
    });
    
    $('input[type=range]').on('input', function () {
        var val = $(this).val();
        $(this).css('background', 'linear-gradient(to right, #fff 0%, #fff ' + val + '%, rgba(8,12,21,0.2) ' + val + '%, rgba(8,12,21,0.2) 100%)');
    });

    $('.trading_tab a').click(function () {
        $('.trading_tab a').removeClass('on')
        $(this).addClass('on')
    })

    $('.pay_list.btn a').click(function () {
        $('.pay_list.btn a').removeClass('on')
        $(this).addClass('on')
    })

    $('.trading_btn_wrap .trading_btn a').click(function () {
        $('.trading_btn_wrap .trading_btn a').removeClass('on')
        $(this).addClass('on')
    })

    $('.info_tab_box a').click(function () {
        $(this).parents('.info_tab_box').children('a').removeClass('on')
        $(this).addClass('on')
    })

    $('.coinListBox .top .tab li').click(function () {
        $('.coinListBox .top .tab li').removeClass('on')
        $(this).addClass('on')

        
    })

    $('.coinListBox table td .favorites').click(function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
        } else {
            $(this).addClass('on')
        }
    })

    $("input[name=margin]:radio").click(function () {
        if ($('input[name=margin]:checked').val() == "add") {
            $('.input_margin.remove').removeClass('on')
            $('.input_margin.add').addClass('on')
        } else if ($('input[name=margin]:checked').val() == "remove") {
            $('.input_margin.add').removeClass('on')
            $('.input_margin.remove').addClass('on')
        }
    });
        
    $('.modalText .title .send_btn').click(function(){
        $('.modalText .title a').removeClass('on')
        $(this).addClass('on')
        $('.modalCont .exchange_wrap').hide()
        $('.modalCont .send_wrap').show()
    })
    
    $('.modalText .title .exchange_btn').click(function(){
        $('.modalText .title a').removeClass('on')
        $(this).addClass('on')
        $('.modalCont .send_wrap').hide()
        $('.modalCont .exchange_wrap').show()
        
    })
    
    
    $('.info_tab_box .single_btn').click(function(){
        $('.ift_box').hide()
        $('.single_wrap').show()
    })
    
    $('.info_tab_box .dual_btn').click(function(){
        $('.ift_box').hide()
        $('.dual_wrap').show()
    })
    
    $('.info_tab_box .speed_btn').click(function(){
        $('.ift_box').hide()
        $('.speed_wrap').show()
    })
    
    
    $('.trading_btn .limit_btn').click(function(){
        $('.trading_box_wrap').hide()
        $('.limits_wrap').show()
        $('.open_tab a').removeClass('on')
        $('.open_tab .open').addClass('on')
    })
    
    $('.trading_btn .market_btn').click(function(){
        $('.trading_box_wrap').hide()
        $('.market_wrap').show()
        $('.open_tab a').removeClass('on')
        $('.open_tab .clearing').addClass('on')
    })
    
    $('.trading_btn .conditional_btn').click(function(){
        $('.trading_box_wrap').hide()
        $('.conditional_wrap').show()
        $('.open_tab a').removeClass('on')
        $('.open_tab .clearing').addClass('on')
    })
    
    $('.pay_btn_wrap a').click(function(){
        $('.pay_btn_wrap a').removeClass('on')
        $(this).addClass('on')
    })
    
    
    
    
    
    
    //트레이딩 체결현황
    $('.con_btn1').click(function(){
        $('.con_tab2').hide();
        $('.con_tab1').show();
    })
    
    $('.con_btn2').click(function(){
        $('.con_tab1').hide();
        $('.con_tab2').show();
    })
    
    //퍼센트 설정
    $('.order_input.btn a').click(function(){
        $(this).parents('.order_input').children('a').removeClass('on')
        $(this).addClass('on')
    })
    
    //코인검색 toggle
    $('.search_input .toggle').click(function(){
        $(this).toggleClass('on')
        $('.coinListBox').toggleClass('on')
        $('.futures_box').toggleClass('on')
        $('.article .search_input .hide_wrap').toggleClass('on')
        $('.article .snormal_tab').toggleClass('on')
        $('.rticle .small_tab').toggleClass('on')
        $('.futures .search_input').toggleClass('on')
        // 바이낸스
        $('.by_logo_cont .img_desc_cont').toggleClass('on')
    })
    

    $('.main_slide').slick({
        slide: 'div',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        vertical: false,
        arrow: true,
        dotsClass: "slick-dots",
        draggable: true,
        customPaging: function (slider, i) {
            return '<button>' + '<span class="num">' + '0' + (i + 1) + '</span>' + '<span class="bar"></span>' + '<span class="total">' + '0' + slider.slideCount + '</span>' + '</button>';
        }
    });

    $('.slickAutoControll').on('click', function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
            $('.main_slide').slick('slickPlay');
        } else {
            $(this).addClass('on')
            $('.main_slide').slick('slickPause');
        }
    });

});
