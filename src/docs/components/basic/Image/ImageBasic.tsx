import * as React from 'react';

import { Image } from 'lib/components/basic/Image';

export class ImageBasic extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Image src='http://dreamatico.com/data_images/car/car-1.jpg' ratio='Wide' />
                <br />
                <Image src='http://dreamatico.com/data_images/car/car-1.jpg' ratio='Square' />
            </div>
        );
    }
}
