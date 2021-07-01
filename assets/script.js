// Delcare global variables.
var activeTime;
var dateNow;
var timeNow;
var timeBlock;
var taskEl;
var saveEl; // = document.querySelector('.cellSave');
var saveId;

// Check current date and time at regular intervals.
function checkDateTime() {

    // Check date/time every second.
    activeTime = setInterval(function() {

        // Pull and display current date from moment.js.
        dateNow = moment().format("dddd[,] DD MMMM YYYY");
        $("#currentDate").text(dateNow);

        // Pull current hour from moment.js.
        timeNow = moment().format("H");

        // Check if current time is within business hours (in military time).

        // Pulls all elements containing a timeblock.
        taskEl = $('.cellTask');

        // Iterate through each "task" td.
        taskEl.each(function() {

            // Pull number characters from ID to compare to current time.
            timeBlock = $(this).attr('id');
            timeBlock = timeBlock.substr(timeBlock.length - 2);
            if (timeBlock === 'k9') timeBlock = 9;

            // Change background color of each timeblock depending on current time:

            // Change to grey if before/after business hours or if before current time.
            if (timeNow > timeBlock || timeNow < 9 || timeNow > 17) $(this).css("background-color", "lightgrey");

            // Change to red if equal to current time. 
            else if (timeNow == timeBlock) $(this).css("background-color", "tomato");

            // Otherwise, color will remain green for the rest of the workday.
        })
    }, 1000);
}

function saveTask() {
    
    console.log(saveEl.length);
    for (i=0; i<saveEl.length;i++) console.log(saveEl[i])
    //console.log('event saved for '+ saveId);
}

checkDateTime();

saveEl = $('.cellSave');
// saveEl.click(saveTask());
saveEl.click(function () {
    alert('hi');
});