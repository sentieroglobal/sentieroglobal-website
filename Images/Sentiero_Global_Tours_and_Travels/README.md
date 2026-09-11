# Images/Sentiero_Global_Tours_and_Travels/

Travel images live here as **flat files** (no per-country subfolders), named:

```
Country_CityOrDestination.extension
```

Examples already referenced by the site:

```
Switzerland_Interlaken.jpg   Switzerland_Zurich.jpg   Switzerland_Lucerne.jpg
Switzerland_Lauterbrunnen.jpg   Switzerland_JungfrauRegion.jpg   Switzerland_Zermatt.jpg

Germany_Berlin.jpg   Germany_Munich.jpg   Germany_Frankfurt.jpg
Germany_Cologne.jpg   Germany_Hamburg.jpg   Germany_BlackForest.jpg

Italy_Rome.jpg   Italy_Milan.jpg   Italy_Venice.jpg   Italy_Florence.jpg
Italy_AmalfiCoast.jpg   Italy_Naples.jpg   Italy_LakeComo.jpg

France_Paris.jpg   France_Nice.jpg   France_FrenchRiviera.jpg
France_Lyon.jpg   France_Bordeaux.jpg   France_Strasbourg.jpg

Spain_Barcelona.jpg   Spain_Madrid.jpg   Spain_Seville.jpg
Spain_Valencia.jpg   Spain_Malaga.jpg   Spain_Ibiza.jpg

Austria_Vienna.jpg   Austria_Salzburg.jpg   Austria_Innsbruck.jpg   Austria_Hallstatt.jpg

Netherlands_Amsterdam.jpg   Netherlands_Rotterdam.jpg   Netherlands_TheHague.jpg
Netherlands_Utrecht.jpg   Netherlands_Giethoorn.jpg
```

`.jpg`, `.png` or `.webp` all work — just match the filename shown in the page's `<img>` tag (open the relevant file in `/Sentiero_Global_Tours_and_Travels/` and search for `data-fallback-label` to find every image the page expects).

Until a photo is added, that spot shows a tasteful "Image Coming Soon" placeholder with the destination name — the layout never breaks.

Adding a new country later: create `Country_City.jpg` files following the same pattern, then duplicate one existing country folder (e.g. `Switzerland/`) as a starting template.
