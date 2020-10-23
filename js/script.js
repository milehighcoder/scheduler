const m = moment().format("[Today's date is] dddd, MMMM Do.");

// displays current day in viewport
$("#currentDay").html(m); //JS = document.getElementById('currentDay').innerHTML = m;

// 9:00 AM time block
$("#button9AM").click(function () {
  event.preventDefault();
  textToSave = $("#input9AM").val();
  console.log(textToSave);
  localStorage.setItem("textToSave", textToSave);
});
