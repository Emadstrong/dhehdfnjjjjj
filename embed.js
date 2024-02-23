const { SlashCommandBuilder } = require(`@discord.js/builders`);
const { EmbedBuilder } = require(`discord.js`);

module.exports - {
  data: new SlashCommandBuilder()
  .setName(`embed`)
  .setDescription(`Hitest`),
  async execute(interaction) {

    const embed1 = new EmbedBuilder()
    .setColor("Blurple")
    .setTitle('THE EMBED TITLE')
    .setURL('')
    .setAuthor({ name: ``, iconURL: ``})
    .setDescription('tetsssss')
    .setThumbnail('')
    .addFields({ name: "hello", value: "hi", inline: true})
    .addFields({ name: "hello", value: "hi", inline: false})
    .setImage(``)
    .setTimestamp()
    .setFooter({ text: "a footer, iconURL: ``})

    await interaction.reply({ embeds: [embed1] })
