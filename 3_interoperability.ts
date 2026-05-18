let fname : string = "KP";
//fname = 5 ;                 //Type 'number' is not assignable to type 'string'.

let schoolname : "DAV" | "DPS" = "DAV";
let another : string = "...something..." ;
//schoolname = another ;      //Type 'string' is not assignable to type '"DAV" | "DPS"'.
another = schoolname ;        // NO ISSUES :)

console.log(another);

// similar kind of structure you will see in objects

type complex = {
    real : number ,
    imag : number ,
    def : number
}

interface icomplex {
    real : number ,
    imag : number ,
    // add : (c : complex) => complex;
    ran : number 
    def : 0 | 1 | "abb" //will show error for c1 = c2 . since c1 can only accept number as def. but here string..
}

let c1 : complex = {
    real : 10 , 
    imag : 10 ,
    def : 101
}

let c2 : icomplex = {
    real : 9 , 
    imag : 9 ,
    // add : (c) => c 
    ran : 10,
    def : 1
}
// TS will consider both complex and icomplex as same , since their members are same
// although the names are diff , still it doesnot matter
console.log(c2);

//c1 = c2 ; // c1 reuire a bare minimum 2 --> real and imag
// c2 has those 2 + ran . that's why no error shown by TS

//c2 = c1;  //c2 reuire a bare minimum 3 --> real and imag and ran
//// c1 has those 2 only . that's why error shown by TS
console.log(c2);  



// similar kind of things are also visible with functions



type complex1 = {
    real : number ,
    imag : number ,
    add : ( c : complex1) => complex1;
}

interface icomplex1 {
    real : number ,
    imag : number ,
    add : (c : icomplex1 , i : number) => icomplex1;
}
    

let c11 : complex1 = {
    real : 10 , 
    imag : 10 ,
    add : (c : complex1) =>{
        return c ;
    }
}

let c12 : icomplex1 = {
    real : 9 , 
    imag : 9 ,
    add : (c :icomplex1, i : number) => {
        return c ;
    }
    
}

//c11 = c12; // although bare minimum satisfied , but the signature params are not matched


// So, we need to be extra careful while assigning one object to another
// why ? because objects can have functions as one of the member key-val pairs. &
// with functions the exact signature structure should be matched .
