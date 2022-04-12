const os=require("os");
const user=os.userInfo();
console.log(user);


console.log(`upto time ${os.uptime() } second `);

const osinfo={
    ostype:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem()
}
console.log(osinfo);