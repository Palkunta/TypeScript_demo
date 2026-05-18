/**
 * ComplexNumber
 *  - what will be the data members ? 
 *  - write two member functions 
 *      - add two complex numbers
 *      - multiply two complex numbers
 */

class ComplexNumber{
    private real : number ;
    private imag : number;
    constructor( real : number , imag : number ){
        this.real = real ;
        this.imag = imag ;
    }
    display() : void {
        console.log(`${this.real} + i${this.imag}`);
    }
    add ( g : ComplexNumber):void{
        this.real = this.real + g.real ;
        this.imag = this.imag + g.imag ;
    }
    multiply ( g : ComplexNumber):void{
        const newreal = (this.real * g.real) - (this.imag * g.imag) ;
        const newimag = (this.real * g.imag) + (this.imag * g.real) ;
        this.real = newreal;
        this.imag = newimag;
    }
}

let c1 : ComplexNumber = new ComplexNumber(2,3);
let c2 : ComplexNumber = new ComplexNumber(5,7);
c1.display();
c2.display();

c1.multiply(c2);
c1.display();
