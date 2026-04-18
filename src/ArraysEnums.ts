
const coffeeFlavours : string[] = ["Latte", "Mocca", "Espresso", "Amricano"]
const pricesOfCoffee : number[] = [254, 857, 635, 210]

const cafeRatingOutOfFive: Array<number> = [4.5 , 4.1 , 4.3]

type CoffeeOrder = {
    name : string,
    price : number,
    quntity : number,
    isHot?: boolean,
    isCold?: boolean,
}

const cafeTime : CoffeeOrder[] = [
  {
      name : "Americano",
      price : 120,
      quntity : 2,
      isCold : true,
      isHot : false
  },
  {
      name : "Latte",
      price : 540,
      quntity : 2,
      isHot : true,
      isCold : false
  }
]

const citis: readonly string[] = ["Nagar", "Jalgaon"] // readyOnly mean can't add anything in this

//2d array

const table: number[][] = [
  [ 1 , 2, 3],
  [ 4 , 5, 6]
]

// ---------------------------------- *** ----------------------------------

// tuples

let arrays: [string, number, boolean] = [ "name", 24, true ]
// arrays = [ true ,"name", 24 ] // you can't change the position is restricted to the location


let numsArray : [ string, number, boolean? ] = [ "name", 24, true ]
 numsArray  = [ "name", 24  ] // also allow the option value but firstly declare it's optional

let numAreReadOnly : readonly[number, number] = [ 41.22, 58.88 ]

const coffeeItems : [ name : string, price : number, quntity :number ] = ["Mocca", 242, 2]


// ---------------------------------- *** ----------------------------------

// enums

enum CupSize  {
    LARGE,
    SMALL,
    MEDIUM
}

const size = CupSize.LARGE // restricted field


