module.exports = class HeyManhattan {
    constructor() {
        this.quotes = [
            'New York, New York is where we live and we’re thorough,',
            'Never taking shorts, ‘cause Brooklyn’s the borough.',
            'Peace to Uptown, to Queens and The Bronx,',
            'Long Island and Jersey get as fly as they want.',
            'But I must tell you, where we rest is no joke…',
            'So let me break it down to sections for you slow pokes:',
            'Fort Greene, Bed-Stuy, Flatbush, Brownsville,',
            'Crown Heights and East New York will be down till,',
            'Medina takes respect for the styles we bring,',
            '‘Cause in Brooklyn we be into our own thing.',
        ];
    }

    speak() {
        return 'Hey Manhattan!';
    }

    translate(str) {
        if (!str) {
            return 'Might as well not ask for any free shit, capisce?';
        }

        return `Come to ${str} frontin, and you’ll get mushed quick.`;
    }

    hitMeUp(number) {
        if (!number || isNaN(number)) {
            return this.quotes.join('\n');
        }

        let index = Math.abs(number);

        while (index >= this.quotes.length) {
            index -= this.quotes.length;
        }

        return this.quotes[index];
    }
}

