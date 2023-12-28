let empty = {};

const obj = {
    property1: value1, // property name may be an identifier
    2: value2, // or a number
    "property n": value3, // or a string
};
//   Each property name before colons is an identifier (either a name, a number, or a string literal), and each valueN is an expression whose value is assigned to the property name. The property name can also be an expression; computed keys need to be wrapped in square brackets

// The following statement creates an object and assigns it to the variable x if and only if the expression cond is true:
let x;
if (cond) {
    x = { greeting: "hi there" };
}

// The following example creates myHonda with three properties. Note that the engine property is also an object with its own properties
const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
};

// Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
// Create an instance of the object with new.
const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
// An object can have a property that is itself another object.
function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);



