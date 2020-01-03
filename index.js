// Dog, cat human
// props -> name, energy
// eat, walk, run

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
        meaow: () => console.log('Meaow meaow!!!')
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

const dog1 = Dog('Barky');
const cat1 = Cat('Ming Ming');
const guy1 = Human('Darryl Mabini');
