
$(function () {

    $(".devour-button").on("click", function (event) {
        console.log("Clicked devour");
        const id = $(this).data("id");

        console.log("id : " , id);

        $.ajax("/api/burgers/" + id, {
          type : "PUT"  
        }).then(
            function() {
                console.log("Ran AJAX to devour burger");
                // location.reload();
            }
        );
    });

});

console.log("burger.js script running");