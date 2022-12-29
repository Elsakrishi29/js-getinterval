let b=1;
const empty=setInterval(function(time){
    b++;
    if(b<10){
       clearInterval(empty);
    }
    console.log(new Date().toLocaleTimeString());
},3000)

/*let count=0;
const intervalId=setInterval(function(time){
    count++;
    if(count>10){
        clearInterval(intervalId);
    }
    console.log(count);
},3000)*/


