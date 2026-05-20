type pairOfNumbers = [any, any];
type pairOfNumberAndString = [number, string];


// function linearSearch(array : any[] , k : any): pairOfNumbers {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] == k) return [i, array[i]]; 
//     }
//     return [-1,-1];
// }


// function linearSearchForString(array : string[], x : string) : pairOfNumberAndString {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] == x) return [i, array[i]]; 
//     }
//     return [-1, ""];
// }


// const array : number[] = [1,2,5,1,2,3,54,0,6,-2,3];
// console.log(linearSearch(array, 12));

// const stringArray : string[] = ["abc", "def", "ghi", "jk"];
// console.log(linearSearch(stringArray, "jk"));

// problem with "any" --> acts like JS...then what's the point of type
// of typescript ?

// what is the solution here ? --> Generics

// "Generics Types" allowed us to create specific types
// by allowing us to pass types as parameters

// using Generics, you will actually be able to define certain 
// functions , classes , DS anything ...of any particular types 
// by telling what should be the type 
// at the time of creation of the fn,ds or anything else..


// advantage of generics --> can avoid code duplication

// <T> --> denoting what is the generic type you want to keep in
// the whole fn

// lets say the array and k -- both will be of same generic type
// as that of fn

function linearSearch<T,R>(array : T[] , k : T , y : R): [number,T] {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == k) return [i, array[i]]; 
    }
    console.log(y);
    return [-1,k];
}


const array : number[] = [1,2,5,1,2,3,54,0,6,-2,3];
console.log(linearSearch<number,string>(array, 12 ,"This ?"));

const stringArray : string[] = ["abc", "def", "ghi", "jk"];
console.log(linearSearch<string,number>(stringArray, "jk" , 9));

// same like generic function , we can create generic class as well...

class Stack<T>{
    // whatever the type of stack...the same type will be the array

    private array : T[];

    constructor(){
        this.array = [] ;
    }

    push( k : T) : void{
        this.array.push(k);
    }
    pop() : void {
        this.array.pop() ;
    }
    top() : T {
        return this.array[this.array.length - 1];
    }
    display() : void {
        console.log(this.array);
    }
}

const st = new Stack<number>();
st.push(1);
st.push(2);
st.push(3);
st.push(4);

st.display();

console.log(st.top());
st.pop() ;
st.display();
