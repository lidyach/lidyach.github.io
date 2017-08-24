import * as React from 'react';

export class Code extends React.Component<{}, {}> {
    render() {
        return (
            <div>
              {this.props.children}
            </div>
        );
    }
}
