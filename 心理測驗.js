localStorage.removeItem('aCount');
localStorage.removeItem('bCount');
localStorage.removeItem('cCount');
localStorage.removeItem('dCount');

// function checkDevice() {
//     var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//     if (isMobile) {
//         alert("請使用電腦進行體驗");
//     }
// }

document.addEventListener("DOMContentLoaded", function() {
    checkDevice();
});

function checkDevice() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        alert("請使用電腦進行體驗");
    }
}