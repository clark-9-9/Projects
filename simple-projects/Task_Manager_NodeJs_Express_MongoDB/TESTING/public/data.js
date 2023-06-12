let input = document.getElementById('input')
let get = document.getElementById('get')
let post = document.getElementById('post')
let nameS = document.getElementById('name')
let parentList = document.getElementById('parentList')


get.addEventListener("click", getInfo)

const url = "http://localhost:3000/json"

async function getInfo() {

try {

    
    // const data = await fetch(url).then(res => res.json()) // <--- success
    const get = await fetch(url)
    const data = await get.json()

    
    // const{name, job} = data
    // console.log(name);
    // console.log(data);

    for (let i = 0; i < data.length; i++) {
        // console.log(data[i].name);
        const h3 = document.createElement('h3')
        const card = h3.cloneNode(true)
        card.textContent = data[i].name + data[i].company

        const r = `<h3>${data[i].name}</h3>`

        
        // nameS.appendChild(card)
        nameS.innerHTML += r
        console.log(card);
    }

    console.log(nameS);





    /* 
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    */

} catch(err) {
    console.log(err);
}


}


let params;
const urlPost = `http://localhost:3000/postJson` 


post.addEventListener('click', postInfo)


async function postInfo() {

try {

    let name = input.value
    const data = { name }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),

    } 
    
    if(input.value === '') return

    const post = await fetch(urlPost, options)
    const dataJson = await post.json()
    
    const{names, paramsN} = dataJson

    console.log(dataJson, names);

    parentList.innerHTML +=  `<li>${names}</li>`


} catch(err) {
    console.log(err);
}



}





/* const express = require('express')
const app = express()
const path = require('path')
const dataJson = require('./data.json')

app.use(express.static(__dirname + '/public'));
// app.use("/public", express.static( __dirname + '/public/data.html'));
// app.use("/data.js", express.static( __dirname + '/public/data.js'));

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/data.html'))
    // res.sendFile(path.resolve(__dirname, './public/data.html'))
})

// app.get('/data.js', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './public/data.js'))
// })



app.get('/json', (req, res) => {
    res.json(dataJson)
})



app.post('/postJson', (req, res) => {
    const{name} = req.body
    console.log(req.body);

    res.json({ 
        status: "success",
        names: name,
     })
})


app.post('/postJson/:name', (req, res) => {
    const paramsN = req.params.paramsN

    console.log(req.params);
    console.log(req.body);

    res.json({ 
        status: "success",
        paramsN: paramsN,
     })
})





const port = 3000
app.listen(port , console.log(`server runing on port ${port}`)) */