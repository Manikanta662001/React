import { type } from 'os';
import React from 'react'

const Practise = () => {
    //implicitly defining type
    //i.e., Typescript guess the type of data
    let str = 'manikanta'
    //error because it initially guess that it is string then we are trying to convert to number
    //   str = 88
    //explicitly defining type
    let val: number = 7
    // errror ,,Type 'string' is not assignable to type 'number' 
    //   val ='hai'
    //it will consider type as any
    const json = JSON.parse("55");
    console.log(json)
    //boolean
    let completed: boolean = true
    //any
    //any disables the  type checking i.e... it can be of any type
    let x: any = true
    x = 'vamsi'
    x = 67
    console.log(x, "X")
    //never
    //we can't set any data type if we use never
    // let msg:never = 'hai';
    //null 
    let result: null = null;
    console.log(result)
    //Array
    let array: readonly string[] = ['hello', 'bye']
    //if we use readonly  we can't edit or add new one
    //we can't push number
    // array.push(9)
    //we can push string
    // array.push('this')
    console.log(array)
    //declaring more than one type
    let scores: (string | number)[];
    scores = ['Programming', 5, 'Software Design', 4];

    let arr2: number[] = [1, 2, 3, 4]
    arr2.push(9, 10)
    console.log(arr2, "3030")
    const nums = [10, 20, 30]
    nums.push(40)
    console.log(nums, "NUMS")
    let head: number = nums[0]
    console.log(head, "HEAD")
    //tuple
    let mytuple: readonly [number, string, boolean] = [3, 'tuple', true]
    //we cannot because readonly prop
    // mytuple.push('Coding god')

    //named tuple
    let tuple2: [d: number, e: number] = [22.2, 55.3]
    console.log(tuple2, "TUPLE2")
    const [d, e] = tuple2
    console.log(d, e)
    //optional elements
    let bgColor, headerColor: [number, number, number, number?];
    bgColor = [0, 255, 255, 0.5];
    headerColor = [0, 255, 255];
    //object

    let Car: { type: string, model: string, price: number, year: number, milege?: number } = { type: 'Mahindra', model: 'Thar', price: 250000, year: 2023 }
    Car.milege = 2000;
    console.log(Car, "CAR")
    //
    const nameAgeMap: { [index: string]: number } = {};
    nameAgeMap.Mani = 45;
    // nameAgeMap.vamsi='king'
    console.log(nameAgeMap)

    const a: string[] = ['raju', 'ramu', 'nidhi', 'rajesh'];
    const b: string[] = ['gopal', 'gani', 'gaja', 'maruthi'];
    const c: string[] = ['ramesh', ' suma', 'ganesh', ' vignesh'];
    const finalarr = [a, b, c]
    console.log(finalarr, 'FINALARR')
    //An enum is a special "class" that represents a group of constants
    // enums----numeric
    //default first value is 0 i.e. , North=0
    //also we can set initial value
    enum directions { North = 10, south, east, west }

    const no = directions.North
    const so = directions.south
    let ea = directions.east
    //we cannot assign
    // ea='EAST'
    console.log(no, 'NORTH')
    console.log(so, 'SOUTH')
    console.log(ea, 'EAST')

    //setting values
    enum StatusCodes {
        NotFound = 404,
        Success = "200",
        Accepted = 202,
        BadRequest = 400
    }
    // logs 404
    console.log(StatusCodes.NotFound);
    // logs 200
    console.log(StatusCodes.Success);
    //enums example2
    enum Month {
        Jan,
        Feb,
        Mar,
        Apr,
        May,
        Jun,
        Jul,
        Aug,
        Sep,
        Oct,
        Nov,
        Dec
    };
    console.log(Month.Feb)
    function isItSummer(month: Month) {
        let isSummer: boolean;
        switch (month) {
            case Month.Jun:
            case Month.Jul:
            case Month.Aug:
                isSummer = true;
                break;
            default:
                isSummer = false;
        }
        return isSummer;
    }
    console.log(isItSummer(Month.Aug))

    //string enums
    enum CardinalDirections {
        North = 'North',
        East = "East",
        South = "South",
        West = "West"
    };
    // logs "North"
    console.log(CardinalDirections.North);
    // logs "West"
    console.log(CardinalDirections.West);

    //Aliases syntax
    // type alias = Datatype;
    // let msg : alias;
    //Type Aliases canbe used for all Datatypes
    type CarYear = number
    type CarType = string
    type CarModel = string
    type Car = {
        year: CarYear,
        type: CarType,
        model: CarModel,
    }
    const carYear: CarYear = 2000;
    const carType: CarType = "Benz";
    const carModel: CarModel = "Mercedes";
    const car: Car = {
        year: carYear,
        type: carType,
        model: carModel

    }
    //
    type Bike = {
        name: string,
        model: number,
        price: number
    }
    let bike: Bike = {
        name: "Pulsar150",
        model: 2020,
        price: 100000
    }
    //
    type chars = string;
    let messsage: chars; // same as string type
    type alphanumeric = string | number | boolean;
    let input: alphanumeric;
    input = 100; // valid
    input = 'Hi'; // valid
    input = false;

    type Person = {
        name: string;
        age: number;
    };
    const person: Person = {
        name: 'ram',
        age: 22
    }
    //interfaces syntax
    // interface interfaceName{
    // property:DT?,
    // property:DT?,
    // }
    //interfaces is only applicable to objects

    interface Reactangle {
        width: number,
        height: number
    }
    const rectangle: Reactangle = {
        width: 300,
        height: 100
    }
    // 
    interface User {
        readonly ssn: string,
        fName: string,
        mName?: string,
        lName: string,
        gender: string,
    }
    function getFullName(person: User) {
        if (person.mName) {
            return `${person.fName} ${person.mName} ${person.lName}`
        }
        return `${person.fName} ${person.lName} `
    }
    let john = {
        ssn: '171-28-0926',
        fName: 'John',
        // mName:"K",
        lName: 'Doe',
        gender: 'Male'
    };
    console.log(getFullName(john))
    john.ssn = '88975121'

    //
    interface MathOperations {
        (a: number, b: number): number
    }
    const multiply: MathOperations = function hello(num1, num2) {
        return num1 * num2
    }
    console.log(multiply(22, 22))
    //
    interface StringFormat {
        (str: string, Upper: boolean): string
    }
    let format: StringFormat;

    format = function (str, isUpper) {
        return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
    };

    console.log(format('hi', true));
    //extending interfaces
    //i.e getting properties from parent plus other properties

    interface ColoredRectangle extends Reactangle {
        color: string
    }
    const coloredRectangle: ColoredRectangle = {
        width: 600,
        height: 300,
        color: 'blue'
    }
    //Union | (OR)

    const Statuscode = (code: number | string) => {
        console.log('Statuscode is ', code, typeof code)
    }
    Statuscode(200)
    Statuscode('400')


    let columns: string | number
    columns = 'col';
    columns = 66;
    //mentioning datatypes of return values in function
    const Timed = (): number => {
        return (new Date().getTime())
    }
    console.log(Timed(), "TIME")

    //if a function doesnot return any value then void shold be used
    function printHello(): void {
        console.log('Hello!');
    }
    printHello()

    //function Parameters

    function multiplication(a: number, b: number): number {
        console.log(a * b, "MULTIPLY")
        return a * b
    }
    multiplication(10, 20)
    console.log(multiplication(11, 22))

    //type alias of function
    let add: (x: number, y: number) => number;
    add = function (x, y) {
        return x + y;
    };
    console.log(add(10, 20))
    // the `?` operator here marks parameter `c` as optional
function multiplicate(a: number, b: number, c?: number):number {
    return a * b * (c || 1);
  }
  console.log(multiplicate(12,2))
//   Default Parameters
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }
  console.log(pow(2),"POWER")
  //rest parameters
  function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
    return (
        <div>
            <h1>{str}</h1>
            <h6>{val}</h6>
            <h6>{completed}</h6>
            <h6>{scores}</h6>
            <h6>{mytuple}</h6>
            <h6>{bgColor}</h6>
            <h6>{headerColor}</h6>
        </div>
    )
}
export default Practise;