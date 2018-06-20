$(document).ready(function(){
    $("input").click(function()
    {
        //alert("Hi");
        //$("H1").text($("li:first").text());
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());
    });
});