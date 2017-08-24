import * as React from 'react';

import { InputText } from 'lib/components/basic/InputText';
import { InputGroup } from 'lib/components/complex/InputGroup';

export class InputGroupBasic extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <InputGroup label='Nama' type='Basic'>
                    <InputText name='example' />
                </InputGroup>
                <InputGroup index={1} label='Judul Iklan' type='Number'>
                    <InputText name='example' />
                </InputGroup>
            </div>
        );
    }
}
