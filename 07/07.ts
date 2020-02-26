// 静态属性 静态方法  

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

// class Animal{
//   name:string;
//   constructor(name:string){
//     this.name= name;
//   }
//   eat(){    //具体吃什么  不知道   ，  具体吃什么?继承它的子类去实现 ，每一个子类的表现不一样
//     console.log('吃的方法')
//   }
// }
// class Dog extends Animal{
//   constructor(name:string){
//     super(name)
//   }
//   eat(){
//     alert(`${this.name}吃粮食`)
//   }
// }
// class Cat extends Animal{
//   constructor(name:string){
//     super(name)
//   }
//   eat(){
//     alert(`${this.name}吃老鼠`)
//   }
// }

// var d = new Dog('小花狗');
// var c = new Cat('小花猫');
// d.eat();
// c.eat();






//typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// abstract抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准 。   标准：Animal 这个类要求它的子类必须包含eat方法

//标准:

abstract class Animal{
  public name:string;
  constructor(name:string){
    this.name = name;
  }
  abstract eat():any;  // 抽象方法不包含具体实现并且必须在派生类中实现
  run():any{
    console.log('其他方法可以不实现');
  }
}

// var a = new Animal('gou');  //错误写法

class Dog extends Animal{
  constructor(name:string){
    super(name);
  }
  eat(){
    alert(`${this.name}在吃粮食`)
  }
}
var d = new Dog('小狗')
d.eat();


class Cat extends Animal{
  constructor(name:string){
    super(name)
  }
  eat(){
    alert(`${this.name}吃老鼠`)
  }
  run():any{
    alert(`${this.name}在蹦跑`)
  }
}
var c = new Cat('小猫');
c.eat();