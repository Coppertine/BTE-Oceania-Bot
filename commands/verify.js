exports.run = (client, message, args) => {

        const embed = new client.Discord.MessageEmbed()
        .setTitle('BTE Oceania')
        .setColor(client.info.embedHexcode)
        .setDescription('Once you have read the rules, click the :door: to remove your <@!742282165064302613> Status.');
	if(message.channel.id === '740865157189861437')
	{
            message.channel.send(embed);
	    message.channel.messages.cache.fetch(message.channel.lastMessageID).react('🚪');
	    message.channel.delete(message.id, 'command');
	    return;
	} else {
	    return;
	}
}
