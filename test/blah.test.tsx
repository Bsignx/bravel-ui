import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as ToggleSwitch } from '../stories/toggle-switch.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ToggleSwitch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
