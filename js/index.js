$(document).ready(function(){
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active")
        $(this).addClass("active")
    });
   
    $("#toggler").click(function(event){
        $("#wrap").toggleClass("toggled")
    });
    $(".search-icon").click(function(){
        $(".search-log").toggleClass("search-toggled")
    });
});