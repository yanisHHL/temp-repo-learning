const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync("./content/first.txt","utf8")
const secound = readFileSync("./content/secound.txt","utf8")

writeFileSync("./content/result.txt",`Herer is the result: ${first}, ${secound}`,{flag:"a"})

