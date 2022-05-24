var balancedStringSplit = function(s) {
    let l=0,r=0,c=0;
    for (let i=0;i<s.length;i++)
    {
        if (s[i]=='R'){ 
            r++;
        }
        else if (s[i]=='L'){ 
            l++;
        }
        if (l==r&&r>0){
            c++;
            l=0;
            r=0;
        }
    }
    return(c)
}