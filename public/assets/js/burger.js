
$(function () {

    $(".devour-button").on("click", function (event) {
        console.log("Clicked devour");
        const id = $(this).data("id");

        console.log("id : ", id);

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("Ran AJAX to devour burger");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();
        console.log("Clicked submit");

        const burger_name = $("#name").val();

        $.ajax("/api/burgers/", {
            type : "POST",
            data : {
                colName : "burger_name",
                colVal : burger_name
            }
        }).then(
            function(){
                console.log("Ran AJAX to create submit");
                location.reload();
            }
        )
    })

});

console.log("burger.js script running");