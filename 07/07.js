"use strict";
// 静态属性 静态方法  
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Person {
//   public name:string;
//   public age:number=20;
//   static sex:string='男';  //静态属性
//   constructor(name:string){
//     this.name = name;
//   }
//   run():any{   //实例方法
//     alert(`${this.name}在运动`)
//   }
//   work():any{
//     alert(`${this.name}在工作`)
//   }
//   static print():any{
//     alert(`print方法，${Person.sex}`);    //静态方法里面没法直接调用类里面的属性
//   }
// }
// var p = new Person('张三');
// p.run();
// Person.print();
//多态:父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现 
// 多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('吃的方法');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        alert(this.name + "\u5403\u7CAE\u98DF");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        alert(this.name + "\u5403\u8001\u9F20");
    };
    return Cat;
}(Animal));
var d = new Dog('小花狗');
var c = new Cat('小花猫');
d.eat();
c.eat();
