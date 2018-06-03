import React from 'react';
import _ from 'lodash';
import FretBoard from '../fretBoard';
import Chords from '../../constants/majorChords';


const DashBoard = ({ currentChord, allChords }) => (
    <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 0.5 }}>
            { _.map(allChords, (chord) => (chord === currentChord ? <div>{`${chord}<--`}</div> : <div>{chord}</div>)) }
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 0.5 }}>
            <FretBoard inactive={Chords[currentChord].inactive} open={Chords[currentChord].open} fingerPositions={Chords[currentChord].fingerPos} />
        </div>
    </div>
);

export default DashBoard;


