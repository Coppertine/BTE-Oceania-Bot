exports.run = (client, message, args) => {
        const embed = new client.Discord.MessageEmbed()
        .setTitle("BTE Oceania | Role Menu")
        .setColor(client.info.embedHexcode)
		.setDescription("React below to select your roles")
		.addFields(
			{name: "<:ISLANDS:762919253447147591>", value: "Islands"},
			{name: "<:NSWACT:747053308023144468>", value: "New South Wales / Australian Capital Territory"},
			{name: "<:VIC:747053308451225620>", value: "Victoria"}, 
			{name: "<:QLD:747053308258287716>", value: "Queensland"},
			{name: "<:NZ:747053307175895110>", value: "New Zealand"}, 
			{name: "<:NT:747053308237185074>", value: "Northern Territory"}, 
			{name: "<:WA:747053308044378112>", value: "Western Australia"}, 
			{name: "<:SA:747053308413345833>", value: "South Australia"}, 
			{name: "<:TAS:747053308048572447>", value: "Tasmania"}, 
			{name: "<:PNG:762915110083362846>", value: "Papa New Guinea"},
			{name: "<:FIJI:762915121486888980>", value: "Fiji"},
			{name: "<:ThemeParks:763033430056632370>", value: "BTE Theme Parks"}
		);
	if(message.channel.id === "741200772280090675")
	{
            message.channel.send(embed).then(sentEmbed => {
				sentEmbed.react("762919253447147591");
				sentEmbed.react("747053308258287716");
				sentEmbed.react("747053307175895110"); 
				sentEmbed.react("747053308237185074"); 
				sentEmbed.react("747053308044378112"); 
				sentEmbed.react("747053308413345833"); 
				sentEmbed.react("747053308048572447"); 
				sentEmbed.react("762915110083362846");
				sentEmbed.react("762915121486888980");
				sentEmbed.react("747053308451225620"); 
				sentEmbed.react("763033430056632370");
	    	});
	    return;
	} else {
	    return;
	}
}
