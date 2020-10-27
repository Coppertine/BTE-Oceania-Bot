module.exports = async (client, member) => {
    const guild = member.guild;
    const memberCount = guild.members.cache.filter(member => !member.user.bot).size;
    const welcomeChannel = client.channels.cache.get('740865155243704412');
    
    welcomeChannel.send(member.toString());
    welcomeChannel.send({ embed: {
        title: 'Welcome!',
        color: client.info.embedHexcode,
        description: member.toString(),
        thumbnail: { 
            url: member.user.displayAvatarURL(), 
        },
        fields: [
            {
                name:'\u200b',
                value: 'Please read <#740865161749069874> and <#740865157189861437> to get started!'
            },
            {
                name:'\u200b',
                value: 'Don\'t forget to verify yourself using the :door: at <#740865157189861437>!'
            },
            {
                name:'\u200b',
                value: 'You are the '+ memberCount + 'th member!'
            }
        ]
    }});
    
    
    client.channels.cache.get('746584674180268073').setName(`👫 All Members: ${memberCount}`);
}
