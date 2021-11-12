
let cars= [

    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "black",
        "type": "SUV",
        "registration": new Date('2017-01-03'),
        "capacity": 6
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
      }
]

// adding an object at the first position

let car={
    "color":"red",
    "type": "sport",
    "registration": new Date('2018-03-03'),
    "capacity": 4
}
cars.unshift(car)
// adding an object at the last position
let car2={
    "color":"blue",
    "type": "F1",
    "registration": new Date('2018-04-03'),
    "capacity": 2
}
cars.push(car2)

// adding an object anywhere in the array except the first and last position.


let car3={
    "color":"blue",
    "type": "F2",
    "registration": new Date('2018-04-04'),
    "capacity": 4
}
cars.splice(2,0,car3)

// How to find an object without iteration

let selectedCar = cars.find(car => car.type =="F1")
console.log(selectedCar)

// İf you want to get some elements which have some special properties, use filter function and use if statement

let redCars = cars.filter(car => 
    car.color =="red" && car.type == "sport")
console.log(redCars)

let redCars2 = cars.filter(selectCar)
function selectCar(car){
    if(car.color == "red" && car.type == "sport") {
        console.log("Selected cars")
        return car
    } 
}
console.log(redCars2)

// To transform objects of array, you can use map fucntion

let sizes = cars.map(car =>{
    if (car.capacity>= 7) {
        return "Large"
        
    }else if (7> car.capacity >5) {
        return "Medium"        
    } else {
        return "small"
        
    }
})
console.log(sizes)

// Adding a property to every object of an array

cars.forEach(car =>{
    if (car.capacity>= 7) {
        cars["size"]= "Large";
        
    }else if (7> car.capacity >5) {
        cars["size"]= "Medium";        
    } else {
        cars["size"]= "Small";
        
    }
})
console.log(cars)

// How to sort an array by a property
let sortedCars = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);
console.log(sortedCars);