exports.run = (client, message, args) => {
        const embed = new client.Discord.MessageEmbed()
        .setTitle('BTE Oceania: About')
        .setColor(client.info.embedHexcode)
        .setThumbnail('https://cdn.discordapp.com/attachments/741210134642163713/745520614546341948/unknown.png')
        .setDescription('Welcome to BTE Oceania, the one build team to push the limits of creativity.')
        .addField('\u200B','We currently build Australia, New Zealand, Papa New Guinea and all Oceanic islands.')
        .setTimestamp()
        .setFooter('Bot created by MrSmarty and Coppertine');
        return message.channel.send(embed);
}
