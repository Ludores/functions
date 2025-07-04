const unit = (n: number) => {
  if(n < 0 || n > 9)return "unpossible"  
  const obj = {
    0: "",
    1: "un",
    2: "deux",
    3: "trois",
    4: "quatre",
    5: "cinq",
    6: "six",
    7: "sept",
    8: "huit",
    9: "neuf",
  }
  return obj[n]
}

const ten = (n: number) => {
  if(n <= 10 || n > 19)return "unpossible"
  if(n == 11)return "Onze"
  if(n == 12)return "douze"
  if(n == 13)return "treize"
  if(n == 14)return "quatorze"
  if(n == 15)return "quinze"
  if(n == 16)return "seize"
  if(n == 16)return "seize"
  return "dix " + unit(n)
}

const tenIndex = (n: number) => {
  if(n < 0 || n > 9)return "unpossible"  
  const obj = {
    1: "dix",
    2: "vinght",
    3: "trente",
    4: "quarente",
    5: "cinquante",
    6: "soixante",
    7: "soixante-dix",
    8: "quatre vinght",
    9: "quatre vinght dix",
  }
  return obj[n]
}

const tens = (n: number) => {
  if(n<10)return unit(n)
  if(n<20)return ten(n)
  return `${tenIndex(Math.floor(n/10))} ${unit(n%10)}`
}

const hundred = (n: number) => {
  if(n < 100)return tens(n)
  else if (n < 200)return `cent ${tens(n%100)}`
  else return `${unit(Math.floor(n/100))} cent ${tens(n%100)}`
}

const index = [
  "mille",
  "million",
  "milliard",
  "billion",
  "billiard",
  "trillion",
  "trilliard",
  "quadrillion",
  "quadrilliard",
  "quintillion",
  "quintilliard",
  "sextillion",
  "sextilliard",
  "septillion",
  "septilliard",
  "octillion",
  "octilliard",
  "nonillion",
  "nonilliard",
  "décillion",
  "décilliard"
]


//function numberto words
//function numberto words
export const numberToWords = (number: number) => {

  if(!number)return "impossible"
  const [beforeComma, afterComma] = number.toString().split(",")
  
  if(parseInt(beforeComma).toLocaleString().replace(/\u202F/g, ' ').split(" ").length == 1)return hundred(parseInt(beforeComma))
  let numbers = beforeComma.split(" ")
  let indexBegin = numbers.length - 2
  let result = ""
  for(let i = indexBegin; i>= -1 ; i--){

    if(i == -1)result = result + hundred(parseInt(numbers[0]))
    else result = result + " " + hundred(parseInt(numbers[0])) + index[i]
    numbers.slice(1, numbers.length)
  }
  return result
}