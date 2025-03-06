const romanNumbers = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  let uno = 1
  let tresNueve = 3999
  
  const romanMachine = (number) => {
   let  romanResult = ""
   for(let i = 0; i < romanNumbers.length ;i++){
        console.log(romanNumbers[i])
        console.log(romanNumbers[i][0])
        const romanArray = romanNumbers[i]
        console.log("mi arreglo interno es")
        console.log(romanArray)
        console.log("y su indice 0 es")
        console.log(romanArray[0])


        
   }
        
      return romanResult
  };
  
romanMachine()