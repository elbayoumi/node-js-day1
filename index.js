const fs = require('fs')
// fs.writeFile('grad','',(err)=>console.log(err))
// fs.readFile('grad',(err,fil)=>err ? console.log(err) :console.log((fil.toString())));
// if (process.argv[2]=='add'){
//     let grad = JSON.parse(fs.readFileSync('grad','utf-8'));
//     console.log(grad);
//     grad.push(process.argv[3]);
//     fs.writeFileSync('grad',JSON.stringify(grad));
// }
// fs.readFile('todo.txt',(err,fil)=>err ? fs.writeFile('todo.txt'):)

// fs.writeFileSync('todo.txt','');
if (fs.existsSync('todo')){

}
else{
    fs.writeFileSync('todo','[]');
}
if(process.argv[2]=="add")
{
    let data=JSON.parse( fs.readFileSync("todo",'utf-8'))
   console.log(data)
   const Data ={
    id:(data.length+1),
    name :process.argv[3],
    grad :process.argv[4]
   }
    data.push(Data);
    fs.writeFileSync("todo",JSON.stringify(data));
    console.log(data)
    
}
else if (process.argv[2]=="list"){
(JSON.parse(fs.readFileSync('todo','utf-8'))).map((data)=>{
    console.log(`${data.id} : ${data.name} ${data.grad}`)
})
}
else if (process.argv[2]=="edit"){
    let datan = (JSON.parse(fs.readFileSync('todo','utf-8')))
     datan[parseInt(process.argv[4])-1].grad=process.argv[3];
     console.log(datan)
     fs.writeFileSync("todo",JSON.stringify(datan));
}
else if (process.argv[2]=="del"){
    let datan = (JSON.parse(fs.readFileSync('todo','utf-8')))
    datan.splice((process.argv[3]),1)
     console.log(datan)
     fs.writeFileSync("todo",JSON.stringify(datan));
}
else if (process.argv[2]=="sum"){
    let datan = (JSON.parse(fs.readFileSync('todo','utf-8')))
//    console.log(datan)
// let s
// for (let i = 0; i <  datan.length; i += 1) {
    
//    var s +=parseInt( datan[i].grad)

  
//     }
//     console.log(s)
let sum=0;
    datan.map((data)=>{
        sum+=parseInt( data.grad)
    })
    console.log(sum)
}