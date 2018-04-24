"use strict"

var AccountService = require('./AccountService');

module.exports = {

    metadata: () => ({
        "name": "Payments",
        "properties": {
            "fromAccountType": { "type": "string", "required": true },
            "toAccount": { "type" : "string", "required": true },
            "amount": { "type": "CURRENCY", "required": true },
            "date": { "type": "string" },
            "recurrence": { "type": "string" }
        },
        "supportedActions": [
        ]
    }),

    invoke: (conversation, done) => {
        var fromAccountType = conversation.properties().fromAccountType;
        var toAccount = conversation.properties().toAccount;
        var amount = conversation.properties().amount;

        conversation.logger().info('Payments: sending payment fromAccountType ' + fromAccountType +
                     ' toAccount=' + toAccount + ' amount=' + amount);

        conversation.reply({ text: '요청 하신 금액, ' + amount + '가 고객님의 ' + fromAccountType + '으로 부터 ' + toAccount + '에게 성공적으로 송금되었습니다.'});

        // TODO: add the payment txn to that account

        conversation.transition();

        done();
    }
};
