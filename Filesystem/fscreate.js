
//  creating folder

fs.mkdir(path.join(__dirname,"/api"),{},(err)=>{
   if (err) throw err;
})