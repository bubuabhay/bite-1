bite
==========

Lightweight library for word decoding in pure javascript. Contains methods for
decoding byte string words to numbers (signed and unsigned, big and little
endian).

API
----------
* **decodeWord**(< _Buffer_ >buffer, [< _bool_ >signed], [< _bool_ >bigEndian])  
    Decodes a word contained in `buffer`, i.e. all of `buffer` is treated as
    _one_ word. Treats the word as signed if `signed` is set to `true`
    (`false` is default), and big endian if `bigEndian` is set to `true`
    (`false` is default).

Example
----------
```javascript
var bite = require('bite');

var buffer = new Buffer([0xFF, 0xFF]);
var value = bite.decodeWord(buffer, true); // = -1
```
