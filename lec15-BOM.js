
// Bom = Browser Object Modules.
alert("You will be prompt to enter a number.");
let a = prompt("Enter a number:");
let write = confirm("Do you want to write the number to the page?");
if(write)
{
    document.write(a);
}
else
{
    document.write("Too bad sucker.Imma still write.");
}