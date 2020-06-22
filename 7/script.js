// Lecture : let and const

/*
//  ES5
var name5='Jane Smith';
var age5=23;
name5='Jane Miller';
console.log(name5);

// ES6

const name6='Jane Smith';
let age6=23;
name6='Jane Miller';
//console.log(name6);



// ES5

function driversLicence(passedTest){
    if(passedTest){
        var firstName='John';
        var yearOfBirth=1990;
        

    }

    console.log(firstName+', Born in '+ yearOfBirth+', is now officially allowed to drive');


}
driversLicence(true);



// ES6

function driversLicence6(passedTest){
    if(passedTest){
        let firstName='John';
        const yearOfBirth=1990;
        

    }
    console.log(firstName+', Born in '+ yearOfBirth+', is now officially allowed to drive');


}
driversLicence6(true);





// Lecture: Blocks and IIFEs



//ES6
{
    const a=1;
    let b=2;
    var c=3;
}

//console.log(a+b);
console.log(c);


// ES5

(function(){


    var c=3;
})();
//console.log(c);




// Lecture: Strings

let firstName='John', lastName='Smith';
const yearOfBirth=1990;
function calcAge(year){
    return 2020-year;
}

// ES5
//console.log('this is '+ firstName+''+lastName+'. he was born on '+ yearOfBirth+'. Today he is '+calcAge(yearOfBirth)+' years old.');

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)}, years old.`);


const n=`${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));



// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);


// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6=years.map((el,index)=> {
    const now=new Date().getFullYear();
    const age=now-el;
    return `Age element ${index + 1}: ${age}.`

});
console.log(ages6);



/////////////////////////////////////////////

// Lecture:Arrow functions 2
// ES5

var box5={
    color:'green',
    position:1,
    clickMe:function(){
        var self=this;
        document.querySelector('.green').addEventListener('click',function(){

            var str='This is box number '+self.position+' and it is '+ self.color;
            alert(str);
        });
    }
}
box5.clickMe();


// ES6

const box6={
    color:'green',
    position:1,
    clickMe:function(){
        
        document.querySelector('.green').addEventListener('click', () => {

            var str='This is box number '+this.position+' and it is '+ this.color;
            alert(str);
        });
    }
}
box6.clickMe();
*/

/*
const box66={
    color:'green',
    position:1,
    clickMe:()=>{

        
        document.querySelector('.green').addEventListener('click', () => {

            var str='This is box number '+this.position+' and it is '+ this.color;
            alert(str);
        });
    }
}
box66.clickMe();



function Person(name){
    this.name=name;

}

//ES5
Person.prototype.myFriends5=function(friends){
    var arr=friends.map(function(el){
        return this.name+ ' is friends with '+el;
    }.bind(this));

    console.log(arr);

}

var friends=['john','bob','martin'];
new Person('Jane').myFriends5(friends);


//ES6
Person.prototype.myFriends6=function(friends){
    var arr=friends.map(el => `${this.name} is friends with ${el}`);  

    console.log(arr);

}


new Person('Molly Jane').myFriends6(friends);



// Lecture: Destructuring

//ES5
var john=['John', 26];
//var name=john[0];
//var age=john[1];

//ES6

const [name,year]=['John', 26];
console.log(name);
console.log(year);


const obj={

    firstName:'John',
    lastName:'Smith'
};

const {firstName,lastName}=obj;

console.log(firstName);
console.log(lastName);


const {firstName:a, lastName:b}=obj;

console.log(a);
console.log(b);




function calcAgeRetirement(year){
    const age=new Date().getFullYear()-year;
    return [age,65-age];

}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);
*/
/*

/// Lecture :Arrays

const boxes=document.querySelectorAll('.box');

// ES5

var boxesArr5=Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){

    cur.style.backgroundColor='dodgerblue';
});


// ES6


const boxesArr6=Array.from(boxes);
boxesArr6.forEach(cur=>cur.style.backgroundColor='dodgerblue');

//ES5

for(var i=0;i<boxesArr5.length;i++){
    if(boxesArr5[i].className==='box blue'){
        continue;
    }
    boxesArr5[i].textContent='I Changed to blue';
}



//ES6

for(const cur of boxesArr6){
    if(cur .className.includes('blue')){
        continue;
    }
    cur.textContent='I Changed to blue';
}

///ES5
var ages=[12,17,8,21,14,11];

var full=ages.map(function(cur){


    return cur>=18;
});

console.log(full);


console.log(full.indexOf(true));

console.log(ages[full.indexOf(true)]);


//ES6

console.log(ages[ages.findIndex(cur=>cur>=18)]);

console.log(ages.find(cur=> cur>=18));




//////////////
//Lecture: spread operator

function addFourAges(a,b,c,d){
    return a+b+c+d;
}

//var sum1=addFourAges(18,30,12,21);
//console.log(sum1);


// ES5


var ages=[18,30,12,21];
var sum2=addFourAges.apply(null,ages);
console.log(sum2);

/*

//ES6

const max3=addFourAges(...ages);
console.log(max3);




const familySmith=['John','Jane','Mark'];
const familyMiller=['Mary','Bob','Ann'];
const bigFamily=[...familySmith,'Lilly',...familyMiller];
console.log(bigFamily);



const h=document.querySelector('h1');
const boxes=document.querySelectorAll('.box');

const all=[h,...boxes];
Array.from(all).forEach(cur=>cur.style.color='purple');



///// Lecture: Rest parameters
/*
//ES5
function isFullAge5(){
    //console.log(arguments);
    var argsArr=Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur){
        console.log((2020-cur)>= 18);

    })
}

//isFullAge5(1990,1999,1965);
//isFullAge5(1990,1999,1965,2010,1997);

// ES6

function isFullAge6(...years){
    years.forEach(cur=>console.log((2020-cur)>=18))
}

isFullAge6(1990,1999,1965,2010,1997);



//ES5
function isFullAge5(limit){
    //console.log(arguments);
    var argsArr=Array.prototype.slice.call(arguments,1);
    //console.log(argsArr);
    argsArr.forEach(function(cur){
        console.log((2020-cur)>= limit);

    })
}

//isFullAge5(26,1990,1999,1965);
//isFullAge5(1990,1999,1965,2010,1997);

// ES6

function isFullAge6(limit,...years){
    years.forEach(cur=>console.log((2020-cur)>=limit));
}

isFullAge6(25,1990,1999,1965,2010,1997);


*/


//////Lecture:Default Parameters


//ES5
/*
function SmithPerson(firstName,yearOfBirth,lastName,nationality){
    lastName===undefined? lastName='Smith': lastName= lastName;
    nationality===undefined? nationality='Indian': nationality= nationality;
    
    this.firstName=firstName;
    this.lastName=lastName;
    this.yearOfBirth=yearOfBirth;
    this.nationality=nationality;
}
var john=new SmithPerson('John',1990); 
console.log(john);

var emily=new SmithPerson('Emily',1982,'Diaz','spanish')
console.log(emily);


// ES6

function SmithPerson(firstName,yearOfBirth,lastName='Smith',nationality='Indian'){
    this.firstName=firstName;
    this.lastName=lastName;
    this.yearOfBirth=yearOfBirth;
    this.nationality=nationality;
}
var john=new SmithPerson('John',1990); 
console.log(john);

var emily=new SmithPerson('Emily',1982,'Diaz','spanish')
console.log(emily);



////Lecture: Maps



const question=new Map();
question.set('question','What is the official name of the latest major JavaScript version');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);

question.set(true,'correct answer');
question.set(false,'Wrong!! Please try again');

console.log(question.get('question'));
//console.log(question.size);


if (question.has(4)){
   //question.delete(4);
   //console.log('Answer 4 is here');
}

//question.clear();

//question.forEach((value,key)=> console.log(`This is ${key} and it's set to ${value}`));

for (let [key,value] of question.entries()){
    //console.log(`This is ${key} and it's set to ${value}`);
    if (typeof(key)==='number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans=parseInt(prompt('Write the correct answer'));
console.log(question.get(ans===question.get('correct')));




//Lecture:Classes

//ES5

var Person5=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person5.prototype.calculateAge=function(){
    var age=new Date().getFullYear()-this.yearOfBirth;
    console.log(age);
}

var john5=new Person5 ('John',1997,'teacher');
john5.calculateAge();

//ES6

class Person6{
    constructor (name,yearOfBirth,job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }

    calculateAge(){
        var age=new Date().getFullYear()-this.yearOfBirth;
        console.log(age);

    }

    static greeting(){
        console.log('Hey there');
    }
        
}

var john6=new Person5 ('John',1997,'teacher');
john6.calculateAge();

Person6.greeting();


*/

class Element{

    constructor(name,buildYear){
        this.name=name;
        this.buildYear=buildYear;
    }
   
    
}

class Park extends Element{
    constructor(name,buildYear,area, numberTrees){
        super(name,buildYear)
        this.area=area;
        this.numberTrees=numberTrees;
    }

   treeDensity(){
       const dennsity=this.numberTrees/this.area;
        console.log(`${this.name} has a tree density of ${dennsity} trees per sq km`);
    }
     
}

class Street extends Element{
    constructor(name,buildYear,length,size=3){
        super(name,buildYear);
        this.length=length;
        this.size=size;
    }
    classifyStreet(){
        const classification=new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street`);

    }

}

const allParks= [new Park('Red par',1979,0.3,215), new Park('Khaziranga national park',1947,3.3,3432),new Park('Oak teak park',1999,1.3,4211)];
const allStreets=[new Street('GT road',1990,2.2,5),new Street('Park Avenue Street',1947,0.5,4),new Street('Lakshpur road',1990,0.9),new Street('Sunset Boulevard',1988,2.9,5)];

function calc(arr){
    const sum= arr.reduce((prev,cur,index)=> prev+cur, 0);
    return [sum, sum/arr.length];
}


function reportParks(p){
    console.log('--------PARKS REPORT----------');
    //Density
    p.forEach(el=> el.treeDensity());


    //Average age
    const ages=p.map(el=>new Date().getFullYear()-el.buildYear);
    const [totalAge,avgAge]= calc(ages);
    console.log(`our ${p.length} parks have an average of ${avgAge} years`);



    // Which park has more than 1000 trees
    const i = p.map(el=>el.numberTrees).findIndex(el=>el>=1000);
    console.log(`${p[i].name} has more than 1000 trees`);


}


function reportStreets(s){
    console.log('--------STREETS REPORT----------');
    // Total and  average length of the town's streets
    const[totalLength,avgLength]=calc(s.map(el=>el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an of ${avgLength} km.`);

    // classify sizes
    s.forEach(el=>el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);