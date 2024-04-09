

function checkPalindrome(s)
{
      
    let i =0;
    let j = s.length -1;

    while(i<=j)
    {
        if(!isLetterOrDigit(s[i]))
        {
            i++;
        }
        else if(!isLetterOrDigit(s[j]))
        {
            j--;
        }
        else 
        {
            if(toLowerCase(s[i])!==toLowerCase(s[j]))
            {
                return false;
            }
            else{
                i++;
                j--;
            }
        }
    }

    return true;

}

function toLowerCase(char)
{
    return  char.toLowerCase() ;
}

function isLetterOrDigit(char) {

    return /[a-zA-Z0-9]/.test(char);
}


const ans =  checkPalindrome("A man, a plan, a canal: Panama");

console.log(ans);

/**
  Inputs : 1. RACECAR
           2.   

 */