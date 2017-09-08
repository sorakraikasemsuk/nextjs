import React, { Component } from 'react';
import Head from 'next/head'

class Header extends Component {
    constructor(props){
        super(props);
        this.state={title : this.props.title};
    }
    render() {
        return (
            <Head>
                <title>{this.state.title}</title>
                <meta name="viewport" content="initial-scale=1.0, widt=device-width" />
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
        );
    }
}

export default Header;