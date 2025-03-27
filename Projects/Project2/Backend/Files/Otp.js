const otpGenerator = require('otp-generator');

let OTP = () => otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false });

module.exports = OTP;
