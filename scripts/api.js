//Used for API calls

const test = 1;
$(document).ready(() => {
  $.get(
    "https://cors-anywhere.herokuapp.com/https://loripsum.net/api",
    function (data) {
      $(".api-call").append(data);
    }
  );
});
