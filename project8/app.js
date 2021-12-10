// const image = document.querySelector('img');
// const jokeDIV = document.querySelector('#display-joke');
// const button = document.querySelector('#get-joke');

// button.addEventListener('click', function(){
//     getRandomJoke();
// })

// function getRandomJoke(){
//     const ajax = new XMLHttpRequest;
//     const url = 'https://api.alquran.cloud/v1/ayah/random/en.asad'

//     ajax.open('GET', url, true);

//     ajax.onreadystatechange = function(){
//         if(this.status === 200 && this.readyState === 4){
//             console.log(this.responseText);
//             let data = JSON.parse(this.responseText);
//             jokeDIV.innerHTML = `${data.value}`
//         } else {
//             this.onerror = onerror();
//         }
//     }
//     ajax.send();
// }

// function onerror(){
//      jokeDIV.textContent = 'There was an error!';  
// }

 //Json Javascript notation

 function getHadith(){

    fetch("https://api.alquran.cloud/v1/ayah/random/en.asad")
 .then(response => response.json())
 .then(data =>{


  let data1= data["data"]["text"]
  
   
  
   let surah = data["data"]["surah"]["englishName"]
   let ayah = data["data"]["surah"]["number"]
   str = `
   
   <button class="btn">Surah : ${surah} </button>
   <button class="btn">Ayah : ${ayah} </button>
   `
   document.getElementById("but").innerHTML =    str;
   document.getElementById("data").innerHTML =    data1;
   console.log(data["data"]["surah"]["englishName"]) 
   console.log(data["data"]["surah"]["number"]) });

 }


 
