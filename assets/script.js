// Delcare global variables.
var activeTime;
var dateNow;
var timeNow;
var timeBlock;
var taskEl = $('.cellTask');
var inputEl = $('input');
var saveEl = $('.cellSave');;

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
        // taskEl = $('.cellTask'); -- original location before moving to global variable declaration list.

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

function init() {

    console.log('initialization');

    // inputEl = document.getElementsByTagName('input'); -- original location before moving to global variable declaration list.
    // console.log(inputEl);

    for (i = 9; i < 18; i++) {
        savedTask = 'task' + i;

        grabTask = JSON.parse(localStorage.getItem(savedTask));
        if (grabTask === null) grabTask = '';
        console.log(grabTask);

        document.getElementById('input'+i).value = grabTask;
    }
}

// Listen for click event on any save button .
// saveEl = $('.cellSave'); -- original location before moving to global variable declaration list.
saveEl.click(function(event) {

    event.preventDefault();
    // Obtain task based on corresponding <input> ID to save content to local storage.
    taskToSave = $(this).attr('id');
    taskToSave = taskToSave.substr(taskToSave.length - 2);
    if (taskToSave === 'e9') taskToSave = 9;
    
    savedTask = 'task' + taskToSave;

    taskToSave = $('#input'+taskToSave).val();
    // console.log(taskToSave);

    localStorage.setItem(savedTask, JSON.stringify(taskToSave));

});

checkDateTime();
init();