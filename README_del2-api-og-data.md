# Del 2 - API og Data implementering

Anden del af projektet handler om få præsenteret rigtige data i iPlayMusic.

![alt text](https://github.com/rts-cmk-wuhf02/iplaymusic-TroelsAgergaard/blob/master/SpotifyAPI.png "Spotify API")

Disse data skal hentes fra musik tjenesten Spotify. 

Spotify har et "entry point" for udviklere som kan findes på: https://developer.spotify.com/ Herfra kan alle nødvendige ```endpoint``` referencer findes e.g. albums, categorier, numre etc. Web API'et returneres alle ```response``` data som ```JSON objekter```. Benyt ```fetch``` til at forespørge data.

Det kræver en registerert Spotify bruger at få adgang til Web API'et.

**Opret en gratis konto:** https://www.spotify.com/dk/signup/

---

## Særlige krav til udvalgte views

**Featured:**

```Intersection Observer API'et``` til integration af ```Lazy-loading``` af billeder og indhold i takt med at det scrolles ned i viewet.

**Playlist:**

Titler på numre må ikke ombryde i to linier. Benyt ```text overflow``` eller lingende til at afkorte eventuelle lange titler med e.g. ... (tre punktummer) for at indikere at titlen ikke vises i sin fulde længde.

## Feature opgave 
**Søgefunktionalitet:**

*Påbegynd først denne opgave når **alle** tidligere opgaver er løst!*

forespørg data fra search endpointet vedrørende artister, alubms, numre eller playlists som matcher en ```keyword string```. Præsenter resultaterne på en smart overskugelig måde i viewet "songs". Læs de guidelines som er beskrevet i afsnittet *"Writing a Query - guidelines"* i dokumentationen for search endpointet.


## Husk den gode arbejdsgang
1. Stage løbende
2. Commit hver gang en ændring virker
3. Push dagligt

---

## Tidsramme
Der er afsat 2 arbejds uger til opgaven, dvs aflevering fredag i den tredje projekt-uge kl 13.30 (den sidste commit til github inden fredag kl 13.30, bliver afleveringen).
