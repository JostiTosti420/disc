const Discord = require('discord.js');
const { prefix } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('MC/ARK responded.');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) {
		if (!message.author.bot) { 
			message.delete(10000);
		}
		return;
	}

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'help') {
		message.channel.send('!help\n!bot\n!stats [player]\n!reforge\n!talisman\n!color [color/list]\n!tag [tag/list]\n!cf\n/nick [name]').then(msg => {msg.delete(300000)});
		message.delete(300000);
	}
	else if (command === 'stats') {
		if (args[0]) {	
			message.channel.send(`https://sky.lea.moe/stats/${args}`).then(msg => {msg.delete(300000)});
			message.delete(300000);
		}
		else {
			message.delete();
			message.channel.send("**Invalid Argument, try: '!help'.**").then(msg => {msg.delete(4000)});
			return;
		}
	}
	else if (command === 'bot') {
		const BotEmbed = new Discord.RichEmbed()
			.setColor('#252525')
			.setTitle('MineCraft / ARK')
			.setDescription("MineCraft / ARK Discord Bot\nType: '!help' to get started")
			.attachFiles(['assets/bot.png'])
			.setFooter('Made by Leon#1250')
			.setThumbnail('attachment://bot.png')
		message.channel.send(BotEmbed).then(msg => {msg.delete(300000)});
		message.delete(300000);
	}
	else if (command === 'reforge') {
		message.channel.send("**Damage:**\nArmor: Godly\nSword: Spicy\nBow: Rapid\nLegendary/Epic talisman: Godly\nRare talisman: Itchy\nUncommon/Common talisman (*80%< crit chance*): Itchy\nUncommon/Common talisman (*80%>crit chance*): Godly/Zealous\n\n**HP&Defence:**\nArmor: Titanic\nSword: -\nBow: -\nTalisman: Ominous\n\n**Mana:**\nArmor: Wise\nSword: Legendary\nBow: Deadly\nTalisman:Bizarre/Pretty").then(msg => {msg.delete(300000)});
		message.delete(300000);
	}
	else if (command === 'talisman') {
		message.channel.send("**Common:**\n - Mine Affinity Talisman\n - Village Affinity Talisman\n - Farming Talisman\n - Wolf Talisman (U)\n - Zombie Talisman (U)\n - Skeleton Talisman\n - Scavenger Talisman\n - Intimidation Talisman (U)\n - Talisman of Coins\n - Potion Affinity Talisman (U)\n - Vaccine Talisman\n - Night Vision Charm\n - Fire Talisman\n - Healing Talisman (U)\n - Speed Talisman\n - Feather Talisman (U)\n - Sea Creature Talisman (U)\n\n**Uncommon:**\n - Wood Affinity Talisman\n - Potion Affinity Ring (U)\n - Zombie Ring (U)\n - Feather Ring (U)\n - Red Claw Talisman (U)\n - Magnetic Talisman\n - Hunter Talisman (U)\n - Farmer Orb\n - Gravity Talisman\n - Piggy Bank\n - Lava Talisman\n - Spider Talisman (U)\n - Sea Creature Ring (U)\n - Healing Ring (M)\n - Wolf Paw\n - Intimidation Ring (U)\n - Shady Ring (U)\n - New Years Cake Bag\n - Candy Ring (U)\n\n**Rare:**\n - Haste Ring\n - Potion Affinity Artifact (M)\n - Survivor Cube\n - Hunter Ring (M)\n - Fish Affinity Talisman\n - Feather Artifact (M)\n - Bat Talisman (U)\n - Pig's Foot\n - Spider Ring (U)\n - Bait Ring\n - Candy Ring (U)\n - Day Crystal\n - Night Crystal\n - Red Claw Ring (U)\n - Devour Ring\n - Sea Creature Artifact (M)\n - Intimidation Artifact (M)\n - Wolf Ring (M)\n - Crooked Artifact (U)\n - Frozen Chicken\n\n**Epic:**\n - Ender Artifact\n - Spider Artifact (M)\n - Tarantula Talisman\n - Red Claw Artifact (M)\n - Candy Artifact (M)\n - Bat Ring (U)\n - Experience Artifact\n - Melody's Hair\n - Wither Artifact\n - Seal of the Family (M)\n\n**Legendary:**\n - Bat Artifact (M)\n\n**Others:**\n - Campfire Quest (common-legendary)\n - Romero Quest (common-legendary)").then(msg => {msg.delete(300000)});
		message.delete(300000);
	}
	else if (command === 'color') {
		if (args[0].toLowerCase() === 'blue' || args[0].toLowerCase() === 'dark_green' || args[0].toLowerCase() === 'dark_red' || args[0].toLowerCase() === 'purple' || args[0].toLowerCase() === 'orange' || args[0].toLowerCase() === 'gray' || args[0].toLowerCase() === 'green' || args[0].toLowerCase() === 'aqua' || args[0].toLowerCase() === 'red' || args[0].toLowerCase() === 'pink' || args[0].toLowerCase() === 'yellow' || args[0].toLowerCase() === 'white' || args[0].toLowerCase() === 'none') {
			message.member.removeRole(message.guild.roles.find(r => r.name === "blue"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "dark_green"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "dark_red"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "purple"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "orange"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "gray"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "green"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "aqua"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "red"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "pink"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "yellow"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "white"));
			
			if (args[0].toLowerCase() === 'blue' || args[0].toLowerCase() === 'dark_green' || args[0].toLowerCase() === 'dark_red' || args[0].toLowerCase() === 'purple' || args[0].toLowerCase() === 'orange' || args[0].toLowerCase() === 'gray' || args[0].toLowerCase() === 'green' || args[0].toLowerCase() === 'aqua' || args[0].toLowerCase() === 'red' || args[0].toLowerCase() === 'pink' || args[0].toLowerCase() === 'yellow' || args[0].toLowerCase() === 'white') {
				message.member.addRole(message.guild.roles.find(r => r.name.toLowerCase() == args[0].toLowerCase()));
				message.channel.send(":white_check_mark: Color asigned!").then(msg => {msg.delete(4000)});
			}
			message.delete();
		}
		else if (args[0].toLowerCase() === 'list') {
			message.channel.send("**Colors:**\n - Blue\n - Dark_Green\n - Dark_Red\n - Purple\n - Orange\n - Gray\n - Green\n - Aqua\n - Red\n - Pink\n - Yellow\n - White\n - None").then(msg => {msg.delete(30000)});
			message.delete(30000);
		}
		else if (!args[0]) {
			message.delete();
			message.channel.send("**Invalid Argument, try: '!help'.**").then(msg => {msg.delete(4000)});
			return;
		}
		else {
			message.delete();
			message.channel.send("**Invalid Argument, try: '!help'.**").then(msg => {msg.delete(4000)});
		}
	}
	else if (command === 'tag') {
		if (args[0].toLowerCase() === 'school' || args[0].toLowerCase() === 'skyblock' || args[0].toLowerCase() === 'minigames' || args[0].toLowerCase() === 'uhc' || args[0].toLowerCase() === 'survival' || args[0].toLowerCase() === 'ark' || args[0].toLowerCase() === 'hypixel' || args[0].toLowerCase() === 'none') {
			message.member.removeRole(message.guild.roles.find(r => r.name === "school"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "skyblock"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "minigames"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "uhc"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "survival"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "ark"));
			message.member.removeRole(message.guild.roles.find(r => r.name === "hypixel"));
			
			if (args[0].toLowerCase() === 'school' || args[0].toLowerCase() === 'skyblock' || args[0].toLowerCase() === 'minigames' || args[0].toLowerCase() === 'uhc' || args[0].toLowerCase() === 'survival' || args[0].toLowerCase() === 'ark' || args[0].toLowerCase() === 'hypixel') {
				message.member.addRole(message.guild.roles.find(r => r.name.toLowerCase() == args[0].toLowerCase()));
				message.channel.send(":white_check_mark: Tag asigned!").then(msg => {msg.delete(4000)});
			}
			message.delete();
		}
		else if (args[0].toLowerCase() === 'list') {
			message.channel.send("**Tags:**\n - School\n - Skyblock\n - Minigames\n - UHC\n - Survival\n - ARK\n - Hypixel\n - None").then(msg => {msg.delete(30000)});
			message.delete(30000);
		}
		else if (!args[0]) {
			message.delete();
			message.channel.send("**Invalid Argument, try: '!help'.**").then(msg => {msg.delete(4000)});
			return;
		}
		else {
			message.delete();
			message.channel.send("**Invalid Argument, try: '!help'.**").then(msg => {msg.delete(4000)});
		}
	}
	else if (command === 'cf') {
		var cf = Array(2);
		cf[1] = "Heads";
		cf[2] = "Tails";
		
		var coinflip = getRandomInt(1, 3);
		if (coinflip === 1) { message.channel.send(cf[1]).then(msg => {msg.delete(300000)}); }
		if (coinflip === 2) { message.channel.send(cf[2]).then(msg => {msg.delete(300000)}); }
		message.delete(300000);
	}
	else if (command === 'yeet') {
		message.channel.send('@everyone bel dit nummertje: *||0644800001||*').then(msg => {msg.delete(30000)});
		message.channel.send('@everyone bel dit nummertje: *||0644800001||*').then(msg => {msg.delete(30000)});
		message.channel.send('@everyone bel dit nummertje: *||0644800001||*').then(msg => {msg.delete(30000)});
		message.channel.send('@everyone bel dit nummertje: *||0644800001||*').then(msg => {msg.delete(30000)});
		message.channel.send('@everyone bel dit nummertje: *||0644800001||*').then(msg => {msg.delete(30000)});
		message.channel.send('@everyone bel dit nummertje: *||0644800001||*').then(msg => {msg.delete(30000)});
		message.channel.send('@everyone bel dit nummertje: *||0644800001||*').then(msg => {msg.delete(30000)});
		message.channel.send('@everyone bel dit nummertje: *||0644800001||*').then(msg => {msg.delete(30000)});
		message.channel.send('@everyone bel dit nummertje: *||0644800001||*').then(msg => {msg.delete(30000)});
		message.channel.send('@everyone bel dit nummertje: *||0644800001||*').then(msg => {msg.delete(30000)});
		message.delete(30000);
	}

	
	
	
	
	else if (command === 'question' && message.member.roles.find(r => r.name === "Bot builder")) {
		var Amount = getRandomInt(2,5);
		var Form = getRandomInt(1,5);
		
		if (Form === 1 && Amount == 2) { message.channel.send('wat is: **' + getRandomInt(0,10) + ' x ' + getRandomInt(0,10) + '**=').then(msg => {msg.delete(30000)}); }
		if (Form === 1 && Amount == 3) { message.channel.send('wat is: **' + getRandomInt(0,10) + ' x ' + getRandomInt(0,10) + ' x ' + getRandomInt(0,10) + '**=').then(msg => {msg.delete(30000)}); }
		if (Form === 1 && Amount == 4) { message.channel.send('Wat is het kwadraat van: **' + getRandomInt(1, 16) + '**?').then(msg => {msg.delete(30000)}); }
		
		if (Form === 2 && Amount == 2) { message.channel.send('wat is: **' + getRandomInt(1,21) + ' + ' + getRandomInt(1,21) + '**=').then(msg => {msg.delete(30000)}); }
		if (Form === 2 && Amount == 3) { message.channel.send('wat is: **' + getRandomInt(1,21) + ' + ' + getRandomInt(1,21) + ' + ' + getRandomInt(1,21) + '**=').then(msg => {msg.delete(30000)}); }
		if (Form === 2 && Amount == 4) { message.channel.send('wat is: **' + getRandomInt(1,21) + ' + ' + getRandomInt(1,21) + ' + ' + getRandomInt(1,21) + ' + ' + getRandomInt(1,21) + '**=').then(msg => {msg.delete(30000)}); }
		
		if (Form === 3 && Amount == 2) { message.channel.send('wat is: **' + getRandomInt(18,50) + ' - ' + getRandomInt(1,10) + ' - ' + getRandomInt(1,10) + '**=').then(msg => {msg.delete(30000)}); }
		if (Form === 3 && Amount == 3) { message.channel.send('wat is: **' + getRandomInt(27,75) + ' - ' + getRandomInt(1,10) + ' - ' + getRandomInt(1,10) + ' - ' + getRandomInt(1,10) + '**=').then(msg => {msg.delete(30000)}); }
		if (Form === 3 && Amount == 4) { message.channel.send('wat is: **' + getRandomInt(36,100) + ' - ' + getRandomInt(1,10) + ' - ' + getRandomInt(1,10) + ' - ' + getRandomInt(1,10) + ' - ' + getRandomInt(1,10) + '**=').then(msg => {msg.delete(30000)}); }
		
		if (Form === 4 && Amount == 2) { message.channel.send('Wat is: **(' + getRandomInt(1,100) + ' + ' + getRandomInt(1,50) + ' - ' + getRandomInt(1,25) + ') x ' + getRandomInt(1,4) + '**=').then(msg => {msg.delete(30000)}); }
		if (Form === 4 && Amount == 3) { message.channel.send('Tag another user.').then(msg => {msg.delete(30000)}); }
		if (Form === 4 && Amount == 4) { message.channel.send('Tag yourself.').then(msg => {msg.delete(30000)}); }
		
		message.delete();
	}
	else if (command === 'question' && !message.member.roles.find(r => r.name === "Bot builder")) {
		message.channel.send("**You do not have the right permissions to execute this command, try: '!help'.**").then(msg => {msg.delete(4000)});
		message.delete();
	}
	else if (command === 'muteall' && message.member.roles.find(r => r.name === "Bot builder")) {
		message.channel.overwritePermissions(message.channel.guild.defaultRole, { SEND_MESSAGES: false });
        	async function clearchat() {
            	message.delete();
            	const fetched = await message.channel.fetchMessages({limit: 99});
            	message.channel.bulkDelete(fetched);
        	}
		clearchat();
		message.channel.send("Server chat messages: **Disabled**.");
	}
	else if (command === 'muteall' && !message.member.roles.find(r => r.name === "Bot builder")) {
		message.channel.send("**You do not have the right permissions to execute this command, try: '!help'.**").then(msg => {msg.delete(4000)});
		message.delete();
	}
	else if (command === 'unmuteall' && message.member.roles.find(r => r.name === "Bot builder")) {
		message.channel.overwritePermissions(message.channel.guild.defaultRole, { SEND_MESSAGES: true });
        	async function clearchat() {
            	message.delete();
            	const fetched = await message.channel.fetchMessages({limit: 99});
            	message.channel.bulkDelete(fetched);
        	}
		clearchat();
		message.channel.send("Server chat messages: **Enabled**.");
	}
	else if (command === 'unmuteall' && !message.member.roles.find(r => r.name === "Bot builder")) {
		message.channel.send("**You do not have the right permissions to execute this command, try: '!help'.**").then(msg => {msg.delete(4000)});
		message.delete();
	}
	else if (command === 'gstart' && message.member.roles.find(r => r.name === "Giveaways")) {
		message.delete(1000);
	}
	else {
		message.delete();
		message.channel.send("**Invalid Command, try: '!help'.**").then(msg => {msg.delete(4000)});
	}
	
	function getRandomInt(min, max) {
 		min = Math.ceil(min);
  		max = Math.floor(max);
 		return Math.floor(Math.random() * (max - min)) + min;
	}
});

client.login(process.env.token);
