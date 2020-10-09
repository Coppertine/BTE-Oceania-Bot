exports.run = (client, message, args) => {

        const embed = new client.Discord.MessageEmbed()
        .setTitle('BTE Oceania')
        .setColor(client.info.embedHexcode)
        .setDescription('Once you have read the rules, click the :door: to remove your Unverified Status.');
	if(message.channel.id === '740865157189861437')
	{
            message.channel.send(embed).then(sentEmbed => {
		sentEmbed.react('🚪')
	    });
	    return;
	} else {
	    return;
	}
}
