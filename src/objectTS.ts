
// // const coffee = {
// //   name : "Americano",
// //   price : 50,
// //   isCold : true
// // }

// // coffee = {
// //   type : string,
// //   price : number,
// //   isCold : boolean
// // }


// // type coffee = {
// //   type : string,
// //   price : number,
// //   isCold : boolean
// // }


// // let coffee = {
// //   type : "Americano",
// //   price : 235,
// //   isCold : true
// // }

// type Coffee = {
//   type : string,
//   price : number,
//   ingredients : string[]
// }


// // const Americano : Coffee = {
// //     type : "Americano",
// //     price : 2352,
// //     ingredients : ["Coffee Powder" , "Milk (optional)" , "Cold water" , "Ice Cube (optional)"]
// // }

// // duck type example

// type cup = {
//   size : string
// }

// let smallCup : cup = {
//   size : "150ml"
// }

// let bigCup = {
//   size : "200ml",
//   material : "paper cup"
// }

// smallCup = bigCup


// type TataGold = { noOfSpoonTataGold : number}

// const Expresso: TataGold = { noOfSpoonTataGold : 2 }

// const Americano:TataGold = Expresso


// // -------------------------------------------- *** -----------------------------------------------

// type  Americano = {
//     type : string,
//     price : number,
//     ingredients : string[]
// }

// const udpateCoffee = (updates : Partial<Americano>) => {
//     console.log(updates)
// }

// udpateCoffee({type : "Americano"})
// udpateCoffee({price : 135})
// udpateCoffee({ingredients : ["coffee powder", "milk", "water"]})



// type OrderType = {
//       name? : string,
//       quantity? : number
// }


// const coffeeOrder = ( order : Required<OrderType> )=> {
//   console.log(order)
// }

// coffeeOrder({
//     name : "Americano",
//     quantity : 1
// }) // even if declare else but value are bin decleare



type Coffee = {
  name : string,
  price : number,
  quntity : number,
  ingredients : string[]
}


type BasicCoffeeInfo = Pick<Coffee, "name" | "price" | "quntity">  // it's same like paritial or required

const chaiInfo : BasicCoffeeInfo = {
    name : "Expresso",
    price : 24,
    quntity : 1
}

type NewCoffeeOrder = {
  name : string,
  price : number,
  quntity : number,
  secretIngredients : string[]
}


type publicCoffee = Omit<NewCoffeeOrder, "secretIngredients">
