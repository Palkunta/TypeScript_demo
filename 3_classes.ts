/*
class Product {
    name : string ;
    price : number | undefined;
    constructor(name : string , price? : number ){
        this.name = name ;
        this.price = price ;
    }
    display() : void {
        console.log("The name of the product is ",this.name," and the price is ",this.price);
    } 

    setPrice(p:number):void{
        if( p <= 0)return;
        this.price = p ;
    }
}

const p1 = new Product("Iphone",10000);
console.log(p1);

p1.price = 40 ; // someone (any ?) changed the price...but shouldn't have access

console.log(p1);

*/

// we need to use GETTER & SETTER ...+ hide the properties from outsiders (use private)


class Product {
    private name : string ;
    private price : number | undefined;
    // we want --> anyone shouldn't be able to change category after initialized inside constructor
    // private category: string ; outsiders can't access. But insiders could ...

    readonly category : string ;
    // now category can only be changed(init) inside constructor & then it can't be changed from anywhere..
    readonly tags : string[];  
    constructor(name : string , category: string , price? : number ){
        this.name = name ;

        this.category = category;
        this.price = price ;
        this.tags = ["KP","AG","T"];
    }
    display() : void {
        console.log("The name of the product is ",this.name," and the price is ",this.price);
        this.tags[0] = "something";//doable even if tags is declared using readonly.
        // the issue is --> using readonly or const , you can't assign another object toit ,
        // but you can change the key-val pairs inside it.

        //reassignment can't be done for these obj
        // this.tags = [] ; Cannot assign to 'tags' because it is a read-only property.
        //this.tabs[0] = "something";  is okay .
    } 

    setPrice(p:number):void{
        if( p <= 0)console.error("ERRRRRRRRRRR");
        this.price = p ;
    }
    /*
    buggyFunction() : void { // by mistake , tries to update category ( which should not..)
        this.category = "";
    }
    can't be doable now , since category is now readonly
    */
}

const p1 = new Product("Iphone","Electronics",10000);
console.log(p1);

//p1.price = 40 ; // Property 'price' is private and only accessible within class 'Product'.

p1.setPrice(20);
p1.setPrice(-200);

console.log(p1);

// p1.category = ""; //Cannot assign to 'category' because it is a read-only property.

const brr = [1,2,3];
brr[0] = 20;
console.log(brr);  // NO ERRORR

//can happen with const...but is that possible with readonly ?

