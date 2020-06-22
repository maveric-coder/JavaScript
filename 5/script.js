//function constructor

/*
var john={
    name:'John',
    yearOfBirth:1990,
    job:'teacher'

};
var Person = function (name,yearOfBirth, job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    
}

Person.prototype.calculateAge= function(){

    console.log(2020-this.yearOfBirth);
}
Person.prototype.lastName='Smith';

var john=new Person('John', 1990,'teacher');
john.calculateAge();


var mark=new Person('Mark', 1997,'chemist');
mark.calculateAge();


console.log(john.lastName);



//Object.create
var personProto= {
    calculateAge:function(){
        console.log(2020-this.yearOfBirth);
    }

};

var john= Object.create(personProto);
john.name='John';
john.yearOfBirth=1997;
john.job='teacher';
john.calculateAge();


var jane= Object.create(personProto,
    {
        name:{value:'Jane'},
        yearOfBirth:{value:1990},
        job:{value:'designer'}
 

});



///////////////

//Parsing function as arguments

var years=[1990,1965,1937,2005,1998];
function arrayCalc(arr,fn){
    var arrRes=[];
    for(var i=0; i<arr.length;i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes;

}


function calculateAge(y){
    return 2020-y; 

}

function isFullAge(el){
    return el => 18;
}

var ages=arrayCalc(years,calculateAge);
console.log(ages);
let fullAges=arrayCalc(ages,isFullAge);
console.log(fullAges);




/////////////////////////////////////
// Function returning functions

function interviewQuestion(job){
    if(job=='designer'){
        return function(name){
            console.log(name+',can you please explain what UX design is?');

        }
        }else if(job=='teacher'){
            return function(name){
                console.log('what subject do you teach,'+name+'?');

            }
        }else{
            return function(name){
             console.log('hello'+name+'what do you do?');
            }
    }

}

let teacherQuestion=interviewQuestion('teacher');
let designerQuestion=interviewQuestion('designer');

teacherQuestion('john');
designerQuestion('Mark');
interviewQuestion('designer')('Jane');

*/

////////////////////////////////////
// Immediately invoked function expressions (IIFE)

/*
function game(){
    let score=Math.random()*10;
    console.log(score>=5);


}
//game();

(function(){
    let score=Math.random()*10;
    console.log(score >= 5);


})();

(function(goodLuck){
    let score=Math.random()*10;
    console.log(score >= 5- goodLuck);


})(3);


////////////////////////////////////////


// Closures
function retirement(retirementAge){
    var a=' years left until retirement';
    return function(yearOfBirth){
        
        var age=2020-yearOfBirth;
        console.log((retirementAge-age)+a);

    }
}


retirement(66)(1990);





function interviewQuestion(job){
    return function(name){
        if(job=='teacher'){
            console.log('what subject do you teach,'+name+'?');
        }
        else if(job=='designer'){
            console.log(name+',can you please explain what UX design is?');

        }
        else{
            console.log('Hello'+name+', what do you do?');
        }
    }

}
interviewQuestion('teacher')('John');





////////////////////////////////


//  Bind, call and apply

var john={
    name:'John',
    age:22,
    job:'teacher',
    presentation:function(style,timeOfDay){
        if(style=='formal'){
            console.log('Good '+timeOfDay+', ladies and gentlemen! I\'m ' +this.name+', I\'m a '+this.job+', and I\'m '+ this.age +' years old');


        }
        else if(style=='friendly'){
            console.log('Hey! what\'s up? I\'m '+this.name+' I\'m a'+this.job+' and I\'m '+this.age+', years old. Have a nice '+timeOfDay+' .' );

        }
    }
}

//john.presentation('formal','morning');

var emily={
    name:'Emily',
    age:23,
    job:'designer'
}

var mark={
    name:'Mark',
    age:24,
    job:'chemist'
}

//john.presentation.call(emily,'friendly','afternoon');
//john.presentation.apply(mark,['friendly','afternoon'] );

var johnFriendly=john.presentation.bind(john,'friendly');
johnFriendly('morning');

*/

var years=[1990,1965,1937,2005,1998];
function arrayCalc(arr,fn){
    var arrRes=[];
    for(var i=0; i<arr.length;i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes;

}


function calculateAge(y){
    return 2020-y; 

}

function isFullAge(linit,el){
    return el => limit;
}


var ages=arrayCalc(years,calculateAge);
var fullJapan =arrayCalc(ages, isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);
