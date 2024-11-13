const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
require('dotenv').config()

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.login(process.env.token);