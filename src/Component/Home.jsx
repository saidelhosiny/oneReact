
import { Component } from 'react';

import { Parent } from './Parent';

 export class Home extends Component
{

    state ={
      name : " fesha"
    };
    welcome()
    {
      return "welcome User"
    }
    
    render(){
        return <>
        
        <Parent/>
       
      </>
    }

}