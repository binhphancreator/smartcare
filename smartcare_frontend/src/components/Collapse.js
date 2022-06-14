import React, { useState, useRef, useEffect } from 'react';

function Collapse(props) {
  const [show, setShow] = useState(false)
  const [height, setHeight] = useState(0)
  const collapseRef = useRef(null)

  useEffect(() => {
    setHeight(collapseRef.current.scrollHeight)
  }, [])

  function toggleCollapse(e) {
    setShow(!show)
  }

  return ( <>
    <div className='collapse' onClick={toggleCollapse}>

      <div className='collapse-content'>
        <button className="collapse-icon">
          {props.icon ? 
            props.icon
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
          }
        </button>

        <div>
          <div className='collapse-title'>{props.title}</div>
          <div className="collapse-body" ref={collapseRef} style={{height: show ? height : 0}}>{props.body}</div>
        </div>

      </div>

      <button className="btn-collapse" style={{transform: !show ? "rotate(180deg)" : "none"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
        </svg>
      </button>

    </div>
  </> )
}

export default Collapse
