class Solution {
public:
    bool areAlmostEqual(string s1, string s2) {
          
   vector<int>indexs;
   int c=0;

   if (s1==s2){
   return true;
   }
   else if (s1.size()!=s2.size()){
    return false;
   }
   else {
    for (int i=0;i<s1.size();i++){
        if (s1[i]!=s2[i]){
            c++;
            indexs.push_back(i);
        }
    }

    if (c==2){
        swap(s1[indexs[0]],s1[indexs[1]]);
        if (s1==s2){
            return true;
        }
        else return false;

    }
    else{
        return false;
    }
   }
    }
};