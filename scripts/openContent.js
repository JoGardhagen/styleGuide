// let person = {};

// let person2 = {
//     firstName : "Joakim",
//     lastNamen : "Gårdhagen",
//     age : 32,
//     dogs:[ "Joffi"]
// };

// class Person{
//     constructor(firstName,lastNamen,age){
//         this.firstName = firstName;
//         this.lastNamen = lastNamen;
//         this.age = age;
//     }
//     bio = function(){
//         alert(this.firstName +" "+ this.lastNamen +" är " + this.age 
//         + " år gammal");
//     }
// }
// let person3 = new Person("Joakim","Gårdhagen",32);
// // person3.bio();

// function clicked(){
//     person3.bio();
// }

// document.getElementById("minKnapp").addEventListener("click",clicked);

function openContent(evt,contentName){
    let i, tabcontent, contentLink;
    tabcontent=document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    contentLink = document.getElementsByClassName("contentLink");
    for(i = 0;i < contentLink.length; i++){
        contentLink[i].className = contentLink[i].className.replace(" active", "");
    } 
    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += "active";
}