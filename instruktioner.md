# Instruktioner

I zip-filen för examinationen ligger ett gäng filer. Den enda fil du ska redigera är `omexamination2.js`, och det är den enda filen du ska lämna in. Du kan alltså inte lösa några uppgifter genom att redigera HTML eller CSS.
Du ska öppna `svärd.html` med live server, och det är även så jag kommer att provköra din lösning.

## Krav för godkänt

Spelet går ut på att spelaren ska få bilder presenterade, och gissa vilken typ det. Målet är att gissa rätt så många gånger i rad som man kan. När man gissar fel på en bild ska man få upp en resultatsida där man kan starta en ny runda, och där man kan se sin högsta poäng.

För att uppnå godkänt behöver du se till så sidan 
1. Du sätter ditt namn i footern längst ned, så blir det lättare för mig att se vems uppgift jag rättar :-)
2. För att starta spelet ska man trycka på knappen "Starta en runda"
    * När rundan startar, så ska div:en "meny" döljas.
    * div:en "svar" ska bli synlig, och det ska stå "Antal rätt i rad: 0".
    * Och en bild ska slumpas fram ur listan `allaSvärd` som ligger i `omexamination2.js`.
3. När man håller musen över "svärdbild" så ska tillhörande div:en "knapprad" bli synlig över den, och håller man inte musen över bilden _eller_ knapprad ska knapprad bli osynlig igen. 
4. När man klickar på en knapp i knapprad så ska svaret rättas mot typen på bilden under den. 
    * Om man gissade rätt
        1. Så ska räknaren i "svar"-diven öka med 1.
        2. Och en ny bild slumpas fram som man kan gissa på
    * Om man gissa fel
        1. Så ska "svar"-diven bli osynlig
        2. Och "meny"-diven ska återigen bli synlig
        3. I diven "resultat" ska följande ske
            * I diven "senaste" ska resultatet från senaste rundan stå. Lyckades man gissa rätt på 3 i rad så ska det stå något liknande "du lyckades gissa rätt på 3 svärd i rad". Kravet är att antal rätt gissade i senaste rundan står där tydligt.
            * Om spelaren lyckades gissa rätt på flera i rad än hen lyckats med tidigare, så ska även "highscore" uppdateras. Efter första gången man gissat fel ska det alltså stå vad man gissade i första runda, men vid senare rundor ska det bara uppdateras om man har fått ett nytt rekord.
        4. Om man vill kan man nu spela en till runda genom att trycka på "Starta en runda" igen. Då går spelet tillbaka till steg 2 och man försöker gissa rätt på så många bilder man kan i rad igen.
5. Highscore ska vara kvar över flera rundor    
6. Det får inte komma upp några felmeddelande i konsollen medans jag klickar mig fram på sidan. 

## Krav för väl godkänt

För att få väl godkänt ska sidan göra detsamma som för godkänt, men med följande ändringar
1. Du ska inte längre hämta svärdsobjekten från den fördefinierade listan ``allaSvärd``, utan du ska nu hämta svärden via javascripts `fetch` från det simulerade REST-API:t som finns under api.
    * listan på id:n för svärd som finns kan du hitta under `api/sword`
    * varje svärd kan du sedan hitta under `api/sword/{id}` 
    * Exempel: Om du via fetch mot `api/sword/` hittar ett svärd med id "1", så hämtar du detaljerna för det svärdet genom att göra en fetch mot `api/sword/1` så får du ett JSON-objekt som svar.
2. Highscore ska sparas mellan sessioner, så du ska alltså spara en cookie som håller kvar highscore även om man t.ex. trycker F5 i browsern.

    

    
    

    

