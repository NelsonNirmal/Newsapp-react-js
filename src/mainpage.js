import React from 'react'
import { useState ,useEffect} from 'react';
import './mainpage.css'
import Output from './displaydata';
import Nav from './nav';
import US from './us';
import Science from './Science';
import Entertainment from './entertainment';
import Health from './Health';
import Sports from './Sports';
import Technology from './Technology';
import World from './world';
import Business from './Business';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './Banner';
import Scrolltop from './scrolltop';

function Num(){
    let [data,setData]=useState([])
    let [us,setUs]=useState([])
    let [science,setScience]=useState([])
    let [entertainment,setEntertainment]=useState([])
    let [health,setHealth]=useState([])
    let [sports,setSports]=useState([])
    let [technology,setTechnology]=useState([])
    let [business,setBusiness]=useState([])
    let [world,setWorld]=useState([])
    let [d,setD]=useState([])


    useEffect(() => {
        fetch('https://ok.surf/api/v1/cors/news-feed')
          .then((res) => {
            if (!res.ok) {
              throw Error('could not fetch data for that resource');
            }
            return res.json();
          })
          .then((data) => {
            setData(data.Business);
            setD(data.Entertainment.slice(3,6))
            setUs(data.US)
            setScience(data.Science)
            setEntertainment(data.Entertainment)
            setHealth(data.Health)
            setSports(data.Sports)
            setTechnology(data.Technology)
            setWorld(data.World)
            setBusiness(data.Business)
           

            console.log(data)
            
          })
         
          .catch((err) => {
            console.log(err);
          });
      }, []);
      

    return(
        
      <Router>
      <Scrolltop/>
      <Nav />
      <Banner data={d}/>
      <Routes>
        <Route path="/" element={<Output data={data}/>} />
        <Route path="/US" element={<US data={us}/>} />
        <Route path="/business" element={<Business data={business}/>} />
        
        <Route path="/science" element={<Science data={science}/>}/>
        <Route path='/entertainment' element={<Entertainment data={entertainment}/>}/>
        <Route path='/health' element={<Health data={health}/>}/>
        <Route path='/sports' element={<Sports data={sports}/>}/>
        <Route path="/technology" element={<Technology data={technology}/>}/>
        <Route path="/World" element={<World data={world}/>}/>
        
        
       
      </Routes>
    </Router>
    )

}

export default Num;