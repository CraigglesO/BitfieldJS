"use strict";
const buffer_1 = require("buffer");
class Bitfield {
    constructor(data, opts) {
        if (!(this instanceof Bitfield))
            return new Bitfield(data, opts);
        if (arguments.length === 0) {
            data = 0;
        }
        this.grow = opts && (isFinite(opts.grow) && getByteSize(opts.grow) || opts.grow) || 0;
        if (typeof data === 'number' || data === undefined) {
            this.buffer = new buffer_1.Buffer(getByteSize(data));
            this.buffer.fill(0);
        }
        else if (typeof data === 'string') {
            this.buffer = buffer_1.Buffer.from(data, 'hex');
        }
        else {
            this.buffer = new buffer_1.Buffer(0);
            this.buffer.fill(0);
        }
    }
    get(i) {
        let j = i >> 3;
        return (j < this.buffer.length) && !!(this.buffer[j] & (128 >> (i % 8)));
    }
    set(i, b) {
        let j = i >> 3;
        if (b || arguments.length === 1) {
            if (this.buffer.length < j + 1)
                this._grow(Math.max(j + 1, Math.min(2 * this.buffer.length, this.grow)));
            this.buffer[j] |= 128 >> (i % 8);
        }
        else if (j < this.buffer.length) {
            this.buffer[j] &= ~(128 >> (i % 8));
        }
    }
    findNew(buf) {
        if (!buffer_1.Buffer.isBuffer(buf))
            buf = new buffer_1.Buffer(buf);
        let res = [];
        if (buf.length > this.buffer.length) {
            for (var i = 0; i < this.buffer.length; i++) {
                if (this.buffer[i])
                    res.push(0);
                else
                    res.push(buf[i]);
            }
        }
        else {
            let myBuffer = this.buffer.slice(0, buf.length);
            for (var i = 0; i < buf.length; i++)
                res.push(buf[i] ^ myBuffer[i]);
        }
        return new buffer_1.Buffer(res);
    }
    _grow(length) {
        if (this.buffer.length < length && length <= this.grow) {
            let newBuffer = new buffer_1.Buffer(length);
            if (newBuffer.fill)
                newBuffer.fill(0);
            if (this.buffer.copy) {
                this.buffer.copy(newBuffer, 0);
            }
            else {
                for (let i = 0; i < this.buffer.length; i++) {
                    newBuffer[i] = this.buffer[i];
                }
            }
            this.buffer = newBuffer;
        }
    }
}
function getByteSize(num) {
    let out = num >> 3;
    if (num % 8 !== 0)
        out++;
    return out;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Bitfield;
