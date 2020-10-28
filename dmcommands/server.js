exports.run = (client, message, args) => {
    client.ping('hub.bteaus.com', 25565, (error, response) => {
        if (error) {
            const errorEmbed = new client.Discord.MessageEmbed()
            .setTitle('Server Status')
            .setColor(client.info.embedHexcode)
            .setDescription('Offline :pensive: Contact Coppertine#1718')
            .setTimestamp();
            message.channel.send(errorEmbed);
            return;
        }

        const serverEmbed = new client.Discord.MessageEmbed()
        .setTitle('Server Status')
        .setColor(client.info.embedHexcode)
        .setDescription('Online! :thumbsup:')
        .addField('Server IP', 'hub.bteaus.com')
        .addField('Server Version', 'Build The Earth | 1.12.2 - 1.16.2')
        .addField('Online Players', response.onlinePlayers)
        .setTimestamp();
        message.channel.send(serverEmbed);

        console.log(response);
    });
};
