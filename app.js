
        function getAyah(){
            fetch("https://api.alquran.cloud/v1/ayah/random/en.asad")
        .then(response => response.json())
        .then(data =>{
            //console.log(data);

            let data1 = data["data"]["text"]
            let surah = data["data"]["surah"]["englishName"]
            let ayah =  data["data"]["surah"]["number"]

            str = `
            <button class="btn" ">Surah : ${surah}</button>
            <button class="btn" ">Ayah : ${ayah}</button>
            `

            document.getElementById("data").innerHTML = data1;
            
            document.getElementById("but").innerHTML = str;

            console.log(data);
        })


        }