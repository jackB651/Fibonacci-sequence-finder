function fibonacci(num) {
  // type your code here
  let x = 0, y = 1
  let z
  if (num === 0){
    return 0
  }else{
    for (let i = 0; i<num; i++){
      z = x+y
      x = y
      y = z
    }
    return z
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
