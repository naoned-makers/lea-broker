"use strict";

let mqtt = require('mqtt');
let os = require("os");

//console.log(im);
/**
 * command handler who listen to mqtt commande message topics
 * Logic based on CQRS E/S architecture
 */

//on se connecte au broker (localhost) et on suscribe aux command message
var client = mqtt.connect('ws://localhost:3001', {
    clientId: 'lea_message_' + os.hostname()
});

client.on('connect', function () {
    //commnad topics look like  im/command/<entity>/<command>
    console.log("client connecté sur message arduino");
    client.subscribe('lea/message/arduino');

    //Internal info look like  
    //      $SYS/rkM6tx45W/new/clients websimulator_9289e62f
    //      $SYS/B1PPagEqZ/disconnect/clients
    //client.subscribe('$SYS/+/+/clients')
})
//A new command as arrived
client.on('message', function (topic, strPayload) {
    console.log("MESSAGE ARDUINO");
    console.log(topic);
    let payload = strPayload.toString();
    console.log(payload);
})


