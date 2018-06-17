export default {
    Am: {
        inactive: { E: true, A: false, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: true, D: false, G: false, B: false, Eh: true },
        fingerPos: [
            { fret: 2, string: 'D' },
            { fret: 2, string: 'G' },
            { fret: 1, string: 'Eh' },
        ]
    },

    Bm: {
        inactive: { E: true, A: true, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: false, D: false, G: false, B: false, Eh: false },
        fingerPos: [
            { fret: 2, string: 'Eh' },
            { fret: 4, string: 'G' },
            { fret: 3, string: 'B' },
            { fret: 4, string: 'D' },
        ]
    },

    Cm: {
        inactive: { E: true, A: true, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: false, D: false, G: false, B: false, Eh: false },
        fingerPos: [
            { fret: 3, string: 'Eh' },
            { fret: 4, string: 'B' },
            { fret: 5, string: 'D' },
            { fret: 5, string: 'G' },
        ]
    },

    Dm: {
        inactive: { E: true, A: true, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: false, D: true, G: false, B: false, Eh: false },
        fingerPos: [
            { fret: 1, string: 'Eh' },
            { fret: 2, string: 'G' },
            { fret: 3, string: 'B' },
        ]
    },


    Em: {
        inactive: { E: true, A: false, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: false, D: false, G: true, B: true, Eh: true },
        fingerPos: [
            { fret: 2, string: 'D' },
            { fret: 2, string: 'A' },
        ]
    },

    Fm: {
        inactive: { E: true, A: false, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: false, D: false, G: false, B: false, Eh: false },
        fingerPos: [
            { fret: 1, string: 'Eh' },
            { fret: 1, string: 'B' },
            { fret: 1, string: 'G' },
            { fret: 3, string: 'D' },
            { fret: 3, string: 'A' },
        ]
    },

    Gm: {
        inactive: { E: false, A: false, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: true, D: true, G: false, B: false, Eh: true },
        fingerPos: [
            { fret: 3, string: 'E' },
            { fret: 3, string: 'G' },
            { fret: 3, string: 'B' },
        ]
    },
}