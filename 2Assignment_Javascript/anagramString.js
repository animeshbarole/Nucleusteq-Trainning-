
function checkAnagram(s,t)
{
    const map = new Map();
   
      if(s.length!==t.length)
      {
         return false;
      }
      for(let i = 0;i<s.length;i++)
      {
         map.set(s[i],(map.get(s[i])||0)+1)
         map.set(t[i],(map.get(t[i])||0)-1)
      }

      for(const[key,value] of map)
      {
             if(value>0)
             {
                return false;
             }
      }

      return true;
    
}

const s1 = "slient";
const s2 = "listen";

const res = checkAnagram(s1,s2);
console.log(res);
