//your JS code here. If required.
function updateTime() {
    let now = new Date();

    document.getElementById("timer").textContent = now;
}

updateTime();

setInterval(updateTime, 1000);