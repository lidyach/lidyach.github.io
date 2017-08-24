import * as React from 'react';
import { Link, Route, Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { Intro } from 'lib/components/basic/Intro';
import { Header } from 'lib/components/complex/Header';

import { ArtikelPage } from './components/basic/Artikel';
import { ButtonPage } from './components/basic/Button';
import { CardPage } from './components/basic/Card';
import { IconPage } from './components/basic/Icon';
import { ImagePage } from './components/basic/Image';
import { InputHiddenPage } from './components/basic/InputHidden';
import { InputNumberPage } from './components/basic/InputNumber';
import { InputSelectDropdownPage } from './components/basic/InputSelectDropdown';
import { InputTextPage } from './components/basic/InputText';
import { InputTextAreaPage } from './components/basic/InputTextArea';
import { IntroPage } from './components/basic/Intro';
import { NavbarPage } from './components/basic/Navbar';
import { NavBottomPage } from './components/basic/NavBottom';
import { TextSeparatorPage } from './components/basic/TextSeparator';
import { InputGroupPage } from './components/complex/InputGroup';
import { InputPasswordPage } from './components/complex/InputPassword';

import { GridPage } from './styles/grid';

import './Doc.scss';

let history = createBrowserHistory();

export class Doc extends React.Component<{}, {}> {

    pageDictionary: any;

    constructor() {
        super();

        this.pageDictionary = {
            button: ButtonPage,
            card: CardPage,
            grid: GridPage,
            icon: IconPage,
            image: ImagePage,
            inputHidden: InputHiddenPage,
            inputNumber: InputNumberPage,
            inputPassword: InputPasswordPage,
            inputSelectDropdown: InputSelectDropdownPage,
            inputText: InputTextPage,
            inputTextArea: InputTextAreaPage,
            inputGroup: InputGroupPage,
            intro: IntroPage,
            navbar: NavbarPage,
            navbarBottom: NavBottomPage,
            textSeparator: TextSeparatorPage,
            Artikel: ArtikelPage
        };
    }

    home() {
        return <Intro>To get started, edit <code>src/Doc.tsx</code> and save to reload.</Intro>;
    }

    get pages() {
        return Object.keys(this.pageDictionary).map((page) => {
            return <Route key={`page-${page}`} path={`/${page}`} component={this.pageDictionary[page]} />;
        });
    }

    get links() {
        return Object.keys(this.pageDictionary).map((page) => {
            return <li key={`link-${page}`}><Link to={`/${page}`}>{page}</Link></li>;
        });
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Header className='text-center'>Welcome to Garasi UI</Header>
                    <div className='container-fluid'>
                        <div className='row py-3'>
                            <div className='col-10'>
                                {this.pages}
                                <Route exact={true} path='/' render={this.home} />
                            </div>

                            <div className='col-2'>
                                <ul>
                                    {this.links}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
