import React, { Component } from 'react'
import Select from 'react-select'; 
import './counties.xlsx';
import background from "./img/1.jpg";
import CardComponent from "./card";
import Card from '@material-ui/core/Card';
import { Box } from "@material-ui/core";
import Spinner from "./spinner.gif"
//import  text  from './data'; // Relative path to your File
// import { colors } from 'react-select/src/theme';
import axios from 'axios'
// const filestream = require("fs");
//var file = require('file-system');
//var fs = require('fs');

// import styles from './App.css';

// var loading = 0;
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectOptions : [
        {value:'Alameda', label:'Alameda'},
        {value:'Alpine', label:'Alpine'},
        {value:'Amador', label:'Amador'},
        {value:'Butte', label:'Butte'},
        {value:'Calaveras', label:'Calaveras'},
        {value:'Colusa', label:'Colusa'},
        {value:'Contra Costa', label:'Contra Costa'},
        {value:'Del Norte', label:'Del Norte'},
        {value:'El Dorado', label:'El Dorado'},
        {value:'Fresno', label:'Fresno'},
        {value:'Glenn', label:'Glenn'},
        {value:'Humboldt', label:'Humboldt'},
        {value:'Imperial', label:'Imperial'},
        {value:'Inyo', label:'Inyo'},
        {value:'Kern', label:'Kern'},
        {value:'Kings', label:'Kings'},
        {value:'Lake', label:'Lake'},
        {value:'Lassen', label:'Lassen'},
        {value:'Los Angeles', label:'Los Angeles'},
        {value:'Madera', label:'Madera'},
        {value:'Marin', label:'Marin'},
        {value:'Mariposa', label:'Mariposa'},
        {value:'Mendocino', label:'Mendocino'},
        {value:'Merced', label:'Merced'},
        {value:'Modoc', label:'Modoc'},
        {value:'Mono', label:'Mono'},
        {value:'Monterey', label:'Monterey'},
        {value:'Napa', label:'Napa'},
        {value:'Nevada', label:'Nevada'},
        {value:'Orange', label:'Orange'},
        {value:'Placer', label:'Placer'},
        {value:'Plumas', label:'Plumas'},
        {value:'Riverside', label:'Riverside'},
        {value:'Sacramento', label:'Sacramento'},
        {value:'San Benito', label:'San Benito'},
        {value:'San Bernardino', label:'San Bernardino'},
        {value:'San Diego', label:'San Diego'},
        {value:'San Francisco', label:'San Francisco'},
        {value:'San Joaquin', label:'San Joaquin'},
        {value:'San Luis Obispo', label:'San Luis Obispo'},
        {value:'San Mateo', label:'San Mateo'},
        {value:'Santa Barbara', label:'Santa Barbara'},
        {value:'Santa Clara', label:'Santa Clara'},
        {value:'Santa Cruz', label:'Santa Cruz'},
        {value:'Shasta', label:'Shasta'},
        {value:'Sierra', label:'Sierra'},
        {value:'Siskiyou', label:'Siskiyou'},
        {value:'Solano', label:'Solano'},
        {value:'Sonoma', label:'Sonoma'},
        {value:'Stanislaus', label:'Stanislaus'},
        {value:'Sutter', label:'Sutter'},
        {value:'Tehama', label:'Tehama'},
        {value:'Trinity', label:'Trinity'},
        {value:'Tulare', label:'Tulare'},
        {value:'Tuolumne', label:'Tuolumne'},
        {value:'Ventura', label:'Ventura'},
        {value:'Yolo', label:'Yolo'},
        {value:'Yuba', label:'Yuba'}

      ],
      ActivityOptions : [
        {value:'Education', label:'Education'},
        {value:'Limited services', label:'Limited services'},
        {value:'Food chain', label:'Food chain'},
        {value:'Industries', label:'Industries'},
        {value:'Construction', label:'Construction'},
        {value:'Entertainment', label:'Entertainment'},
        {value:'Retail sector', label:'Retail sector'}

      ],
      id: '',
      name: '',
      status:'',
      predictionTime:'',
      sector_sel:'',
      loading: false
    }


    this.handleSubmit = this.handleSubmit.bind(this)
    this.getResponse = this.getResponse.bind(this)
  }


  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  handleChange1(e){
    this.setState({id:e.value, sector_sel:e.label})
   }

  getResponse(){
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    //   .then(res => {
    //     let response = res
    //     this.setState({status:response.current_status,
    //       predictionTime:response.prediction_vc})
    //   })

    // this.setState((state) => {
    //   // Important: read `state` instead of `this.state` when updating.
    //   return {...state, loading: true };
    // });
    // console.log(this.state);
    // debugger;
    
      this.setState({loading: true})

      let req = {"county": this.state.name, "sector": this.state.sector_sel} 
      
      axios.post("http://ec2-3-93-187-100.compute-1.amazonaws.com:8080/predict", req)
      
      .then(res => {
        let response = res
        this.setState({status:response.data.current_status,
          predictionTime:response.data.prediction_vc, 
          loading: false})
      })
      
  }

  handleSubmit(e){
    e.preventDefault(); 
  //   let response = this.state.response
  //  this.setState({status:response.current_status,
  //   predictionTime:response.prediction_vc})
    this.getResponse()
  }


  render() {
    const mystyle = {
      backgroundImage: `url(${background})`, 
      display:"block",
      height:'10%',
      padding: "30px",
      fontFamily: "Arial"
    };

    return (
      
      <div style = {{width: '100%', textAlign: 'center', background:"white", height: 1500}}>
        <image style={mystyle} > 
          <h2 style = {{padding:'0%', textAlign: 'center', fontSize:'300%', WebkitTextFillColor:"white"}} > 
            Lockdown Buster 
          </h2> 
        </image>

        <label>
            <p style = {{WebkitTextFillColor: "darkblue", textAlign: 'center', fontSize:'150%', fontWeight:"bolder"}}> 
              Find what may be open near you 
            </p>
        </label>

        
              
          <div style={{display: 'flex', flexDirection:"row" ,justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '20%', margin: '0% 2% 0% 0%'}}>
              <p style = {{WebkitTextFillColor: "darkblue", fontSize:'140%', fontWeight:"bolder"}}>County</p>
              <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
            </div>
            <div style={{width: '20%'}}>
            <p style = {{WebkitTextFillColor: "darkblue", fontSize:'140%', fontWeight:"bolder"}}>Activity</p>
              <Select options={this.state.ActivityOptions} onChange={this.handleChange1.bind(this)} />
            </div>
          </div>
          
          <form onSubmit={this.handleSubmit} >
          
          <div style={{paddingtop:20} }>
            <button style={{width:'10%', marginTop:20, backgroundColor:"darkblue", WebkitTextFillColor:"white", fontSize:'115%', fontWeight:"bolder"}} type="submit" >  
            GET STATUS 
            </button>
            
            {this.state.loading && <div style={{position: 'fixed', left: '47%', top: '25%'}}> <img src={Spinner} alt=""/> </div>}
          
              <div>
                {(this.state.loading === false && this.state.status !== "") ? (<CardComponent title={this.state.name} status={this.state.status} time={this.state.predictionTime}/>): (<></>)}

              </div>
          </div>
        </form>

        <label>
          <p style = {{WebkitTextFillColor: "darkblue", marginLeft:'10%' ,textAlign: 'left', fontSize:'150%', fontWeight:"bolder"}}> 
            California's county risk levels 
          </p>
        </label>
        <Box ml={'10%'} p="10px" mb="10px" width="85%">
            <Card style={{backgroundColor: 'white', height:"180px", display: 'flex', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
              <label style={{ width:'15%', height:"150px",margin: '0% 5% 0% 0%'}}>
                  <Card style={{borderRadius:"8%", backgroundColor:"#802f67", webkitTextFillColor:"white", textAlign:'center', fontSize:'100%', fontWeight:"bolder"}}>
                    <p>WIDESPREAD</p>
                  </Card>
                  <p style={{fontWeight:"bolder"}}>Many non-essential indoor business operations are closed</p>
              </label >
              <label style={{width:'15%', height:"150px", margin: '0% 5% 0% 0%'}}>
                  <Card style={{borderRadius:"8%", backgroundColor:"#c43d53", webkitTextFillColor:"white", textAlign:'center', fontSize:'100%', fontWeight:"bolder"}}>
                    <p>SUBSTANTIAL</p>
                  </Card>
                  <p style={{fontWeight:"bolder"}}>Some non-essential indoor business operations are closed</p>
              </label >
              <label style={{width:'15%', height:"150px", margin: '0% 5% 0% 0%'}}>
                  <Card style={{borderRadius:"8%", backgroundColor:"#d97641", justifyContent: 'center', textAlign:'center', fontSize:'100%', fontWeight:"bolder"}}>
                    <p>MODERATE</p>
                  </Card>
                  <p style={{fontWeight:"bolder"}}>Some indoor business operations are open with modifications</p>
              </label >
              <label style={{width:'15%', height:"150px", margin: '0% 5% 0% 0%'}}>
                  <Card style={{borderRadius:"8%", backgroundColor:"#e6b735",  justifyContent: 'center', textAlign:'center', fontSize:'100%', fontWeight:"bolder"}}> 
                    <p>MINIMAL</p>
                  </Card>
                  <p style={{fontWeight:"bolder"}}>Most indoor business operations are open with modifications</p>
              </label >
            </Card >
        </Box>
        <Box ml={'10%'} p="10px" mb="10px" width="85%">
            <label style={{backgroundColor: 'white', height:"180px", display: 'flex', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
              <label style={{ width:'25%', height:"300px", margin: '10% 0% 0% 0%', backgroundColor:'#e6d5e1'}}>
                  <Card style={{width:'60%', margin: '10% 0% 0% 20%', borderRadius:"8%", backgroundColor:"#802f67", webkitTextFillColor:"white", textAlign:'center', fontSize:'100%', fontWeight:"bolder"}}>
                    <p>WIDESPREAD</p>
                  </Card>
                  <p style={{fontWeight:"bolder", textAlign:'left', paddingLeft:'10%'}}> • More than 10.0 daily new cases (per 100k)*</p>
                  <p style={{fontWeight:"bolder", textAlign:'left', paddingLeft:'10%'}}>• More than 8.0% positive test for entire county*</p>
              </label >
              <label style={{width:'25%', height:"300px", margin: '10% 0% 0% 0%', backgroundColor:'#f3d8dd'}}>
                  <Card style={{width:'60%', margin: '10% 0% 0% 20%', borderRadius:"8%", backgroundColor:"#c43d53", webkitTextFillColor:"white", textAlign:'center', fontSize:'100%', fontWeight:"bolder"}}>
                    <p>SUBSTANTIAL</p>
                  </Card>
                  <p style={{fontWeight:"bolder", textAlign:'left', paddingLeft:'10%'}}>• 6.0 –10.0 daily new cases (per 100k)*</p>

                  <p style={{fontWeight:"bolder", textAlign:'left', paddingLeft:'10%'}}>• 5.0 – 8.0% positive tests for entire county*</p>

              </label >
              <label style={{width:'25%', height:"300px", margin: '10% 0% 0% 0%', backgroundColor:'#f7e4d9'}}>
                  <Card style={{width:'60%', margin: '10% 0% 0% 20%', borderRadius:"8%", backgroundColor:"#d97641", justifyContent: 'center', textAlign:'center', fontSize:'100%', fontWeight:"bolder"}}>
                    <p>MODERATE</p>
                  </Card>
                  <p style={{fontWeight:"bolder", textAlign:'left', paddingLeft:'10%'}}>• 2.0 –5.9 daily new cases (per 100k)*</p>

                  <p style={{fontWeight:"bolder", textAlign:'left', paddingLeft:'10%'}}>• 2.0 – 4.9% positive tests for entire county*</p>

              </label >
              <label style={{width:'25%', height:"300px", margin: '10% 0% 0% 0%', backgroundColor:'#faf1d7'}}>
                  <Card style={{width:'60%', margin: '10% 0% 0% 20%', borderRadius:"8%", backgroundColor:"#e6b735",  justifyContent: 'center', textAlign:'center', fontSize:'100%', fontWeight:"bolder"}}> 
                    <p>MINIMAL</p>
                  </Card>
                  <p style={{fontWeight:"bolder", textAlign:'left', paddingLeft:'10%'}}>• Less than 2.0 daily new cases (per 100k*)</p>

                  <p style={{fontWeight:"bolder", textAlign:'left', paddingLeft:'10%'}}>• Less than 2.0% positive tests for entire county*</p>

              </label >
            </label >
	    <Card style={{width:'60%', margin: '10% 0% 0% 20%', borderRadius:"8%", backgroundColor:"white",  justifyContent: 'center', textAlign:'center', fontSize:'100%', fontWeight:"bolder"}}>
      		<p>* Taken on 7 day average of daily cases</p>
	</Card>
        </Box>
     </div> 
    )
  }
}
