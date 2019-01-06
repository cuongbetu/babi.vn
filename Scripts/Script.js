$(function () {
    $("#contact .address").hide();
    $("#contact .system").click(function () {
        $("#contact .address").toggle();
    });
    $(".bar1").click(function () {
        $("#menu .menu1").toggle();
    });
    $("header .account ").click(function () {
        $("header .account .account-form").toggle();
    });
    $(".account .account-form .signin").click(function() {
        $(".account-signin").show();
    });
    $(".account-signin .close-form").click(function() {
        $(".account-signin").hide();
    });
});