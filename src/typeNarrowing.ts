function makeCoffee ( typeOfCoffee : string | number) {
    if(typeof typeOfCoffee === "string") {
      return `Making your ${typeOfCoffee} ..... `
    }
    return `Making Default Coffee`
}

function servingCoffee(msg? : string) {
  if(msg) {
      return `Serving ${msg}`
  }
    return `Serving default coffee`
}

function orderCoffee(sizeOfCoffee : "small" | "medium" | "large" | number ) {
    if(sizeOfCoffee === "small") {
      return `Your small coffee will ordered now` ;
    } else if (sizeOfCoffee === "medium" || sizeOfCoffee === "large") {
      return `Making extra coffee for ordered` ;
    }
    return `Your order of ${sizeOfCoffee} will ordered now ` ;
}

class Laate{
    serve() {
      return `serving your LAATE`;
    }
}

class Moca {
  serve() {
    return `servering your MOCA` ;
  }
}

function serve(coffee : Laate | Moca) {
  if(coffee instanceof Laate) {
      return coffee.serve()
  }
}

// defiend type
type CoffeeOrder = {
    type : string,
    coffeePowder : number
}

function isOrderCoffee(obj : any):obj is CoffeeOrder{
    return (
        typeof obj === "object" &&
        typeof obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.coffeePowder === "number"
    )
}

function serverOrder(item: CoffeeOrder | string){
    if(isOrderCoffee(item)) {
        return `Serving ${item.type} with ${item.coffeePowder} table spoon....`
    }
    return `Serving custom coffee : ${item}`
}

type MocaCoffee = { type :  "Moca" , coffeePowder : number }
type LateCoffee = { type :  "Late" , coffeePowder : number }
type EspressoCoffee = { type :  "Espresso" , typeOfCoffeeStrongenes : number }

type Coffee = MocaCoffee | LateCoffee | EspressoCoffee

function MakeCoffee(order : Coffee) {
      switch (order.type) {
        case "Moca":
          return ` Your Moca will be ready in 10min `
          break;
        case "Late":
          return ` Your Late will be ready in 8min `
          break;
        case "Espresso":
          return ` Your Espresso will be ready in 5min `
          break;
      }
}

// 01.23.20
