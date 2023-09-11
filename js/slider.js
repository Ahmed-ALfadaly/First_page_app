var $links = $(".itemLinks");

$links.click(function(e){
    var clickedLink= e.target;
    clickedLink=$(clickedLink);
    var position = clickedLink.attr("data-pos");
    var translatevalue = "translate3d("+ position * 25 +"%, 0px, 0px)";
    $("#wrapper").css({
        transform:translatevalue
    });
    clickedLink.addClass("active");
});
$($links[0]).addClass("active");