$("#currentDay").text(moment().format("LLLL"));

var time = [
  "0900",
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
  "1600",
  "1700",
];

// load default task area and append to html
function loadTask() {
  time.forEach((hour) => {
    $(".container").append(`
              <div class="row time-block">
                  <div class="col-md-1 hour">${hour}hrs</div>
                  <textarea class="col-md-10 hour-block description" ></textarea>
                  <button class="saveBtn col-md-1" id='saveBtn'><span class="oi oi-lock-locked display-5"></span></button>
              </div>
          `);
  });
}
// createTask will call loadTask, check each task and set past, future, or present
// will also call loadLocal fun to load any data in local storage
function createTask() {
  loadTask();

  var currentTime = moment().format("HH" + "00");

  $(".time-block").each(function () {
    var hourId = $(this).find(".hour").text().split("hrs")[0];
    $(this).find(".saveBtn").attr("id", hourId);
    $(this).attr("id", hourId);
    loadLocal();
    console.log(hourId);
    if (currentTime < hourId) {
      console.log("this time is future " + hourId);
      $(this).find(".hour-block").addClass("future");
    } else if (currentTime > hourId) {
      console.log("this time is passed " + hourId);
      $(this).find(".hour-block").addClass("past");
    } else {
      console.log("this time is present " + hourId);
      $(this).find(".hour-block").addClass("present");
    }
  });
}
// event listener for save button
// on save, store data into local storage
$(".container").on("click", "button", function () {
 
  var text = $(this).siblings(".description").val();
  var time = $(this).attr("id");
  // set info into localstorage
  localStorage.setItem(time, text);
});

// load local data into task area by time
function loadLocal() {
  $("#0900 .description").val(localStorage.getItem("0900"));
  $("#1000 .description").val(localStorage.getItem("1000"));
  $("#1100 .description").val(localStorage.getItem("1100"));
  $("#1200 .description").val(localStorage.getItem("1200"));
  $("#1300 .description").val(localStorage.getItem("1300"));
  $("#1400 .description").val(localStorage.getItem("1400"));
  $("#1500 .description").val(localStorage.getItem("1500"));
  $("#1600 .description").val(localStorage.getItem("1600"));
  $("#1700 .description").val(localStorage.getItem("1700"));
}
// run createTask on load.
createTask();
