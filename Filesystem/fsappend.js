
// append file

 const user = "abhi";

 fs.appendFile(path.join(__dirname,"/api","api.txt"),`\n user name:${user}`,(err)=>{
    if (err) throw err;
 });