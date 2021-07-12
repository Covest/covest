$(document).ready(function () {
    $('.search_select_wrap').click(function(){
        $('.drop_list_wrap').toggleClass('on')
    });

    $('.input_result_wrap .search_icon ').click(function () {
        $('.drop_list_wrap').toggleClass('on')
    })

    $('.prog_bar').click(function () {
        $('.range_text').toggleClass('on')
    })

    $('.info_tab_filter .filter_btn').click(function () {
        $('.table_sroll_box .red_cont').show()
        $('.table_sroll_box .green_cont').show()
        $('.table_sroll_box .green_cont_title').hide()
    })

    $('.info_tab_filter .filter_btn.green_btn').click(function () {
        $('.table_sroll_box .red_cont').hide()
        $('.table_sroll_box .green_cont').show()
        $('.table_sroll_box .green_cont_title').show()
    })
    $('.info_tab_filter .filter_btn.red_btn').click(function () {
        $('.table_sroll_box .green_cont').hide()
        $('.table_sroll_box .red_cont').show()
    })

    $('.position_box table .price_input.focus_input').focus(function () {
        $('.position_box table .percent_box .prcent_area').show()
    })

});