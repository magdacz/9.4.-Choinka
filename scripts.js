function drawTree(pietra) {
   for ( var i = 1; i <= pietra; i++) {
     var star ="";
     for ( var j= 1; j <= i; j++) {
       star += "*";
     }
     console.log(star);
    }
    }

drawTree(7);