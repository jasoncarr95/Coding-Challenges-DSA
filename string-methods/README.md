# String Methods

Common string methods implemented in JavaScript, with examples.

## `charAt`

The `charAt()` method returns the character located at the specified index in the string

Syntax: `charAt(index)`

```javascript
// Get the character at index 4
let exampleString = "We should order Dominos";
exampleString.charAt(4); // h
```

```javascript
// If no `index` is specified, the default is `0`
let exampleString = "We should order Dominos";
exampleString.charAt(); // W
```

```javascript
// If index is out of range, returns an empty string
let exampleString = "We should order Dominos";
exampleString.charAt(-1); //
```

```javascript
// Get the last character in a string
let exampleString = "We should order Dominos";
exampleString.charAt(exampleString.length - 1); // s
```

## `charCodeAt`

The `charCodeAt()` method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

Syntax: `charCodeAt(index)` If no index given, default is `0`

```javascript
let exampleString = "We should order Dominos";

console.log(exampleString.charCodeAt()); // 87
console.log(exampleString.charCodeAt(0)); // 87
console.log(exampleString.charCodeAt(22)); // 115
console.log(exampleString.charCodeAt(23)); // NaN (length is 23)
```

## `concat`

The `concat()` method concatenates the string arguments to the calling string and returns a new string.

### Syntax

```javascript
concat(str1);
concat(str1, str2);
concat(str1, str2, /* …, */ strN);
```

### Examples

```javascript
let exampleString = "We should order Dominos";
console.log(exampleString.concat(" rignt now!")); // We should order Dominos rignt now!

console.log(exampleString.concat(" tomorrow")); // We should order Dominos tomorrow

console.log(exampleString.concat("!")); // We should order Dominos!

let str2 = "Do you think";
console.log(str2.concat(" ", exampleString)); // Do you think We should order Dominos
```

## `includes`

The `includes()` method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

### Syntax

```javascript
includes(searchString);
includes(searchString, position);
```

### Examples

```javascript
let exampleString = "We should order Dominos";
console.log(exampleString.includes("We")); // true
console.log(exampleString.includes("we")); // false

let str2 = "Dominos";
console.log(exampleString.includes(str2)); // true
```

## `indexOf`

The `indexOf()` method, searches a string and returns the index of the first occurrence of the specified substring. Can optopnally add a second argument: the index from which to start searching.
Returns -1 if substring not found.

### Syntax

```javascript
indexOf(searchString);
indexOf(searchString, position);
```

### Examples

```javascript
let exampleString = "We should order Dominos";
console.log(exampleString.indexOf("We")); // 0
console.log(exampleString.indexOf("S")); // -1 (case-sensitive)
console.log(exampleString.indexOf("o", 6)); // 10
console.log(exampleString.indexOf("o")); // 5
console.log(exampleString.indexOf("o", 24)); // -1 (24 > exampleString.length)

let str2 = "Dominos";
console.log(exampleString.indexOf(str2)); // 16
```

## `match`

The `match()` method retrieves the result of matching a string against a regular expression.

### Syntax

```javascript
match(regexp);
```

### Examples

```javascript
// CHANGE
```

## `repeat`

### Syntax

```javascript
// CHANGE
```

### Examples

```javascript
// CHANGE
```

## `replace`

### Syntax

```javascript
// CHANGE
```

### Examples

```javascript
// CHANGE
```

## `search`

### Syntax

```javascript
// CHANGE
```

### Examples

```javascript
// CHANGE
```

## `slice`

### Syntax

```javascript
// CHANGE
```

### Examples

```javascript
// CHANGE
```

## `split`

### Syntax

```javascript
// CHANGE
```

### Examples

```javascript
// CHANGE
```

## `substr`

```javascript
// CHANGE
```

### Examples

```javascript
// CHANGE
```

## `toLowerCase`

### Syntax

```javascript
// CHANGE
```

### Examples

```javascript
// CHANGE
```

## `toUpperCase`

### Syntax

```javascript
// CHANGE
```

### Examples

```javascript
// CHANGE
```

## `trim`
