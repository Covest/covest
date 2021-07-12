$(document).ready(function () {


    //회원가입 버튼 클릭 시 검사    
    var u_name = $('#first_name');
    var u_email3 = $('#email');
    var u_password = $('#password');
    var u_password_ck = $('#password_check');
    var u_phone = $('#phone');
    var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var reg_password = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    var reg_phone = /^\d{3}\d{3,4}\d{4}$/;
    
    
    //회원가입 - 이메일
    $('.account_submit').click(function(){
        if(!u_email3.val()){
            $('.email_miss').text("이메일을 입력해주세요.");
            return false;
        }else if(!regEmail.test(u_email3.val())){
            $('.email_miss').text("이메일 형식에 어긋납니다.");
            return false;
        }else{
            $('.email_miss').text("");
        }
    });
    
    // 회원가입 - 비밀번호
    $('.account_submit').click(function(){
        if(!u_password.val() && !u_password.val()){
            $('.password_success').text("")
            $('.password_miss').text("비밀번호를 입력해주세요.");
            $('.password_ck_miss').text("비밀번호를 입력해주세요.");
            return false;
        }else if(!reg_password.test(u_password.val())){
            $('.password_success').text("")
            // $('.password_miss').text("특수문자, 문자, 숫자를 포함 형태의 8~15자 이내로 입력해 주세요.");
            return false;
        }else{
            $('.password_miss').text("")
            //$('.password_success').text("사용가능한 비밀번호입니다.")
        }
    });
    
    $('.account_submit').click(function(){
        if(u_password.val() != u_password_ck.val()){
            $('.password_ck_miss').text("비밀번호가 일치하지 않습니다.");
            $('.miss_modal').addClass('on');
            return false;
        }else if(!u_password_ck.val()){
            $('.password_ck_tit').addClass('on');
        }else{
            $('.password_ck_miss').text("");
        }
    });
    
    // 회원가입 - 핸드폰 
    $('.account_submit').click(function(){
        if(!u_phone.val()){
            $('.phone_miss').text("번호를 입력해주세요.");
            $('.miss_modal').addClass('on');
            return false;
        }else if(!reg_phone.test(u_phone.val())){
            $('.phone_miss').text("잘못된 형식입니다.");
            return false;
        }else{
            $('.phone_miss').text("");
        }
    });

    
    // 블러시 검사 : 이메일

    var u_email = $('.input_id');
    var u_pw = $('.input_pw');

    $('.input_id').blur(function(){
        
        var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        if( !u_email.val() ){
            $('.email_miss').text("이메일을 입력해주세요.");
            return false;
            
        } else {
            if(!regEmail.test(u_email.val())) {
                $('.email_miss').text("이메일 주소가 유효하지 않습니다.");
                return false;
            }
        }
        if(u_email.val()){
            $('.email_miss').text("");
        }
    });
    
    // 블러시 검사 : 핸드폰

    var u_phone = $('.input_phone');

    $('.input_phone').blur(function(){
        
        var reg_phone = /^\d{3}\d{3,4}\d{4}$/;

        if( !u_phone.val() ){
            $('.phone_miss').text("번호를 입력해주세요.");
            return false;
            
        } else {
            if(!reg_phone.test(u_phone.val())) {
                $('.phone_miss').text("번호 형식이 유효하지 않습니다.");
                return false;
            }
        }
        if(u_phone.val()){
            $('.phone_miss').text("");
        }
    });


    //로그인 버튼 클릭 시 검사
    $('.login_submit').click(function(){
        if(!u_email.val()){
            $('.email_miss').text("이메일을 입력해주세요.");
            return false;
        }else {
            if(!regEmail.test(u_email.val())) {
                $('.email_miss').text("이메일 형식에 어긋납니다.");
                return false;
            }
        }
    });
    
    $('.login_submit').click(function(){
        if(!u_pw.val() ){
            $('.password_miss').text("비밀번호를 입력해주세요.");
            return false;            
        }else{
            $('.password_miss').text("");
        }
    });



    // 로그인 - 핸드폰 
    $('.login_submit').click(function(){
        if(!u_phone.val()){
            $('.phone_miss').text("번호를 입력해주세요.");
            $('.miss_modal').addClass('on');
            return false;
        }else if(!reg_phone.test(u_phone.val())){
            $('.phone_miss').text("번호 형식이 유효하지 않습니다.");
            return false;
        }else{
            $('.phone_miss').text("");
        }
    });
    


    // 비밀번호 & 비밀번호 일치 코드 

    var u_re_password = $('#password');
    var u_re_password_ck = $('#password_check');

    $('#password_check').blur(function(){
        if ( u_re_password.val() != '' && u_re_password_ck.val() == '' ) {
            null;
        } else if (u_re_password.val() != "" || u_re_password_ck.val() != "") {
            if (u_re_password.val() == u_re_password_ck.val()) {
                // 비밀번호 일치 이벤트 실행
                $('.password_ck_success').text("비밀번호가 동일합니다.");
                $('.password_ck_miss').text("");
            } else {
                // 비밀번호 불일치 이벤트 실행
                $('.password_ck_miss').text("비밀번호가 다릅니다.");
                $('.password_ck_success').text("");
            }
        }
    });
    
    

    
    
    

});

