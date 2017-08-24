import * as React from 'react';

import { Button } from 'lib/components/basic/Button';

export class ButtonBasic extends React.Component<{}, {}> {
    render() {
        return (
            <div>
              <h1>Button</h1>
                <Button size='medium' type='primary'>Button primary</Button>
                <Button size='medium' type='facebook' >facebook</Button>
                <Button size='medium' type='google'>google</Button>

                <h1>Outline Button</h1>
                <Button size='medium' type='primary-outline'>Button primary</Button>
                <Button size='medium' type='facebook-outline'>facebook</Button>
                <Button size='medium' type='google-outline'>google</Button>

                <h1>Button Size</h1>
                <Button size='large' type='primary'>Large</Button>
                <Button size='medium' type='primary'>Medium</Button>
                <Button size='small' type='primary'>Small</Button>
                <br />
                <Button size='large' type='primary-outline'>Large</Button>
                <Button size='medium' type='primary-outline'>Medium</Button>
                <Button size='small' type='primary-outline'>Small</Button>

                <h1>Disable button</h1>
                <Button disabled={true} size='large' >Large</Button>
                <Button disabled={true} size='medium'  >Medium</Button>
                <Button disabled={true} size='small' >Small</Button>

                <h1>Block button</h1>
                <Button size='medium' type='primary' block={true}>Block</Button>
                <Button size='medium' type='primary-outline' block={true}>Block</Button>

            </div>);
    }
}
