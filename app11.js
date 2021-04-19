const {readFile, writeFile} = require("fs");



readFile("./content/first.txt","utf8", (err, result)=>{
    if(err){
        console.log(err);
    return
    }
    const first= result;
    readFile("./content/secound.txt","utf8", (err, result)=>{
        if(err){
            console.log(err);
        return
        }
        const secound=result;
        writeFile("./content/resultasync.txt",`here is the result ${first}, ${secound}`, (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })


    })

})
