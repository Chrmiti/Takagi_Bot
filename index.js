const Discord = require('discord.js');


const client = new Discord.Client();


const PREFIX = '!';


const fs = require('fs');


client.commands = new Discord.Collection();

/*
New stuff remove or comment if not work.
*/
// const { joinVoiceChannel } = require('@discordjs/voice');
// const connection = getVoiceConnection(myVoiceChannel.guild.id);
// const { getVoiceConnection } = require('@discordjs/voice');

// const connection = getVoiceConnection(myVoiceChannel.guild.id);

// const voiceDiscord = require("@discordjs/voice")
// const {Message, MessageEmbed} = require("discord.js")
// module.exports.run = async(client, message, args) => {
//         const channel = message.member.voice.channel;
//         if(!channel) return message.channel.send("Sorry I couldn't find the channel!")

//         const connection = voiceDiscord.joinVoiceChannel({
//                 channelid: channel.id,
//                 guildId: message.guildId,
//                 adapterCreator: message.guild.voiceAdapterCreator,
//         }
//         )
// }
/*
New stuff remove or comment if not work.
*/

//const punycode = require("punycode/")

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);




    client.commands.set(command.name, command);
}


setInterval(() => {
    const statuses = [
        'I ❤️ my Chris!!',
       
    ]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    client.user.setActivity(status, { type: "PLAYING" })
    }, 10000)


client.on('ready', () => console.log('Takagi\'s here!'))

// const channel = client.channels.get("General");
//   if (!channel) return console.error("The channel does not exist!");
//   channel.join().then(connection => {
//     console.log("Successfully connected.");
//   }).catch(e => {
//     console.error(e);
//   });






 client.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
 
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
    let msg = message.content.toLowerCase();

//     const connection = joinVoiceChannel({
// 	channelId: channel.id,
// 	guildId: channel.guild.id,
// 	adapterCreator: channel.guild.voiceAdapterCreator,
// });


    if(command === 'goodnight'){
        client.commands.get('goodnight').execute(message, args);


   //  } else if(command === 'hi'){
   //      client.commands.get('hi').execute(message, args);
        
    } else if(command === 'love'){
            client.commands.get('love').execute(message, args);


    } else if(command === 'morning'){
            client.commands.get('morning').execute(message, args);


   //  } else if(command === 'bday'){
   //          client.commands.get('bday').execute(message, args);


   //  } else if(command === 'tease'){
   //          client.commands.get('tease').execute(message, args);


   //  } else if(command === 'chris'){
   //          client.commands.get('chris').execute(message, args);


   //  } else if(command === 'anh'){
   //          client.commands.get('anh').execute(message, args);


   //  } else if(command === 'bao'){
   //          client.commands.get('bao').execute(message, args);


   //  } else if(command === 'tasanee'){
   //          client.commands.get('tasanee').execute(message, args);


    
    } else if(command === 'back'){
            client.commands.get('back').execute(message, args);
        }

     else if(command === "miss"){
        client.commands.get("miss").execute(message, args);
     }

     else if(command === "stressed"){
        client.commands.get("stressed").execute(message, args);
     }

     else if(command === "dentist"){
        client.commands.get("dentist").execute(message, args);
     }

     else if(command === "valentines"){
        client.commands.get("valentines").execute(message, args);
     }

   //   else if(command === "join"){
   //      client.commands.get("join").execute(message, args);
   //   }

     else if(command === "college"){
        client.commands.get("college").execute(message, args);
     }

     else if(command === "collegestart"){
      client.commands.get("collegestart").execute(message, args);
   }

     else if(command === "collegeover"){
        client.commands.get("collegeover").execute(message, args);
     }

     else if(command === "birthday"){
        client.commands.get("birthday").execute(message, args);
     }

     else if(command === "summon"){
      client.commands.get("summon").execute(message, args);
   }

    });
    
 
 
      
        
    
    
    


client.login('NjAwNDM2NDk2NDU3MTM4MTg2.GPEVJZ.ugttqK0HATJDdx9u9B8Mqg6MDhzsNe-oGTlw_I')
