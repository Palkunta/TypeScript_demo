// type v/s interface

type username = string ;
// something like this( alias ) is doable with 'type' , but not with 'interface' 



// defining custom names for non-primitives like - array
// both interface & type capable of that

// for defining custom arrays --> type keyword is more easy as compared to i/f

type myArray = string[];

// For creating custom array -->
// using an interface , we will define object , which will be always having keys of type -> number & the values to
// be the type of that array
interface numberArray {
    [index : number] : number ;
}

// let's say we want to define a pair or a triplet or a custom tuple( a set of x values )

// type will be easy for That

type pair = [number,number];
type triplet = [ number , number ,number ];

// we can also use interface for this tuple-creating

interface pairTuple{
    //key-val pairs
    first : number ,
    second : number 
}

// can we also define functions using type and interface ? --> YES

type logger = ( msg : string , errCode : number) => void ;

interface loggerInterface {
    (msg : string , errCode : number ) : void ;
}


// defining unions is possible with types , but not with interfaces

type unionOfstr_num = number | string ;

//if you are defining interfaces , you can define it in multiple parts and
// at last TS is going to merge them all together

interface comNumber {
    real : number ,
    imaginary : number
}

interface comNumber {
    add : ( num : comNumber) => comNumber ;
}

// will be equiv. to....

interface comNumber {
    real : number ,
    imaginary : number ,
    add : ( num : comNumber) => comNumber ;
}
