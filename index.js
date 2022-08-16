const { SlashCommandBuilder, Routes } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');

const { REST } = require('@discordjs/rest');
const { clientId, guildId, token, apiPtero, url, fileName, rolePerm} = require('./cle.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const fetch = require('node-fetch');


const { createLogger, format, transports } = require('winston');
const logger = createLogger({
    level: 'info',
    exitOnError: false,
    format: format.json(),
    transports: [
      new transports.File({ filename: `./logs/log.log` }),
    ],
  });



async function addLigne(name){
    let file = await fetch(`${url}contents?file=${fileName}`, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Authorization": `Bearer ${apiPtero}`,
        },
        })
        .then((res) => res.text())
        .then((data) => {return data})

    if (await file.indexOf(name) !== -1){
        console.error(`${name} est déjà dans la wl`)
        return 
    }
    
    await fetch(`${url}write?file=${fileName}`, {
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          "Authorization": `Bearer ${apiPtero}`,
        },
        body:`${file.replace( /[\r\n]+/gm, "\n" )}
${name}`
      })
    .then(response => response)
    .catch(err => console.error(err));
    
    delete(file)
}

async function delLigne(name){
    let file = (await fetch(`${url}contents?file=${fileName}`, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Authorization": `Bearer ${apiPtero}`,
        },
        })
        .then((res) => res.text())
        .then((data) => {return data})).replace(`\n${name}`, '')
    await fetch(`${url}write?file=${fileName}`, {
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          "Authorization": `Bearer ${apiPtero}`,
        },
        body:`${file}
${name}`
      })
    .then(response => response)
    .catch(err => console.error(err));
    delete(file)
}



const commands = [
    new SlashCommandBuilder()
        .setName('wl')
        .setDescription('met en whitelite le noms demander')
        .addStringOption(option =>
            option.setName('état')
                .setDescription('supprimer ou ajoute le pseudo')
                .setRequired(true)
                .addChoices(
                    { name: 'supprimer', value: 'false' },
                    { name: 'ajouter', value: 'true' }
                )
        )
        .addStringOption(option =>
            option.setName('nom')
                .setDescription('Nom de la personne')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('prénom')
                .setDescription('Nom de la personne')
                .setRequired(true)
        )
]
    .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'wl') {
        const name = interaction.options.getString('nom') + ' ' + interaction.options.getString('prénom');
        if(!interaction.member.roles.cache.some(r => r.name === rolePerm)){
            await interaction.reply({ content: `vous n'avez pas la permission d'utiliser cette commande`, ephemeral: true });
            logger.log('error', `${interaction.user.tag}(id: ${interaction.user.id}) not have permission`)
            return
        }
        if(interaction.options.getString('état') == true){ //add name on wl
            addLigne(name)
            await interaction.reply({ content: `${name} à été rajouter dans la whitelist`, ephemeral: true });
            logger.log('info', `+ ${name} by ${interaction.user.tag}(id: ${interaction.user.id})`)
        }
        else{ //remove name on wl
            delLigne(name)
            await interaction.reply({ content: `${name} à été supprimer dans la whitelist`, ephemeral: true });
            logger.log('info', `- ${name} by ${interaction.user.tag}(id: ${interaction.user.id})`)
        }
        return
    }
});

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
client.login(token);
module.exports = logger;