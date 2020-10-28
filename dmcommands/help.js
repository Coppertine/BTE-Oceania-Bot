exports.run = (client, message, args) => {
    if (!args || args.length < 1) {
        const embed = new client.Discord.MessageEmbed()
        .setTitle('BTE Oceania: Help')
        .setColor(client.info.embedHexcode)
        .setThumbnail('https://cdn.discordapp.com/attachments/741210134642163713/745520614546341948/unknown.png')
        .setDescription('Welcome to BTE Oceania, the one build team to push the limits of creativity.')
        .addField('Use a command below to get more specific information:','`=help server`\nBot created by MrSmarty and Coppertine')
        return message.channel.send(embed);
    }
    if (args[0] == 'ip') args[0] = 'server';
    switch (args[0]) {
        case 'server': {
            const embed = new client.Discord.MessageEmbed()
            .setTitle('BTE Oceania: Help')
            .setColor(client.info.embedHexcode)
            .setDescription('**IP:** `hub.bteaus.com` \nFor more information, go to <#740865156304601150>. \nTo check the server\'s status, use the command `=server`.')
            message.channel.send(embed);
            }
            break;
        default:
	    const embed = new client.Discord.MessageEmbed()
            .setTitle('BTE Oceania: Help')
            .setColor(client.info.embedHexcode)
            .setThumbnail('https://cdn.discordapp.com/attachments/741210134642163713/745520614546341948/unknown.png')
            .setDescription('Welcome to BTE Oceania, the one build team to push the limits of creativity.')
            .addField('Use a command below to get more specific information:','\n`=help server\nBot created by MrSmarty and Coppertine')
            return message.channel.send(embed);
    }
}
