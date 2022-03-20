//1) do step
function doStep(a, b, step) {
  for(let i = a; i <= b; i += step) {
    console.log(i)
  }
}
doStep(10, 100, 20) 


//2) find symbol
function findSymbol(text, symbol) {
  let result = 0
  for(let i = 0; i < text.length; i++){    
    if(text[i] === symbol) {
      result += 1
    }    
  }
  console.log (result)
}
findSymbol("another string", "t")


// 3) is palindrome
function isPalindrome (string){
  let newString = ''
  for(let i = string.length-1; i >= 0 ; i--){
    newString += string[i]
  }
  return (string === newString)?'is Palindrome':'is not palindrome'
}
console.log (isPalindrome("madam"))
//else
function isPalindrome(string) {
  for(let i = 0; i <= string.length / 2; i++) {
    if(string[i] !== string[string.length - 1 - i]){
      return "is not palindrome"      
    }
  }
  return "is palindrome"
}
console.log(isPalindrome("madam"))

// 4) max in array 
function maxInArray(array) {
  let result = -Infinity;
  for(let i = 1; i < array.length; i++){ 
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[i]){
        result = array[j]
      }
      }
    }
  return result
}
console.log(maxInArray([1, 10, 2, -120, 48, 58, 38]) )


// 5) product between two neighbours
function newArray(array) {
  let newArray = []
  for(let i = 0; i < array.length - 1; i++) {
    newArray[i] = array[i] * array[i + 1]
  }
  return newArray
}
console.log(newArray([1, 1, 4, 32, 6]))


// 6) changed symbol
function changeSymbol(text, oldSymbol, newSymbol){
  let changedText = ""
  for (let i = 0; i < text.length; i++) {
    if(text[i] === oldSymbol) {
      changedText = changedText + newSymbol
    } else {
      changedText = changedText + text[i]
    }
  }
  return changedText
}
console.log (changeSymbol("The results are not recorded yet", "t", "w"))


// 7) pattern
function pattern(number) {
  let result = ""
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      result += j
    }
    result += "\n"
  }
  for (let i = 1; i <= number - 1; i++) {
    for (let j = 1; j <= number - i; j++) {
      result += j;
    }
    result += "\n"
  }
  console.log (result)
}
pattern(7)  
 

