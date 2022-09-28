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
exampleString.charAt(exampleString.length-1); // s
```

## `charCodeAt`

## `concat`

## `includes`

## `indexOf`

## `match`

## `repeat`

## `replace`

## `search`

## `slice`

## `split`

## `substr`

## `toLowerCase`

## `toUpperCase`

## `trim`
