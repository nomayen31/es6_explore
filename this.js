class Person{
    constructor(name, age ){
        this.name = name;
        this.age= age;
    }
    sleep(){
        console.log(`sleepppppppppp now ${this.name}`)
    
    }
    }

const kodom = new Person('kodin ali', 21);

console.log(kodom);
kodom.sleep()