



///////////////////////////////////////// קונסטרקטור לתמונה  //////////////////////////////////////////

class Picture {
    constructor (theImage, theName, theArtist, thePrice, avaliable){
        this.image = theImage;
        this.name = theName;
        this.artist = theArtist;
        this.price = thePrice;
        this.av = avaliable;
    }

    getImage() {
        return `${this.image}.avif`;
    }

    getName() {
        return `${this.name}`;
    }

    getArtist() {
        return `${this.artist}`;
    }

    getPrice() {
        return `${this.price}`;
    }

    getAv() {
        return (this.av===true)? `<span style="color: green;"> In Stock </span>` : `<span style="color: red;"> Out of Stock </span>`;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////













////////////////////////////////////////////  מערך תמונות  ////////////////////////////////////////////

let pictures = [
                new Picture('hope', 'Hope', 'Markus Spiske', 139.85, true),
                new Picture('obliviate', 'Obliviate', 'Maria Orlova', 115.75, true),
                new Picture('wondering', 'Wondering', 'Oladimeji Odunsi', 97.45, false),
                new Picture('misty_forest', 'Misty Forest', 'Brendan Beale', 79.95, false),
                new Picture('up', 'Up', 'Roberto Arias', 119.95, true),
                new Picture('disturbed', 'disturbeD', 'Stephany Lorena', 90.05, true),
                new Picture('core', 'Core', 'Jason Leung', 65.35, true),
                new Picture('fury', 'Fury', 'Pawel Czerwinski', 59.65, false),
                new Picture('glare', 'Glare', 'Gabriela Gomez', 169.95, true),
                new Picture('wasted', 'Wasted', 'George Tribbeaney', 47.95, true),
                new Picture('new_perspective', 'New Perspective', 'Ryan Stefan', 78.84, true),
                new Picture('street_lights', 'Street Lights', 'Felix Dubois Robert', 40.84, true),
                new Picture('torch', 'Torch', 'Laura Chouette', 82.95, true),
                new Picture('chicken_pie', 'Chicken Pie', 'McGill Libar', 55.60, false),
                new Picture('transparency', 'Transparency', 'Ines Blohm', 75.85, true),
                new Picture('panic', 'PANIC', 'Josh Hild', 45.35, true),
                new Picture('embrace', 'Embrace', 'Marquise Kamanke', 55.84, true),
                new Picture('obscured', 'Obscured', 'Mitchel Hartley', 118.65, false),
                new Picture('pure', 'Pure', 'Albert Saint', 64.65, true),
                new Picture('holi', 'Holi', 'Akshansh Kumar', 39.84, true),
                new Picture('take_me_to_church', 'Take Me To Church', 'Nicole Geri', 89.95, true),
                new Picture('yearning', 'Yearning', 'Jorge Simmons-Valenzuela', 62.55, false),
                new Picture('one_of_a_kind', 'One Of A Kind', 'Philipp Pliz', 45.75, false),
                new Picture('flourishing', 'Flourishing', 'Meric Dagli', 29.75, true),
                new Picture('native', 'Native', 'Agung Pratamah', 115.84, true),
                new Picture('transfixing', 'Transfixing', 'Raphael Lovaski', 92.84, true),
                new Picture('himalaya', 'Himalaya', 'James Chou', 60.65, true),
                new Picture('anxiety', 'Anxiety', 'Aliaksei Lepik', 36.15, true)
            ];

////////////////////////////////////////////////////////////////////////////////////////////////////////



export {Picture, pictures};