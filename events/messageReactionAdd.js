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

    // if (reaction.message.channel.id === '749302258239275069' && reaction.emoji.name === '✅') {
    //     const userId = await reaction.message.author.id;
    //     jsonReader('./scores.json', (err, test) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
            
    //         if (!test[userId]) {
    //             test[userId] = 1;
    //             fs.writeFile('./scores.json', JSON.stringify(test, null, 2), (err) => {
    //                 if (err) console.log('Error writing file:', err);
    //                 console.log(test);
    //             });
    //         } else {
    //             test[userId] += 1;
        
    //             fs.writeFile('./scores.json', JSON.stringify(test, null, 2), (err) => {
    //                 if (err) console.log('Error writing file:', err);
    //                 console.log(test);
    //             });
    //         }
    //     });

    //     reaction.message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error))
    //     .then(() => reaction.message.react('☑️'));
    // }
   
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
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
                    title:'NZ Role Added',
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
            case '747053308413345833': // SA
                await reaction.message.guild.members.cache.get(user.id).roles.add('741069229998211193');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'SA Role Added',
        			color: client.info.embedHexcode,
	                description: '<:SA:747053308413345833> SA Role added!'}});
                break;
            case '747053308048572447': // TAS
                await reaction.message.guild.members.cache.get(user.id).roles.add('741069504011960330');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'TAS Role Added',
        			color: client.info.embedHexcode,
	                description: '<:TAS:747053308048572447> TAS Role added!'}});
                break;
            case '762915110083362846': // PNG
                await reaction.message.guild.members.cache.get(user.id).roles.add('762916871333740545');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'PNG Role Added',
        			color: client.info.embedHexcode,
	                description: '<:PNG:762915110083362846> PNG Role added!'}});
                break;
            case '762919253447147591': // ISLANDS
                await reaction.message.guild.members.cache.get(user.id).roles.add('762540520001634337');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'Islands Role Added',
        			color: client.info.embedHexcode,
	                description: '<:PNG:762915110083362846> Islands Role added!'}});
                break;
            case '762915121486888980': // FIJI
                await reaction.message.guild.members.cache.get(user.id).roles.add('762917000833925180');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'Fiji Role Added',
        			color: client.info.embedHexcode,
	                description: '<:FIJI:762915121486888980> Fiji Role added!'}});
                break;
            case '747053308451225620': // VIC
                await reaction.message.guild.members.cache.get(user.id).roles.add('741069205243297873');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'VIC Role Added',
        			color: client.info.embedHexcode,
	                description: '<:VIC:747053308451225620> VIC Role added!'}});
                break;
            case '763033430056632370': // Theme Parks
                console.log("adding in Theme Parks");
                await reaction.message.guild.members.cache.get(user.id).roles.add('762917178814103553');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'Theme Parks Role Added',
        			color: client.info.embedHexcode,
	                description: '<:ThemeParks:763033430056632370> Theme Parks Role added!'}});
                break;
            default:
                break;
        }
    } 
    if (reaction.message.channel.id === '740865157189861437') /* Rules */ {
        if(reaction.emoji.name === '🚪') // User accepted rules, can remove role.
        {
            const role1 = reaction.message.guild.roles.cache.get('742282165064302613');
            if (reaction.message.guild.members.cache.get(user.id).roles.cache.some((role) => role.name === 'Unverified')) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
                await reaction.message.guild.members.cache.get(user.id).send('Thank you, and welcome to BTE Oceania Build Team!');
            }
                await reaction.users.remove(user.id);

        }
    }
    if (reaction.message.channel.id === '747252567624646798') /* Pings */ {
        
    }
}
