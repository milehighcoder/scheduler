const m = moment().format("dddd, MMMM Do.");

// displays current day in viewport
$("#currentDay").html(m); //JS = document.getElementById('currentDay').innerHTML = m;

// 9:00 AM time block
$("#nine").click(function (event) {
  //prevents the browser from auto refreshing
  event.preventDefault();
  //this defines the id of the button that the user clicked
  var button = $(this).attr("id");
  //this loops through each HTML element that has a class of description
  $(".description").each(function (i, element) {
    //this checks to see if the button's id matches the textarea's data-hour
    if (button === $(element).attr("data-hour")) {
      //when we find that value that matches we set the hour as the key
      var key = $(element).attr("data-hour");
      // and we set the text of the textarea as the value
      var value = $(element).val();
      //this will set the key,value pair in local storage
      localStorage.setItem(key, value);
    }
  });
});

$("#ten").click(function (event) {
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

$("#eleven").click(function (event) {
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

$("#twelve").click(function (event) {
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

$("#one").click(function (event) {
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

$("#two").click(function (event) {
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

$("#three").click(function (event) {
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

$("#four").click(function (event) {
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

$("#five").click(function (event) {
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
$("#nineInputSave").val(localStorage.getItem("nine"));
$("#tenInputSave").val(localStorage.getItem("ten"));
$("#elevenInputSave").val(localStorage.getItem("eleven"));
$("#twelveInputSave").val(localStorage.getItem("twelve"));
$("#oneInputSave").val(localStorage.getItem("one"));
$("#twoInputSave").val(localStorage.getItem("two"));
$("#threeInputSave").val(localStorage.getItem("three"));
$("#fourInputSave").val(localStorage.getItem("four"));
$("#fiveInputSave").val(localStorage.getItem("five"));
