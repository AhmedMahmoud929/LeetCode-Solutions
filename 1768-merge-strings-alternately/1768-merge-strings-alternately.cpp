class Solution {
public:
    string mergeAlternately(string word1, string word2) {
         string word3;
    for (int i=0;i<max(word1.length(),word2.length()) ; i++){
        if (i<word1.length()){
            word3+=word1[i];

        }
        if (i<word2.length()){
            word3+=word2[i];

        }
    }
    return word3;
    }
};