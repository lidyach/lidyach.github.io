import * as React from 'react';

import { InputPassword } from 'lib/components/complex/InputPassword';

export class InputPasswordBasic extends React.Component<{}, {}> {
    render() {
        return <InputPassword name='password' />;
    }
}
