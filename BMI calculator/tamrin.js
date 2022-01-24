class Bmi {
    constructor (person){
        // this.name = person.name;
        // this.lastName = person.lastName;
        // this.age = person.age;
        // this.h = person.h;
        // this.w = person.w;
        this.person = person;
        this.squerH = this.person.h ** 2;
        this.bmi = (this.person.w / this.squerH );
    }

    printName(){
        var nameTag = document.getElementById("name");
        nameTag.innerHTML = this.person.name+" "+ this.person.lastName;
    }
    clac(){
        var printBmi = document.getElementById("clac");
        printBmi.innerHTML = this.bmi;
    }
    printStatus(){

        var valuBmi = this.bmi;
        var statusText = document.getElementById("status");

        if(valuBmi <= 18.5){
            statusText.innerHTML = "Underweight";
        }  
        else if(valuBmi > 18.5 && valuBmi < 25){
            statusText.innerHTML = "normal"
        }
        else if(valuBmi >= 25){
            statusText.innerHTML = "Overweight"
        } 
    }

}


const person = {
    name : document.getElementById("tagName").value,
    lastName : document.getElementById("tagLastName").value,
    w :   document.querySelector(".inputValue").value,
    h : 1.70
};

let bmi = new Bmi(person);
bmi.printName();
bmi.clac();
bmi.printStatus();

const slideValue = document.querySelector("span");
const inputSlider = document.querySelector(".inputValue");

inputSlider.oninput = (()=>{
    let value = inputSlider.value;
    slideValue.textContent = value;
    slideValue.style.left = (value/2) + "%";
    slideValue.classList.add("show");
});

slideValue.onblur = (()=>{
    slideValue.classList.remove("show");
});

let tagName = 
console.log(tagName);
