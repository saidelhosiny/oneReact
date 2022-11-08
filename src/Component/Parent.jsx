
import { Component } from 'react';
import { Child } from './Child';


 export class Parent extends Component
{
    state = {
        parent : [
            
            {nameFrist :"ipone xs max",
            id: 10,
             price : 2000,
              count : 3,
              story: "Elhamdo ellah",
              isSale: 1000000},

            {nameFrist :"ipone 11pro max",
            id: 20,
             price : 3000,
              count : 3,
              story: " Elhamdo ellah",
              isSale: 5080},
            {nameFrist :"ipone 12 max",
            id: 30,
             price : 4000,
              count : 3,
              story: " Elhamdo ellah",
              isSale: 1000000},
            {nameFrist :"ipone 13pro max",
            id: 40,
             price : 5000,
              count : 3,
              story: " Elhamdo ellah",
              isSale: 5080},
            {nameFrist :"ipone 12pro ",
            id: 50,
             price : 6000,
              count : 3,
              story: " Elhamdo ellah",
              isSale: 5080},
            {nameFrist :"ipone 12pro max",
            id: 60,
             price : 300000,
              count : 3,
              story: " Elhamdo ellah",
              isSale: 1000000},
            {nameFrist :"ipone 13",
            id: 70,
             price : 400000000,
              count : 3,
              story: " Elhamdo ellah",
              isSale: 5080},
            {nameFrist :"ipone 13pro ",
            id: 80,
             price : 40000,
              count : 3,
              story: " Elhamdo ellah",
              isSale: 1000000},
            {nameFrist :"ipone pro max",
            id: 90,
             price : 2100,
              count : 3,
              story: " Elhamdo ellah",
              isSale: 5080},
            

        
            
            
          
        ]
    }

    deleteElement = (index) =>{
      //  deep copy 
      let parent = [...this.state.parent]
      // action copy 
      // parent = parent.filter((hwaDa)=> hwaDa.id !==index)
       parent.splice(index,1)

      // set state
      this.setState({parent})
      


    }
    updateConut = (indexUpdate) =>{
    //  deep copy 
    let parent = [...this.state.parent]
    //  action copy 
   parent[indexUpdate].count++
    // set state
    this.setState({parent})
    }
    
    render(){
        return <>

           
            <div className=' container bg-info'>
           <div className=' row gy-5'>
           {this.state.parent.map((product,index)=>{return  <Child  key={index} none = {this.deleteElement} elementIndex = {index} update = {this.updateConut} display = {product}/>})}

          </div>
          
            </div>


        </>
    }

}