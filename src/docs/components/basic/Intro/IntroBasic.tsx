import * as React from 'react';

import { Intro } from 'lib/components/basic/Intro';

export class IntroBasic extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Intro>Basic Intro</Intro>
            </div>
        );
    }
}
