// there can be generic interface as well...

interface customInterface<T1,T2>{
    property: T1;
    moreProperty: T2;
}


const obj : customInterface<number,string> = {
    property : 100 ,
    moreProperty : "abc"
}

console.log(obj);
