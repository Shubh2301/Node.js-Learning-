const fs=require("fs");


const fileName="test.txt"

const writeFile=fs.writeFileSync(fileName,"This is the initial Data","utf-8");

console.log(writeFile);
