import React, {Component} from 'react';
import {ScrollView , Image} from 'react-native';
import Profilepic from './Profilepic';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


class Basic extends Component {
    
    render(){
        return (
            
            <ScrollView>
            <Profilepic />
            <Header/>
            <Content />
            
            
            </ScrollView>
            
            
            
        
        
        
        );
    }
}

export default Basic;