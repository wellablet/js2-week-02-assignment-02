//-------1-----------
const changeEmailFromGmailToHicoders = (pArray) => {
    let find = pArray.filter(element => element.includes("41"))
    let sortedArray = find.sort();
    console.log(sortedArray)
    let lowerCased = sortedArray.map(element => element.toLowerCase())
    let myExtension = lowerCased.map(element=>element.replace("@gmail.com", "@hicoders.ch"))
    console.log(myExtension)
    return myExtension
};
//--------2-------------
const findSuperNumbers = (pArray) => {
    let supperNumberArray = [];
    pArray.map(superNumber=>{ //30
      let numberList = String(superNumber).split("").map(Number)  // [3,0]
      let totalNumber=0;
      numberList.map(digit=>{  // [3,0]
          totalNumber+=Math.pow(digit,numberList.length) //3 ^ 2 + 0^0
      })
      if(totalNumber===superNumber){
          supperNumberArray.push(superNumber)
      }
    })
    console.log(supperNumberArray)
    return supperNumberArray;
  };

export { 
        changeEmailFromGmailToHicoders,
        findSuperNumbers 
    };
