module.exports = {
    decodeWord:decodeWord
};

function decodeWord(buffer, signed, bigEndian) {
    var value = 0;
    var magnitude = 1;
    var stepRatio = 256;

    if (bigEndian) {
        magnitude = Math.pow(256, buffer.length - 1);
        stepRatio = 1 / 256;
    }

    for (var i = 0; i < buffer.length; ++i) {
        value += magnitude * buffer[i];
        magnitude *= stepRatio;
    }

    if (signed) {
        var marker = buffer[buffer.length - 1];

        if (bigEndian) {
            marker = buffer[0];
        }

        if (marker & 0x80) {
            value -= Math.pow(256, buffer.length);
        }
    }

    return value;
}
