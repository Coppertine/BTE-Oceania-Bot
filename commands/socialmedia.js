exports.run = (client, message, args) => {
        const embed = new client.Discord.MessageEmbed()
        .setTitle('BTE Oceania: Social Media')
        .setColor(client.info.embedHexcode)
        .setThumbnail('https://cdn.discordapp.com/attachments/741210134642163713/745520614546341948/unknown.png')
        .addField('Link','https://linktr.ee/BTEoceania')
        return message.channel.send(embed);
}
