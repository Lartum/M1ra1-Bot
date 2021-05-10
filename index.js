const Discord = require('discord.js')
const client = new Discord.Client()
const fetch = require('node-fetch')
const keepAlive = require('./app')


client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}`)
})

client.on('message', msg => {
  if(msg.content === 'ping') {
    msg.reply('pong')
  }
  if(msg.content === 'hello') {
    msg.reply('kya hua haram kor')
  }
})

keepAlive()
client.login(process.env.TOKEN)