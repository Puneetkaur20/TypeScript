// let age:number=10;
// if(age<50)
// {
//     age+=10;
// }

// let sales:number = 123456;
// let sale = 90;
// let naame:string = "puneet";
// let account:boolean = true;

// function render(document){
//     console.log(document);
// }

// let numbers:number[]=[1,2,3];
// // let no=[];                              Arrays
// numbers.forEach(n => n.toExponential)

// Tuples                  FIXED LENGTH     (key-value pairs.)
// let user:[number,string]=[1,'abcd']
// user[1].concat

// Enums (list of const variables)
// const enum Size{small=1,medium,large};   //const -> more optimised code
// let mySize:Size = Size.medium;
// console.log(mySize);


// Functions        TS is particular about how many paramters are passed

// function calculateTax(income:number,taxYear:number):number{
//     // let car=20;         we can overwrite default value also in arguments, ? used for optional value-> gives undefined value data type
//     if(taxYear<2022)
//     {
//         return income*1.2;        //noUnsedLocals,noImplicitReturns,noUnsedParameters
//     }
//     return income*1.3;
// }

// calculateTax(10_000,2021);


// Objects
// let customer = {id:1};
// customer.name="abcd"

let employee:{readonly id:number,
    name:string, 
    retire:(date:Date)=>void
} = {id:1,
    name:"abcd",
    retire:(date:Date)=>console.log(date)};

// employee.id = "a";


// alias       (type)
// type Employee={
//     readonly id:number,
//     name:string, 
//     retire:(date:Date)=>void
// }

// let employee:Employee={
//     id:1,
//     name:"abcd",
//     retire:(date:Date)=>console.log(date)
// }

// Union |
function kgToLbs(weight:number |string) : number{
    // narrowing
    if(typeof weight === 'number')
      return weight*2.2;
    return parseInt(weight)*2.2; //passes string returns number
}

kgToLbs(10);
kgToLbs('10kg');

// Intersection &
type dragable ={
    drag:()=>void
};
type resuable={
    reuse:()=>void
};

type UIWidget = dragable & resuable;

let textBox:UIWidget = {
    drag:()=>{},
    reuse:()=>{}
}

// Literal Types(exact,specific)   to limit the values

type Quantity = 50 | 100;
let q:Quantity= 100;

type metric = 'cm' | 'm';

// Nullable Types  (strictNullChecks)

function greet(name:string | null){
    if(name)
       console.log(name.toUpperCase());
    else
       console.log('Hola');
}
greet(null);

// chaining .
 type customer ={
    birthday?:Date
 }

 function getCustomer(id:number):customer | null | undefined{
    return id===0 ? null : {birthday:new Date()};
 }

 let cust = getCustomer(1);
//  optional property access operator
console.log(cust?.birthday?.getFullYear());
// optional element access operator
// (used for arrays)
// customer?.[0]

// optional call
let log: any = null;
log?.('a');