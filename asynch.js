function printEvery5Sec(){
    setTimeout(print, 5000)
}

function print() {
    console.log("print")
}

printEvery5Sec()

// Review from activity, both do the same thing. The second more efficiently than the other

//character.walkEast()
//setTimeout(character.stop, 500)
//setTimeout(character.walkNorth, 500)
//setTimeout(character.stop, 1000)
//setTimeout(character.walkEast, 1000)
//setTimeout(character.stop, 1500)

// setTimeout(() => {
//   character.walkEast();
//   setTimeout(() => {
//     character.walkNorth();
//     setTimeout(() => {
//       character.walkEast();
//       setTimeout(() => {
//         character.stop()
//       }, 500)
//     }, 500)
//   }, 500)
// }, 500)

// Looping the character to walk in a circle

// function startLoop(){
//     // Your code here
//   character.walkEast()
//   setTimeout(() => {
//     character.walkNorth()
//     setTimeout(() => {
//       character.walkWest()
//       setTimeout(() => {
//         character.walkSouth()
//         setTimeout(() => {
//           startLoop()
//         }, 500)
//       }, 1000)
//     }, 500)
//   }, 1000)
// }

// attempting promise logic, pulled from promise activity

// deleteButton.addEventListener('click', function(){
//         getUserConfirmation()
//             .then( userConfirmed => {
//                 if(userConfirmed){
//                     documentLi.remove()
//                 }
//             })
//     })

// return new Promise(function(resolve){
//         confirmButton.addEventListener('click', function(){
//             resolve(true)
//             modalDiv.remove()
//         })

//         cancelButton.addEventListener('click', function(){
//             resolve(false)
//             modalDiv.remove()
//         })
//     })

