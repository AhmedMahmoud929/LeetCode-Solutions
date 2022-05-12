var maximumWealth = function (accounts) {
  // accounts => [ [],[],[] ]
  let sum=0;
  let most=-9999999;
  for (let i = 0;  i<accounts.length; i++) {
    for (let j = 0; j<accounts[i].length; j++) {
      sum+=accounts[i][j];
    } 
    if (sum>most){
      most=sum;
    }
    sum=0;
  }
  return (most);
};
