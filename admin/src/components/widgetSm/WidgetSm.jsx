import './widgetSm.css';
import { Visibility } from '@mui/icons-material'

function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Users</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="./images/labcoat.jpg" alt="avatar" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Alexander Ezeh</span>
                    <span className="widgetSmJobTitle">Manager</span>
                    <span className="widgetSmJobRole">Admin</span>
                </div>
                <button className="widgetSmBtn">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
                
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm