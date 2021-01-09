let myarr = [2,3,1,-3,0,-23,93,23];


    let quicksort = (myarr)=>{
      
        let middlearr = Math.floor(myarr.length/2);
        let pivot = myarr[middlearr];

            if(myarr.length == 0){
                return [];
            }
            let leftarr  = []
            let rightarr = []

            for(let i = 0; i < myarr.length; i++ ){
                if(i != middlearr ){

        ( myarr[i] > pivot ? rightarr.push(myarr[i]) : leftarr.push(myarr[i]))                          
                    }
                    }  
                    leftarr    = quicksort(leftarr);
                    rightarr   = quicksort(rightarr)                      
              
                    return leftarr.concat(pivot).concat(rightarr);
              
                    
                    }

console.log( quicksort(myarr));


