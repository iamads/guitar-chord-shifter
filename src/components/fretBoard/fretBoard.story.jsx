import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FretBoard from './fretBoard';

storiesOf('FretBoard', module)
    .add('simpleBoard', () => (
        <FretBoard />
));