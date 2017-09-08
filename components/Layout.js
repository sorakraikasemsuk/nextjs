import React, { Component } from 'react';
import Link from 'next/link';
import Header from './Header'

class Layout extends Component {
    constructor(props){
        super(props);
        this.state={title : this.props.title};
    }
    render() {
        return (
            <div>
                <Header title={this.state.title}/>
                <ol className="breadcrumb">
                    <li>
                        <Link href="/"><a href="#">Home</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a href="#">About</a></Link>
                    </li>
                </ol>
            </div>
        );
    }
}

export default Layout;