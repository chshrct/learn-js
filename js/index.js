function telephoneCheck(str) {
    let regexMe = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    return regexMe.test(str)
    }
    telephoneCheck("555-555-5555");