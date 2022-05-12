class Solution {
public:
    bool isHappy(int n) {
         int sum=0;
    while(n>9)
    {

        while(n>0)
        {
            int temp=n%10;
            sum+=pow(temp,2);
            n/=10;
        }
        n=sum;
        sum=0;
    }
    if (n==1||n==7)
    {
       return true;
    }
    else
    {
        return false;
    }
    }
};