// a complex data structure
const ourMusic = [
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold": true
    }
];

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
];

myMusic.push(
    {
        "artist": "Michaeel",
        "title": "You Suck",
        "release_year": 1980,
        "formats": [
            "CD",
            "8T",
            "LP"
        ]
    }
)

console.log(myMusic);