// const m = moment().format("dddd, MMMM Do.");
const m = moment();

// displays current day in viewport
$("#currentDay").html(m.format('ddd MMM do hh:mm a'));

// 9:00 AM
$("#9").click(function (event) {
  //prevents the browser from auto refreshing
  event.preventDefault();
  //this defines the id of the button that the user clicked
  var button = $(this).attr("id");
  //this loops through each HTML element that has a class of description
  $(".description").each(function (i, element) {
    //this checks to see if the button's id matches the input's data-hour
    if (button === $(element).attr("data-hour")) {
      //when we find that value that matches we set the hour as the key
      var key = $(element).attr("data-hour");
      // and we set the text of the input as the value
      var value = $(element).val();
      //this will set the key and value pair in local storage
      localStorage.setItem(key, value);
    }
  });
});

// 10:00 AM Time Block
$("#10").click(function (event) {
  event.preventDefault();
  var button = $(this).attr("id");
  $(".description").each(function (i, element) {
    if (button === $(element).attr("data-hour")) {
      var key = $(element).attr("data-hour");
      var value = $(element).val();
      localStorage.setItem(key, value);
    }
  });
});

//11:00 AM Time Block
$("#11").click(function (event) {
  event.preventDefault();
  var button = $(this).attr("id");
  $(".description").each(function (i, element) {
    if (button === $(element).attr("data-hour")) {
      var key = $(element).attr("data-hour");
      var value = $(element).val();
      localStorage.setItem(key, value);
    }
  });
});

//12:00 PM Time Block
$("#12").click(function (event) {
  event.preventDefault();
  var button = $(this).attr("id");
  $(".description").each(function (i, element) {
    if (button === $(element).attr("data-hour")) {
      var key = $(element).attr("data-hour");
      var value = $(element).val();
      localStorage.setItem(key, value);
    }
  });
});

//1:00 PM Time Block
$("#13").click(function (event) {
  event.preventDefault();
  var button = $(this).attr("id");
  $(".description").each(function (i, element) {
    if (button === $(element).attr("data-hour")) {
      var key = $(element).attr("data-hour");
      var value = $(element).val();
      localStorage.setItem(key, value);
    }
  });
});

//2:00 PM Time Block
$("#14").click(function (event) {
  event.preventDefault();
  var button = $(this).attr("id");
  $(".description").each(function (i, element) {
    if (button === $(element).attr("data-hour")) {
      var key = $(element).attr("data-hour");
      var value = $(element).val();
      localStorage.setItem(key, value);
    }
  });
});

//3:00 PM Time Block
$("#15").click(function (event) {
  event.preventDefault();
  var button = $(this).attr("id");
  $(".description").each(function (i, element) {
    if (button === $(element).attr("data-hour")) {
      var key = $(element).attr("data-hour");
      var value = $(element).val();
      localStorage.setItem(key, value);
    }
  });
});

//4:00 PM Time Block
$("#16").click(function (event) {
  event.preventDefault();
  var button = $(this).attr("id");
  $(".description").each(function (i, element) {
    if (button === $(element).attr("data-hour")) {
      var key = $(element).attr("data-hour");
      var value = $(element).val();
      localStorage.setItem(key, value);
    }
  });
});

//5:00 PM Time Block
$("#17").click(function (event) {
  event.preventDefault();
  var button = $(this).attr("id");
  $(".description").each(function (i, element) {
    if (button === $(element).attr("data-hour")) {
      var key = $(element).attr("data-hour");
      var value = $(element).val();
      localStorage.setItem(key, value);
    }
  });
});

//this will get the hour from local storage if it exists
$("#nineInputSave").val(localStorage.getItem("9"));
$("#tenInputSave").val(localStorage.getItem("10"));
$("#elevenInputSave").val(localStorage.getItem("11"));
$("#twelveInputSave").val(localStorage.getItem("12"));
$("#oneInputSave").val(localStorage.getItem("13"));
$("#twoInputSave").val(localStorage.getItem("14"));
$("#threeInputSave").val(localStorage.getItem("15"));
$("#fourInputSave").val(localStorage.getItem("16"));
$("#fiveInputSave").val(localStorage.getItem("17"));

//this will update the past, present and future time-block colors in real time
$(".description").each(function (index, value) {
  var thisHour = $(this).attr("data-hour");
  if (thisHour < moment().hour()) {
    $(this).addClass("past"); //gray
  } else if (thisHour == moment().hour()) {
    $(this).addClass("present"); //red
  } else if (thisHour > moment().hour()) {
    $(this).addClass("future"); //green
  }
});
