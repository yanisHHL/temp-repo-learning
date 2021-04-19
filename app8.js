const os = require('os');

//info about current user
const user = os.userInfo();


//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()/60/60} secounds`)


const currentOS={
  name:os.type(),
  release:os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOS)
