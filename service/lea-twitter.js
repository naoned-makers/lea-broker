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
    clientId: 'lea_twitter_' + os.hostname()
})
client.on('connect', function () {
    client.subscribe('lea/message/tweet');
    console.log("client connecté sur message twitter")
})

//A new command as arrived
client.on('message', function (topic, strPayload) {
    console.log("MESSAGE TWITTER");
    console.log(topic);
    let payload = strPayload.toString();
    console.log(payload);
})


