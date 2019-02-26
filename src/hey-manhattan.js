module.exports = class HeyManhattan {
    speak() {
        return 'Hey Manhattan!';
    }

    translate(str) {
        if (!str) {
            return 'Might as well not ask for any free shit, capisce?';
        }

        return `Come to ${str} frontin, and you’ll get mushed quick.`;
    }
}

