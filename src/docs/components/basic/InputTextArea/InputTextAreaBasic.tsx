import * as React from 'react';

import { InputTextArea } from 'lib/components/basic/InputTextArea';

export class InputTextAreaBasic extends React.Component<{}, {}> {
    render() {
        return (
            <InputTextArea name='Text Area' maxLength={1024} rows={8} placeholder='Penjelasan singkat tentang mobil Anda' />
        );
    }
}
