function checkPasswordStrength(password) {
    strength = 0;
    //check length
    length = password.length;
    if (length > 5 && length < 10) {
        strength++;
    }
    else if (length > 10) {
        strength += 2;
    }

    //check for upper and lower case mixture
    //     /[A-Z]/: This is a regular expression pattern enclosed in forward slashes (/). It represents a character class that matches any uppercase letter from A to Z. The character class is defined within square brackets ([]), and the hyphen (-) between A and Z indicates a range of characters.

    // .test(password): The test() method is a built-in method of regular expressions in JavaScript. It is used to test if a string matches the pattern defined by the regular expression. In this case, password is the string being tested against the regular expression pattern.

    // containsUppercase and containsLowercase: These variables store the result of the regular expression test. If the pattern matches at least one uppercase letter ([A-Z]) or at least one lowercase letter ([a-z]) in the password string, the corresponding variable will be assigned the value true. Otherwise, it will be assigned the value false.
    const containUppercase = /[A-Z]/.test(password);
    const containLowercase = /[a-z]/.test(password);
    if(containUppercase && containLowercase)
    {
        strength+=2;
    }

    //check for numbers
    const containNumbers = /[0-9]/.test(password);
    if(containNumbers)
    {
        strength+=2;
    }
    //check for speical symbols
    const containsSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    if(containsSymbol)
    {
        strength+=2;
    }
    //check for white space
    // In JavaScript, you can use the '\s' pattern to match white spaces. The \s pattern matches any whitespace character, including spaces, tabs, and line breaks.
    const containsSpace = /[\s]/.test(password);
    if(containsSpace)
    {
        strength+=2
    }
    return strength;
}
let password = prompt("Enter Password:");
alert("Your passowrd has a strength of "+ checkPasswordStrength(password));
