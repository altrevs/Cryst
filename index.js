const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Bot is online as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.content === '!socials') {
        const embed = new EmbedBuilder()
            .setTitle('Ascend Socials')
            .setDescription('To check out Ascend\'s Socials, click [here](https://yourlink.com)\n\nMake sure to follow!')
            .setColor(0x00CFFF);

        message.channel.send({ embeds: [embed] });
    }
});

client.login(process.env.TOKEN);
