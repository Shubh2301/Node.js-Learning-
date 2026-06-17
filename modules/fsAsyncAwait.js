const fs = require('fs/promises');
const path=require('path')

const filePath1 = __dirname;
const fileName="text.txt";
const filePath=path.join(__dirname,fileName);

// fs.promises
//     .readdir(filePath1)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

const readFolder = async () => {
    try {
        const res = await fs.readdir(filePath1)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
readFolder()


const writeFileExample = async () => {
    try {
     await fs.writeFile(filePath,"this is the initial Data","utf-8");
     console.log("File created successfully");
     
    } catch (err) {
        console.log(err);

    }
}


writeFileExample()


const readFileExample = async () => {
    try {
    const data= await fs.readFile(filePath,"utf-8");
     console.log(data);
     
    } catch (err) {
        console.log(err);

    }
}

readFileExample()