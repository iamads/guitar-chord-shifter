export default {
    A: {
        inactive: { E: true, A: false, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: true, D: false, G: false, B: false, Eh: true },
        fingerPos: [
            { fret: 2, string: 'D' },
            { fret: 2, string: 'G' },
            { fret: 2, string: 'B' },
        ]
    },

    B: {
        inactive: { E: true, A: true, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: false, D: false, G: false, B: false, Eh: false },
        fingerPos: [
            { fret: 2, string: 'Eh' },
            { fret: 4, string: 'G' },
            { fret: 4, string: 'B' },
            { fret: 4, string: 'D' },
        ]
    },

    C: {
        inactive: { E: true, A: false, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: false, D: false, G: true, B: false, Eh: true },
        fingerPos: [
            { fret: 1, string: 'B' },
            { fret: 2, string: 'D' },
            { fret: 3, string: 'A' },
        ]
    },

    D: {
        inactive: { E: false, A: false, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: true, D: true, G: false, B: false, Eh: false },
        fingerPos: [
            { fret: 2, string: 'Eh' },
            { fret: 2, string: 'G' },
            { fret: 3, string: 'B' },
        ]
    },


    E: {
        inactive: { E: false, A: false, D: false, G: false, B: false, Eh: false },
        open: { E: true, A: false, D: false, G: false, B: true, Eh: true },
        fingerPos: [
            { fret: 2, string: 'D' },
            { fret: 1, string: 'G' },
            { fret: 2, string: 'A' },
        ]
    },

    F: {
        inactive: { E: true, A: false, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: false, D: false, G: false, B: false, Eh: false },
        fingerPos: [
            { fret: 1, string: 'Eh' },
            { fret: 1, string: 'B' },
            { fret: 2, string: 'G' },
            { fret: 3, string: 'D' },
            { fret: 3, string: 'A' },
        ]
    },

    G: {
        inactive: { E: false, A: false, D: false, G: false, B: false, Eh: false },
        open: { E: false, A: false, D: true, G: true, B: false, Eh: true },
        fingerPos: [
            { fret: 2, string: 'A' },
            { fret: 3, string: 'E' },
            { fret: 3, string: 'B' },
            { fret: 3, string: 'Eh' },
        ]
    },
}