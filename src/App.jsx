import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'


export default function App() {
  return (
    <>
      <Navbar />
      <div>
        <div className="container" style={{ width: '600px', height: '200px', backgroundColor: 'white', borderRadius: '30px', marginTop: '40px' }}>
          <div>
            <h4 style={{ textIndent: '15px', paddingTop: '20px' }}>Add Notes here</h4>
          </div>
          <div className="container-fluid">
            <form role="search">
              <input className="form-control me-2" type="search" placeholder="Title goes here.." aria-label="Search" style={{ border: 'none', backgroundColor: '#22004256', height: '40px' }} />
              <input className="form-control me-2" type="search" placeholder="Note goes here.." aria-label="Search" style={{ border: 'none', backgroundColor: '#22004256', height: '40px', marginTop: '3px' }} />
              <button className="btn " style={{ color: "white", backgroundColor: '#220042', width: '140px', marginTop: '15px', marginLeft: '200px' }} type="submit" >Search</button>
            </form>
          </div>
        </div>
      </div>
      <Card/>
    </>
  )
}
