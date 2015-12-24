# json-transform-youniverse

A javascript library to transform  json data

[![NPM Version](https://img.shields.io/npm/v/json-transform-youniverse.svg)](https://www.npmjs.com/package/json-transform-youniverse)

## Installation

```
npm install json-transform-youniverse
```

## Basic Usage

You need to provide the array to transform and a key to index the objects.

```js
var dataTransform = require('json-transform-youniverse');
var input = [
  {
    "first_name": "foo1",
    "middle_name": "bar1",
    "last_name": "foobar1"
  },
  {
    "first_name": "foo2",
    "middle_name": "bar2",
    "last_name": "foobar2"
  },
  {
    "first_name": "foo3",
    "middle_name": "bar3",
    "last_name": "foobar3"
  },
  {
    "first_name": "foo4",
    "middle_name": "bar4",
    "last_name": "foobar4"
  }
];
var key = "Name";
var output = dataTransform.transform(input, key);
console.log(output);

```

## License

(MIT License)

Copyright (c) 2015 YouNiverse invoker.outlaw@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.