"use strict";
// 2、typeScript中的数据类型
// typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型
//     布尔类型（boolean）
//     数字类型（number）
//     字符串类型(string)
//     数组类型（array）
//     元组类型（tuple）
//     枚举类型（enum）
//     任意类型（any）
//     null 和 undefined
//     void类型
//     never类型
// 布尔类型（boolean）
// var flag:boolean=true;
// flag = 123;  (报错)
// flag=false;
// 数字类型（number）
// var num:number=123;
// num='123';  (报错)
// num =456;
// 字符串类型(string)
// var str:string='aaaa';
// str = 123; (报错)
// str='123'
// 数组类型（array）  ts中定义数组有两种方式
// 1.第一种定义数组的方式
// var arr:number[]=[1,2,3];
// console.log(arr);
//2.第二种定义数组的方式
// var arr:Array<number>=[1,22,3];
// console.log(arr);
//3.第三种定义数组的方式
// var arr3:any[]=['12',1,true];
// console.log(arr3);
// 元组类型（tuple）  属于数组的一种
// let arr:[number,string]=[123,'11']; //一一对应
// console.log(arr);
// 枚举类型（enum）
// enum 枚举名{ 
//   标识符[=整型常数], 
//   标识符[=整型常数], 
//   ... 
//   标识符[=整型常数], 
// } ;  
// enum flag{
//   success=1,
//   error=2
// }
// let s:flag=flag.success;
// console.log(s);
// enum color{
//   blue,
//   red=5,
//   'orange'
// }
// var c:color=color.red;
// var d:color=color.orange;
// console.log(c);  //5  如果标识符没有赋值 它的值就是下标
// console.log(d);  //6  
// 任意类型（any）
// var num:any=123;
// num='123';
// num=true;
// console.log(num)
//任意类型的用处
// var oBox:any=document.getElementById('box');
// oBox.style.color='red';
// null 和 undefined  其他（never类型）数据类型的子类型
// var num:number;
// console.log(num)  //输出：undefined   报错
// var num:undefined;
// console.log(num);   //输出：undefined   正确
//定义没有赋值就是undefined
// var num:number | undefined | null;
// num=123;
// num=undefined;
// num=null;
// console.log(num);
// var num:null;
// num=null;
// void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
// 正确的写法
// function run():void {
//   console.log('void');
// };
// run();
// function fun():number {
//   return 123;
// }
// fun();
//错误的写法
// function run():undefined{
//   console.log('123');
// }
// run();
// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。
//这意味着声明never的变量只能被never类型所赋值。
// var a:undefined;
// a=undefined;
// var b:null;
// b=null;
// var c:never;
// // c=123;  //错误的写法
// c=(()=>{
//   throw new Error('错误');
// })();
// console.log(a,b,c)
