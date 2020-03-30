let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    try {
        let data = await ses.sendEmail({
            Source: "indunil@adroitlogic.com",
            Destination: {
                ToAddresses: ['sachithrarajapakse1992@gmail.com', 'indunil+1@adroitlogic.com']
            },
            Message: {
                Subject: {
                    Data: "test to ses "
                },
                Body: {
                    Text: {
                        Data: "hi induu"
                    }
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};