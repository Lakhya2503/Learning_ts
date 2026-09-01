let reponaw: any = "13";
console.log(reponaw)

type Book = {
  name:  string
}

let bookString = '{ " name " : " Night walk....! " }'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject)

const inputElement = document.getElementById("username") as HTMLInputElement

let anyValue : any ;
anyValue = "24125"
anyValue = [24,42,5]
anyValue = 351
anyValue.toUppercase()

let unknownValue : unknown ;
unknownValue = "35"
unknownValue = [24,42,5]
unknownValue = 351

if(typeof unknownValue === "string") {
  unknownValue.toLocaleUpperCase()
}


try {

} catch (error) {
    if(error instanceof Error) {
        console.log(error.message)
    }
    console.log(error)
}


type Role  = "admin" | "user" | "superAdmin"

const renderExprections = function (role : Role) : void {
    if( role === "admin") {
        console.log("Redirect to admin dashboard")
        return ;
    }
    else if (role === "user") {
       console.log("Redirect to user dashboard")
        return ;
    }
    role;
}

// this is infinit loop
function neverReturn ( ) : never {
    while(true) {}
}


























//
