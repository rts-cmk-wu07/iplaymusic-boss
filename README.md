# iPlayMusic !

Opgaven går ud på at opsætte et website der primært er mobiltvenligt, og er drevet af en simpel datastruktur.
Opgaven er tiltænkt som en **gruppeopgave** (maks. 3 per gruppe).


![alt text](https://github.com/rts-cmk-opgaver/iPlayMusic/blob/master/iplaymusic.png "iPlayMusic hero")

# Del 1 - Layout
Fokus er at omsætte designet til en funktionel ```React applikation```, ud fra det ud har lært ind til videre. Designet skal følges så tæt som muligt, og fungere på kryds og tværs af flere mobil-skærmstørrelser. Det skal være muligt at skifte mellem lyst og mørkt tema men det er **ikke** et krav at adressebaren er skjult som i en native app.

Der er elementer på hjemmesiden som går igen på flere af siderne, dem skal du trække ud i individuelle ```react komponenter``` og inkludere dem efter behov. Udfordringen ligger i at splitte designet op i fornuftige og logiske dele, samt at gennemskue hvilke elementer der gentages på flere sider. Det vil også være ok at oprette templates for enkeltstående elementer.

### Views som skal produceres: 
*Navnene herunder: featured, albums etc. kan du bruge til at finde det rigtige view i Adobe XD filen. Er du itvivl så spørg!*

1. Featured (index) - *Præsenter featured albums. **OBS:** Dette view skal senere integrere lazyload*
2. Albums - *Præsentere featured albums og new releases(albums)*
3. Album Details - *liste traks for et valgt album*
4. Categories - *liste alle kategorier*
5. Playlists - *listes tracks fra en valgt playliste*
6. Player - *"Afspil" et valgt track*

Tænk meget nøje over hvordan navigationen skal foregå. Skal afspilleren for eksempel være et selvstændigt view, eller skal det være et overlay, der kan ses fra alle views, så afspilning ikke bliver afbrudt, når man navigerer rundt i app-en?

### Navigation:
Fra venstre: Albums, playlists, featured, farve tema, categories(find evt. et mere passende ikon). 
Afspilleren og album details er dybe links fra henholdsvis albums og playlists/album.  
![alt text](https://github.com/rts-cmk-wuhf02/iPlayMusic/blob/master/navigation.png "navigation")

### Font, farve og ikoner:
**Se styleguide:** https://github.com/rts-cmk-wuhf02/iPlayMusic/blob/master/styleguide.png 
**OBS:** Ikonerne er fra ionic frameworket. De kan importeres igennem ```react-icons```` komponentet, eller hvordan du nu måtte foretrække.

### Arbejdsgang og organisering
Din gruppe skal planlægge arbejdet nøje og tracke jeres fremskridt. Det betyder, at I skal vælge et værktøj og en arbejdsgang, som kan hjælpe jer med at holde styr på arbejdsprocesserne - fx Scrum.
      
### Hvis du har ekstra tid
Hvis du har ekstra tid i slutningen af ugen, kan du tilføje splash-skærmen og walk-through delen. 

# Tidsramme
Der er afsat 1 arbejds uge til layout-delen, dvs aflevering på fredag kl 13.30 (den sidste commit til github inden fredag kl 13.30, bliver afleveringen).
