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
