var city1 = {};
city1.name = "Город N"
city1.population = 10000000;
var city2 = {
name: "Город M"
population: 1e6
};
function getName() {return this.name;}
city1.getName = getName;
city2.getName = getName;
function exportStr(){return `name-${this.name}\npopulation-${this.population}\n`;}
city1.exportStr = exportStr;
city2.exportStr = exportStr;
city1.getCity = getCity;
city2.getCity = getCity;
//test
console.log(city1.exportStr())
console.log(city2.exportStr())
console.log(city1.getCity().getName());
console.log(city2.getCity().getName());