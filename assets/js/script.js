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

function loadTask() {
  time.forEach((hour) => {
    $(".container").append(`
              <div class="row time-block">
                  <div class="col-md-1 hour">${hour}hrs</div>
                  <textarea class="col-md-10 hour-block" id="${hour}"></textarea>
                  <button class="saveBtn col-md-1" id='saveBtn'><span class="oi oi-lock-locked display-5"></span></button>
              </div>
          `);
  });
}

function createTask() {
  loadTask();

  var currentTime = moment().format("HH" + "00");
  console.log(currentTime); // testing

  $(".time-block").each(function () {
    var hourId = $(this).find(".hour").text().split("hrs")[0];
    console.log(hourId);
    if (currentTime < hourId){
        console.log("this time is future " + hourId);
        $(this).find(".hour-block").addClass("future");
    }
    else if (currentTime > hourId){
        console.log("this time is passed " + hourId)
        $(this).find(".hour-block").addClass("past");
    }
    else{
        console.log("this time is present " + hourId)
        $(this).find(".hour-block").addClass("present");
    }

  });
}

createTask();
