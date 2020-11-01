var moment = document.querySelector("#currentDay")
moment().format('YYYY Do MM');

var queryURL = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

document.getElementById("save-button").addEventListener("click", function ()
    {
        var user = document.getElementById("user").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("user", user);
        console.log("")
    } , false);

    $(document).ready (function () {
        $("*[save-button]").each(function () {
          $(this).val(localStorage.getItem("item-" + $(this).attr("save-button")));
        });
      
        $("*[save-button]").on("click", function (itm) {
          localStorage.setItem ("item-" + $(this).attr("save-button"), $(this).val());
        })
      })