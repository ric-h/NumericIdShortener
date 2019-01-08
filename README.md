# NumericIdShortener
Javascript two way numeric IDs shortener

# Usage Example
```javascript
var shortner = new IDShortener();
var shortened = shortner.shortID(68598946896765); //encode id
var decoded = shortner.unshortID(shortened); //decode id
console.log('shortened:', shortened, 'decoded:', decoded);

//output: shortened: nqIuXIWL decoded: 68598946896765
```
