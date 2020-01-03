# javascript-composition-example
```javascript
const eater = (state) => ({
    eat(food) {
        console.log(`Eating ${food} amount of food`);
        state.energy += food;
    }
})

const walker = (state) => ({
    walk(meters) {
        console.log(`Walking ${meters} meters`);
        state.energy -= meters;
    }
})

const runner = (state) => ({
    run(meters) {
        console.log(`Running ${meters} meters`);
        state.energy -= (meters * 2);
    }
})

const Dog = (name, energy = 100) => {
    let dog = {
        name,
        energy,
        bark: () => console.log('Bark bark!!!')
    };

    return Object.assign(
        dog,
        eater(dog),
        walker(dog),
        runner(dog),
    );
}

const Cat = (name, energy = 100) => {
    let cat = {
        name,
        energy,
        meow: () => console.log('Meow meow!!!')
    };

    return Object.assign(
        cat,
        eater(cat),
        walker(cat),
        runner(cat),
    );
}

const Human = (name, energy = 100) => {
    let human = {
        name,
        energy,
        speak: () => console.log('Hello world!!!')
    };

    return Object.assign(
        human,
        eater(human),
        walker(human),
        runner(human),
    );
}

// Dog activities
const dog1 = Dog('Barky');
dog1.walk(10);
dog1.bark();
dog1.run(4);
dog1.eat(20);
console.log(dog1);

// Cat activities
const cat1 = Cat('Ming Ming');
cat1.walk(5);
cat1.meow();
cat1.run(10);
cat1.eat(20);
console.log(cat1);

// Human activities
const guy1 = Human('Darryl Mabini');
guy1.walk(15);
guy1.speak();
guy1.run(5);
guy1.eat(10);
console.log(cat1);
```
