//Used for API calls

$(document).ready(() => {
  $.get(
    "https://cors-anywhere.herokuapp.com/https://loripsum.net/api",
    function (data) {
      $(".api-call").append(data);
    }
  );
});
