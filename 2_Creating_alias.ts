// const result : { name : string , marks : number , address? : string } = {
//     name : "Kuntal" ,
//     marks : 52 ,
// }

// const result1 : { name : string , marks : number , address? : string } = {
//     name : "Rahul" ,
//     marks : 94 ,
// }

// const result2 : { name : string , marks : number , address? : string } = {
//     name : "Anurima" ,
//     marks : 99 ,
// }

// tiresome :(
// You can't just doing this again n again !


type details = { name : string , marks : number , address? : string } ;

// details is kind of an alias/nickname to { name : string , marks : number , address? : string }

const result : details = {
    name : "Kuntal" ,
    marks : 52 ,
}

const result1 : details = {
    name : "Rahul" ,
    marks : 94 ,
}

const result2 : details = {
    name : "Anurima" ,
    marks : 99 ,
}
