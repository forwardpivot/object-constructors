function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
Person.prototype.getInfo = function() {
    console.log(`My name is ${this.name}. I am ${this.age} years old, and 
    my job is ${this.job}`);
}

function Hero(name, age, job, alterEgo, hideout) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.alterEgo = alterEgo;
    this.hideout = hideout;
    this.secretIdentity = function() {
        console.log(`${alterEgo} is in the ${hideout}`);
    }
}

Hero.prototype = Object.create(Person.prototype);
Person.prototype = Object.create(Person.prototype);

const bruce = new Hero("Bruce Wayne", 30, "Industrialist", "Batman", "Batcave");
const vicki = new Person("Vicki Vale", 30, "Journalist");

bruce.getInfo();
bruce.secretIdentity();
vicki.getInfo();

