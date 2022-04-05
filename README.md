# Simple-Todo

This is just a simple todo list that lets me practice with localStorage and basic Javascript functions. A big motivation for this project is a [video by Fireship about different JS frameworks](https://www.youtube.com/watch?v=cuHDQhDhvPE). Some lessons learned:

- You will get absolutely no where if you forget to put "defer" in  `<script src="./script.js" defer></script>` since the javascript is loaded before the html.
- Local storage is unordered. Don't depend on it returning the same order that was entered.
- Local storage can only give you key:value, so you need to serialize whatever you use to a string. 
- When giving HTML elements the data type "id" like data-id, it defaults to just id. 
