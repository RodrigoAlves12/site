let constantName = "AvogadroConstant";
const avogadroNumber = 6.02 * (10 ** 23);


let person  = {
    name: "Josh",
    age: 31
};
person.age = 32;

let selection = "name";
person[selection] = "Rodrigo";

let color_palette = ["red", "blue"];
color_palette[0] = "blue-ish";
length = color_palette.length;

function greet(color_list){

    console.log(color_list[0]);

}
function square(n){
    return n * n;

}

console.log(person);
console.log(length);
greet(color_palette);
console.log(square(person.age));
