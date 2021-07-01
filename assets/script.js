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

var hi = $('#task9a');

hi.text('Love Challenges, Be Intrigued by Mistakes');

var cellTaskEl = $('.cellTask');

console.log(cellTaskEl);
cellTaskEl.append(' appended text');
