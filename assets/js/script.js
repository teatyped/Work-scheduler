$("#currentDay").text(moment().format("LLLL"));

var time = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

time.forEach(hour => {
    
    $('.container').append(`
        <div class="row">
            <div class="col-md-1 hour">${hour}</div>
            <textarea class="col-md-10 present"></textarea>
            <div class="col-md-1 saveBtn"></div>
        </div>
    `)
});