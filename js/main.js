$( document ).ready(function() {

    // SELECT

    $(".custom-select").each(function() {
        var classes = $(this).attr("class"),
            id      = $(this).attr("id"),
            name    = $(this).attr("name");
        var template =  '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
            template += '<div class="custom-options">';
            $(this).find("option").each(function() {
              template += '<span class="custom-option' + '"data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
            });
        template += '</div></div>';
        
        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });

    $(".custom-option:first-of-type").hover(function() {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
        $(this).parents(".custom-options").removeClass("option-hover");
    });

    $(".custom-select-trigger").on("click", function(event) {
        $('html').one('click',function() {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });

    $(".custom-option").on("click", function() {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });

    // HIDE AND SHOW FRAMES

    $(".title-frame").on("click", function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle(150).css('display', 'flex');
    });

    // SHOW QUESTIONS

    $('.tooltips').append("<span></span>");
    $('.tooltips:not([tooltip-position])').attr('tooltip-position','bottom');


    $(".tooltips").mouseenter(function(){
        $(this).find('span').empty().append($(this).attr('tooltip'));
    });

    // MAIN BUTTONS

    $('.btn-main').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.btn-main').removeClass("bm-active");
        $(this).addClass("bm-active");

        if($('.standart-button').hasClass('bm-active')) {
            $(".standart-block, .empty-block").css('display', 'block');
            $('.advanced-block, .empty-block-advanced').css('display', 'none');
        }

        else if(($('.advanced-button').hasClass('bm-active'))) {
            $(".standart-block, .empty-block").css('display', 'none');     
            $('.advanced-block, .empty-block-advanced').css('display', 'block');
        }
    });

    // SCROLL TO CONTACT

    $(".scroll-contact").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });


    $('.btn-calculate').on('click', function (event) {
        event.stopPropagation();
        event.preventDefault();

        $('.loader').css('display', 'flex');
        setTimeout(function() { 
            $('.loader').css('display', 'none');
        }, 2000);

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#result-section").offset().top
        }, 2000);


        /*
        if( $('.advanced-block').css('display') == "block") {
            $(".advanced-block .input-value-frame").prop('required', true); 
            $(".standart-input").prop('required', false); 
        }
        else if ($('.advanced-block').css('display') == "none") {
            $(".advanced-block .input-value-frame").prop('required', false); 
            $(".standart-input").prop('required', true); 
            
        }
        var value = $('.input-value-frame').filter(function () {
           return this.value === '';
         });
         if (value.length == 0) {
            $('.loader').css('display', 'flex');
            setTimeout(function() { 
                $('.loader').css('display', 'none');
            }, 2000);
         } 
         else if (value.length > 0) {
            $('.loader').css('display', 'none');
         }*/
       });



});









