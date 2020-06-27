<script>
   //Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript
      function max(firstNum,secondNum){
          if(firstName > secondName){
            console.log(firstNum + " is larger than " + secondNum);
          }else{
            console.log(secondNum + " is larger than "+firstNum);
          }
      }


      //Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them
       function maxThree(num1,num2,num3){
            return Math.max(num1,num2,num3);
      }


      // Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
      function isVowel(string){
            var text;
            var string=string.toLowerCase();
            var vowels=(['a','e','i','o','u']);

            for(var i=0; i <=vowels.length; i++){
                  if(string != vowels[i]){
                        continue;
                  }
                  return true;
            }
            return false;

             }
         //Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4])
         //should return 10, and multiply([1,2,3,4]) should return 24.
             function sumAndMultiply(numbers) {
             	var total = 0;
             	var total =1;
             	for (var i = 0; i < numbers.length; i++) {
             		total += numbers[i];
             	}
             	for (var i = 0; i < numbers.length; i++) {
                		total1 = (total1 * numbers[i]);
                	}
                	return "sum = " +total ": multiply" + total1;

              }
              var nums = [1,2,3,4],
                  x = sumAndMultiply(nums);

              document.getElementById("filler").innerHTML = x;

          //Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar")
          //should return the string "ratset gaj"
             function reverse(str) {
                 var text = '';

                 for (var i = str.length - 1; i >= 0; i--) {
                 	text += str[i];
                 	continue
                 }
                 return text.toLowerCase();
             }


      //Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
             function find_longest_word(str)
             {
               var array1 = str.match(/\w[a-z]{0,}/gi);
               var result = array1[0];

               for(var x = 1 ; x < array1.length ; x++)
               {
                 if(result.length < array1[x].length)
                 {
                 result = array1[x];
                 }
               }
               return result;
             }


    //Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i
          function filterLongWord(arr, i){
                    var q=[];
                    var k =0;
                    arr.map(function(p,c){
                    if(p.split('').length>i) q[k++]=p;
                    });
                    return q;
                    }
</script>