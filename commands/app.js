async function ifAppExists(rows, arg) {
    const rowCount = await rows.length;
    let apps = [];
    for (let i = 0; i < rowCount; i++) {
        if (rows[i].Username == arg) apps.push(i);
    }
    return apps;
}

async function ifUAppExists(rows, arg) {
    const rowCount = await rows.length;
    let apps = [];
    for (let i = 0; i < rowCount; i++) {
        if (rows[i].Username == arg) {
            if (!rows[i].result) apps.push(i);
        }
    }
    return apps;
}

function fieldsFunc(namesParam, ifTag) {
    let returns = namesParam.map(r => {
        let time = r.time
        let ID = r.ID
        let tag = r.tag
        var status
        let statusString = r.status
        var statusBoolean
        if (statusString) {
            switch (statusString.toLowerCase()) {
                case 'true':
                    statusBoolean = true
                    break;
                case 'false':
                    statusBoolean = false
                    break;
                default:
                    statusBoolean = null
                    break;
            }
        }
        switch (statusBoolean) {
            case true:
                status = ':white_check_mark:';
                break;
            case false:
                status = ':x:';
                break;
            default:
                status = ':grey_question"';
                break;
        }
        if (ifTag) {
            return {'name': `Time: \`${time}\` \nName: \`${tag}\` \nStatus: ${status} \nApplication ID: \`${ID}\``, 'value': '\u200B'}
        } else return {'name': `Time: \`${time}\` \nStatus: ${status} \nApplication ID: \`${ID}\``, 'value': '\u200B'}
    })
    return returns
}

exports.run = async (client, message, args) => {
    if (!message.member.roles.cache.has(client.ids.modRoleID) && !message.member.roles.cache.has(client.ids.trialModRoleID)) {
        message.channel.send('You must have the `Trial Moderator` or `Moderator` role to use application commands.');
        return;
    } else
    if (message.channel.id !== '739239527431798805') {
        message.channel.send('Please use <#739239527431798805> for application commands.');
        return;
    }
    if (args) {
        switch (args[0]) {
            case 'review': {
                let msgGet = await message.channel.send('Getting data...')
                sheet = await client.accessSpreadsheet(client.googleSpreadsheet, client.creds);
                const rows = await sheet.getRows({
                    offset: 0
                });
                if (!args[1]) {
                    const rowCount = await rows.length;
                    let unreviewed = [];
                    let minus = 0;
                    for (let n = 0; n < rowCount; n++) {
                        if (rows[n].Username == undefined) return;
                        if (rows[n].result == undefined && !unreviewed.includes(rows[n].Username)) {
                            unreviewed[n-minus] = rows[n].Username
                        } else minus++
                    }
                    if (unreviewed[0] == undefined) {
                        msgGet.delete()
                        message.channel.send('No unreviewed applications!')
                        return;
                    }
                    const reviewEmbed = new client.Discord.MessageEmbed()
                    .setTitle('Unreviewed applicants')
                    .setColor(client.info.embedHexcode)
                    .setDescription(unreviewed)
                    msgGet.delete()
                    message.channel.send(reviewEmbed)
                } else {
                    const apps = await ifUAppExists(rows, args[1]);
                    if (apps.length === 0) {
                        msgGet.delete()
                        message.channel.send("An unreviewed application for that user doesn't exist!");
                        return;
                    } else {
                        if (apps.length > 1) message.channel.send('There are multiple unreviewed applications from this user. Here is the latest:')
                        const row = apps.pop()
                        const applicant = rows[row].Username
                        
                        const ans1 = rows[row].Minecraft_Username
                        const ans2 = rows[row].Links
                        const ans3 = rows[row].Hours
                        const timestamp = rows[row].Timestamp
                        
                        const embed = new client.Discord.MessageEmbed()
                        .setTitle(`Builder application for ${applicant}:`)
                        .setColor(client.info.embedHexcode)
                        .addField('What is your Minecraft username?', ans1)
                        .addField('Please give a link or multiple links to screenshots of 3+ buildings you have built with the BuildTheEarth modpack.', ans2)
                        .addField('How many hours per week can you dedicate towards building?', ans3)
                        .setFooter(`Submitted ${timestamp}`)
                        msgGet.delete()
                        message.channel.send(embed)
                    }
                }
                break;
            }
            case 'accept': {
                if (!args[1]) {
                    message.channel.send('Please give a user to accept in this format: name#1234');
                    return;
                }
                const user = await client.users.cache.find(u => u.tag === args[1])
                if (user == undefined) {
                    message.channel.send('The user argument format is incorrect, or the user is not in this server!');
                    return;
                }
                const userID = user.id
                
                let msgGet1 = await message.channel.send('Getting data...')
                sheet = await client.accessSpreadsheet(client.googleSpreadsheet, client.creds);
                const rows = await sheet.getRows({
                    offset: 0
                });
                
                const apps = await ifUAppExists(rows, args[1])
                if (!apps.length > 0) {
                    msgGet1.delete()
                    message.channel.send("An unreviewed application for that user doesn't exist!");
                    return;
                } else {
                    msgGet1.delete()
                    let msg = await message.channel.send('Uploading updated data...')
                    const userToMember = message.guild.member(user)
                    userToMember.roles.add('704354906450034708')
                    const row = apps.pop()
                    rows[row].result = true
                    await rows[row].save();
                    if (apps.length > 0) {
                        apps.forEach(async r => {
                            rows[r].result = false
                            await rows[r].save()
                        })
                    }
                    msg.delete()
                    message.channel.send(`**${args[1]}** was accepted!`)
                    client.users.cache.get(userID).send('Your application for builder has been accepted!')
                }
                break;
            }
            case 'deny': {
                if (!args[1]) {
                    message.channel.send('Please give a user to deny in this format: name#1234');
                    return;
                }
                let reason = args.slice(2).join(" ");
                if (reason.length < 1) {
                    message.channel.send('Please give a reason for denial.')
                    return;
                }
                const user = await client.users.cache.find(u => u.tag === args[1])
                if (user == undefined) {
                    message.channel.send('The user argument format is incorrect, or the user is not in this server!');
                    return;
                }
                const userID = user.id
                
                let msgGet = await message.channel.send('Getting data...')
                sheet = await client.accessSpreadsheet(client.googleSpreadsheet, client.creds);
                const rows = await sheet.getRows({
                    offset: 0
                });
                
                const apps = await ifUAppExists(rows, args[1])
                if (!apps.length > 0) {
                    msgGet.delete
                    message.channel.send("An unreviewed application for that user doesn't exist!");
                    return;
                } else {
                    msgGet.delete()
                    let msg = await message.channel.send('Uploading updated data...')
                    const userToMember = message.guild.member(user1)
                    userToMember.roles.remove('704354906450034708')
                    const row = apps.pop()
                    rows[row].result = false
                    await rows[row].save();
                    if (apps.length > 0) {
                        apps.forEach(async r => {
                            rows[r].result = false
                            await rows[r].save()
                        })
                    }
                    msg.delete()
                    message.channel.send(`**${args[1]}** was denied. \n**Reason:** ${reason}`)
                    client.users.cache.get(userID).send(`Your application for builder has been denied. \n**Reason:** ${reason}`)
                }
                break;
            }
            case 'history': {
                const type = await parseInt(args[1]) || args[1]
                switch (typeof type) {
                    case 'string': {
                        let msg = await message.channel.send('Getting data...')
                        sheet = await client.accessSpreadsheet(client.googleSpreadsheet, client.creds);
                        const rows = await sheet.getRows({
                            offset: 0
                        });
                        const apps = await ifAppExists(rows, args[1])
                        if (apps.length == 0) {
                            msg.delete()
                            message.channel.send('There are no applications for this user!')
                            return
                        }
                        let names = await []
                        names = await apps.map(r => {
                            let time = rows[r].Timestamp
                            let status = rows[r].result
                            let appID = r
                            return {'time': time, 'status': status, 'ID': appID}
                        })
                        const fields = await fieldsFunc(names, false)
                        const embed = new client.Discord.MessageEmbed()
                        .setTitle(`All applications for ${args[1]}`)
                        .addFields(fields)
                        .setColor(client.info.embedHexcode)
                        msg.delete()
                        message.channel.send(embed)
                        break;
                    }
                    case 'number': {
                        let msg = await message.channel.send('Getting data...')
                        sheet = await client.accessSpreadsheet(client.googleSpreadsheet, client.creds);
                        const rows = await sheet.getRows({
                            offset: 0
                        });
                        const pageNumber = args[1]
                        let filledRows = await rows.map(r => {
                            if (r.Timestamp !== 'undefined') return r
                            else return;
                        })
                        const checkRow = pageNumber * 10 - 10
                        if (filledRows[checkRow] == undefined) {
                            msg.delete()
                            message.channel.send(`The application page \`${pageNumber}\` doesn't exist!`)
                            return;
                        }
                        let pageRows = filledRows.slice(checkRow, checkRow + 10)
                        let names = await []
                        names = await pageRows.map(r => {
                            let time = r.Timestamp
                            let status = r.result
                            let appID = r._rowNumber - 1
                            let tag = r.Username
                            return {'time': time, 'tag': tag, 'status': status, 'ID': appID}
                        })
                        const fields = await fieldsFunc(names, true)
                        const pageEmbed = new client.Discord.MessageEmbed()
                        .setTitle(`Application history: Page \`${pageNumber}\``)
                        .addFields(fields)
                        .setColor(client.info.embedHexcode)
                        msg.delete()
                        message.channel.send(pageEmbed)
                        break;
                    }
                    case 'undefined': {
                        let msg = await message.channel.send('Getting data...')
                        sheet = await client.accessSpreadsheet(client.googleSpreadsheet, client.creds);
                        const rows = await sheet.getRows({
                            offset: 0
                        });
                        let filledRows = await rows.map(r => {
                            if (r.Timestamp !== 'undefined') return r
                            else return;
                        })
                        let page1 = []
                        var page1Length
                        if (filledRows.length < 10) page1Length = filledRows.length
                        else page1Length = 10
                        for (let a = 0; a < page1Length; a++) {
                            page1[a] = filledRows.pop()
                        }
                        let names = await []
                        names = await page1.map(r => {
                            let time = r.Timestamp
                            let status = r.result
                            let appID = r._rowNumber - 1
                            let tag = r.Username
                            return {'time': time, 'tag': tag, 'status': status, 'ID': appID}
                        })
                        const fields = await fieldsFunc(names, true)
                        const page1Embed = new client.Discord.MessageEmbed()
                        .setTitle(`Recent application history`)
                        .addFields(fields)
                        .setColor(client.info.embedHexcode)
                        msg.delete()
                        message.channel.send(page1Embed)
                        break;
                    }
                    default:
                        message.channel.send('Please give a valid argument, or leave argument blank')
                        break;
                }
                break;
            }
            default:
                message.channel.send('Please give a valid argument.')
        }
    } else message.channel.send('Please give a valid argument.')
}