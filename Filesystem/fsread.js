
// read file



 fs.readFile(path.join(__dirname,"/api","api.txt"),"utf8",(err,data)=>{
    if(err) throw err;

     console.log(data);

})