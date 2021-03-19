module.exports = {
    name: 'love',
    description: "See how much the bot loves you",
    execute(message, args){
        const random = Math.floor(Math.random() * 11);
        
        message.channel.send(`This bot loves you this much: ${random} hearts`)
    }
}
