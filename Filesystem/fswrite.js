
// creating a file in api


 const user ="abhijith";

 fs.writeFile(path.join(__dirname,"/api","api.txt"),`user name :${user}`,(err)=>{
    if (err) throw err;
 });