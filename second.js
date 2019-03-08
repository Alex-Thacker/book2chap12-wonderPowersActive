let flight = document.getElementById('flight');
let mindReading = document.getElementById('mindreading');
let xRay = document.getElementById('xray');
let allPowers = document.querySelectorAll('.power');
console.log(allPowers.length)

let oneFunction = () => {
    let split = event.target.id.split("-")
    console.log(split);
    let secondId = document.getElementById(split[1])
    secondId.classList.toggle('disabled');
    secondId.classList.toggle('enabled');
}




function activeAll() {
    allPowers.classList.toggle('disabled');
    allPowers.classList.toggle('enabled');
}


document.querySelector("#activate-flight").addEventListener('click', oneFunction)



document.querySelector("#activate-mindreading").addEventListener('click', oneFunction)

document.querySelector("#activate-xray").addEventListener('click', oneFunction)

// for (let i = 0; i < allPowers.length; i++){
//     document.querySelector('#activate-all').addEventListener('click', function(){
//         allPowers[i].classList.toggle('disabled');
//         allPowers[i].classList.toggle('enabled');

//         if (allPowers[i].classList.contains('enabled')){
//             document.querySelector('#activate-all').textContent = 'Deactive All Powers'
//         } else if (allPowers[i].classList.contains('disabled')) {
//             document.querySelector('#activate-all').textContent = 'Activate All Powers'
//         }

//     })

// }


for (let i = 0; i < allPowers.length; i++) {
    document.querySelector('#activate-all').addEventListener('click', function () {

        if (allPowers[i].classList.contains('disabled')) {
            allPowers[i].classList.toggle('enabled');

        } else if (allPowers[i].classList.contains('enabled')) {
            allPowers[i].classList.toggle('disabled');
        }
    })
}




for (let i = 0; i < allPowers.length; i++) {
    document.querySelector('#activate-all').addEventListener('click', function () {


        if (allPowers[i].classList.contains('enabled')) {
            document.querySelector('#activate-all').textContent = 'Deactive All Powers'
        } else if (allPowers[i].classList.contains('disabled')) {
            document.querySelector('#activate-all').textContent = 'Activate All Powers'
        }

    })

}



