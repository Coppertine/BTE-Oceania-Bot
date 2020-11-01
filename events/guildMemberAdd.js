module.exports = async (client, member) => {

        const guild = member.guild;
        const memberCount = guild.members.cache.filter(member => !member.user.bot).size;
        const welcomeChannel = client.channels.cache.get('740865155243704412');
        
        const role1 = reaction.message.guild.roles.cache.get('742282165064302613');
        await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
        welcomeChannel.send(member.toString());
        welcomeChannel.send({ embed: {
            title: 'Welcome to Oceania Build Team!',
            color: client.info.embedHexcode,
            description: member.toString(),
            thumbnail: { 
                url: member.user.displayAvatarURL({dynamic:true}), 
            },
            fields: [
                {
                    name:'\u200b',
                    value: 'Please read <#740865161749069874> and <#740865157189861437> to get started!\nDon\'t forget to verify yourself using the :door: at <#740865157189861437>!'
                },
                {
                    name:'\u200b',
                    value: 'You are the '+ memberCount + 'th member!'
                }
            ],
            timestamp: new Date(),
            footer: {
                text: 'Oceania Build Team',
                icon_url: 'https://cdn.discordapp.com/attachments/741210134642163713/745520614546341948/unknown.png',
            },
        }});
        
        
        client.channels.cache.get('746584674180268073').setName(`👫 All Members: ${memberCount}`);
    
}
