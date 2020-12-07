module.exports = (client, message) => {
    if(message.webhookID && message.channel.id === '739239527431798805') return client.autoApp.run(client, message);
    if (message.author.bot) return;

    const suggestionsChannel = '740865176760221757';
    const staffSuggestionsChannel = '770914068579090453';
    const staffPolls = '753226065199104121';
    const meetingPolls = '772375515461451796';
    if (message.channel.id !== suggestionsChannel 
        && message.channel.id !== staffSuggestionsChannel
        && message.channel.id !== staffPolls
        && message.channel.id !== meetingPolls) {
        if (!message.content.startsWith(client.prefix)) return;
    };

    if (message.channel.id === suggestionsChannel) {
        if (!message.content.startsWith('**#')) {
            return message.delete().then(() => message.channel.send('Please Number your suggestion in the format ```**#number** \nsuggestion \ncontent```').then(msg => {msg.delete({ timeout: 7500 })}))
        }
        message.react('👍')
        .then(() => message.react('👎'))
        .then(() => message.react('🤷‍♂️'))
        .catch(() => console.error('One of the emojis failed to react.'));
        return;
    }

    if (message.channel.id === staffSuggestionsChannel) {
        if (!message.content.startsWith('**#')) {
            return message.delete().then(() => message.channel.send('Please Number your suggestion in the format ```**#number** \nsuggestion \ncontent```').then(msg => {msg.delete({ timeout: 7500 })}))
        }
        message.react('👍')
        .then(() => message.react('👎'))
        .then(() => message.react('🤷‍♂️'))
        .catch(() => console.error('One of the emojis failed to react.'));
        return;
    }

    if(message.channel.id === staffPolls)
    {
        message.react('👍')
        .then(() => message.react('👎'))
        .then(() => message.react('🤷‍♂️'))
        .catch(() => console.error('One of the emojis failed to react.'));
        return;
    }

    if(message.channel.id === meetingPolls) {
        message.react('👍')
        .then(() => message.react('👎'))
        .then(() => message.react('🤷‍♂️'))
        .catch(() => console.error('One of the emojis failed to react.'));
        return;
    }

    if (message.channel.name == undefined) return;
    //if (message.channel.type == 'dm') {
    //     if(message.content.startsWith("="))
    //     {
    //         const args = message.content.slice(1).trim().split(/ +/g);
    //         const command = args.shift().toLowerCase();

    //         const cmd = client.dmcommands.get(command);

    //         if (!cmd) return;

    //         cmd.run(client, message, args);
    //     }
    // } else {
        const args = message.content.slice(1).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command);

        if (!cmd) return;

        cmd.run(client, message, args);
//    }
};
