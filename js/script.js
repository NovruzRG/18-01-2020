// console.log("Hello world!!")
// alert("Hello world!!")
// var username = "Novruz"

// if(username=="Novruz"){
//     console.log(username)
// }else{
//     console.log("not")
// }

// console.log(typeof username)


// var season = prompt("Ayin nomresini daxil edin");
// switch (season){
// case "1":
// console.log("Yanvar");
// break;
// case "2":
// console.log("Fevral");
// break;
// case "3":
// console.log("Mart");
// break;
// case "4":
// console.log("Aprel");
// break;
// case "5":
// console.log("May");
// break;
// case "6":
// console.log("Iyun");
// break;
// case "7":
// console.log("Iyul");
// break;
// case "8":
// console.log("Avqust");
// break;
// case "9":
// console.log("Sentyabr");
// break;
// case "10":
// console.log("Oktyabr");
// break;
// case "11":
// console.log("Noyabr");
// break;
// case "12":
// console.log("Dekabr");
// break;
// }

// let age = prompt("Yashinizi daxil edin");
// let student = prompt("Telebesiz(yes or no)");

// function getArmy(age) {


//     if (student = "yes") {
//         if (age > 21) {
//             let il = age - 21;
//             console.log(il + " il kecib")
//         } else if (age < 21) {
//             let il = 21 - age;
//             console.log(il + " il var")
//         } else {
//             console.log("vaxtidir")
//         }
//     } else {
//         if (age > 18) {
//             let il = age - 18;
//             console.log(il + " il kecib")
//         } else if (age < 18) {
//             let il = 18 - age;
//             console.log(il + " il var")
//         } else {
//             console.log("vaxtidir")
//         }
//     }
// }
// getArmy(age);

// let totalMinutes = prompt("deqiqeni daxil edin");

// function gettime(totalMinutes) {
//     let minutes = totalMinutes % 60;
//     let hours = (totalMinutes - minutes)/60;
//     console.log(hours + " saat " + minutes + " deqiqe")
// }

// gettime(totalMinutes);


// let message = prompt("sozu yazin")

// function checkPolidrome(message){
//     let j = message.length -1;
//     for (let i =0; i<message.length; i++){
//         if(message[i]!=message[j]){
//             console.log("Not Polidrome");
//             return;
//         }
//         j--
//     }
//    console.log("This is Polidrome")
// }
// checkPolidrome(message)


// let arr = [2, 4, 7, 3, 5];

// let maxArr = arr[0]

// function findMax() {
//     for (i = 0; i < arr.length; i++) {

//         if (maxArr < arr[i]) {
//             maxArr = arr[i];

//         }
//     }
//     console.log(maxArr)
// }
// findMax(arr)

// let minArr = arr[0]

// function findMin() {
//     for (i = 0; i < arr.length; i++) {

//         if (minArr > arr[i]) {
//             minArr = arr[i];
//         }
//     }
//     console.log(minArr)
// }
// findMin(arr)


let arry = [2, 4, 7, 3, 5, 2, 6];
let arry2 = [];

function findmod2() {
    for (i = 0; i < arry.length; i++) {

        if (arry[i] % 2 == 0 && arry2.indexOf(arry[i]) < 0) {

            arry2.push(arry[i]);
        }
    }
    console.log(arry2)
}
findmod2(arry)

let arrystr = ["a", "b", "a", "c", "b", "b", "a", "c", "b"];
sortarrystr = arrystr.sort();
let tempData = sortarrystr[0]
let count = 0;

    for (i = 0; i <= arrystr.length; i++) {

        if (tempData == sortarrystr[i]) {
            count++;
        } else {
            console.log(`element ${tempData} count ${count}`);
            tempData = sortarrystr[i];
            count =1;
        }
    }

