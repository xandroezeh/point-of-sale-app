import './sidebar.css';
import { 
    LineStyle, 
    Timeline, 
    TrendingUp, 
    PersonOutline,
    Inventory2Outlined,
    PointOfSaleOutlined,
    AssessmentOutlined,
    MailOutlined, } from '@mui/icons-material';

export default function Sidebar(){
    return(
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonOutline className='sidebarIcon'/>
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <Inventory2Outlined className='sidebarIcon'/>
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <PointOfSaleOutlined className='sidebarIcon'/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentOutlined className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlined className='sidebarIcon'/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className='sidebarIcon'/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}