var globalActiveTime;

function displayActiveTime() {
    var dateNow;
    globalActiveTime = setInterval(function() {
        dateNow = moment().format("dddd [-] D MMMM YYYY")
        // console.log(timeNow);
        $("#currentDate").text(dateNow);
    }, 1000);
}

displayActiveTime();