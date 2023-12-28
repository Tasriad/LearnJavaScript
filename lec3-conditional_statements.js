
// Run on browser.

let age = prompt("Enter age:"); //Input is taken as string //prompt is for taking input in site.
age = parseInt(age); // Converting string to int
if(age>=18){
    console.log("You are allowed to enter the adult section of this site.");
    alert("You are allowed to enter the adult section of this site."); //alert shows message in site
}
else if(age>0 && age<18){
    console.log("You are not allowed to enter the adult section of this site.");
    alert("You are not allowed to enter the adult section of this site.");
}
else{
    console.log("You haven't born yet so wait.");
    alert("You haven't born yet so wait.");
}