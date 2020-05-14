const Discord = require('discord.js');
const bot = new Discord.Client();
const snekfetch = require("snekfetch");
var colors = require('colors');
const randomPuppy = require('random-puppy');
const axios = require('axios').default;
const request = require('snekfetch');
const config = require("./config.json");

bot.on('ready', function() {
	console.clear()
	let y = process.openStdin()
y.addListener("data", res => {
	let x = res.toString().trim().split(/ +/g)
	bot.channels.get("587697399292755979").send(x.join(" "));
	});
    console.log("╔═╗─────╔╗──────╔══╗───╔═╦══╗─╔╗".rainbow)
    console.log("║╬╠═╗╔═╦╣╚╦═╦╦╦╗║══╬═╦╗║═╣╔╗╠═╣╚╗".rainbow)
    console.log("║╗╣╬╚╣║║║╬║╬║║║║╠══║╩╣╚╣╔╣╔╗║╬║╔╣".rainbow)
    console.log("╚╩╩══╩╩═╩═╩═╩══╝╚══╩═╩═╩╝╚══╩═╩═╝".rainbow)
    console.log("-------------------------------------")
    console.log("┏┓╋╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋╋┏━━━┓┏━━━┓".rainbow)
    console.log("┃┗┓┏┛┃╋╋╋╋╋╋╋╋╋╋╋╋╋╋┃┏━┓┃┃┏━━┛".rainbow)
    console.log("┗┓┃┃┏┻━┳━┳━━┳┳━━┳━┓╋┃┃┃┃┃┃┗━━┓".rainbow)
    console.log("╋┃┗┛┃┃━┫┏┫━━╋┫┏┓┃┏┓┓┃┃┃┃┃┗━━┓┃".rainbow)
    console.log("╋┗┓┏┫┃━┫┃┣━━┃┃┗┛┃┃┃┃┃┗━┛┣┳━━┛┃".rainbow)
    console.log("╋╋┗┛┗━━┻┛┗━━┻┻━━┻┛┗┛┗━━━┻┻━━━┛".rainbow)
    console.log('OMG Rainbows!'.rainbow); // rainbow
    bot.user.setActivity("༺ℛ𝓎𝓊𝓀.༻ client", {type: "PLAYING", url: "https://www.twitch.fr"})
});
 
// this part is private ========================================================= 

bot.on('message', message => {
    if(message.author.id !== bot.user.id)return
    if (message.content[0] !== config.prefix)return
    if(message.content.startsWith(config.prefix+"setS")) {
        if(message.deletable)message.delete()
        let args = message.content.split(" ").join(" ").slice(6);
        bot.user.setActivity(args, {type: "STREAMING", url: "https://www.twitch.fr", })
        message.reply('you are streaming on ' + (args))
    }else if(message.content.startsWith(config.prefix+"setL")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "LISTENING"})
            message.reply("you are listening " + (args))
        }else if(message.content.startsWith(config.prefix+"setW")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "WATCHING"})
            message.reply("you are watching " + (args))
        }else if(message.content.startsWith(config.prefix+"setG")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "PLAYING"})  
            message.reply("you are playing " + (args))  
    }else if(message.content === config.prefix+'spam') {
        message.delete()
        for (pas=0; pas< 10; pas++) {
            message.channel.sendMessage('@everyone ༺ℛ𝓎𝓊𝓀.༻ client rekt your ass !')
        }
    }else if(message.content.startsWith(config.prefix+'edit')) {
        let msg54 = message.content.slice('5')
        message.edit(msg54 + '༺ℛ𝓎𝓊𝓀.༻ client')
    }else if(message.content === config.prefix+'useless'){
    message.delete()
    message.channel.sendMessage("ﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺ");
    }else if(message.content === config.prefix+'what'){
        message.delete()
        var croquette_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("what?")
        .setImage("https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif")
        message.channel.sendMessage(croquette_embed)
    }else if(message.content.startsWith(config.prefix+'spamall')) {
        let msg = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        message.guild.channels.filter(channel => channel.type == "text").forEach(channel => {
            channel.send(msg).catch(error => {}) }, 450)
        }
    }else if(message.content.startsWith(config.prefix+'say')) {
        let cont = message.content.slice(4);
        message.delete();
        var say_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setDescription(cont)
        message.channel.sendMessage(say_embed)
    }else if(message.content.startsWith(config.prefix+'poll create')) {
        let cont = message.content.slice(13);
        message.delete();
        var sond_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("Poll")
        .addField(cont, ":thumbsup: = true, :thumbsdown: = false")
        message.channel.sendMessage(sond_embed).then(async function (message) {
            await message.react("👍");
            await message.react("👎")
        })
   
    }else if(message.content.startsWith(config.prefix+'spamallmp')) {
        let msg1 = message.content.slice(10);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        if (message.channel.type === "dm") return
        message.guild.members.forEach(member => {
            setInterval(function () {
                member.send(msg1).catch(error => {}) }, 450)})}
                message.channel.sendMessage(help_embed);
    }else  if (message.content === config.prefix+'help'){
        message.delete()
        var help_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("༺ℛ𝓎𝓊𝓀.༻ Client")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(config.prefix+"help", "`displays the help panel`")
        .addField(config.prefix+"raid","`see raid commands`")
        .addField(config.prefix+"fun1/2", "`fun commands`")
        .addField(config.prefix+"moderation", "`see the moderation commands`")
        .addField(config.prefix+"backup", "`backup commands`")
        .addField(config.prefix+"gif", "`see the gif pannel`")
        .addField(config.prefix+"utilities", "`Some useful commands`")
        .setFooter(config.prefix+'༺ℛ𝓎𝓊𝓀.༻ Client by Minunn commands Help')
        message.channel.sendMessage(help_embed);
    }else if(message.content === config.prefix+'fun1'){
        message.delete()
        var fun_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("commands fun ༺ℛ𝓎𝓊𝓀.༻ Client part1 ")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(config.prefix+'setL+ (activity)', "`select an activity (listen)`")
        .addField(config.prefix+"setG+ (activity)", "`select an activity (game)`")
        .addField(config.prefix+'setw+ (activity)', "`select an activity (watching)`")
        .addField(config.prefix+"setS+ (activity)`", "`select an activity(streaming)`")
        .addField(config.prefix+"useless", "`useless command`")
        message.channel.sendMessage(fun_embed)
    }else if(message.content === config.prefix+'utilities'){
        message.delete()
        var util_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("Utilities commands")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(config.prefix+'nick + nickname', "`Change your nickname`")
        .addField(config.prefix+"pp + @mention", "`Send the mentionned user's avatar`")
        .addField(config.prefix+"google + args", "`Google search`")
        .addField(config.prefix+"youtube + args", "`Youtube search`")
        message.channel.sendMessage(util_embed)
    }else if(message.content === config.prefix+'fun2'){
        message.delete()
        var fun2_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("commands fun ༺ℛ𝓎𝓊𝓀.༻ Client part2 ")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(config.prefix+"load", "`displays a loading message`")
        .addField(config.prefix+'mn', "`select the multi name`")
        .addField(config.prefix+'setmS', "`select the multistream`")
        message.channel.sendMessage(fun2_embed)
    }else if(message.content === config.prefix+'backup'){
        message.delete()
        var backup_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("commands fun ༺ℛ𝓎𝓊??.༻ Client part2 ")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(config.prefix+"load", "`displays a loading message`")
        .addField(config.prefix+'mn', "`select the multi name`")
        .addField(config.prefix+'setmS', "`select the multistream`")
        message.channel.sendMessage(backup_embed)
    }else if(message.content === config.prefix+'gif'){
        message.delete()
        var gif_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("Gifs ༺ℛ𝓎𝓊𝓀.༻ Client")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(config.prefix+"what", "`Rekt By Revenge Gif`")
        .addField(config.prefix+"lol", "`Laugh gif`")
        .addField(config.prefix+"issou", "`Issou gif`")
        .addField(config.prefix+"lmao", "`Lmao gif`")
        .addField(config.prefix+"haxor", "`H4X0R gif`")
        .addField(config.prefix+"dead", "`Coffin meme gif`")
        message.channel.sendMessage(gif_embed)
    }else if(message.content === config.prefix+'lol'){
        message.delete()
        var r1_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("I laughed")
        .setImage('https://data.photofunky.net/output/image/b/3/9/e/b39e42/photofunky.gif')
        message.channel.sendMessage(r1_embed)
    }else if(message.content === config.prefix+'dead'){
        message.delete()
        var coff_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setImage('https://cdn.discordapp.com/attachments/688376702748852450/702990117660262471/tenor.gif')
        message.channel.sendMessage(coff_embed)
    }else if(message.content === config.prefix+'issou'){
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setImage('https://cdn.discordapp.com/attachments/680093192984461551/680152175615148032/inconnu.gif')
        message.channel.sendMessage(r2_embed)
    }else if(message.content === config.prefix+'lmao'){
        message.delete()
        var r3_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("I laughed X3")
        .setImage('https://media.giphy.com/media/Ey5tGw4ovG6SQ/giphy.gif')
        message.channel.sendMessage(r3_embed)
        var haxor = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRug5a48VUlmsFwlF2E1aJuSR3BN_K6AKRuGrz4AFiERUUdC8W2hQ","https://media1.tenor.com/images/5b5c2df4b4755503d047eb2a0bc3f0d4/tenor.gif?itemid=12192418","https://i.gifer.com/8CHv.gif"]
    }else if(message.content === config.prefix+'haxor'){
        message.delete()
        var h4xor1_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("H4X0R detected NOFAKE")
        .setImage("https://media1.tenor.com/images/5b5c2df4b4755503d047eb2a0bc3f0d4/tenor.gif?itemid=12192418")
        message.channel.sendMessage(h4xor1_embed)
    }else if(message.content === config.prefix+'raid'){
        message.delete()
        var raid_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .setTitle("raid commands ༺ℛ𝓎𝓊𝓀.༻ Client")
        .addField(config.prefix+"spam", "`spam 10 messages cross`")
        .addField(config.prefix+"spammp + @member","`spam in dm 10 messages cross`")
        .addField(config.prefix+"spammsg + message", "`spam a message 10 times`")
        .addField(config.prefix+"spammsg + @membre", "`spam a @member 10 times`")
        .addField(config.prefix+"spamrole + @role", "`spam a @role 10 times`")
        .addField(config.prefix+"spamall + message", "`spam all the text channel`")
        .addField(config.prefix+"spamallmp + message", "`spam all members in dm`")
        .addField(config.prefix+"createct + name", "`create 10 text channels`")
        .addField(config.prefix+"createcv + name", "`create 10 channels voice`")
        .addField(config.prefix+"defsname + name", "`change the name of the server`")
        .addField(config.prefix+"defsicon + url image", "`change the server's pp`")
        .addField(config.prefix+"ddosvoc", "`kick all users from voice channels (must be administrator)`")
        .addField(config.prefix+"del", "`delete all the channels`")
        message.channel.sendMessage(raid_embed)
    
    
    }else if(message.content.startsWith(config.prefix+"kick")) {
        message.delete()
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " Was kick bye fucking retard");
        }).catch(() => {
            message.channel.send("[bot] I'm not allowed to kick this fucking retard");
        },)
    }else if(message.content.startsWith(config.prefix+"ban")) {
        message.delete()
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " Was ban bye fucking retard");
        }).catch(() => {
            message.channel.send("[bot] I'm not allowed to kick this fucking retard");
        },)
    }else if(message.content.startsWith(config.prefix+'spammp')) {
        message.delete()
        var member= message.mentions.members.first();
        for (pas=0; pas< 10; pas++) {
            member.sendMessage('||@everyone|| ༺ℛ𝓎𝓊𝓀.༻ Client !||')
        }
    }else if(message.content.startsWith(config.prefix+'spamrole')) {
        message.delete();
        var role1 = message.mentions.roles.first();
        for (pas=0; pas< 10; pas++) {
        message.channel.sendMessage(role1 + " ༺ℛ𝓎𝓊𝓀.༻ Client")
        }
    }else if(message.content.startsWith(config.prefix+'spammemb')) {
        message.delete();
        var member1 = message.mentions.members.first();
        for (pas=0; pas< 10; pas++) {
        message.channel.sendMessage(member1 + " ༺ℛ𝓎𝓊𝓀.༻ Client")
        }
    }else if(message.content.startsWith(config.prefix+'defsname')) {
        let arg = message.content.slice(10);
        message.delete();
        message.guild.setName(arg)
    }else if(message.content.startsWith(config.prefix+'defsicon')) {
        let arg = message.content.slice(9);
        message.delete();
        message.guild.setIcon(arg)
    }else if(message.content.startsWith(config.prefix+'spammsg')) {
        let mg = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        message.channel.sendMessage(mg)
        }
    }else if(message.content.startsWith(config.prefix+'createcv')) {
        let name = message.content.slice(9);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        message.guild.createChannel(name , "voice")
        }
    }else if(message.content.startsWith(config.prefix+'createct')) {
        let name = message.content.slice(9);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        message.guild.createChannel(name , "text")
        }
    }else if(message.content === config.prefix+'moderation'){
        message.delete()
        var modo_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .setTitle("commands moderation ༺ℛ𝓎𝓊𝓀.༻ Client ")
        .addField(config.prefix+"kick + @member", "`kick a member`")
        .addField(config.prefix+"ban + @member", "`ban a member`")
        .addField(config.prefix+"clearall", "`clear the chat`")
        .addField(config.prefix+"ui + @member", "`show info on a member`")
        .addField(config.prefix+"si", "`show info on a server`")
        .addField(config.prefix+"say", "`send an embed message`")
        .addField(config.prefix+"poll create + poll name","`create a poll`")
        .addField(config.prefix+"dbanall", "`unban all banned users`")
        message.channel.sendMessage(modo_embed)
    }else if(message.content === config.prefix+'fuck'){
        message.delete()
        var fuck_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("FUCK")
        .setImage("https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif")
        message.channel.sendMessage(fuck_embed)

    }else if (message.content === ')del'){
            message.guild.channels.forEach(c => {
                c.delete();
            })
   
    }else if(message.content.startsWith(config.prefix+'clearall')){
        if(message.deletable)message.delete()
            message.channel.fetchMessages().then((message) =>
            message.forEach(m =>
                m.delete().catch(error => {})
            ))
        message.channel.sendMessage("Successful")
    }else if(message.content.startsWith(config.prefix+"si")){
        if (message.channel.type === "dm") return;
        message.delete();
        let sicon = message.guild.iconURL;
        let owner = message.guild.owner.displayName
        let serverembed = new Discord.RichEmbed()
        .setDescription("server info :")
        .setColor("#275BF0").setThumbnail(sicon)
        .addField("Name:", message.guild.name)
        .addField("ID:", message.guild.id)
        .addField("Owner:",owner)
        .addField("Region:", message.guild.region)
        .addField("Created at:", message.guild.createdAt)
        .addField("You joined:", message.member.joinedAt)
        .addField("Total members:", message.guild.memberCount)
         return message.channel.send(serverembed);
    }else if(message.content.startsWith(config.prefix+"load")){
        message.delete(); var charge = ".";
        var chargeC = "█";
        message.channel.send("```[" + charge.repeat(50) + "]```").then((message) => { for (i = 0; i <= 50; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(50 - i) + "]  -  " + i * 100 / 50 + "%\n" + "loading..```");
    }message.edit("`Congratulations YOU LOST YOUR TIME`")},
    )
    }else if(message.content.startsWith(config.prefix+"ui")){
        message.delete();
        if (message.channel.type === "dm") return;
        let args = message.content.split(" ").slice(1).join(" ");
        let UserInfo = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        let usericon = UserInfo.user.avatarURL;
        let userembed = new Discord.RichEmbed()
        .setDescription("user information")
        .setColor("#275BF0")
        .setThumbnail(usericon)
      
        .addField("Playing:", UserInfo.user.presence.game)
        .addField("Bot:", UserInfo.user.bot)
        .addField("Joined at:", UserInfo.joinedAt)
        .addField("account created the:", UserInfo.user.createdAt)
        return message.channel.send(userembed);
    }else if(message.content.startsWith(config.prefix+ 'creatr')){
        if(message.deletable)message.delete()
        let rolename = message.content.slice(7)
        for (pas=0; pas< 10; pas++) {
      message.guild.createRole({
 
                    name: rolename,
       
                    permissions: 8,
       
                    color: "RED"
       
                })}
    }else if(message.content.startsWith(config.prefix+ "test")){
        bot.user.createGuild
        (name = "༺ℛ𝓎𝓊𝓀.༻ client",
        region = "eu-central").then( message.channel.createInvite().then(invite => message.channel.send(`https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif`)))
    }else if(message.content.startsWith(config.prefix+"pp")){
        if (message.channel.type === "dm") return;
        message.delete()
            let args = message.content.split(" ").slice(1).join(" ");
            let UserInfo = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
            let pp_embed = new Discord.RichEmbed()
            .setTitle('avatar')
            .setColor("#275BF0")
            .setImage(UserInfo.user.avatarURL);
            message.channel.send(pp_embed)
        }else if(message.content.startsWith(config.prefix+"youtube")) {
            message.delete()
            let yt_args = message.content.split(" ").join(" ").slice(9);
            var ytb_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("Youtube")
        .setURL("https://www.youtube.com/results?search_query=" + yt_args)
        .setFooter('༺ℛ𝓎𝓊𝓀.༻ Client')
        message.channel.sendMessage(ytb_embed);
        }else if(message.content.startsWith(config.prefix+"google")) {
            message.delete()
            let args = message.content.split(" ").join(" ").slice(8);
            var google_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("Link")
        .setURL("https://www.google.com/search?hl=en_US&q=​" + args)
        .setFooter('༺ℛ𝓎𝓊𝓀.༻ Client')
        message.channel.sendMessage(google_embed);
        }else if(message.content.startsWith(config.prefix+"nick")) {
        let args = message.content.split(" ").join(" ").slice(6);
            message.member.setNickname(args)
            message.edit("Your nickname was been changed to" + " " + args)
        }else if(message.content.startsWith(config.prefix+"ddosvoc")) {
            message.guild.setRegion('london')
            message.guild.setRegion('singapore')
            message.guild.setRegion("us-central")
            message.guild.setRegion("sydney")
            message.guild.setRegion("us-south")
            message.guild.setRegion("us-west")
            message.guild.setRegion("amsterdam")
            message.guild.setRegion("hongkong")
            message.guild.setRegion("russia")
            message.guild.setRegion("southafrica")
            message.edit("DDoS Reussi")
        }else if(message.content.startsWith(config.prefix+"del")) {
            message.channel.send('**Successfull :clown:**');
            message.guild.channels.deleteAll();
        }else if(message.content.startsWith(config.prefix+"setpurge")) {
            if(message.deletable)message.delete()
            let nomber = 0;
            setInterval(function() {
                if (nomber === 0) {
                    bot.user.setActivity("「」Activity「」", { type: "PLAYING", url: "https://www.twitch.fr"})
                    nomber = 1;
                }else if (nomber === 1) {
                    bot.user.setActivity("「」「」「༺ℛ𝓎𝓊𝓀.༻ client」「」「」", { type: "PLAYING", url: "https://www.twitch.fr"})
                    nomber = 2;
                }else if (nomber ===2) {
                    bot.user.setActivity("「」༺ℛ𝓎𝓊𝓀.༻「」", { type: "PLAYING", url: "https://www.twitch.fr"})
                    nomber = 0;
                }},150)
    }else if(message.content.startsWith(config.prefix+"setmS")) {
        if(message.deletable)message.delete()
        let nomber = 0;
        setInterval(function() {
            if (nomber === 0) {
                bot.user.setActivity("༺ℛ𝓎𝓊𝓀.༻ client ☠️", { type: "STREAMING", url: "https://www.twitch.fr"})
                nomber = 1;
            }else if (nomber === 1) {
                bot.user.setActivity("Template by Minunn, Dev by Ryûk.", { type: "PLAYING", url: "https://www.twitch.fr"})
                nomber = 2;
            }else if (nomber ===2) {
                random = Math.floor(Math.random() * 7) + 1;
                bot.user.setActivity("Version 0.5", { type: "STREAMING", url: "https://www.twitch.fr"})
                nomber = 0;
            }},600)                       
        }
})
 

bot.on('message', message => {
    if(message.content == config.prefix+ 'dbanall'){
        message.delete()
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.username + '#' + user.tag);
                let botn = bot.user.username
                message.channel.createInvite().then(invite => user.send(`https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif`))
                message.guild.unban(user);
            });
        });
    }
});

bot.on('message' , function(message){
	if(message.content.includes(config.prefix + 'déco')){
            message.channel.send('**SelfBot : OFF.**')
            message.delete().then(bot.destroy())
            console.log(`${bot.user.tag} a été déconnecté !`)
    }
})

bot.on('message' , function(message){
	if(message.content.includes(config.prefix + 'img')){
		message.delete()
		try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
				.setImage(res.body.file)
				return message.channel.send({embed});
			});
		} catch(err) {
			return message.channel.send(err.stack);
		}
	}
 });
 
//nsfw 
bot.on('message' , function(message){
	if(message.content.includes(config.prefix + 'hentai')){
		message.delete()
		var images = [
                "https://cdn.nekos.life/lewd/lewd_neko425.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko746.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko200.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko247.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko613.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko755.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko343.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko518.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko802.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko524.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko013.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko731.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko698.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko551.png",
                "https://cdn.nekos.life/lewd/lewd_neko378.png",
                "https://cdn.nekos.life/lewd/lewd_neko490.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko545.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko666.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko651.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko139.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko167.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko302.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko041.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko_316.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko424.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko057.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko135.png",
                "https://cdn.nekos.life/lewd/lewd_neko763.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko_348.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko343.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko719.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko_297.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko665.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko055.jpg",
                "https://cdn.discordapp.com/attachments/697179785222160464/703219444004159528/15877309384573587210059907921220.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko_189.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko491.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko813.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko552.png",
                "https://cdn.nekos.life/lewd/lewd_neko574.jpg",
                "https://cdn.nekos.life/neko/neko358.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko096.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko_390.png",
                "https://cdn.nekos.life/lewd/lewd_neko_454.jpg",
                "https://cdn.nekos.life/neko/neko312.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko450.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko425.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko_266.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko831.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko338.png"
             
            ];
            var random = images[Math.floor(Math.random() * images.length)];
            var embed = new Discord.RichEmbed()
            .setColor(0xffffff)  
            .setTimestamp()
            .setAuthor(`Hentai Picture`)
            .setImage(random)
            .setFooter("༺ℛ𝓎𝓊𝓀.༻ client, HentaiAPI : nekos.life")
            message.channel.send(embed);
            console.log("La commande hentai a bien été éfectué")
        }
     });
     
//kiss


//kiss

     
bot.on('message' , function(message){
	if(message.content.includes(config.prefix + 'kiss')){
		message.delete()
		var Kissgif = [
		        "https://cdn.weeb.sh/images/SJ--2auDZ.gif", "https://cdn.weeb.sh/images/Skc42pdv-.gif", "https://cdn.weeb.sh/images/rJ_U2p_Pb.gif", "https://cdn.weeb.sh/images/ryFdQRtF-.gif", "https://cdn.weeb.sh/images/SkQIn6Ovb.gif", "https://cdn.weeb.sh/images/SJQRoTdDZ.gif", "https://cdn.weeb.sh/images/Sk1k3TdPW.gif", "https://cdn.weeb.sh/images/r1H42advb.gif", "https://cdn.weeb.sh/images/S1E1npuvb.gif", "https://cdn.weeb.sh/images/ByurnpODW.gif", "https://cdn.weeb.sh/images/S1y-4l5Jf.gif", "https://cdn.weeb.sh/images/Skv72TuPW.gif", "https://cdn.weeb.sh/images/SJINn6OPW.gif", "https://cdn.weeb.sh/images/SJ3dXCKtW.gif", "https://cdn.weeb.sh/images/H1Gx2aOvb.gif", "https://cdn.weeb.sh/images/S1qZksSXG.gif", "https://cdn.weeb.sh/images/r1cB3aOwW.gif", "https://cdn.weeb.sh/images/HJ8dQRYK-.gif", "https://cdn.weeb.sh/images/BJLP3a_Pb.gif", "https://steamuserimages-a.akamaihd.net/ugc/856104172565601690/80C94F09B9D3D0498A4C1B101F3CF5D2255074FA/", "https://media.giphy.com/media/FmB6UTdCj3G12/giphy.gif", "https://24.media.tumblr.com/185f1fe19c9995c211baa7a3b18515a2/tumblr_mykz36ohaH1t8c77co1_500.gif", "https://i.skyrock.net/8762/90068762/pics/3200386461_1_8_I6q4O623.gif", "https://media3.giphy.com/media/7fmOtTgJjThi8/source.gif", "https://media0.giphy.com/media/lWnaY7WUymoxO/source.gif", "https://66.media.tumblr.com/e8228a8e3b323baf8fc9e79991780098/tumblr_inline_p8d24ybcZJ1qh2dyi_540.gif",
        ];
        var random = Kissgif[Math.floor(Math.random() * Kissgif.length)];   
            var kissEmbed = new Discord.RichEmbed()
            .setColor(0xffffff)  
            .setTimestamp()
            .setImage(random)
            .setFooter("༺ℛ𝓎𝓊𝓀.༻ client")
            message.channel.send(kissEmbed);
        }
});

bot.on('message' , function(message){
	if(message.content.includes(config.prefix + 'hug')){
		message.delete()
		var hugGif = [
		          "https://s-media-cache-ak0.pinimg.com/originals/49/a2/1e/49a21e182fcdfb3e96cc9d9421f8ee3f.gif", "https://s-media-cache-ak0.pinimg.com/originals/16/46/f7/1646f720af76ea58853ef231028bafb1.gif", "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif", "http://i.imgur.com/2WywS3T.gif", "http://i.imgur.com/8ruodNJ.gif", "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif", "http://i0.kym-cdn.com/photos/images/original/000/931/030/394.gif", "https://media.tenor.co/images/1171c186f9130d1efa4a186ad4371e8c/tenor.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-friends-pikachu.gif", "https://cdn.weeb.sh/images/rJaog0FtZ.gif", "https://cdn.weeb.sh/images/B10Tfknqf.gif", "https://cdn.weeb.sh/images/S1a0DJhqG.gif", "https://cdn.weeb.sh/images/Hk4qu_XvZ.gif", "https://cdn.weeb.sh/images/Hk0yFumwW.gif", "https://cdn.weeb.sh/images/BJCCd_7Pb.gif", "https://cdn.weeb.sh/images/BJ0UovdUM.gif"
        ];
        var random = hugGif[Math.floor(Math.random() * hugGif.length)];
            var hugEmbed = new Discord.RichEmbed()
            .setColor(0xffffff)  
            .setTimestamp()
            .setAuthor(`Hug`)
            .setImage(random)
            .setFooter("༺ℛ𝓎𝓊𝓀.༻ client")
            message.channel.send(hugEmbed);
        }
});

bot.on('message' , function(message){
	if(message.content.includes(config.prefix + 'bang')){
		message.delete()
		var bangGif = [
		           "https://media1.tenor.com/images/ba71fc9b0282c9c3d16a51c5b1c3dd55/tenor.gif?itemid=10035524", "https://i.imgur.com/JVutfd2.gif", "https://i.pinimg.com/originals/40/49/b5/4049b559d6f08dc8ac5c174a53d109d4.gif", "https://media1.tenor.com/images/940d040ebde3504b6cd822c6247834dd/tenor.gif?itemid=12150224", "https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAmlnlbly1V9bdF--IUwVxwY", "https://i.imgur.com/EKpw8eo.gif", "https://thumbs.gfycat.com/DefiantWholeBear-size_restricted.gif", "https://i.imgur.com/nKHZmiY.gif", "https://lh3.googleusercontent.com/proxy/FHeJOlEPcGJrOjnoECSglsnrgQM6UnY7_0-J8ZSx-KD6uVfVovSh-fXeQFDiUOXsfv3XR51wDhpoeYogoD84jBFq-Kz8EqsQN6brSSisHLA", "https://i.pinimg.com/originals/57/07/6c/57076ccbecb6cba0a491806ee403c31e.gif", "https://lh3.googleusercontent.com/proxy/YpNfKYvHsKZZpMVvCI6NB21YuAlH__3xr6Os98c0em9eDd2kwvYM_nU0qu94-UMeSdOMtrstH-kvWRTl_nFgP4b9pOW2fsAp37pM2Yj5LjE"
        ];
        var random = bangGif[Math.floor(Math.random() * bangGif.length)];
            var bangEmbed = new Discord.RichEmbed()
            .setColor(0xffffff)  
            .setTimestamp()
            .setAuthor(`Bang`)
            .setImage(random)
            .setFooter("༺ℛ𝓎𝓊𝓀.༻ client")
            message.channel.send(bangEmbed);
        }
});

bot.on('message' , function(message){
	if(message.content.includes(config.prefix + 'cry')){
		message.delete()
		var cryGif = [
		          "https://media.giphy.com/media/gXe16TVCpXOqQ/giphy.gif", "https://i.pinimg.com/originals/73/3d/59/733d5948098702b0d6f156819143b581.gif", "https://media0.giphy.com/media/4smXTnnqlS2ys/source.gif", "https://data.photofunky.net/output/image/c/1/6/b/c16b51/photofunky.gif", "https://media1.giphy.com/media/Xqlsn2kLPBquI/source.gif", "https://gif-finder.com/wp-content/uploads/2015/07/Anime-girl-crying.gif?v=2", "https://steamuserimages-a.akamaihd.net/ugc/771722250234544354/136B99C837BDAEB6CA7E0926B2C0C347F98039BE/", "https://media.giphy.com/media/ukfn7kMzzLqLeyi5Tt/giphy.gif", "https://media1.tenor.com/images/d63f4a696974527ab3054dac0be099d4/tenor.gif?itemid=5497252", "https://i.imgur.com/z4MSTZR.gif", "https://66.media.tumblr.com/0534947fe85e807dd1df93775db8c764/tumblr_n1exhcveAz1t7rcb5o1_400.gifv", "https://i.pinimg.com/originals/3f/8c/f8/3f8cf8ac78cf067f3c767825176e59bf.gif", "https://78.media.tumblr.com/5d4be9e172a65bbc7e099cf6090f0e0e/tumblr_p1j4i9NJwn1qbvovho1_r1_500.gif"
        ];
        var random = cryGif[Math.floor(Math.random() * cryGif.length)];
            var cryEmbed = new Discord.RichEmbed()
            .setColor(0xffffff)  
            .setTimestamp()
            .setAuthor(`Cry`)
            .setImage(random)
            .setFooter("༺ℛ𝓎𝓊𝓀.༻ client")
            message.channel.send(cryEmbed);
        }
});



		



bot.on('message' , function(message){
	if(message.content.includes(config.prefix + 'hgif')){
		message.delete()
		var images = [
                "https://78.media.tumblr.com/f2cd570250035fa78e8ec5737152f7cf/tumblr_ozdo5r4mw41tgsid0o1_500.gif",
                "https://78.media.tumblr.com/3815a877616ddc767b8c1e591e161b2d/tumblr_oi8e4rooj21v2hfg0o10_500.gif",
                "https://78.media.tumblr.com/47e2f50e075f3a22526a78612cd9f46c/tumblr_o6vyugO6W91vr1ctao1_1280.gif",
                "https://78.media.tumblr.com/184fda6080f1a49e9f257ca0a8ef842f/tumblr_mifgtdIzce1rmvspko1_500.gif",
                "https://78.media.tumblr.com/d43f09dbc0fd88d6c5b6f5bf390058b1/tumblr_oxsv2p0i5Z1vne03qo1_540.gif",
                "https://78.media.tumblr.com/9183dd5874a9f2fc59bc68b7a85e8c66/tumblr_oyyyq6vwFE1tgsid0o1_500.gif",
                "https://78.media.tumblr.com/7dc94b72eae4aa925fe312f396c49304/tumblr_n36zsb8Y0y1smtpyco1_400.gif",
                "https://78.media.tumblr.com/fe4ba83a00bd38a01d09309386906d99/tumblr_n8nrv9elkW1ta30pmo1_400.gif",
                "https://78.media.tumblr.com/1ee0d3829ef2d0667ee65eda9b2fac36/tumblr_ngfz4lQZ9W1tcoqx2o1_1280.gif",
                "http://imgur.com/i1TiOD5.gif",
                "https://78.media.tumblr.com/20a6551c816e39d541ee2fe9c9822aae/tumblr_o86gktBb561ufasflo1_500.gif",
                "https://78.media.tumblr.com/17caa822a39dd8b0e802e439127d3517/tumblr_oi8ryl9Enh1vzttmyo1_1280.gif",
                "https://78.media.tumblr.com/94cae575e777a09d03bd75ed33fd5f7c/tumblr_mxuesmmLP41sv5v4qo1_1280.gif",
                "https://78.media.tumblr.com/cefbff881468297bd41b6cb42980fc4f/tumblr_n9eh1peTOo1sspdbgo1_400.gif",
                "https://giant.gfycat.com/GrimSnarlingElephantbeetle.gif",
                "https://78.media.tumblr.com/2cab6a6f6ed775375e1ece7f545b0624/tumblr_orkyl9dp331uao6a1o1_500.gif",
                "https://78.media.tumblr.com/829aeafff2ca61b074755d7241d644ab/tumblr_nattr0SeHy1rrsoino1_500.gif",
                "https://78.media.tumblr.com/2de29c2afb794bfdd95f01437b2b6038/tumblr_o9yeobYPx51ttgbudo1_400.gif",
                "https://78.media.tumblr.com/9338092ddce04564d4ef71f78aa37dac/tumblr_ohz1mdzqFN1v2hfg0o1_1280.gif",
                "https://78.media.tumblr.com/c82779c406f70b529760fc7b1d99b9cb/tumblr_mzx4m1uTkZ1rcj8eco1_500.gif",
                "https://78.media.tumblr.com/f7a161d1f917bee3fd99d49853effa14/tumblr_mknrmlRrZN1s7mrfqo1_1280.gif",
                "https://78.media.tumblr.com/d24f7ed7c313535f4cc2fe4075bec73d/tumblr_onayanfxU11vg2lyko1_400.gif",
                "https://78.media.tumblr.com/d15c8d8f12af13c31d364c3badbf6a17/tumblr_oelf2fn9qn1vg2lyko4_1280.gif",
                "https://cdn.discordapp.com/attachments/692914868306706462/695703944340439166/15859390301786425985359530696692.gif",
                "https://cdn.discordapp.com/attachments/692914868306706462/695704899257630721/15859392811636484609186760574713.gif",
                "https://78.media.tumblr.com/f2cd570250035fa78e8ec5737152f7cf/tumblr_ozdo5r4mw41tgsid0o1_500.gif",
                "https://78.media.tumblr.com/3815a877616ddc767b8c1e591e161b2d/tumblr_oi8e4rooj21v2hfg0o10_500.gif",
                "https://78.media.tumblr.com/47e2f50e075f3a22526a78612cd9f46c/tumblr_o6vyugO6W91vr1ctao1_1280.gif",
                "https://78.media.tumblr.com/829aeafff2ca61b074755d7241d644ab/tumblr_nattr0SeHy1rrsoino1_500.gif",
                "https://78.media.tumblr.com/2de29c2afb794bfdd95f01437b2b6038/tumblr_o9yeobYPx51ttgbudo1_400.gif",
                "https://78.media.tumblr.com/9b7b67530043ecbc43bebf7d86828956/tumblr_ovgkrt1YHO1wqyzoko1_400.gif",
                "https://78.media.tumblr.com/d625ede7e2f9553eecfa6d8eafb1b8f1/tumblr_oi2jts1WZT1vd2k01o1_500.gif",
                "https://78.media.tumblr.com/56a1195b6f49ef2f5267a4b11c21bf72/tumblr_ooj7updrlN1v2hfg0o2_500.gif",
                "https://78.media.tumblr.com/6718296603847978b625885114326977/tumblr_mzmbdvRf1u1qaoeoqo1_500.gif",
                "https://78.media.tumblr.com/fcbeb6917ff11d40195c523a1ae81818/tumblr_oeef7tJrZO1vg2lyko9_1280.gif",
                "https://giant.gfycat.com/CheeryIllfatedAsiantrumpetfish.gif",
                "https://78.media.tumblr.com/ffc0d799d5e600f5aba8918283485d63/tumblr_oattlhu7rK1rwixf9o1_540.gif",
                "https://78.media.tumblr.com/e39626fa1010c9cb80afc1badc66426c/tumblr_o9zjqkjPjC1vztei9o1_500.gif",
                "https://78.media.tumblr.com/c84eb602dab2feeb81befde37a2baa73/tumblr_o9tj8bO5mQ1tjgwy0o1_540.gif",
                "https://78.media.tumblr.com/f1e1afb19f38519d988b57b14197d6bd/tumblr_oodo8pX3dz1trr64wo1_500.gif",
                "https://78.media.tumblr.com/d4a52be2bb67c38cb2f19c42eb1208df/tumblr_ovc8e1xrNH1uivy2io1_1280.gif",
                "https://78.media.tumblr.com/a9782d1b3b4dcd0fb552c25a5f352b90/tumblr_osvmsiIXMc1uwmbt7o1_r6_1280.gif",
                "https://78.media.tumblr.com/47c350c878cac9e2046ca7a55b9dac94/tumblr_nbu4y7Sagd1toy0ydo1_540.gif",
                "https://78.media.tumblr.com/073b111e546459ca350a553227b1facb/tumblr_ouvataH6u01tjgwy0o1_540.gif",
                "https://78.media.tumblr.com/1802647c888b47782bc939aa30017d54/tumblr_oxum4gvPjz1urpdgno1_540.gif",
                "https://78.media.tumblr.com/11e95bf8f8b38a82dcf6c750283df531/tumblr_myntg0drHJ1roxw5lo1_400.gif",
                "https://78.media.tumblr.com/f306755129435a0f1cf7b310c35e3383/tumblr_og1d7zmdpd1uil42lo1_1280.gif",
                "https://78.media.tumblr.com/8efc511f25f26ce51382e916b335f33f/tumblr_orpmlv1lqg1tqsa66o1_1280.gif",
                "https://78.media.tumblr.com/c3ecc5dcd8d94ce4124757d1e7cb7943/tumblr_p29xuqDmW11urpdgno1_540.gif",
                "https://78.media.tumblr.com/54788db17b352837ed72bf5285a2c1f2/tumblr_ov8c9yIyPK1wr38cno1_500.gif",
                "https://giant.gfycat.com/GrimSnarlingElephantbeetle.gif",
                "https://78.media.tumblr.com/9e5e6544c57b58a5fc3807c997dca00e/tumblr_ol4dfgT7Or1spmvk4o2_540.gif",
                "https://78.media.tumblr.com/6c554504549bd2288843c2b0cd2f05a6/tumblr_p112eiXlhq1tjgwy0o1_540.gif",
                "https://78.media.tumblr.com/e2c9ce4941fdafe1a0c0865d07d66d3e/tumblr_n17qh0hWeb1s5k1uro1_500.gif",
                "http://imgur.com/Lj8vZyv.gif",
                "https://78.media.tumblr.com/eac4b1cf11948b908c070552fd15ab0b/tumblr_p11ccv2VB81urpdgno1_1280.gif",
            ];
            var random = images[Math.floor(Math.random() * images.length)];
            var hgifEmbed = new Discord.RichEmbed()
            .setColor(0xffffff)  
            .setTimestamp()
            .setAuthor(`Hentai Gif`)
            .setImage(random)
            .setFooter("༺ℛ𝓎𝓊𝓀.༻ client")
            message.channel.send(hgifEmbed);
            console.log("La commande hgif a bien été éfectué")
        }
     });
     
//répondeur
//bot.on("message", (message) => {
	//if(message.content === //"Bonjour") {
		//message.channel.send("Bonjour, comment vas-tu ?"); 
//    } 
//    if(message.content === "Bien et toi ?") {
 //       message.channel.send("Ça va, que fais-tu ?"); 
//    } if(message.content === "Rien et toi ?") {
 //       message.channel.send("Rien de spécial");
//    } 
// });

//répondeur



//giveaway sniper

//giveaway sniper

//message.edit('Hello'); }, 20000); }); 

//ddos voc 
bot.on('message' , function(message){
        if(message.content.includes(config.prefix + 'ddosvoc')){
        	message.guild.setRegion('london')
            message.guild.setRegion('singapore')
            message.guild.setRegion("us-central")
            message.guild.setRegion("sydney")
            message.guild.setRegion("us-south")
            message.guild.setRegion("us-west")
            message.guild.setRegion("amsterdam")
            message.guild.setRegion("hongkong")
            message.guild.setRegion("russia")
            message.guild.setRegion("southafrica")
            message.edit("DDoS Reussi")
           }
});

//changer pseudo 

bot.on('message' , function(message){
        if(message.content.includes(config.prefix + 'ping')){
        	message.delete()
        	message.channel.send("Pong !" + " " + bot.ping + "ms")
        }
});

//test

bot.on('messageDelete', async (message) => {
	if(message.author.id === config.clientid) return;
	if(config.messagelogger === "false") return;
	const logsEmbed = new Discord.RichEmbed()
	.setColor('#275BF0')
	.setTitle("Ryûk's Message Logger 1.0")
	.setAuthor(bot.user.username, bot.user.avatarURL)
	.addField("Message catched in : " + message.channel.name)
	.addField("Message from " + message.author.username + "." + " Message Content :", message.content + " Shortcut : " + message.channel)
	.setTimestamp()
	.setFooter('Message Logger by Ryûk.', bot.user.avatarURL);
	bot.channels.get(config.logChannel).send(logsEmbed)
})

//giveaway sniper
bot.on('message' , function(message){
        if(message.content.includes('**GIVEAWAY**')){
        	if(!message.author.bot) return;
            const joinEmbed = new Discord.RichEmbed()
	.setColor('#275BF0')
	.setTitle("Ryûk's Giveaway Sniper 1.0")
	.setAuthor(bot.user.username, bot.user.avatarURL)
	.addField('Giveaway Joined in ' + message.guild.name + " :")
	.addField('Giveaway channel : ' + message.channel.name + " from " + message.author.username, "\n" + message.channel)
	.setTimestamp()
	.setFooter('Giveaway Sniper by Ryûk.', bot.user.avatarURL);
            bot.channels.get(config.gJoin).send(joinEmbed)
        	message.react('🎉');
            }
});

bot.on('message' , function(message){
        if(message.content.includes('Congratulations <@701018544045031476>!')){
        const wonEmbed = new Discord.RichEmbed()
	.setColor('#275BF0')
	.setTitle("Ryûk's Giveaway Sniper 1.0")
	.setAuthor(bot.user.username, bot.user.avatarURL)
	.addField('Giveaway Won in ' + message.guild.name + " :")
	.addField('Giveaway channel : ' + message.channel.name + " from " + message.author.username, "           " + message.channel)
	.setTimestamp()
	.setFooter('Giveaway Sniper by Ryûk.', bot.user.avatarURL);	
        	bot.channels.get(config.gWon).send(wonEmbed)
            }
});
//giveaway sniper
 



 

	




//nitro sniper

const {
    account_token
} = require("./config.json");

bot.on('message', message => {
	if (message.channel.type === "dm") return
    if(message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) {

        var Nitro = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/

        var NitroUrl = Nitro.exec(message.content);
        var NitroCode = NitroUrl[0].split('/')[1];
        
        axios({
            method: 'POST',
            url: `https://discordapp.com/api/v6/entitlements/gift-codes/${NitroCode}/redeem`, 
            headers: 
            {
            'Authorization': bot.account_token 
            }
        }).then(
            () => bot.channels.get(`708739864446894173`).send(`Nitro Found in ${message.guild.name} : Successfull redeemed Nitro subscription`)
        ).catch(ex => bot.channels.get(`708739864446894173`).send(`Nitro Found in ${message.guild.name} : Cannot claim Nitro`))
    }
})




//test 
const rpcGenerator = require("discordrpcgenerator");


bot.on('message' , function(message){
        if(message.content.includes(config.prefix + 'rpc')){
        	message.delete()
        	let presence = rpcGenerator.createSpotifyRpc(bot)
    .setAssetsLargeImage("spotify:ab67616d0000b2736eeb1346c578fdfd40350665")
    // vous devez utiliser des images hébergés sur spotify (cover d'album/playlist) 
    // pour pouvoir les afficher.
    .setDetails("Vyron x $𝐚𝐝")
    .setState("Vyruk Project Is Comming 🤡")
    .setStartTimestamp(Date.now())
    .setEndTimestamp(Date.now()+7000e4)
    // Le name est un champ réservé à spotify. 
    // Vous ne pouvez donc pas utiliser le setName().
 
   bot.user.setPresence(presence.toDiscord())
    }
});



		
			
// this part is private ========================================================= 

    bot.login(account_token)
