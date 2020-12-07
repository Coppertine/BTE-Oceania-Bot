module.exports = async (client, reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === '741200772280090675') {
        switch(reaction.emoji.id)
        {
            case '747053308258287716': // QLD
                await reaction.message.guild.members.cache.get(user.id).roles.remove('741069141783347212');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'QLD Role Removed',
			        color: client.info.embedHexcode,
        			description: '<:QLD:747053308258287716> QLD Role removed!'}});
		        break;
            case '747053308023144468': // NSWACT
                await reaction.message.guild.members.cache.get(user.id).roles.remove('741069181868310710');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
		        	title: 'NSW / ACT',
        			color: client.info.embedHexcode,
		        	description: '<:NSWACT:747053308023144468> NSW / ACT Role removed!'}});
                break;
            case '747053307175895110': // NZ
                await reaction.message.guild.members.cache.get(user.id).roles.remove('741069531509686363');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
                    title:'NZ Role Removed',
			        color: client.info.embedHexcode,
			        description: '<:NZ:747053307175895110> NZ Role removed!'}});
                break;
            case '747053308237185074': // NT
                await reaction.message.guild.members.cache.get(user.id).roles.remove('741069460147798038');
                await reaction.message.guild.members.cache.get(user.id).send({embed: {
	                title: 'NT Role Removed',
	                color: client.info.embedHexcode,
        	        description: '<:NT:747053308237185074> NT Role removed!'}});
                break;
            case '747053308044378112': // WA
                await reaction.message.guild.members.cache.get(user.id).roles.remove('741069460147798038');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'WA Role Removed',
        			color: client.info.embedHexcode,
	                description: '<:WA:747053308044378112> WA Role removed!'}});
                break;
            case '747053308413345833': // SA
                await reaction.message.guild.members.cache.get(user.id).roles.remove('741069229998211193');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'SA Role Removed',
        			color: client.info.embedHexcode,
	                description: '<:SA:747053308413345833> SA Role removed!'}});
                break;
            case '747053308048572447': // TAS
                await reaction.message.guild.members.cache.get(user.id).roles.remove('741069504011960330');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'TAS Role Removed',
        			color: client.info.embedHexcode,
	                description: '<:TAS:747053308048572447> TAS Role removed!'}});
                break;
            case '762915110083362846': // PNG
                await reaction.message.guild.members.cache.get(user.id).roles.remove('762916871333740545');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'PNG Role Removed',
        			color: client.info.embedHexcode,
	                description: '<:PNG:762915110083362846> PNG Role removed!'}});
                break;
            case '762919253447147591': // ISLANDS
                await reaction.message.guild.members.cache.get(user.id).roles.remove('762540520001634337');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'Islands Role Removed',
        			color: client.info.embedHexcode,
	                description: '<:PNG:762915110083362846> Islands Role removed!'}});
                break;
            case '762915121486888980': // FIJI
                await reaction.message.guild.members.cache.get(user.id).roles.remove('762917000833925180');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'Fiji Role Removed',
        			color: client.info.embedHexcode,
	                description: '<:FIJI:762915121486888980> Fiji Role removed!'}});
                break;
            case '747053308451225620': // VIC
                await reaction.message.guild.members.cache.get(user.id).roles.remove('741069205243297873');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'VIC Role Removed',
        			color: client.info.embedHexcode,
	                description: '<:VIC:747053308451225620> VIC Role removed!'}});
                break;
            case '763033430056632370': // Theme Parks
                await reaction.message.guild.members.cache.get(user.id).roles.remove('762917178814103553');
                await reaction.message.guild.members.cache.get(user.id).send({ embed: {
			        title: 'Theme Parks Role Removed',
        			color: client.info.embedHexcode,
	                description: '<:ThemeParks:763033430056632370> Theme Parks Role removed!'}});
                break;
            default:
                break;
        }
        //displayRoles(reaction.message.guild.members.cache.get(user.id));
    }
}
