//const { json } = require("express");

let obj={
    electromagnatic_wave:[],
    kinemat
}

let subtopic1={
    electric_fild:"lol",
}
let subtopic2={
    magnetic_field:1,
}
let subtopic3={
    relations:2
}


    obj.electromagnatic_wave.push(subtopic1);
        obj.electromagnatic_wave.push(subtopic2);
            obj.electromagnatic_wave.push(subtopic3);
 obj=JSON.stringify(obj);
//JSON.parse()
console.log(obj);