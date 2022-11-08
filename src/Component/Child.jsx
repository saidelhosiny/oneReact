
import { Component } from 'react';

 export class Child extends Component
{
    state  = {}

    render(){
        let {nameFrist,id,price,count,story,isSale} = this.props.display
       
       


        return <>

          <div className=' position-relative col-lg-4'>
          <div className=' border bg-light p-2'>
            <h3 className=' text-bg-danger  text-center'>{this.props.productIndex}</h3>
            <h3 className=' text-bg-danger  text-center'>nameFrist:: {nameFrist} </h3>
            <h3 className=' text-bg-danger  text-center'>id:: {id} </h3>
            <h3 className={price>3000? "text-center text-danger":"text-center"}>price:: {price} </h3>
            <h3 className=' text-bg-danger  text-center'>count:: {count}</h3>
            <h3 className=' text-bg-danger  text-center'>elhala:: {story}</h3>
            <h3 className=  {isSale>10000?"yes  text-white text-bg-dark text-center":" text-bg-primary   text-center no"}>ngeboo:: {isSale}</h3>
            <button onClick={()=>this.props.none(this.props.elementIndex)} className=' btn btn-outline-danger btn-sm w-100'>Delete</button>
            <button onClick={()=>this.props.update(this.props.elementIndex)} className='  btn btn-outline-primary btn-lg w-100'>+</button>
           
          </div>
            
          </div>
        </>

    }
}