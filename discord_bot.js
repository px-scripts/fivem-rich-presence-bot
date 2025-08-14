const { Client, Intents } = require('discord.js');

// Array of tokens and their configurations
const botConfigs = [
    {
        token: '',
        activities: [
            { name: 'Playing cool games', type: 'PLAYING' },
            { name: 'Streaming music', type: 'STREAMING' },
            { name: 'Listening to the community', type: 'LISTENING' },
            { name: 'Watching the stars', type: 'WATCHING' }
        ],
        status: 'online'
    },
    {
        token: '',
        activities: [
            { name: 'Chatting with friends', type: 'LISTENING' },
            { name: 'Playing chess', type: 'PLAYING' },
            { name: 'Streaming a movie', type: 'STREAMING' },
            { name: 'Watching YouTube', type: 'WATCHING' }
        ],
        status: 'dnd' // Do Not Disturb
    }
    // Add more bots as needed
];

// Function to create and start multiple bot clients
botConfigs.forEach((config, index) => {
    const client = new Client({
        intents: [Intents.FLAGS.GUILDS] // Add other intents as needed
    });

    client.once('ready', () => {
        console.log(`Bot ${index + 1} is online! Logged in as ${client.user.tag}`);
        client.user.setStatus(config.status);
        rotateActivity(client, config.activities);
    });

    client.on('messageCreate', (message) => {
        if (message.content === '!ping') {
            message.reply('Pong!');
        }
    });

    client.login(config.token).catch(err => {
        console.error(`Failed to log in bot ${index + 1}:`, err);
    });
});

// Function to rotate the activity every 10 seconds
function rotateActivity(client, activities) {
    let currentActivityIndex = 0;

    setInterval(() => {
        const activity = activities[currentActivityIndex];
        client.user.setActivity(activity.name, { type: activity.type });
        // console.log(`Bot ${client.user.tag} set activity to: ${activity.name}`);

        currentActivityIndex = (currentActivityIndex + 1) % activities.length;
    }, 10000); // 10 seconds interval
}
