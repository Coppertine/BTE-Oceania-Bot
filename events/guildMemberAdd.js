module.exports = async (client, member) => {
    const guild = member.guild;
    const memberCount = guild.members.cache.filter(member => !member.user.bot).size;
    const welcomeChannel = client.channels.cache.get('740865155243704412');
    
    welcomeChannel.send(member.toString());
    welcomeChannel.send({ embed: {
        title: 'Welcome!',
        color: client.info.embedHexcode,
        description: member.toString(),
        //thumbnail: member.avatarURL(),
        fields: [
            {
                title:'\u200b',
                description: 'Please read <#740865161749069874> and <#740865157189861437> to get started!'
            },
            {
                title:'\u200b',
                description: 'Don\'t forget to verify yourself using the :door: at <#740865157189861437>!'
            },
            {
                title:'\u200b',
                description: 'You are the ${memberCount}th member!'
            }
        ]
    }});
    
    
    client.channels.cache.get('746584674180268073').setName(`👫 All Members: ${memberCount}`);
}
