arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

function sort ( arr )
{
     var min;
     var temp ; 
 
    
    for (var i = 0; i < arr.length  ; i++) {
 
        min = i;
        for (var j = i + 1; j < arr.length ; j++){

            if (arr[j] < arr[min]){
            
                min = j;
               
                     temp = arr[min];
                    arr[min] = arr[i];
                    arr[i] = temp;
            }
        }
    }   
    return arr;        
}     
 arr = sort(arr);
              
            console.log (arr)  ;         
