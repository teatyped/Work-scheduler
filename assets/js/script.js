$("#currentDay").text(moment().format("LLLL"));
$(document)

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
              <div class="row time-block" id="time-block">
                  <div class="col-md-1 hour">${hour}hrs</div>
                  <textarea class="col-md-10 hour-block description" ></textarea>
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
    $(this).find(".saveBtn").attr("id",hourId);
    console.log(hourId);
    if (currentTime < hourId){
        console.log("this time is future " + hourId);
        $(this).find(".hour-block").addClass("future").attr("id", hourId);

    }
    else if (currentTime > hourId){
        console.log("this time is passed " + hourId)
        $(this).find(".hour-block").addClass("past").attr("id", hourId);
    }
    else{
        console.log("this time is present " + hourId)
        $(this).find(".hour-block").addClass("present").attr("id", hourId);
    }

  });
}

$(".container").on("click", "button", function(){

    console.log("save btn clicked" + event.target);

    var text = $(this).siblings('.description').val();

    var time = $(this).find('.hour').text().trim();
    

    console.log("saved text " +text);
    console.log("saved time " +time);

    localStorage.setItem(time, text);


})


createTask();
