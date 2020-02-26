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

6、typeScript中的泛型

    6.1 泛型的定义
    6.2 泛型函数
    6.3 泛型类
    6.4 泛型接口
   
*/


/*

泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。


通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)

*/

//只能返回string类型的数据
// function getData(value:string):string{
//   return value;
// }

//同时返回 string类型 和number类型  （代码冗余）
// function getData1(value:string):string{
//   return value;
// }
// function getData2(value:number):number{
//   return value;
// }

//同时返回 string类型 和number类型       any可以解决这个问题

//any放弃了类型检查,传入什么 返回什么。比如:传入number 类型必须返回number类型  传入 string类型必须返回string类型
// function getData(val:any):any{
//   return val
// }


// 泛型：可以支持不特定的数据类型   要求：传入的参数和返回的参数一直
// T表示泛型，具体什么类型是调用这个方法的时候决定的
// function getData<T>(value:T):T{
//   return value
// }
// getData<number>(12);
// getData<string>('123');

// getData<number>('123');    //错误


// function getData<T>(value:T):any{
//   return 'hahah'
// }
// getData<number>(123);
// getData<string>('这是一个泛型');




// 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串 a  -  z两种类型。  通过类的泛型来实现
// class MinClass{
//   public list:number[]=[];
//   add(num:number):void{
//     this.list.push(num)
//   }
//   min():number{
//     var minNum=this.list[0];
//     for(var i=0;i<this.list.length;i++){
//       if(minNum>this.list[i]){
//         minNum = this.list[i];
//       }
//     }
//     return minNum;
//   }
// }
// var m = new MinClass();
// m.add(2);
// m.add(5);
// m.add(8);
// alert(m.min());



//类的泛型

// class MinClass<T>{
//   public list:T[]=[];
//   add(value:T):void{
//     this.list.push(value)
//   }
//   min():T{
//     var minNum=this.list[0];
//     for(var i=0;i<this.list.length;i++){
//         if(minNum>this.list[i]){
//             minNum=this.list[i];
//         }
//     }
//     return minNum;
//   }
// }
// var m1 = new MinClass<number>();
// m1.add(5);
// m1.add(1);
// m1.add(9);
// alert(m1.min());


// var m2 = new MinClass<string>();
// m2.add('a');
// m2.add('f');
// m2.add('b');
// alert(m2.min());



//函数类型接口(之前)
// interface Config{
//   (value1:string,value2:string):string;
// }
// var getData:Config=function(a:string,b:string):string{
//   return a+b
// }
// getData('haha','heihei');



//1、泛型接口
// interface ConfigFn{
//   <T>(value:T):T;
// }
// var getData:ConfigFn=function<T>(value:T):T{
//   return value;
// }
// getData<string>('123');
// getData<number>('123');  //错误

//2、泛型接口（另一种写法）
interface ConfigFn<T>{
  (value:T):T;
}
function getData<T>(a:T):T{
  return a;
}
var myData:ConfigFn<string>=getData;
myData('aa');
console.log(myData('aa'));