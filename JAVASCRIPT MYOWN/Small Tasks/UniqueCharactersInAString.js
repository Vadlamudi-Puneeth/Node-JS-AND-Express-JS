// write a javascript function to extract unique characters from a string

function uniqueCharacters(str){
    let ans = "";

    for(let i = 0;i < str.length; i++){
        let current = str[i];
        if(ans.indexOf(current) == -1){
            ans = ans + current;
        }
    }

    console.log(ans);

}

uniqueCharacters("aaeeiioouu");
