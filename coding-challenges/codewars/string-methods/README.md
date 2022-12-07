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

## `repeat`

The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

### Syntax

```javascript
repeat(count);
```

### Examples

```javascript
let exampleString = "21";
console.log(exampleString.repeat(5)); // 2121212121

// Converts argument to an integer (chops off decimal.. i.e 2.9 ->)
exampleString = "Can you hear me?? ";
console.log(exampleString.repeat(2.9)); // Can you hear me?? Can you hear me??
// The same is true if you do maths (21/9 -> 2.333 -> 2)
console.log(exampleString.repeat(21 / 9));

// If no argument, returns empty string
exampleString = "Hey does this thing work?";
console.log(exampleString.repeat()); // "" (empty string)
```

## `slice`

The `slice` method returns a portion of a string as a new string (the original string is not mutated).

It takes the parameters `indexStart` -The index of the first character to include in the returned substring.
And (optionally) `indexEnd` -The index of the first character to exclude from the returned substring.

### Syntax

```javascript
slice(indexStart);
slice(indexStart, indexEnd);
```

### Examples

```javascript
// Returns copy of entire string if no arguments passed
let exampleString = "Hey does this thing work?";
console.log(exampleString.slice()); // "Hey does this thing work?"

// Returns first 10 characters (chars at indices 0-9)
let exampleString = "Hey does this thing work?";
console.log(exampleString.slice(0, 10)); // "Hey does t"

// Returns all of string at and after index = 10
let exampleString = "Hey does this thing work?";
console.log(exampleString.slice(10)); // "his thing work?"

// Negative indexStart makes it start from the end.. i.e to get the last 4 characters
let exampleString = "Hey does this thing work?";
console.log(exampleString.slice(-4)); // "ork?"
```

## `split`

The `split()` method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

### Syntax

```javascript
split();
split(separator);
split(separator, limit);
```

### Examples

```javascript
// Split string into array of words (by space)
let exampleString = "Hey does this thing work?";
console.log(exampleString.split(" ")); //[ 'Hey', 'does', 'this', 'thing', 'work?' ]

// Split string into individual chars
let exampleString = "Hey does this thing work?";
console.log(exampleString.split("")); // let x = ['H', 'e', 'y', ' ', 'd', 'o','e', 's', ' ', 't', 'h', 'i','s', ' ', 't', 'h', 'i', 'n','g', ' ', 'w', 'o', 'r', 'k','?']

let exampleString = "Hey does this thing work?";
console.log(exampleString.split("this")); // [ 'Hey does ', ' thing work?' ]

let exampleString = "Hey does this thing work?";
console.log(exampleString.split(""));
```

## `trim`

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

## `replace`

The `replace()` method returns a new string with one, some, or all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a **RegExp**, and the `replacement` can be a string or a function called for each match. If `pattern` is a string, only the first occurrence will be replaced. The original string is left unchanged.

### Syntax

```javascript
replace(pattern, replacement);
```

### Examples

```javascript
let exampleString = "I love Papa Johns";
console.log(exampleString.replace("Papa Johns", "Dominos")); // I love Dominos
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

## `search`

The search() method executes a search for a match between a regular expression and this String object.

### Syntax

```javascript
search(regexp);
```

### Examples

```javascript
// CHANGE
```
