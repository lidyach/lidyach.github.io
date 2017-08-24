import * as React from 'react';

import { InputText } from 'lib/components/basic/InputText';

export class InputTextBasic extends React.Component<{}, {}> {
    render() {
        return (
            <InputText name='example1' placeholder='Input Text' />
        );
    }
}
