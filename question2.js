window.onload = function() {
    let prevPage = localStorage.getItem('prevPage')
    console.log(prevPage)
    localStorage.setItem('prevPage', window.location.href)
    if(prevPage === 'https://lintingyii.github.io/iPROTiST.github.io/question3.html') 
    window.location.href = 'https://lintingyii.github.io/iPROTiST.github.io/%E5%BF%83%E7%90%86%E6%B8%AC%E9%A9%97.html'
}    

let aCount = localStorage.getItem('aCount');
console.log(aCount);
let bCount = localStorage.getItem('bCount');
console.log(bCount);
let cCount = localStorage.getItem('cCount');
console.log(cCount);

function incrementaCount() {
    aCount = Number (aCount)
    aCount += 1;
    localStorage.setItem('aCount', aCount);
    // console.log(aCount)
}

function incrementbCount() {
    bCount = Number (bCount)
    bCount += 1;
    localStorage.setItem('bCount', bCount);
    // console.log(aCount)
}

function incrementcCount() {
    cCount = Number (cCount)
    cCount += 1;
    localStorage.setItem('cCount', cCount);
    // console.log(aCount)
}


// 瀏覽器後退/前進事件處理
// window.addEventListener('beforeunload',function(event) {
//     window.location.href = 'https://www.google.com.tw/';
// });
  // 當頁面重新載入時，將頁面重定向到第一個頁面
// window.onload = function() {
//     if (sessionStorage.getItem('lastUrl') !== null) {
//       window.location.replace('/心理測驗.html');
//       sessionStorage.removeItem('lastUrl');
//     }
// };
  



