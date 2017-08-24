import * as React from 'react';

import './InputSelectDropdown.scss';
import { InputSelectDropdownProps } from './InputSelectDropdownProps';

export class InputSelectDropdown extends React.Component<InputSelectDropdownProps, {}> {

    render() {
        return <select name={this.props.name} className='Select-Dropdown'>{this.renderOptions()}</select>;
    }

    renderOptions() {
        return this.props.options.map((item) =>
            <option value={item} key={item}>{item}</option>
        );
    }
}
