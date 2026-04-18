
type coffeeOrder = {
   typeOfOrder : string,
   mlOfMilk : number,
   isOrder : boolean
}


function servedLatte(order : coffeeOrder) {
  console.log(order)
}

function serveExpresso (order :coffeeOrder) {
  console.log(order)
}

type CoffeeRecipe = {
    water : number,
    milk : number
}

class MakeALatte implements CoffeeRecipe {
  water = 24;
  milk = 24
}

interface cupeSize {
  size : "small" | "large"
}

class CupsOfSizes implements cupeSize {
  size: "small" | "large" = "small"
}

type CoffeeBase = { coffeeBeans : number }
type Extra = { chocolate : number }


type  Latte = CoffeeBase & Extra // both are imp


const cup : Latte = {
  coffeeBeans : 2,
  chocolate : 3
}


type User = {
  username : string,
  bio? : string // optional value for (** behave like optional value)
}

const user1 : User = {
  username : "Laxman"
}

const user2 : User = {
  username : "Lakhan",
  bio : "new user"
}

type Config = {
   readonly appName : string,
  version : number
}

const cfg : Config = {
  appName : "Edufusion",
  version : 1
}

// cfg.appName = "Jarvsc" // you can't change this beacuse already set, ( ** onece he value set then didn't change at all )




