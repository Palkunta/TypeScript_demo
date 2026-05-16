/**
 * we want to define a common type for authentication(sign in/up) forms
 * This common type will take multiple parameters
 * - name of the form
 * - how to handle submission of the form
 * - how to handle reset of the form
 * - what should be the text of the submission button
 */

interface authForm {
    name : string ,
    submitButtonText : string ,
    onSubmit : (e : any) => void ,
    onReset : ( e : any) => void 
}

const loginForm : authForm = {
    name : "login Form" , 
    submitButtonText : "Log in" ,
    onSubmit : (e) => {
        // some impl...
    } ,
    onReset : (e) => {
        // some impl...
    }
}

console.log(loginForm);
