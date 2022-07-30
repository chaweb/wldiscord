ajouter le fichier`cle.json` avec :
```json
{
    "clientId": "",
    "guildId": "",
    "token": "", 
    "apiPtero": "",
    "url" : "https://myurl.tld/api/client/servers/serverid/files/",
    "fileName" : "eula.txt",
    "rolePerm" : "staff"
}
```

et modifier en fonction de vos convenance :

- clientId : id du bot discord
- guildId : id du serveur discord
- token : jeton (token) du bot
- apiPtero : token de l'api Ptero
- url : url de votre serveur pterodactyl (avec comme schema https://myurl.tld/api/client/servers/serverid/files/)
- fileName : le nom du fichier qui acceuillera les noms whithlistés
- rolePerm : le nom du role qui à le droit de whitelist (par exemple, staff si c'est le staff qui gère le whiteliste)
