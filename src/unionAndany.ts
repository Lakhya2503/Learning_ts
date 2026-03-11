// when scinario is like u wan't both use data types like string and number

// ex.
// so he can store the number or string
let subScriber : string | number = 15
let subScriberOfchannel : string | number = "15"

// ------------------------------- end -------------------------------

// create own data type but i wil only use this only didn't use any other
let ApiRequestTyp : "pending" | "success" | "cancel" = "success"
ApiRequestTyp = "pending"
// for example
// ApiRequestTyp = "done" when u override this or anyother not from own data type or any other then he
//   give the error like

//  ```
// Type '"done"' is not assignable to type '"pending" | "success" | "cancel"
// ```

let whatTypeOfOSUse: "LInux" | "Windows" | "MacOs" = "Windows"

// you'll use any of then on three but can't use other os since you will override bitween three of us

// ex .
// whatTypeOfOSUse = "firefox"  // then he give you a error
// but you can use in three

whatTypeOfOSUse = "LInux"

// ------------------------------- end -------------------------------

// use in other type also like

// scinario create and then catch them


let orders = ["25","64","74","72","74"]
let orderOfTea:string | undefined;  // when u give them as a string ..... given below other comment...
// you will give the string but not confirm beacuse he will all loop that's he will not sure then give them to the string | undefined

for( const order of orders) {

  if(order === "74") {
    orderOfTea = order
    break
  }
}
console.log(orderOfTea)

// ------------------------------- end -------------------------------
