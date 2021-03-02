import * as buildingModule from './buildingModule.js';

console.log(buildingModule);
const myHouse = new buildingModule.Building(3, 10);
console.log(myHouse)


myHouse.pourGlassOf("water");
myHouse.openDoor();
myHouse.openDoor();
myHouse.closeDoor();
myHouse.openDoor();
myHouse.enter();
myHouse.enter();
myHouse.closeDoor();
myHouse.enter();
myHouse.closeDoor();
myHouse.openDoor();
myHouse.closeDoor();
myHouse.pourGlassOf("water");
myHouse.pourGlassOf("water");
myHouse.pourGlassOf("water");