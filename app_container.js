import React from 'react';
import  { connect } from 'react-redux';
import TabNavigator from './navigator';

class AppContainer extends React.Component {
    render(): ReactElement {
        const { dispatch, nav } = this.props;

        return (
            <TabNavigator navigation={nav} />
        )
    }
}


const mapStateToProps = (state) => { 
    return {
        nav: state.nav,
        user: state.session.currentUser
    };
}

export default connect(mapStateToProps)(AppContainer);

