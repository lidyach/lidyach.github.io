import * as React from 'react';

import { Artikel } from 'lib/components/basic/Artikel';
import { Button } from 'lib/components/basic/Button';
import { TextSeparator } from 'lib/components/basic/TextSeparator';

export class ArtikelBasic extends React.Component<{}, {}> {
    render() {
        return (
        <div>
            <TextSeparator text='Artikel' />
            <Artikel img='/mobil1.jpg' date='23-07-2017' label='mobil ini bagus, byank yang suka' />
            <Artikel img='/mobil2.jpg' date='25-07-2017' label='mobil murah dan bermutu' />
            <Button size='medium' type='primary' block={true}>
                              Lihat lainnya
            </Button>
        </div>
        );
    }
}
