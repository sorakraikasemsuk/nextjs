import React, { Component } from 'react';
import Layout from '../components/Layout'
import styled from 'styled-components';

const Title=styled.h1`
    color:red;
`;
const Button=styled.button`
    background:white;
    border:solid 1px black;
    padding:10px;
    &:hover{
        background:red;
    }
`;
class componentName extends Component {
   constructor(props){
       super(props);
       this.state={date:0}
   }
   componentDidMount(){
       //ทำงานหลังจาก render component เสร็จแล้ว
        setInterval(()=>{this.countDate();},1000);
   }
   componentWillUnmount(){
        //ทำงานตอนหยุดแสดง component นี้
   }
   countDate(){
    this.setState({
        date:this.state.date+1
    });
   }
    render() {
        return (
            <div>
               <Layout title={'Index'} />
               <Title className="text-danger">Title</Title>
               <Button>Test</Button>
               <div className="row">
                   <div className="col-md-12">
                       Hello React With Next.js
                   </div>
               </div>
            </div>
        );
    }
}

export default componentName;