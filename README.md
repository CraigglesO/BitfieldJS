# BitfieldJS

### Bitfield System for Bittorrent Protocol

Easily convert hex input to a Bittorent Protocol bitfield.
Each bit represents a piece.

## Install

```
npm install BitfieldJS
```

## Usage
```
const Bitfield = require('Bitfield');

// Set 100 bits (64 in hex -> 2 bytes or 8 bits)
// Bitfield {
//   grow: 0,
//   buffer: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00> }
cost bf = new Bitfield(100);
set(1) -> set the second bit;
set(2) -> set the third bit;
// Bitfield {
//   grow: 0,
//   buffer: <Buffer 60 00 00 00 00 00 00 00 00 00 00 00 00> }

// Let's say the number of pieces in the torrent is 2:
const bf = New Bitfield(0);
set(0);  // 80
set(1);  // c0
// Bitfield { grow: 0, buffer: <Buffer c0> }



// Equivalent:
set(1, true); // 80
set(1);       // 80

// Remove a bit:
set(1, false); //

// Find the value of a bit:
get(1); // true


// Lastly we can set a maximum size:
const bf = New Bitfield(0, { grow: 16 }); // Bitfield { grow: 2, buffer: <Buffer > }
bf.set(15); // Bitfield { grow: 2, buffer: <Buffer 00 01> }
bf.set(35); // Bitfield { grow: 2, buffer: <Buffer 00 01> }

// NOTICE that a bit too large is ignored.
```

Happy coding kids.

## ISC License (Open Source Initiative)

ISC License (ISC)
Copyright <2017> <Craig OConnor>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
