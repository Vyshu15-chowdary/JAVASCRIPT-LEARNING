//encapsulation

/*
class MyClass {
    constructor(){
        this._myProtectedProperty = 'some value';
    }
}
    */

class MyClass{
    #privateField = "private"; //only acessed within class

    publicMethod(){
        console.log(this.privateField);
    }
}

class PClass {
  #privateMethod() {
    console.log("private method");
  }

  publicMethod() {
    this.#privateMethod();
  }
}

