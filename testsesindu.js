let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
 

    return { "message": "Successfully executed" };
};