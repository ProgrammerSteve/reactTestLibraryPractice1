import {useState} from 'react'

const Component1=()=>{
  const [showDetails, setShowDetails]=useState(true)
  const [name, setName]=useState('')
  const [title, setTitle]=useState('')
  const [details, setDetails]=useState('')


  return(
      <div className="card" style={{ width: "18rem" }}>
                <img
                className="card-img-top"
                src="http://fakeimg.pl/286x180?font=lobster"
                alt="Card cap"
                />
                <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-subtitle mb-2 text-muted">{title}</p>
                        <button onClick={()=>setShowDetails(!showDetails)} className="btn btn-primary">
                            {showDetails ? "Hide Details" : "Display Details"}
                        </button>
                        {showDetails ? 
                        (
                        <p className="card-text details">
                          {details}
                        </p>
                        ) : null}
                </div>
      </div>
  )
}

export default Component1;