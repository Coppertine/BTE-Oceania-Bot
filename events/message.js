module.exports = (client, message) => {
    if(message.webhookID && message.channel.id === '739239527431798805') return client.autoApp.run(client, message);
    if (message.author.bot) return;

    const suggestionsChannel = '740865176760221757';
    if (message.channel.id !== suggestionsChannel) {
        if (!message.content.startsWith(client.prefix)) return;
    };

    if (message.channel.id === suggestionsChannel) {
        message.react('👍')
        .then(() => message.react('👎'))
        .then(() => message.react('🤷‍♂️'))
        .catch(() => console.error('One of the emojis failed to react.'));
        return;
    }

    if (message.channel.name == undefined) return;

    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if (!cmd) return;

    cmd.run(client, message, args);
};
