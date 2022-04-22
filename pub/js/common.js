$(function(){ 

    // datepicker
    $(".datepicker_day").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c',
		maxDate: "d",
        buttonImage: "./images/ico/ico_datepicker.svg",
        buttonImageOnly: true
    });

    $(".datepicker_start").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c',
        buttonImage: "./images/ico/ico_datepicker.svg",
        buttonImageOnly: true
    });
    $(".datepicker_end").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c',
        buttonImage: "./images/ico/ico_datepicker.svg",
        buttonImageOnly: true
    });
    $('.datepicker_end').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_start").datepicker( "option", "maxDate", selectedDate );
    });
    $('.datepicker_start').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_end").datepicker( "option", "minDate", selectedDate );
    });

    $('.datepicker_month').datepicker({
        displayFormat: 'yy-mm',
        dateFormat: 'yy-mm',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: 'both',
        buttonImage: './images/ico/ico_datepicker.svg',
        buttonImageOnly: true,
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        closeText: '완료',
        onClose: function(dateText, inst) { 
            $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        }
    });
    $('.datepicker_month').focus(function(){
        $('.ui-datepicker-calendar, .ui-datepicker-current').hide();
    });
    
    // 팝업

    let beforeScrollPosition = 0;
    let popupOpenType = false;
    
    // 팝업 뒤 html 스크롤 조정가능여부
    window.addEventListener('scroll', function() {
        const htmlEl = document.getElementsByTagName('html')[0];
      
        if(popupOpenType) {
            htmlEl.scrollTop = beforeScrollPosition;
        } else {
            beforeScrollPosition = htmlEl.scrollTop;
        }
    });

    var modals = document.getElementsByClassName("modal"); // 팝업 div
    var btns = document.getElementsByClassName("modal_btn"); // 팝업 버튼
    var spanes = document.getElementsByClassName("modal_close"); // 팝업창 header닫기버튼
    var spanes2 = document.getElementsByClassName("modal_content_close"); // 팝업창 content닫기버튼
    var modalbg = document.getElementsByClassName("modal_bg"); // 배경
    var funcs = [];

    function Modal(num) {
        return function() {
            
            btns[num].onclick =  function() {
                modals[num].style.display = "block";
                modalbg[num].style.display = "block";
                popupOpenType = true; // html스크롤 조절불가능
            };
    
            spanes[num].onclick = function() {
                modals[num].style.display = "none";
                modalbg[num].style.display = "none";
                popupOpenType = false; // html스크롤 조절가능
            };

            spanes2[num].onclick = function() {
                modals[num].style.display = "none";
                modalbg[num].style.display = "none";
                popupOpenType = false; // html스크롤 조절가능
            };
        };
    }

    // 파일찾기
    $(".filebox_input").on('change', function(){
        var fileName = this.files[0].name;
        $(".filebox_val").val(fileName);
    });

    // 탭
    $('.tab_group > ul li a').on('click', function(e){
        e.preventDefault();
        var on_tab = $(this).attr("rel")

        // 탭 컨텐츠 숨기기
        $(this).parent().siblings().removeClass('on');
        $(this).parent().parent().siblings().children("div").removeClass('on');
        console.log($(this).parent().parent().siblings().children("div"));

        // 클릭이벤트
        $(this).parent().addClass('on');
        $("." + on_tab).addClass('on');

    });

});
