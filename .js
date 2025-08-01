//This program will accept any email, find the first and last character of their username, add stars according to username length, then return the rest of the email to the string

let email = "apple.pie@example.com";

function maskEmail(email) {
    let parts = email.split("@");

    parts[0].slice(0, 1);
    parts[0].slice(-1);

    let username = parts[0];
    let hiddenEmail = parts[0].slice(0, 1) + '*'.repeat(username.length - 2) + parts[0].slice(-1);;
    let completedEmail = hiddenEmail + "@" + parts[1];

    return completedEmail;
    console.log(maskEmail(email));
}

maskEmail(email);
