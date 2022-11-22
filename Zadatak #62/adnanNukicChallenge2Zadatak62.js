const tv = {
    brand: 'Samsung',
    screenSize: '55in',
    model: '55in2022OLED',
    ipProtection: 45,
    isItTurnedOff: true,
    turningOn() {
        this.isItTurnedOff = false;
    },
    turningOff() {
        this.isItTurnedOff = true;
    },
    channel: 0,
    turningOnChannel(num) {
        if (num >= 0 && num < 10) {
            this.isItTurnedOff = false;
            this.channel = num;
        }
    },
    switchingChannels(num) {
        if (this.isItTurnedOff == false) {
            this.channel = num;
        }
    },
    channelUp() {
        this.channel++;
    },
    channelDown() {
        if (this.channel == 0) return this.channel = 0;
        this.channel--;
    },
    volume: 0,
    volumeUp() {
        if (this.volume == 100) return this.volume = 100;
        this.volume++;
    },
    volumeDown() {
        if (this.volume == 0) return this.volume = 0;
        this.volume--;
    },
    source: 'TV1',
    switchSource() {
        if (this.source == 'TV1') return this.source = 'HDMI 1';
        if (this.source == 'HDMI 1') return this.source = 'HDMI 2';
        if (this.source == 'HDMI 2') return this.source = 'TV1';
    },

};

tv.turningOn();
tv.switchingChannels(0);
tv.channelDown();
console.log(tv.channel);