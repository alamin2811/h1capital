(function ($) {
    /*-- after-login-user-btn --*/
<<<<<<< HEAD
    $('.after-login-user-btn button').on('click', function() {
        $('.after-login-user-menu').toggleClass('active');
    });
    $('.after-login-user-menu ul li').on('click', function() {
        $('.after-login-user-menu').removeClass('active');
    });

    $(document).click(function() {
        var loginMenu = $("#loginMenuBtn");
        if (!loginMenu.is(event.target) && !loginMenu.has(event.target).length) {
            $('.after-login-user-menu').removeClass('active');
        }
    });
=======
    // $('.after-login-user-btn button').on('click', function() {
    //     $('.after-login-user-menu').fadeToggle();
    // });
    // $('.after-login-user-menu ul li').on('click', function() {
    //     $('.after-login-user-menu').fadeOut();
    // });

    // $(document).click(function () {
    //     var loginMenu = $("#loginMenuBtn");
    //     if (!loginMenu.is(event.target) && !loginMenu.has(event.target).length) {
    //         $('.after-login-user-menu').fadeOut();
    //     }
    // });
>>>>>>> 65a8c37e1527210cdd8502178fe4914951262a9b

    /*-- kyc nid paspost driving licence js --*/
    $('.KycRadioBtn .container').click(function () {
        $('.KycRadioBtn').each(function (a) {
            $(this).addClass('active')
        });
    });
    $('.NidBtn .container').click(function () {
        $('.PASSPORTBtn').each(function (a) {
            $(this).removeClass('active')
        });
    });
    $('.NidBtn .container').click(function () {
        $('.DrivinglicnseBtn').each(function (a) {
            $(this).removeClass('active')
        });
    });
    $('.PASSPORTBtn .container').click(function () {
        $('.NidBtn').each(function (a) {
            $(this).removeClass('active')
        });
    });
    $('.PASSPORTBtn .container').click(function () {
        $('.DrivinglicnseBtn').each(function (a) {
            $(this).removeClass('active')
        });
    });
    $('.DrivinglicnseBtn .container').click(function () {
        $('.NidBtn').each(function (a) {
            $(this).removeClass('active')
        });
    });
    $('.DrivinglicnseBtn .container').click(function () {
        $('.PASSPORTBtn').each(function (a) {
            $(this).removeClass('active')
        });
    });

    /*-- kycCountryDropbox --*/
    $(".kycCountryDropbox").click(function () {
        $(".kycCountryDropList").toggle();
    });

    /*-- kyc Staps --*/
    $("#goStep2").click(function () {
        $(".kyc-stap1").hide();
        $(".kyc-stap2").show();
        $(".kyc-stap3").hide();
    });
    $("#goStep3").click(function () {
        $(".kyc-stap1").hide();
        $(".kyc-stap2").hide();
        $(".kyc-stap3").show();
    });
    $("#kycSubmitBtn").click(function () {
        $(".kyc-stap1").show();
        $(".kyc-stap2").hide();
        $(".kyc-stap3").hide();
    });

    /*-- vote-menu-tablinks Js --*/
    $('.vote-menu-tablinks-btn').on('click', function () {
        $('.vote-menu-tablinks').toggleClass('active');
        $('.vote-menu-tablinks-btn').toggleClass('active');
    });

    /*-- vote js --*/
    $('.vote-btn').on('click', function () {
        $('.vote-content').hide();
        $('.vote-option-section').show();
    });
    $('.vote-back-btn').on('click', function () {
        $('.vote-option-section').hide();
        $('.vote-content').show();
    });
    $('.vote-option-radio').on('click', function () {
        $('.vote-submit-btn').show();
    });

    /*-- Phone Zip code  --*/
    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
        autoHideDialCode: true,
        utilsScript: "assets/js/utils.js",
    });




})(jQuery);
