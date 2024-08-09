

// creating http 

const http =require("http");
const fs = require("fs");
const path = require("path");



// creating server

const Server = http.createServer((req,res)=>{
    if(req.url === "/"){

        fs.readFile(path.join(__dirname,"views","index.html"),"utf8",(err,data)=>{
            if (err) throw err;
            res.writeHead(200,{"content-type":"text/html"});
            res.end(data);
            
        });
       

    }else{

        if(req.url === "/contact"){

            fs.readFile(path.join(__dirname,"views","contact.html"),"utf8",(err,data)=>{
                if (err) throw err;
                res.writeHead(200,{"content-type":"text/html"});
                res.end(data);
                
            });
           
    
        }


    }


   
   
});

const PORT =process.env.PORT || 3001;

Server.listen(PORT,()=>console.log(`server running ${PORT}`));






