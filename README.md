# NumericIdShortener
Javascript two way numeric IDs shortener

# Usage Example
```javascript
var shortner = new IDShortener();
var shortened = shortner.shortenID(68598946896765); //encode id
var decoded = shortner.unshortenID(shortened); //decode id
console.log('shortened:', shortened, 'decoded:', decoded);

//output: shortened: nqIuXIWL decoded: 68598946896765
```
