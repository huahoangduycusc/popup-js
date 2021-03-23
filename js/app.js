var distance = 20; // thiết lập thời gian pop up sẽ mất sau ? giây
// Check browser support
if (typeof (Storage) !== "undefined") {
    // Store
    if (sessionStorage.popup) {
        sessionStorage.popup = sessionStorage.popup;
        if(sessionStorage.popup > 0){
            closeorOpenPopup(true);
        }
      } else {
        sessionStorage.popup = distance;
        closeorOpenPopup(true);
      }
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

// function count down
var popup = setInterval(function () {
    if(sessionStorage.popup){
        if(sessionStorage.popup >= 0){
            sessionStorage.popup = sessionStorage.popup-1;
            distance = sessionStorage.popup;
            console.log("Countdown "+ sessionStorage.popup);
        }
    }
    // Display the result 
    document.getElementById("timer").innerHTML = "Quảng cáo này sẽ mất sau " + distance + " giây";
    // If the count down is finished, close pop up
    if (distance <= 0) {
        clearInterval(popup);
        closeorOpenPopup(false);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

// close popup function
function closeorOpenPopup(flag) {
    var popUp = document.querySelector(".container_popup");
    if (popUp) {
        if(flag == false){
            popUp.classList.remove("active");
        }
        else{
            popUp.classList.add("active");
        }
    }
}
