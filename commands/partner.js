exports.run = (client, message, args) => {
        const embed = new client.Discord.MessageEmbed()
        .setTitle('BTE Oceania x Sparked Host')
        .setColor('#FF9600')
        .setDescription('Get ready to purchase a service today using our affiliate link below and recieve your service instantly!')
        .setThumbnail('https://sparkedhost.com/assets/img/icon.png')
	.addField('Affiliate Link:','https://billing.sparkedhost.com/aff.php?aff=888')
        return message.channel.send(embed);
}
