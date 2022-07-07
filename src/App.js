import React, { Component } from 'react';
import { useEffect } from 'react';
import {useState} from 'react';
import './App.css'


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'CRUD Application',
      act: 0,
      index: '',
      datas: []
    }
  } 


  componentDidMount(){
    this.refs.name.focus();
  }
  


    fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let age = this.refs.age.value;
    let gender=this.refs.gender.value;
    let city=this.refs.city.value;

    if(this.state.act === 0){   
      let data = {
        name, age , gender ,city
      }
      datas.push(data);
    }else{                      
      let index = this.state.index;
      datas[index].name = name;
      datas[index].age = age;
      datas[index].gender=gender;
      datas[index].city=city;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.age.value = data.age;
    this.refs.gender.value=data.gender;
    this.refs.city.value=data.city;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  
 

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="Name" className="formField" />
          <input type="text" ref="age" placeholder="Age" className="formField" />
          <input type="text" ref="gender" placeholder="Gender" className="formField"/>
          <input type="text" ref="city" placeholder="City" className="formField"/>
          <button onClick={(e)=>this.fSubmit(e)} className="myButton"> Add </button>
        </form>
        <br></br>
        <div class="card">
          <div class='container'>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              <h5>
                <div class='container'>{i+1}.Name: {data.name}</div>
                <div class='container'> Age:{data.age}</div>
                <div class='container'>Gender:{data.gender}</div> 
                <div class='container'>City:{data.city}</div></h5>
              <button onClick={()=>this.fRemove(i)} className="myListButton"> Delete </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton"> Update </button>
            </li>
          )}
      </div>
      </div>
      </div>
    );
  }
}

export default App;