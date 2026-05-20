// let's write a linked-list 

class node<y>{
    data : y;
    forward : node<y> | null ;
    constructor(data:y){
        this.data = data ;
        this.forward = null ;
    }
}

class LinkedList<y>{

    head : node<y> | null ;

    constructor(){
        this.head = null ;
    }
    add_at_head(k:y):void{
        if( this.head == null){
            this.head = new node(k);
            return;
        }
        const newnode : node<y> = new node(k);
        newnode.forward = this.head ;
        this.head = newnode ;

    }
    display():void{
        let temp : node<y> | null = this.head ;
        while( temp != null ){
            console.log(temp.data);
            temp = temp.forward ;
        }
    }

}

let ll = new LinkedList<number>() ;
ll.add_at_head(1);
ll.add_at_head(2);
ll.add_at_head(3);
ll.add_at_head(4);
console.log(ll.head,"ami");
ll.display();

class Person{
    name : string ;
    constructor(name:string){
        this.name = name ;
    }
}
// you can make a new LinkedList of Person..

let ll1 = new LinkedList<Person>() ;
ll1.add_at_head(new Person("KP"));
ll1.add_at_head(new Person("anuri"));
ll1.add_at_head(new Person("priya"));
ll1.add_at_head(new Person("soumya"));
console.log(ll1.head,"ami");
ll1.display();
