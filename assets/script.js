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

        // Pull date from moment.js.
        dateNow = moment().format("dddd [-] D MMMM YYYY");
        $("#currentDate").text(dateNow);

        // Pull time from moment.js.
        timeNow = moment().format("H");
        console.log(timeNow);

        // Check if current time is within business hours. If so, change background color of current timeblock to red.
        if (timeNow < 9 || timeNow > 17) {
            console.log('not business hours');
        } else {
            console.log('business time!');

            // Pulls all elements containing a timeblock.
            taskEl = $('.cellTask');

            // Iterate through each "task" td.
            taskEl.each(function() {

                // Pull number characters from ID to compare to current time.
                timeBlock = $(this).attr('id');
                timeBlock = timeBlock.substr(timeBlock.length - 2);
                if (timeBlock === 'k9') timeBlock = 9;
                console.log(timeBlock);

                // Change background color of each timeblock depending on current time.

                if (timeNow > timeBlock) $(this).css("background-color", "grey");
                else if (timeNow == timeBlock) $(this).css("background-color", "tomato");
                else $(this).css("background-color", "green");
            })

        }
    }, 1000);
}

saveEl = $('.cellSave');

checkDateTime();