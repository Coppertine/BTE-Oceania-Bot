const fs = require('fs');

function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch(err) {
            return cb && cb(err);
        }
    });
}

module.exports = async (client, reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === '749302258239275069' && reaction.emoji.name === '✅') {
        const userId = await reaction.message.author.id;
        jsonReader('./scores.json', (err, test) => {
            if (err) {
                console.log(err);
                return;
            }
            
            if (!test[userId]) {
                test[userId] = 1;
                fs.writeFile('./scores.json', JSON.stringify(test, null, 2), (err) => {
                    if (err) console.log('Error writing file:', err);
                    console.log(test);
                });
            } else {
                test[userId] += 1;
        
                fs.writeFile('./scores.json', JSON.stringify(test, null, 2), (err) => {
                    if (err) console.log('Error writing file:', err);
                    console.log(test);
                });
            }
        });

        reaction.message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error))
        .then(() => reaction.message.react('☑️'));
    }
   if (reaction.message.channel.id === '741200772280090675') /* Role Select */ {
        switch(reaction.emoji.id)
        {
            case '747053308258287716': // QLD
                await reaction.message.guild.members.cache.get(user.id).roles.add('741069141783347212');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			title: 'QLD Role Added',
			color: client.info.embedHexcode,
			description: '<:QLD:747053308258287716> QLD Role added!'}});
		break;
            case '747053308023144468': // NSWACT
                await reaction.message.guild.members.cache.get(user.id).roles.add('741069181868310710');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			title: 'NSW / ACT',
			color: client.info.embedHexcode,
			description: '<:NSWACT:747053308023144468> NSW / ACT Role added!'}});
                break;
            case '747053307175895110': // NZ
                await reaction.message.guild.members.cache.get(user.id).roles.add('741069531509686363');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {title:'NZ Role Added',
			color: client.info.embedHexcode,
			description: '<:NZ:747053307175895110> NZ Role added!'}});
                break;
            case '747053308237185074': // NT
                await reaction.message.guild.members.cache.get(user.id).roles.add('741069460147798038');
                await reaction.message.guild.members.cache.get(user.id).send({embed: {
	                title: 'NT Role Added',
	                color: client.info.embedHexcode,
        	        description: '<:NT:747053308237185074> NT Role added!'}});
                break;
            case '747053308044378112': // WA
                await reaction.message.guild.members.cache.get(user.id).roles.add('741069460147798038');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			title: 'WA Role Added',
			color: client.info.embedHexcode,
	                description: '<:WA:747053308044378112> WA Role added!'}});
                break;
            default:
                break;
        }
    } 
    if (reaction.message.channel.id === '740865157189861437') /* Rules */ {
        if(reaction.emoji.name === '🚪') // User accepted rules, can remove role.
        {
	   console.log("got door");
            const role1 = reaction.message.guild.roles.cache.get('742282165064302613');
            if (role1) { 
		console.log("got role");
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
                await reaction.message.guild.members.cache.get(user.id).send('Thank you, and welcome to BTE Oceania Build Team!');
            }
                await reaction.users.remove(user.id);

        }
    }
}
