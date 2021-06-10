module.exports = {
	name: 'pause',
	description: 'Pause command.',
	execute(message, Member, args) {
		if (!message.member.permissions.has('ADMINISTRATOR')) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ Paused the music for you!');
		}
		return message.channel.send('There is nothing playing.');
	}
	}
};