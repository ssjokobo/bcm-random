const pitch = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const chord = ['maj9', 'maj9#11', 'm11', 'm13', '13', '13b9', '9#11', '7#9b13', '13sus4', '7sus4b9', 'dim7', 'm7b5'];

const random = (type) => {
    let num = Math.floor(Math.random() * type.length);
    return type[num]    
};

console.log('Use the melody pitch ' + random(pitch) + ' with the chord ' + random(pitch) + random(chord));