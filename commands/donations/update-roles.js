const {
    Command
} = require('discord.js-commando');
const Messages = require('discord-messages')
const {
    Client
} = require('discord.js');
const client = new Client()
module.exports = class FightCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ur',
            aliases: ['update-roles'],
            group: "donations",
            memberName: 'update-roles',
            description: '-',
        });
    }
    async run(message) {
        const prefix = 'fh '
        const args = message.content.slice(prefix.length).split(/ +/g);
        if (
            !message.member.roles.cache.some(role => role.id === '824539655134773269') &&
            !message.member.roles.cache.some(role => role.id === '825783847622934549') &&
            !message.member.roles.cache.some(role => role.id === '858088054942203945') &&
            message.author.id !== '598918643727990784'
        ) {
            return message.channel.send('You must have one of the following roles to register this command: \`Moderator\`, \`Giveaway Manager\` or \`Event Manager\`')
        }
        const userid = message.mentions.users.size > 0 ? message.mentions.users.first().id : args[0]
        const user = await message.guild.members.fetch(userid)

        if (!user) return message.channel.send("No such user found.")
        const results = await Messages.fetch(userid, message.guild.id, false)

        if (results === 'false' || results === false) return message.channel.send('No user found.')

        const amountDonated = parseInt(results.data.messages)

        if (
            amountDonated >= 2500000000
        ) {
            // donated 2.5b coins

            [
                '826197829126979635', // 2.5b
                '826197648927227944', // 1b
                '826197396002177044', // 750m
                '826197222751862877', // 500m
                '826196972167757875', // 250m
            ].forEach(async roleID => {
                await sleep(500)
                user.roles.add(roleID)
            })

            message.channel.send(`A total of **5** roles will be added to the user!`)
        } else if (
            amountDonated >= 1e9
        ) {
            [
                '826197648927227944', // 1b
                '826197396002177044', // 750m
                '826197222751862877', // 500m
                '826196972167757875', // 250m
            ].forEach(async roleID => {
                await sleep(500)
                user.roles.add(roleID)
            })

            message.channel.send(`A total of **4** roles will be added to the user!`)
        } else if (
            amountDonated >= 750e6
        ) {
            [
                '826197396002177044', // 750m
                '826197222751862877', // 500m
                '826196972167757875', // 250m
            ].forEach(async roleID => {
                await sleep(500)
                user.roles.add(roleID)
            })

            message.channel.send(`A total of **3** roles will be added to the user!`)

        } else if (
            amountDonated >= 500e6
        ) {
            [
                '826197222751862877', // 500m
                '826196972167757875', // 250m
            ].forEach(async roleID => {
                await sleep(500)
                user.roles.add(roleID)
            })

            message.channel.send(`A total of **2** roles will be added to the user!`)

        } else if (
            amountDonated >= 250e6
        ) {
            [
                '826196972167757875', // 250m
            ].forEach(async roleID => {
                await sleep(500)
                user.roles.add(roleID)
            })

            message.channel.send(`A total of **1** roles will be added to the user!`)
        } else {
            message.channel.send("No roles were added.")
        }

    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

client.login(process.env.token)