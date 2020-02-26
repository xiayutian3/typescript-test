"use strict";
// 3、typeScript中的函数
//     3.1、函数的定义
//     3.2、可选参数
//     3.3、默认参数
//     3.4、剩余参数
//     3.5、函数重载
//     3.6、箭头函数  es6
// 3.1、函数的定义
//函数声明法
// function run():string{
//   return 'asd';
// }
// alert(run());
//匿名函数
// var run = function():number{
//   return 123;
// }
// alert(run());
//ts中定义方法传参
//函数声明法
// function getInfo(name:string,age:number):string{
//   return `我是${name}，我的年龄是${age}`
// }
// alert(getInfo('张三',22))
//匿名函数
// var getInfo = function(name:string,age:number):string{
//   return `我是${name}，我的年龄是${age}`
// }
// alert(getInfo('张三',22))
//没有返回值的方法
// function run():void{
//   console.log('asd')
// }
// run();
// 3.2、方法可选参数 
//注意:可选参数必须配置到参数的最后面
// function getInfo(name:string,age?:number):string{
//   if(age){
//     return `${name}---${age}`
//   }else{
//     return `${name}`
//   }
// }
// alert(getInfo('张三'));
// alert(getInfo('张三',123));
// 3.3、默认参数 可选参数
// es5里面没法设置默认参数，es6和ts中都可以设置默认参数
// function getInfo(name:string,age:number=45):string{
//   if(age){
//     return `${name}---${age}`
//   }else{
//     return `${age}`
//   }
// }
// alert(getInfo('zhang'));   //zhang  45
// alert(getInfo('zhang',22)); //zhang  22
// 3.4、剩余参数
// function  sum(a:number,b:number,c:number,d:number):number{
//   return a+b+c+d
// }
// alert(sum(1,2,3,4));
//三点运算符 接受新参传过来的值
// function sum(...arr:number[]):number{
//   var sum = 0;
//   for(var i=0;i<arr.length;i++){
//     sum+=arr[i];
//   };
//   return sum;
// }
// alert(sum(1,2,3,4,5));
// function sum(a:number,b:number,...arr:number[]):number{
//   var sum = a+b;
//   for(var i=0;i<arr.length;i++){
//     sum+=arr[i];
//   };
//   return sum;
// }
// alert(sum(1,2,3,4,5));
// 3.5、ts函数重载
// java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
// typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
//ts为了兼容es5 以及 es6 重载的写法和java中有区别。
// function getInfo(str:string):string;
// function getInfo(str:number):string;
// function getInfo(str:any):any{
//   if(typeof str == 'string'){
//     return `我叫：${str}`
//   }else{
//     return `我的年龄是：${str}`
//   }
// }
// alert(getInfo('张三'));  //正确
// alert(getInfo(123));   //正确
// alert(getInfo(true));   //错误，在方法重载中，没有找到匹配的类型
// function getInfo(name: string): string;
// function getInfo(name: string, age: number): string;
// function getInfo(name: any, age?: any): any {
//   if (age) {
//     return `我叫${name},我的年龄是${age}`
//   } else {
//     return `我叫${name}`
//   }
// };
// alert(getInfo('张三'));   //正确
// alert(getInfo(123));   //错误
// alert(getInfo('李四', 45));  //正确
// 3.6、箭头函数  es6 
//this指向的问题    箭头函数里面的this指向上下文
// setTimeout(function(){
//     alert('run')
// },1000)
// setTimeout(() => {
//   alert('run')
// }, 1000)  
