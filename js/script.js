const m = moment().format("[Today's date is] dddd, MMMM Do.");

// displays current day in viewport
$("#currentDay").html(m); //JS = document.getElementById('currentDay').innerHTML = m;

// 9:00 AM time block
$("#nine").click(function () {
  event.preventDefault();
  // $(".description").val(localStorage.getItem("nine"));
  $(".description").each(function (i, element) {
    console.log($(this).attr("id"), $(element).attr("data-hour"));
    if ($(this).attr("id") === $(element).attr("data-hour")) {
      var key = i.attr("data-hour");
      var value = i.val();
      console.log(key, value);
      localStorage.setItem(key, value);
    }
  });
  // textToSave = $(".description").val();
  // console.log(textToSave);
  // localStorage.setItem($(this).attr('id'), textToSave);
});

// $(this).attr('id')
//using this to dynamically grab id and data hour
