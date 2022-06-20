function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.getInfo = function() {
        console.log(`My name is ${name}. I am ${age} years old, and 
        my job is ${job}`);
    }
}

const bruce = new Person("Bruce Wayne", 30, "Industrialist");

bruce.getInfo();

