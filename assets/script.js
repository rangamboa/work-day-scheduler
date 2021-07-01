// Delcare global variables.
var activeTime;
var dateNow;
var timeNow;
var timeBlock;
var taskEl;
var saveEl;

// Check current date and time at regular intervals.
function checkDateTime() {

    activeTime = setInterval(function() {
        dateNow = moment().format("dddd [-] D MMMM YYYY");
        timeNow = moment().format("HH");
        //timeNow = 'task'+timeNow;
        console.log(timeNow);
        $("#currentDate").text(dateNow);

        timeNow = 11;

        // Check if current time is within business hours. If so, change background color of current timeblock to red.
        if (timeNow < 9 || timeNow > 17) {
            console.log('not business hours');
        } else {
            console.log('business time!');
            timeNow = 'task' + timeNow;
            
            taskEl = $('.cellTask');
            taskEl.each(function() {

                timeBlock = $(this).attr('id');

                if (timeNow == timeBlock) {
                    $(this).css("background-color", "tomato");
                }
            })

        }

    }, 1000);
}

function smth() {

    var hi = $('#task9a');

    hi.text('Love Challenges, Be Intrigued by Mistakes');

    var cellTaskEl = $('.cellTask');

    console.log(cellTaskEl);
    cellTaskEl.append(' appended text');
}

checkDateTime();