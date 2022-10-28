$( document ).ready(function() {
    $(".burger-menu ").on("click",".bar",function(){
        $(".right-header").toggleClass('active');
        $(".bar").toggleClass('change');
    });
});