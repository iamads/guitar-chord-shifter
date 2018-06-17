import React from 'react';
import _ from 'lodash';
import FretBoard from '../fretBoard';
import Chords from '../../constants/chords';
import Timer from '../timer';
// <Timer callThis={() => console.log('wtf is going on')}/>
// <button onClick={() => shiftChord()}>Shift</button>
const DashBoard = ({ currentChord, allChords, shiftChord  }) => (
    <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 0.25 }}>
            { _.map(allChords, (chord) => (chord === currentChord ? <div>{`${chord}<--`}</div> : <div>{chord}</div>)) }
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 0.25 }}>
        <Timer callThis={() => shiftChord()}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 0.5 }}>
            <FretBoard inactive={Chords[currentChord].inactive} open={Chords[currentChord].open} fingerPositions={Chords[currentChord].fingerPos} />
        </div>
    </div>
);

export default DashBoard;


