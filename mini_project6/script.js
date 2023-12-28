// Take age as user input and judge if he can drive by age boundary 18.Use console error if age is not valid age. Then ask user if he wants to replay the prompt. if user replays more than 3 times warn them by writing message . if user again replays redirect them to another site.


document.addEventListener("DOMContentLoaded", function () {
    function canDrive(age) {
        return age >= 18;
    }

    let replay = true;
    let age;
    let counter = 0;

    while (replay) {
        counter++;
        if (counter === 4) {
            alert("You are being kicked out to google.");
            window.location.href = "https://google.com";
            break;
        }

        age = prompt("Please Enter your age:");

        if (age === null) {
            break;
        }

        age = parseInt(age);

        if (isNaN(age) || age < 0) {
            console.error("Invalid age.");
            break;
        }

        if (canDrive(age)) {
            alert("You can drive.");
        } else {
            alert("You can't drive.");
        }

        if (counter === 3) {
            document.write("Warning you are exceeding limit. Stop replaying or we will kick you out.");
        }

        replay = confirm("Do you want to input again?");
    }
});