const fs=require("fs");

const  path=require("path");

const fileName="fsPromises.txt";

const filePath=path.join(__dirname,fileName)



const fileName1=__dirname;
fs.promises
.readdir(fileName1)
.the((data)=>console.log(data))
.catch((err)=>console.log(err))


fs.promises
  .writeFile(filePath, "this is the initial data", "utf-8")
  .then(() => {
    console.log("File created");
  })
  .catch((err) => {
    console.log(err);
  });

  fs.promises
  .readFile(filePath,"utf-8")
  .then((data)=>console.log(data))
  .catch((err)=>console.log(err))