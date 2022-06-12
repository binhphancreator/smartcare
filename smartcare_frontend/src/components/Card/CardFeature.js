export default function CardFeature(props) {
  return (<>
    <div className='card-feature'>
      {
        props.icon &&
        <div className="card-feature-header">
          <button className="card-feature-icon">
            {props.icon}
          </button>
        </div>
      }

      <div className='card-feature-title'>
        {props.title}
      </div>

      <div className="card-feature-content">
        {props.children}
      </div>
    </div>
  </>)
}
