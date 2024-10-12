module.exports = {
    name: "love",
    description: "I say I love you to Chris!",
    execute(message, args){
        message.channel.send("I love you Chris!");
    }
}