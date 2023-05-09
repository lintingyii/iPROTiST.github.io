window.onload = function() {
    let prevPage = localStorage.getItem('prevPage')
    console.log(prevPage)
    localStorage.setItem('prevPage', window.location.href)
    console.log(prevPage)
    if(prevPage === 'https://lintingyii.github.io/iPROTiST.github.io/question4.html') 
    window.location.href = 'https://lintingyii.github.io/iPROTiST.github.io/%E5%BF%83%E7%90%86%E6%B8%AC%E9%A9%97.html'
}       

let aCount = localStorage.getItem('aCount');
console.log(aCount);
let bCount = localStorage.getItem('bCount');
console.log(bCount);
let cCount = localStorage.getItem('cCount');
console.log(cCount);
var dCount = 0

// function incrementaCount() {
//     aCount = Number (aCount)
//     aCount += 1;
//     localStorage.setItem('aCount', aCount);
//     // console.log(aCount)
// }

// function incrementbCount() {
//     bCount = Number (bCount)
//     bCount += 1;
//     localStorage.setItem('bCount', bCount);
//     // console.log(aCount)
// }

// function incrementcCount() {
//     cCount = Number (cCount)
//     cCount += 1;
//     localStorage.setItem('cCount', cCount);
//     // console.log(aCount)
// }

// function incrementdCount() {
//     dCount = Number (dCount)
//     dCount += 1;
//     localStorage.setItem('dCount', dCount);
//     // console.log(aCount)
// }

// console.log(aCount)
// console.log(bCount)
// console.log(cCount)
// console.log(dCount)

// 瀏覽器後退/前進事件處理
// window.addEventListener('popstate', function(event) {
//     window.location.assign = 'https://www.google.com.tw/?hl=zh_TW';
//   });
// window.onbeforeunload = function() {
//     localStorage.setItem('aCount', 0);
//     localStorage.setItem('bCount', 0);
//     localStorage.setItem('cCount', 0);
// }