import * as React from 'react';

import { InputSelectDropdown } from 'lib/components/basic/InputSelectDropdown';

export class InputSelectDropdownBasic extends React.Component<{}, {}> {
    render() {
        return (
            <InputSelectDropdown name='Kota' options={['Jakarta', 'Bandung', 'Yogyakarta']} />
        );
    }
}
