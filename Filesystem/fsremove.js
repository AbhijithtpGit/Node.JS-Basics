
// removing folder

fs.rmdir(path.join(__dirname,"/api"),{recursive:true},(err)=>{
     if (err) throw err;
 })
