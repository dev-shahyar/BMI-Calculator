//male's body
let maleHead = document.getElementById("maleHead");
let maleBody = document.getElementById("maleBody");
let maleFoot = document.getElementById("maleFoot");

//female's body
let femaleHead = document.getElementById("femaleHead");
let femaleBody = document.getElementById("femaleBody");
let femaleFoot = document.getElementById("femaleFoot");

let sec1 = document.getElementById("sec1"); //first section
let sec2 = document.getElementById("sec2"); //second section
let sec3 = document.getElementById("sec3"); //third section
let sec4 = document.getElementById("sec4"); //fourth section

let weightValue = document.getElementById("weightValue").value = 0;
let x = document.getElementById("myInput").value = 0;

// varibles

class Bmi { // this class shows your name , calculate your Bmi
    constructor (person){ // person object is lower than here
        this.person = person;
        this.squerH = this.person.h ** 2;
        this.bmi = (this.person.w / this.squerH ); // calculate your Bmi
    }

    printName(){ // this method prints your name if you write your name
        let nameTag = document.getElementById("name");

        nameTag.innerHTML = this.person.name+" "+ this.person.lastName;
        nameTag.style.color = "#544f4f"
    }

    clac(){ // this merthd 
        let printBmi = document.getElementById("calc");
        printBmi.innerHTML = this.bmi;
    }

    printStatus(){// this method prints the status of your weight relative to your height
        let valueBmi = this.bmi;
        let statusText = document.getElementById("status");

        if(valueBmi <= 18.5){
            statusText.innerHTML = "Underweight";
            statusText.style.color = "#5cd2e4"
        }  
        else if(valueBmi > 18.5 && valueBmi < 25){
            statusText.innerHTML = "Normal";
            statusText.style.color = "#3af250"
        }
        else if(valueBmi >= 25){
            statusText.innerHTML = "Overweight";
            statusText.style.color = "#d40b0b"
        } 
    }
}


function maleNext() { // click on this shows male body on next section
    // this codes changes styles of sections
    sec1.className = 'secBack';
    sec2.className = 'secNext';

    // this codes changes styles of male's body
    maleHead.style.zIndex = "2";
    maleBody.style.zIndex = "2";
    maleFoot.style.zIndex = "2";

    maleHead.style.opacity = "1";
    maleBody.style.opacity = "1";
    maleFoot.style.opacity = "1";

}

function femaleNext() { // click on this shows female body on next section
    // this codes changes styles of sections
    sec1.className = 'secBack';
    sec2.className = 'secNext';

    // this codes changes styles of female's body
    femaleHead.style.zIndex = "2";
    femaleBody.style.zIndex = "2";
    femaleFoot.style.zIndex = "2";

    femaleHead.style.opacity = "1";
    femaleBody.style.opacity = "1";
    femaleFoot.style.opacity = "1";
}

function next2() {
    // this codes changes styles of sections
    sec2.className = 'secBack';
    sec3.className = 'secNext';
}
function next3() {
    // this codes changes styles of sections
    sec3.className = 'secBack';
    sec4.className = 'secNext';

    // this codes changes styles of male's body
    maleHead.style.zIndex = "-1";
    maleBody.style.zIndex = "-1";
    maleFoot.style.zIndex = "-1";

    maleHead.style.opacity = "0";
    maleBody.style.opacity = "0";
    maleFoot.style.opacity = "0";

    // this codes changes styles of female's body
    femaleHead.style.zIndex = "-1";
    femaleBody.style.zIndex = "-1";
    femaleFoot.style.zIndex = "-1";

    femaleHead.style.opacity = "0";
    femaleBody.style.opacity = "0";
    femaleFoot.style.opacity = "0";


    const person = { // this object is for Bmi class
        name : document.getElementById("tagName").value,//first name
        lastName : document.getElementById("tagLastName").value,//last name
        w :   document.querySelector(".inputValue").value,//weight
        h : document.getElementById("myInput").value / 100 //height
    };

    // this condition is for empty input
    if (document.getElementById("tagName").value == null ||
        document.getElementById("tagName").value == "") {
        person.name = "No name"
    }

    let bmi = new Bmi(person); // for Bmi class
    bmi.printName();
    bmi.clac();
    bmi.printStatus();
}



function back1() {
    // this codes changes styles of sections
    sec2.className = 'secBack';
    sec1.className = 'secNext';

    // this codes changes styles of male's body
    maleHead.style.zIndex = "-1";
    maleBody.style.zIndex = "-1";
    maleFoot.style.zIndex = "-1";

    maleHead.style.opacity = "0";
    maleBody.style.opacity = "0";
    maleFoot.style.opacity = "0";

    maleBody.style.width = "80px";
    maleBody.style.height = "80px";
    maleBody.style.borderRadius = "15px";
    maleFoot.style.top = "340px";
    maleFoot.style.width = "60px";

    
    // this codes changes styles of female's body
    femaleHead.style.zIndex = "-1";
    femaleBody.style.zIndex = "-1";
    femaleFoot.style.zIndex = "-1";

    femaleHead.style.opacity = "0";
    femaleBody.style.opacity = "0";
    femaleFoot.style.opacity = "0";

    femaleBody.style.width = "80px";
    femaleBody.style.height = "80px";
    femaleBody.style.borderRadius = "15px";
    femaleFoot.style.top = "340px";
    femaleFoot.style.width = "60px";

}
function back2() {
    // this codes changes styles of sections
    sec3.className = 'secBack';
    sec2.className = 'secNext';
}
function retry() {
    // this codes changes styles of sections
    sec4.className = 'secBack';
    sec1.className = 'secNext';

    // this codes changes styles of male's body
    maleBody.style.width = "80px";
    maleBody.style.height = "80px";
    maleBody.style.borderRadius = "15px";
    maleFoot.style.top = "340px";
    maleFoot.style.width = "60px";

    // this codes changes styles of female's body
    femaleBody.style.width = "80px";
    femaleBody.style.height = "80px";
    femaleBody.style.borderRadius = "15px";
    femaleFoot.style.top = "340px";
    femaleFoot.style.width = "60px";

    // this codes makes weight range value zero
    weightValue = document.getElementById("weightValue").value = 0;
    document.getElementById("weightP").innerHTML= "Your weight is";

    // this codes makes height range value zero
    x = document.getElementById("myInput").value = 0;
    document.getElementById("demo").innerHTML = "Your height is";
}

function weight() { // this function is for your weight value
    weightValue = document.getElementById("weightValue").value;
    
    document.getElementById("weightP").innerHTML= weightValue +" "+ "KG";

    if (weightValue >= 73) {
    // this codes changes styles of male's body
        maleBody.style.width = "100px";
        maleBody.style.height = "100px";
        maleBody.style.borderRadius = "50px";
        maleFoot.style.top = "360px";

    // this codes changes styles of female's body
        femaleBody.style.width = "100px";
        femaleBody.style.height = "100px";
        femaleBody.style.borderRadius = "50px";
        femaleFoot.style.top = "360px";
    }
    else if (weightValue <= 35){
    // this codes changes styles of male's body
        maleBody.style.width = "60px";
        maleBody.style.height = "80px";
        maleBody.style.borderRadius = "15px";
        maleFoot.style.top = "340px";
        maleFoot.style.width = "50px";

    // this codes changes styles of female's body
        femaleBody.style.width = "60px";
        femaleBody.style.height = "80px";
        femaleBody.style.borderRadius = "15px";
        femaleFoot.style.top = "340px";
        femaleFoot.style.width = "50px";
    }
    else{
    // this codes changes styles of male's body
        maleBody.style.width = "80px";
        maleBody.style.height = "80px";
        maleBody.style.borderRadius = "15px";
        maleFoot.style.top = "340px";
        maleFoot.style.width = "60px";

    // this codes changes styles of female's body
        femaleBody.style.width = "80px";
        femaleBody.style.height = "80px";
        femaleBody.style.borderRadius = "15px";
        femaleFoot.style.top = "340px";
        femaleFoot.style.width = "60px";
    }
}

function myFunction() { // I copied this function from W3schools 
                        // I don't know why but i couldn't name this function height
                        // this function is for your height value
    x = document.getElementById("myInput").value 
    document.getElementById("demo").innerHTML = x + " " + "CM";

    if (x >= 196) {
    // this codes changes styles of male's body
        maleBody.style.height = "120px";
        maleFoot.style.top = "380px";
       
    // this codes changes styles of female's body
        femaleBody.style.height = "120px";
        femaleFoot.style.top = "380px";
    }
    else if (x <= 72){
    // this codes changes styles of male's body
        maleBody.style.height = "70px";
        maleFoot.style.top = "330px";

    // this codes changes styles of female's body
        femaleBody.style.height = "70px";
        femaleFoot.style.top = "330px";
    }
    else{
    // this codes changes styles of male's body
        maleBody.style.height = "80px";
        maleFoot.style.top = "340px";
     
    // this codes changes styles of female's body
        femaleBody.style.height = "80px";
        femaleFoot.style.top = "340px";
    
    }
}
