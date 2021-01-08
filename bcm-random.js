const pitch = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const quality = ['maj9', 'maj9#11', 'm11', 'm13', '13', '13b9', '9#11', '7#9b13', '13sus4', '7sus4b9', 'dim7', 'm7b5'];
const bass = () => {
    let num = Math.floor(Math.random()*12);
    return pitch[num]
};
const chord = () => {
    let num = Math.floor(Math.random()*12);
    return quality[num]
};
const melody = () => {
    let num = Math.floor(Math.random()*12);
    return pitch[num]
};
console.log('Use the melody pitch ' + melody() + ' with the chord ' + bass() + chord());