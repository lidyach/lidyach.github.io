import * as React from 'react';

import { Logo } from 'lib/components/basic/Logo';

import './Header.scss';

export interface HeaderProps extends React.HTMLProps<HTMLDivElement> {
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <div className={`Header ${this.props.className || ''}`}>
                <Logo/>
                <h2>{this.props.children}</h2>
            </div>
        );
    }
}
