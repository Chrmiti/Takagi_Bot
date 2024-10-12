const voiceDiscord = require("@discordjs/voice")
const {Message, MessageEmbed} = require("discord.js")
//module.exports.run = async(client, message, args) => {
module.exports = async(client, message, args) => {
        const channel = message.member.voice.channel;
        if(!channel) return message.channel.send("Sorry I couldn't find the channel!")
        
        const connection = voiceDiscord.joinVoiceChannel({
                channelid: channel.id,
                guildId: message.guildId,
                adapterCreator: message.guild.voiceAdapterCreator,
        }
        )
}