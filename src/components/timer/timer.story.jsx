import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Timer from './timer';

storiesOf('Timer', module)
    .add('timer', () => (
        <Timer />
));