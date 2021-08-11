import MainNavigation from './MainNavigation';
import { Fragment } from 'react';
import classes  from './Layout.module.css';

const Layout = (props) => {
    return (
        <Fragment>
            <header>
                <MainNavigation />
            </header>
            <main className={classes.main}>
                { props.children }
            </main>
        </Fragment>
    );
}

export default Layout;