import React, {Component} from 'react';
import classes from './Layout.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import {connect} from 'react-redux';

class Layout extends Component {
    state = {
        menu: false
    }

    handleToggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        });
    }

    handleMenuClose = () => {
        this.setState({
            menu: false
        });
    }

    render() {
        return (
            <div className={classes.Layout}>

                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.handleMenuClose}
                    isAuthenticared={this.props.isAuthenticated}
                />

                <MenuToggle
                    onToggle={this.handleToggleMenu}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    };
}

export default connect(mapStateToProps)(Layout);