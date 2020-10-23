// const m = moment().format("[Today's date is] dddd, MMMM Do.");

//displays current day in viewport
// $("#currentDay").html(m); //JS = document.getElementById('currentDay').innerHTML = m;

// 9:00 AM time block
$("#button9").click(function () {
  var input = $("#input9").val();
  console.log(input)
  localStorage.setItem("input", input);
});

