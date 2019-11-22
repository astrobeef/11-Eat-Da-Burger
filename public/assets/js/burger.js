
$(function () {

    $(".devour-button").on("click", function (event) {
        console.log("Clicked devour");
        const id = $(this).data("id");

        console.log("id : " , id);
    });

})

console.log("burger.js script running");