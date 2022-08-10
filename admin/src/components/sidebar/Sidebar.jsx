import './sidebar.css';
import { 
    LineStyle, 
    Timeline, 
    TrendingUp, 
    PersonOutline,
    Inventory2Outlined,
    PointOfSaleOutlined,
    AssessmentOutlined,
    MailOutlined,
    QuestionAnswerOutlined,
    ChatBubbleOutlineOutlined, 
    BusinessCenterOutlined,
    Report } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
                        <Link to="/users" className="link"><li className="sidebarListItem">
                            <PersonOutline className='sidebarIcon'/>
                            Users
                        </li></Link>
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
                            <QuestionAnswerOutlined className='sidebarIcon'/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlined className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <BusinessCenterOutlined className='sidebarIcon'/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}