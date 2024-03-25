var input = 'turpentine and turtles'
var vowels = ['a','e','i','o','u']
var resultArray  = []

input = input.toLowerCase()

for (let i = 0; i < input.length; i++) {
    //const input = array[i];
    //console.log(input.slice(i,i+1))

    if (input.slice(i,i+1) == 'e' || input.slice(i,i+1) == 'u'  ) {
        resultArray.push(input.slice(i,i+1))
    }


    for (let j = 0; j < vowels.length; j++) {
        //console.log(j);
        
        if (input.slice(i,i+1) === vowels[j]) {
            //console.log(input.slice(i,i+1))
            //console.log(vowels[j])
            
            resultArray.push(input.slice(i,i+1))
            

        }

    }
}
//console.log(resultArray)

var resultString = resultArray.join()

console.log(resultString.toUpperCase())
