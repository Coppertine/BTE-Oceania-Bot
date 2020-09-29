exports.run = (client, message, args) => {
        const embed = new client.Discord.MessageEmbed()
        .setTitle('How to use /tpll')
        .setColor(client.info.embedHexcode)
        .setDescription('You can learn how to use /tpll using the video below.')
        .addField('Video:','https://gfycat.com/AdolescentWindingCentipede')
        return message.channel.send(embed);
}
