window.onload = function() {
    let prevPage = localStorage.getItem('prevPage')
    console.log(prevPage)
    localStorage.setItem('prevPage', window.location.href)
    if(prevPage === 'https://lintingyii.github.io/iPROTiST.github.io/question2.html') 
        window.location.href = 'https://lintingyii.github.io/iPROTiST.github.io/%E5%BF%83%E7%90%86%E6%B8%AC%E9%A9%97.html'
}      

var aCount = 0;
var bCount = 0;
var cCount = 0;
let dCount = 0;

function incrementaCount() {
    aCount = Number (aCount)
    aCount += 1;
    localStorage.setItem('aCount', aCount);
}

function incrementbCount() {
    bCount = Number (bCount)
    bCount += 1;
    localStorage.setItem('bCount', bCount);
}

function incrementcCount() {
    cCount = Number (cCount)
    cCount += 1;
    localStorage.setItem('cCount', cCount);
}


// //question 1
// document.getElementsById("option1-1").onclick = function(){
//     aCount+=1
// }
// document.getElementsById("option1-2").onclick = function(){
//     bCount+=1
// }
// document.getElementsById("option1-3").onclick = function(){
//     cCount+=1
// }

// //question 2
// document.getElementsById("option2-1").onclick = function(){
//     aCount+=1
// }
// document.getElementsById("option2-2").onclick = function(){
//     bCount+=1
// }
// document.getElementsById("option2-3").onclick = function(){
//     cCount+=1
// }
// //question 3
// document.getElementsById("option3-1").onclick = function(){
//     aCount+=1
// }
// document.getElementsById("option3-2").onclick = function(){
//     bCount+=1
// }
// document.getElementsById("option3-3").onclick = function(){
//     cCount+=1
// }
// document.getElementsById("option3-4").onclick = function(){
//     dCount+=1
// }
// //question 4
// document.getElementsById("option4-1").onclick = function(){
//     aCount+=1
// }
// document.getElementsById("option4-2").onclick = function(){
//     bCount+=1
// }
// document.getElementsById("option4-3").onclick = function(){
//     cCount+=1
// }