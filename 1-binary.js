function binary(arr){
  var counter = 0
  var terbesar = 0
  for(i=0;i<arr.length;i++){
    if(arr[i]==0){
      if(terbesar==0 || terbesar<counter){
        terbesar = counter
      }
      counter=0
    }
    else{
      counter++
    }
    if(i==arr.length-1){
      if(terbesar==0 || terbesar<counter){
        terbesar = counter
      } 
      console.log(terbesar)
    }
  }
}

binary([1,1,1,1,1,0,1,1,1,1,0,1,1,1]);