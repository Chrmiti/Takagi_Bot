module.exports = {
    name: "goodnight",
    description: "I say goodnight to Chris!",
    execute(message, args){
        message.channel.send("Goodnight Chris! I love you!");
    }
}