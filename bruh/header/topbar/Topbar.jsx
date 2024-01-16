import './topbar.css'

export default function Topbar() {
  return (

    <div className='top'>
        <div className='topLeft'>
            <img className='topImage' src={require("./PAC-logo.jpg")} alt="PAC logo" />
        </div>
        <div className='topRight'>
            <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'>Cosmicon</li>
                <li className='topListItem'>IIT Delhi</li>
                <li className='topListItem'>Team</li>
                <li className='topListItem'>Contact Us</li>
            </ul>
        </div>
        
    </div>

    
  )
}
