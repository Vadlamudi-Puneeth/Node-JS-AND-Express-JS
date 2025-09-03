// Write a java script function to count number of vowels in a string

function countOfVowels(s){
    
    let str = s.toLowerCase();
    let count = 0;

    for(let i = 0;i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'o' || str[i] == 'u' || str[i] == 'i' ){
            count+=1;
        }
    }

    console.log(count)

}

countOfVowels("AEIous");
