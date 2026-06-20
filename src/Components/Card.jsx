import React from 'react'

export default function Card() {
  return (
    <div style={{ position: 'relative', width: '250px', marginTop: '60px', marginLeft: '50px' }}>

      {/* Image */}
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png"
        alt="note"
        style={{ width: '100%' }}
      />

      {/* Text Content */}
      <div
        style={{
          position: 'absolute',
          top: '50px',
          left: '20px',
          right: '20px'
        }}
      >
        <h5></h5>
        <p></p>
      </div>

      {/* Buttons at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '15px',
          left: '15px',
          right: '15px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <button className="btn btn-warning">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>

    </div>
  )
}