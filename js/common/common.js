$(document).ready(function () {

    $('#header .nav > ul > li').mouseenter(function () {
        $(this).children('.dept2').addClass('on')
    })

    $('#header .nav > ul > li').mouseleave(function () {
        $(this).children('.dept2').removeClass('on')
    })

    //회원가입 로그인 메뉴 탭
    $('.tab_list li a').click(function () {
        $('.tab_list li a').removeClass('on')
        $(this).addClass('on')
    })

    //p2p 일자 선택 
    $('.month_sec li a').click(function () {
        $('.month_sec li a').removeClass('on')
        $(this).addClass('on')
    })

    $(".selectmenu").selectmenu();

    // 입출금 토글 
    $('.toggle_btn').click( function() {
        if( $(this).html() == '정보 열기' ) {
            $(this).html('정보 닫기');
            $(this).addClass('on');
            $(this).parents("div").next().addClass('on');
        }
        else {
            $(this).html('정보 열기');
            $(this).removeClass('on');
            $(this).parents("div").next().removeClass('on');
        }
    });

    // 마켓동향 토글 
    $('.news_wrap .time_desc').click( function() { 
        $(this).children('.new_desc').toggle();
        $(this).children('.arrow_icon').toggleClass('on');
    });

})
