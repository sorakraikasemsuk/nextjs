import React, { Component } from 'react';
import Layout from '../components/Layout';

class About extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.Add=this.Add.bind(this);
        this.state={
            item:[],
            text:''
        };
    }
    handleChange(e) {
        this.setState({text: e.target.value});
    }
    Add(e){
        e.preventDefault();
        var newItem={
            text:this.state.text
        };
        this.setState((prevState)=>({
            item:prevState.item.concat(newItem),
            text:''
        }));
    }
    render() {
        return (
            <div>
                <Layout title={'About'} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">Add ToDo List</div>
                        <div className="col-md-12">
                            <form className="form-inline">
                                <div className="form-group">
                                    <input type="text" className="form-control" value={this.state.text} onChange={this.handleChange} />
                                </div>
                                <button onClick={this.Add} type="button" className="btn btn-success">Add</button>
                            </form>
                        </div>
                        <div className="col-md-12">
                            <ListToDo item={this.state.item} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

class ListToDo extends Component{
    constructor(props){
        super(props);
        this.Del=this.Del.bind(this);
    }
    Del(e){
        e.preventDefault();
        
    }
    render(){
        return(
            <div>
            {this.props.item.map(item=>(
                <div>{item.text}<button type="button" className="btn btn-danger" onClick={this.Del}>Delete</button></div>
            ))}
            </div>
        );
    }
}