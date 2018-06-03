import React from 'react';
import _ from 'lodash';

const chordsInactiveStrings = { E: true, A: true, D: false, G: false, B: false, Eh: false };
const chordsOpenStrings = { E: false, A: false, D: false, G: false, B: false, Eh: false };
const fingerPos = [
    { string: 'Eh', fret: 2 },
    { string: 'B', fret: 3 },
    { string: 'G', fret: 4},
    { string: 'D', fret: 4 }
];

const stringXO = (string, chordInactiveStrings, chordOpenStrings) => {
    if (chordInactiveStrings[string]) return 'X';
    if (chordOpenStrings[string]) return 'O';
    return ' ';
}

// const chord = {
//     inactive: { E: true, A: false, D: false, G: false, B: false, Eh: false },
//     open: { E: false, A: true, D: false, G: false, B: false, Eh: true },
    
// }

const fingerPostStyle = (row, col, fingerPos) => {
    const style = {};

    const fingersOnCurrentRow = _.filter(fingerPos, (ff) =>  ff.fret === row);
    
    _.each(fingersOnCurrentRow, (pos) => {
        if (col === 5 && pos.string === 'Eh') {
            style.borderRightColor = 'blue';
        } else if ( (col === 1 && pos.string === 'E') || (col === 2 && pos.string === 'A') || (col === 3 && pos.string === 'D') || (col === 4 && pos.string === 'G') || (col === 5 && pos.string === 'B')){
            style.borderLeftColor = 'blue';
        }
    });

    return style;
}



const FretBoard = ({ rows = [1, 2, 3, 4], cols = [ 1, 2 , 3, 4, 5 ], inactive = chordsInactiveStrings, open = chordsOpenStrings, fingerPositions = fingerPos }) => (
    <div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '250px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>E</div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>A</div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>D</div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>G</div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>B</div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>Eh</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', width: '250px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>{stringXO('E', inactive, open)}</div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>{stringXO('A', inactive, open)}</div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>{stringXO('D', inactive, open)}</div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>{stringXO('G', inactive, open)}</div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>{stringXO('B', inactive, open)}</div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.15}}>{stringXO('Eh', inactive, open)}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
                _.map(rows, (row) => (
                    <div style={{ display: 'flex', flexDirection: 'row', height: '100px', width: '250px'}}>
                        {
                            _.map(cols, (col) => (
                                <div style={_.merge({ display: 'flex', flexDirection: 'column', border: '1px solid yellow', flex: 0.15}, fingerPostStyle(row, col, fingerPositions))}>{"  "}</div>
                            ))
                        }
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 0.10}}>{row}</div>
                    </div>
                ))
            }
        </div>
    </div>
);

export default FretBoard;