
$(document).ready(function(){/* off-canvas sidebar toggle */

$('[data-toggle=offcanvas]').click(function() {
  	$(this).toggleClass('visible-xs text-center');
    $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
    $('.row-offcanvas').toggleClass('active');
    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
    $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
    $('#btnShow').toggle();
});



});


document.getElementById("second-col-id").addEventListener("scroll", function (event) {
     var newDiv = document.createElement("div");
        newDiv.innerHTML = "my awesome new div";
        document.getElementById("second-col-id").appendChild(newDiv);
});


var checkForNewDiv = function () {
    var lastDiv = document.querySelector(".second-col-id > div:last-child");
    var maindiv = document.querySelector(".second-col-id");
    var lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
    var pageOffset = maindiv.offsetTop + maindiv.clientHeight;
    if (pageOffset > lastDivOffset - 10) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "my awesome new div";
        document.getElementById("second-col-id").appendChild(newDiv);
        checkForNewDiv();
    }
};

checkForNewDiv();

