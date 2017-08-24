import * as classNames from 'classnames';
import * as React from 'react';

import './Image.scss';
import { ImageProps } from './ImageProps';

export class Image extends React.Component<ImageProps, {}> {
    render() {
        let { ratio, ...props } = this.props;
        return (
            <div className={classNames('Image', `Image-${ratio}`)}>
                <img className='Image-Pic' {...props} />
            </div>
        );
    }
}
