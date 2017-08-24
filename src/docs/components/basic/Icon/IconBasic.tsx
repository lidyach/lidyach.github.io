import * as React from 'react';

import { Icon } from 'lib/components/basic/Icon';

export class IconBasic extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Icon name='park' scale={2} /> {' '}
                <Icon name='email' scale={2} /> {' '}
                <Icon name='kaskuschat' scale={2} /> {' '}
                <Icon name='line'  scale={2} /> {' '}
                <Icon name='car-wagon' scale={2} /> {' '}
                <Icon name='car-van-minivan' scale={2} /> {' '}
                <Icon name='car-suv' scale={2} /> {' '}
                <Icon name='car-sedan' scale={2} /> {' '}
                <Icon name='car-pickup-truck' scale={2} /> {' '}
                <Icon name='car-mpv' scale={2} /> {' '}
                <Icon name='car-hatchback' scale={2} /> {' '}
                <Icon name='car-convertible' scale={2} /> {' '}
                <Icon name='fuel' scale={2} /> {' '}
                <Icon name='milestone' scale={2} /> {' '}
                <Icon name='location' scale={2} /> {' '}
                <Icon name='transmission' scale={2} /> {' '}
                <Icon name='eye' scale={2} />
                <Icon name='bars' scale={2} />
                <Icon name='arrow-left' scale={2} />
                <Icon name='arrow-right' scale={2} />
            </div>
        );
    }
}
