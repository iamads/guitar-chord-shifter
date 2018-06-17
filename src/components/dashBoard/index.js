import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose';
import DashBoard from './dashBoard';
import Chords from '../../constants/majorChords';

const allChords = _.shuffle(_.keys(Chords));
const totalChords = allChords.length;

export default compose(
    withState('allChords', 'setAllChords', allChords),
    withState('chordIndex', 'setChordIndex', 0),
    withProps(({ allChords, chordIndex }) => ({
        currentChord: allChords[chordIndex],
    })),
    withHandlers({
        shiftChord: ({ chordIndex, setChordIndex }) => () => {
            console.log('ahit');
            if (chordIndex === totalChords - 1) {
                setChordIndex(0);
            } else {
                setChordIndex(chordIndex + 1);
            }
        }
    })
)(DashBoard);