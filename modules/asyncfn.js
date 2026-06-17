const fs=require('fs')

const filePath="test.txt"
fs.writeFile(filePath,"This is the initial Data","utf-8",
    (err)=>{
        if(err) console.log(err);
        else console.log("File has been saved");

    })

    fs.readFile(filePath,(err,data)=>{
        if(err) console.log(err,data);
        else console.log(data);

    });