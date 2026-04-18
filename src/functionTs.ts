function makeCoffe( type : string, cups : number ) {
  console.log(`${type} on the cups of ${cups}`)
}

makeCoffe("Latte", 3);

function makeLatte():number {
    return 25;
}

function makeMocca(order: string) {
      if(!order) return null;
      return order;
}

function orderCoffee( type? : string) {  // optional when type is coming from parameter otherwise didn't

}

function somethingDeff( type? : string):void {  // void mean didn't return anything at all

}

function somethingReturn(order : {
          type : string;
          price : number,
          quantity : number,
          ingredients : string[]
      }
):number {
                     return 3;
  }


  
