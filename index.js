const Discord = require('discord.js');


const client = new Discord.Client();


const PREFIX = '!';


const fs = require('fs');


client.commands = new Discord.Collection();


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






 client.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
 
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
    let msg = message.content.toLowerCase();


    if(command === 'goodnight'){
        client.commands.get('goodnight').execute(message, args);


    } else if(command === 'hi'){
        client.commands.get('hi').execute(message, args);
        
    } else if(command === 'love'){
            client.commands.get('love').execute(message, args);


    } else if(command === 'morning'){
            client.commands.get('morning').execute(message, args);


    } else if(command === 'bday'){
            client.commands.get('bday').execute(message, args);


    } else if(command === 'tease'){
            client.commands.get('tease').execute(message, args);


    } else if(command === 'chris'){
            client.commands.get('chris').execute(message, args);


    } else if(command === 'anh'){
            client.commands.get('anh').execute(message, args);


    } else if(command === 'bao'){
            client.commands.get('bao').execute(message, args);


    } else if(command === 'tasanee'){
            client.commands.get('tasanee').execute(message, args);


    
    } else if(command === 'back'){
            client.commands.get('back').execute(message, args);


        }
    });
    
 
 
      
        
    
    
    


client.login('NjAwNDM2NDk2NDU3MTM4MTg2.GQ_hs2.4T8y6vIzJKxGJ3hiaIKSqtbJNBLMLKHNr57jIc')
