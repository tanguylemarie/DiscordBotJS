module.exports = {
  name: 'ping',
  description: 'Test Command.',
  execute(message) {
    message.channel.send('Pong.');
  }
};