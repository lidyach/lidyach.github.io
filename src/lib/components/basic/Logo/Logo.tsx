import * as React from 'react';

import './Logo.scss';

export interface LogoProps extends React.HTMLProps<HTMLImageElement> {
}

export class Logo extends React.Component<LogoProps, {}> {

    logo: any;

    constructor() {
        super();

        this.logo = require('./logo.svg');
    }

    render() {
        return (
            <img src={this.logo} className='Logo' alt='logo'/>
        );
    }
}
