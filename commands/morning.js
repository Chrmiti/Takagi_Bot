module.exports = {
    name: "morning",
    description: "I say good morning to Chris!",
    execute(message, args){
        message.channel.send("Good morning Chris! Good boy, you woke up today! I'm so happy. I love you!");
    }
}