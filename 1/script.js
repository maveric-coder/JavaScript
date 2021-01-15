/*let j=[89,120,103];
let m=[116,94,123];
let s=[97,134,105];

jt=0;
for(i=0;i<j.length;i++){
    jt=jt+j[i];
}
javg=jt/j.length;
console.log(javg);
mt=0;
for(i=0;i<m.length;i++){
    mt=mt+m[i];
}
mavg=mt/m.length;
console.log(mavg);

st=0;
for(i=0;i<s.length;i++){
    st=st+s[i];
}
savg=st/s.length;
console.log(savg);
/*
if(mavg>javg){
    console.log("The winner is Mike's team with an average of:" + mavg);

}else if(mavg==javg){
    console.log("it's a draw mutherfuckers");

}else
console.log("The winner is John's team with an average of:" + javg);


if(mavg>javg && mavg>savg){
    console.log("Mike's team is the winner"+ mavg);
}
    
    else if(savg>javg && savg>mavg){
        console.log("Mary's team is the winner"+ savg);
    }
   
    else if(javg>savg && javg>mavg){ 
        console.log("John's team is the winner"+ javg);}
   
    else
    console.log(' its a tie');





//==================================================
//   Challenge 3

function tip(amt)
{
    let t=[];
    t.length=amt.length;
    for(i=0;i<amt.length;i++)
    {
         if(amt[i]<50){
             t[i]=amt[i]*0.2;
             
         }
         else if(amt[i]<50 && amt[i] >200){
             t[i]=amt[i]*0.15;
             
            }
            else{
                t[i]=amt[i]*0.1;
                
            }
        }

    return t;
}
let m=[124,48,268];
let tp=tip(m);
console.log(m);
console.log(tp);

  
     



var john={
    fullName:'John Peth',
    mass:69,
    height:1.7,
    birthYear:1999,
    family:['mark','martha','joe','johnny']
     
}
//================================================
//     Challenge 4

var john={
    fullName:'John Peth',
    mass:69,
    height:1.7,
    birthYear:1999,
    family:['mark','martha','joe','johnny'],
    job:'Professor',
    bmi : function(mass,height){
        
        h=john.height^2;
        return john.mass/h;
    } 
};

var mark={
    fullName:'Mark Simson',
    mass:72,
    height:1.9,
    birthYear:1909,
         
};

console.log(john.bmi());

*/
/*
///====================================================
///  Challenge 5

let john={
    bill:[124,48,268,180,42],
    tip:function (){
        let t=[];
        amt=john.bill;
        t.length=amt.length;
        for(i=0;i<amt.length;i++)
        {
             if(amt[i]<50){
                 t[i]=amt[i]*0.2;
                 
             }
             else if(amt[i]<50 && amt[i] >200){
                 t[i]=amt[i]*0.15;
                 
                }
                else{
                    t[i]=amt[i]*0.1;
                    
                }
            }
        let ft=[];
        ft.length=t.length;
        for(i=0;i<amt.length;i++)  
        {
            ft[i]=t[i]+amt[i];
            
        }
        console.log("Tips paid respectively:");
        console.log(t);
        console.log("\n\nTotal amount paid respectively:");
        console.log(ft);
    }
}


john.tip();


*/

function myFunction() {
    var person = prompt("Please enter your name");
    alert("hello "+person);
    
    
  }

myFunction();
