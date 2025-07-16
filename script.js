//complete this code
class Person {
    constructor(myName,myAge){
        this._name = myName;
        this._age = myAge;
    }	
    get name(){
        return this._name
    }
    set name(newname){
        this._name = newname
        
    }
      get age(){
        return this._age
    }
    set age(num){
        this._age = num
    }
}

class Student extends Person {
    constructor(name,age){
        super(name,age)
    }
    study(){
        console.log(this.name + " is studying");
    }
}

class Teacher extends Person {
     constructor(name,age){
        super(name,age)
    }

    teach(){
        console.log(this.name + " is teaching")
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
