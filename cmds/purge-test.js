
// module.exports = {
//     name: 'clear',
//     description: "Clears chat messages",
//     async execute(message, client, args) {
//         if(!args[0]) {
//   		    return message.reply("Please enter the amount you want to delete");
// 		}
//         if(isNaN(args[0])) {
//           return message.reply("Please put a real number");
// 		}
        
//         if(args[0] > 100) {
//             return message.reply("You can't delete more than 100 messages!")
//         };
//         if(args[0] < 1) {
//             return message.reply("'You must delete at least 1 message nerd")
//         };

//             message.channel.bulkDelete(args[0])
//         }
//         }