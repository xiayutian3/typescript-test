/*
1、vscode配置自动编译

    1.第一步   tsc --inti 生成tsconfig.json   改 "outDir": "./js",  


    2、第二步 任务 - 运行任务  监视tsconfig.json


2、typeScript中的数据类型

    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型


        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        
        任意类型（any）
        null 和 undefined
        void类型
        never类型

3、typeScript中的函数

    3.1、函数的定义
    3.2、可选参数
    3.3、默认参数
    3.4、剩余参数
    3.5、函数重载
    3.6、箭头函数  es6
4、typeScript中的类

    4.1 类的定义
    4.2 继承
    4.3 类里面的修饰符
    4.4 静态属性 静态方法
    4.5 抽象类 多态
5、typeScript中的接口

    5.1 属性类接口
    5.2 函数类型接口
    5.3 可索引接口
    5.4 类类型接口
    5.5 接口扩展

   
*/
/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

定义标准。

*/

// 1、属性接口     对json的约束

 //ts中定义方法
//  function printLable():void{
//    console.log('printLable');
//  }
//  printLable();

// ts中定义方法传入参数
// function printLable(lable:string):void{
//   console.log('printLable')
// }
// printLable('haha')

// ts中自定义方法传入参数,对json进行约束
// function printLable(lableInfo:{lable:string}){
//   console.log('printLable')
// }
// printLable('hahha'); //错误的写法
// printLable({lableInfo:'11111'}); //错误的写法
// printLable({lable:'张三'}); //正确的写法




//对批量方法传入参数进行约束。

//接口：行为和动作的规范，对批量方法进行约束
//就是传入对象的约束    属性接口
// interface FullName{
//   firstName:string;  //注意;结束
//   secondName:string;
// }
// function printName(name:FullName){
//   console.log(`${name.firstName}--${name.secondName}`)
// }
// // printName('123'); //错误
// printName({          //如果调用的时候直接传对象，参数的顺序可以不一样，就只能填firstName，secondName，不能多或少，不能添加其他参数
//   firstName:'李',
//   secondName:'四'
// })
// var obj={           //*传入的参数必须包含 firstName  secondName  参数的顺序可以不一样*/
//   age:52,
//   firstName:'王',
//   secondName:'五'
// }
// printName(obj);


//  接口：行为和动作的规范，对批量方法进行约束


// interface FullName{
//   firstName:string;  //注意;结束
//   secondName:string;
// }
// function printName(name:FullName){
  // 必须传入对象  firstName  secondName
//   console.log(`${name.firstName}--${name.secondName}`)
// }
// function printInfo(info:FullName){
  // 必须传入对象  firstName  secondName
//   console.log(`${info.firstName}--${info.secondName}`)
// }
// var obj ={
//   age:20,
//   firstName:'张',
//   secondName:'三'
// }
// printName(obj);
// printInfo(obj);
// 或者
// printName({
//   firstName:'张',
//   secondName:'三'
// });
// printInfo({
//   firstName:'张',
//   secondName:'三'
// });



//接口 ：可选属性
// interface FullName{
//   firstName:string;
//   secondName?:string;   //记得加上问号
// }
// function getName(name:FullName){
//   console.log(`${name.firstName}0000${name.secondName}`)
// }
// getName({
//   firstName:'李'
// })
//或者
// getName({
//   firstName:'李',
//   secondName:'刚'
// })





// 接口类型检验例子

//原生js封装的ajax 
// interface Config{
//   type:string;
//   url:string;
//   data?:string;
//   dataType:string;
// }
// function ajax(config:Config){
//   var xhr = new XMLHttpRequest();
//   xhr.open(config.type,config.url,true);
//   xhr.send(config.data);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState==4&& xhr.status==200){
//       console.log('成功');
//       if(config.dataType == 'json'){
//         console.log(JSON.parse(xhr.responseText));
//       }else{
//         console.log(xhr.responseText)
//       }
//     }
//   }
// }
// ajax({
//   type:'get',
//   data:'name=zhangsan',
//   url:'http://a.itying.com/api/productlist',
//   dataType:'json'
// })


// 函数类型接口验证:对方法传入的参数 以及返回值进行约束    批量约束
// interface encrypt{
//   (key:string,value:string):string;
// }
// var md5:encrypt = function(a:string,b:string):string{
//   return a+b;
// }
// console.log(md5('name','函数类型接口--1'));

// var sha1:encrypt = function(a:string,b:string):string{
//   return a+b;
// }
// console.log(sha1('name','函数类型接口--2'));





// 可索引接口：数组、对象的约束  （不常用）
//ts定义数组的方式
// var arr:number[]=[12,23];
// var arr1:Array<string>=['12','23'];
// var arr2:any[]=[1,'12',true];

//可索引接口 对数组的约束
// interface UserArr{
//   [index:number]:string;
// }
// var arr:UserArr=['aaa','bbb'];
// console.log(arr[0]);
// var arr1:UserArr=[12,'12'];  /*错误*/

//可索引接口 对对象的约束
// interface UserObj{
//   [index:string]:string;
// }
// var arr:UserObj={name:'xxoo',age:'12'};





//类类型接口:对类的约束  和   抽象类抽象有点相似
// interface Animal{
//   name:string;
//   eat(str:string):void;
// }
// class Dog implements Animal{
//   name:string;
//   constructor(name:string){
//     this.name = name
//   }
//   eat(){
//     console.log(`${this.name}吃粮食`)
//   }
// }
// var d = new Dog('小狗');
// d.eat();


// class Cat implements Animal{
//   name:string;
//   constructor(name:string){
//     this.name = name;
//   }
//   eat(food:string):void{
//     console.log(`${this.name}吃${food}`)
//   }
// }
// var c =new Cat('小猫');
// c.eat('老鼠');






//接口扩展：接口可以继承接口  类可同时继承父类，和接口

// interface Animal{
//   eat(food:string):void;
// }
// interface Person extends Animal{
//   work(done:string):void;
// }
// class Web implements Person{
//   public name:string;
//   constructor(name:string){
//     this.name = name
//   }
//   eat(){
//     console.log(`${this.name}在吃东西`)
//   }
//   work(){
//     console.log(`${this.name}在写代码`)
//   }
// }
// var w = new Web('小李');
// w.eat();
// w.work();






interface Animal{
  eat(food:string):void;
}
interface Person extends Animal{
  work(done:string):void;
}

class Programmer{
  name:string;
  constructor(name:string){
    this.name = name
  }
  coding(code:string){
    console.log(`${this.name}在写${code}`)
  }
}


class Web extends Programmer implements Person{
  constructor(name:string){
    super(name);
  }
  eat(){
    console.log(`${this.name}在吃东西`)
  }
  work(){
    console.log(`${this.name}在写代码`)
  }
}
var w = new Web('小李');
w.coding('ts代码')