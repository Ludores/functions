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
  if(n == 14)return "quatoreze"
  if(n == 15)return "quinze"
  if(n == 16)return "seize"
  if(n == 16)return "seize"
  return "dix " + unit(n)
}

const tens = (n: number) => {
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

const hundred = (n: number) => {
  if(n < 0 || n > 9)return "unpossible"  
  if(n == 1)return "cent"
  return unit(n) + " cent"
}

export const numberToWords = (number: number) => {

  const [beforeComma, afterComma] = number.toLocaleString().split(",")

  if(afterComma)return ss(beforeComma) + ' virgule ' + ss(afterComma) 
}