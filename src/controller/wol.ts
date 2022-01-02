import wol = require('wol');
const boot = function(macAddress:string){
    wol.wake(macAddress);
}
export{boot}