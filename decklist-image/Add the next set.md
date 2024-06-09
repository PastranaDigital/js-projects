# How to add the next set

Reference the most recent commit to this branch too

<br><br>

## Locate the Standard Set

1. Go to `https://api.pokemontcg.io/v2/sets` and search by name

2. Copy the new set's JSON

3. Paste to bottom of `standard_sets.json` file

<br><br>

## Get the cardsBySet JSON

1.  Go to `https://api.pokemontcg.io/v2/cards?q=set.ptcgoCode:<SET_NAME>&page=1` to open the JSON

2.  Copy the JSON into a new file in the "cardsBySet" folder ex: `TWM.json`

3.  Right click on the file and "Format Document"

4.  If the page size is smaller then the set size you will need to query page 2

```js
"pageSize": 250,
"count": 256,
"totalCount": 256
```

<br><br>

## Update the mergeJSON file

1. add the new JSON set file to the imports
2. add the new import to the export variable

<br><br>

## Test It

1. Click on the "Go live" on bottom utility bar in VSCode

2. Paste a decklist with cards from the new set

3. Refresh site and try another decklist

<br><br>

update the discord bot!
