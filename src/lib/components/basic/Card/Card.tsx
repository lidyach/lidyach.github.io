import * as React from 'react';

import { Icon } from '../Icon';
import { Image } from '../Image';
import './Card.scss';
import { CardProps } from './CardProps';

export class Card extends React.Component<CardProps, {}> {

    render() {
        return (
            <a href='#'>
                <div className='m-1 text-truncate Card'>
                    <div className='p-1'>
                        <Image src={this.props.imageSrc} ratio={this.props.ratio} />
                    </div>
                    <div className='p-2 mr-1 ml-1 Text-Card'>
                        <div className='Text-Card-Up'>
                            <div className='Card-Title'>{this.props.title}</div>
                            <div className='Card-Price'>Rp{' '}
                                <span>{this.props.price}</span>
                            </div>
                        </div>
                        <div className='pl-1 mt-1 text-capitalize Text-Card-Bottom'>
                            <span><Icon name='location' /></span>
                            <span>{' '}{this.props.location}</span>
                            <span className='Card-Icon-Park'><Icon name='park-circle-o' scale={2} /></span>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}
