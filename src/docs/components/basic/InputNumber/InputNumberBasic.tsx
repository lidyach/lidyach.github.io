import * as React from 'react';

import { InputNumber } from 'lib/components/basic/InputNumber';

export class InputNumberBasic extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <InputNumber addOnPosition='front' label='Rp' name='example1' />
                <InputNumber addOnPosition='back' label='KM' name='example2' />
            </div>
        );
    }
}
