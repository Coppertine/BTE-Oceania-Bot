exports.run = (client, message, args) => {
        const embed = new client.Discord.MessageEmbed()
        .setTitle('Apply for BTE Oceania')
        .setColor(client.info.embedHexcode)
        .setDescription('You can apply for BTE Oceania by using the link below.')
        .setThumbnail('https://cdn.discordapp.com/attachments/741210134642163713/745520614546341948/unknown.png')
	.addField('Apply:','https://buildtheearth.net/bte-oceania')
        return message.channel.send(embed);
}
