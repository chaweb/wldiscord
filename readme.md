# français
## white list discord
Ce bot [discord](https://discordjs.guide) vous permettra de mettre ou de supprimer des noms de personne d'un fichier se trouvant dans un serveur [pterodactyl](https://pterodactyl.io/project/introduction.html) pour une fichier qui doit whiteliste par exemple, pour un serveur minecraft, un accès aux serveurs, ect...


## pour commencer

clonez le fichier dans votre serveur npm, et installez les dépendances avec :
```properties
	npm i
```

pour toutes vos informations non-publique, 
ajoutez le fichier`cle.json` dans la racine :

```json
{
    "clientId": "",
    "guildId": "",
    "token": "", 
    "apiPtero": "",
    "url" : "https://myurl.tld/api/client/servers/{serverID}/files/",
    "fileName" : "eula.txt",
    "rolePerm" : "staff"
}
```

et modifier en fonction de vos convenance :

- clientId : id du bot discord
- guildId : id du serveur discord
- token : jeton (token) du bot
- apiPtero : token de l'api Ptero
- url : url de votre serveur pterodactyl, seul le serveurID et le nom de domaine doivent être changer (sauf si vous avez un cas particulier). 
- fileName : le nom du fichier qui acceuillera les noms whithlistés
- rolePerm : le nom du role qui à le droit de whitelist (par exemple, staff si c'est le staff qui gère le whiteliste)
- 
## lancement du fichier
Le fichier peut être lancer de 2 manières, via un commande npm ou node :

```properties
npm run start
node index.js
```

Les 2 commandes font la même chose, mais en fonction de votre convenance, les 2 sont possibles.

## Autrice

-   **Charlie Houdmond** - _white list discord_- [Chaweb](https://github.com/chaweb)

## License

Ce projet est sous licences [MIT](https://github.com/chaweb/wldiscord/blob/main/LICENSE) - voir le fichier [LICENSE.md](https://github.com/chaweb/wldiscord/blob/main/LICENSE) pour plus de détaille

# English
## white list discord
This [discord](https://discordjs.guide) bot can add and delete people on [pterodactyl](https://pterodactyl.io/project/introduction.html) server on folder. For exemple, for white list a people on minecraft server, sysadmin, ect... And all with discord ! 


## Installing
clone projet on your server and install all dependence :
```properties
	npm i
```

for all private information, 
add file`cle.json` on root :

```json
{
    "clientId": "",
    "guildId": "",
    "token": "", 
    "apiPtero": "",
    "url" : "https://myurl.tld/api/client/servers/{serverID}/files/",
    "fileName" : "eula.txt",
    "rolePerm" : "staff"
}
```

and change with your information :

- clientId : bot id
- guildId : discord server id
- token : bot token
- apiPtero : Ptero tokenn
- url : url of your serveur pterodactyl, only serveurID and domain do edit (expect if you have particularity domain). 
- fileName : name of your file
- rolePerm : the role name who can edit the file (for example, "admin")
- 
## lancement du fichier
the project can run with 2 command : npm or node :

```properties
npm run start
node index.js
```

Both commands do the same thing, but depending on your convenience, both are possible.

## Autrice

-   **Charlie Houdmond** - _white list discord_- [Chaweb](https://github.com/chaweb)

## License

This project is licensed under the [MIT](https://github.com/chaweb/wldiscord/blob/main/LICENSE) - see the [LICENSE.md](https://github.com/chaweb/wldiscord/blob/main/LICENSE) file for more information
