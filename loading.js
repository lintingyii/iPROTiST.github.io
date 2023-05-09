let aCount = localStorage.getItem('aCount');
console.log(aCount);
let bCount = localStorage.getItem('bCount');
console.log(bCount);
let cCount = localStorage.getItem('cCount');
console.log(cCount);
let dCount = localStorage.getItem('dCount');
console.log(dCount);

// 停留時間
const delayInMilliseconds = 4000; //4秒

// 跳轉到指定頁面
setTimeout(function() {
    if (aCount === '1' && bCount === '1' && cCount === '1') {
        window.location.href = "result1.html";
    } 
    
    else if (aCount === '2'){
        window.location.href = "result1.html";
    }

    else if (bCount === '3') {
        window.location.href = "result2.html";
    }

    else if (cCount === '2') {
        window.location.href = "result3.html";
    }

    else if (bCount === '2') {
        window.location.href = "result3.html";
    }

    else if (aCount === '3') {
        window.location.href = "result4.html";
    }

    else {
        window.location.href = "result5.html";
    }
}, delayInMilliseconds);
