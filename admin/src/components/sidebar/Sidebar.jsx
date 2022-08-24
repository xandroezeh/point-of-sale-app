import "./sidebar.css";
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
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/analytics" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/sales" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PersonOutline className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Inventory2Outlined className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/transactions" className="link">
              <li className="sidebarListItem">
                <PointOfSaleOutlined className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <Link to="/user-reports" className="link">
              <li className="sidebarListItem">
                <AssessmentOutlined className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to="/mails" className="link">
              <li className="sidebarListItem">
                <MailOutlined className="sidebarIcon" />
                Mail
              </li>
            </Link>
            <Link to="/feedback" className="link">
              <li className="sidebarListItem">
                <QuestionAnswerOutlined className="sidebarIcon" />
                Feedback
              </li>
            </Link>
            <Link to="/messages" className="link">
              <li className="sidebarListItem">
                <ChatBubbleOutlineOutlined className="sidebarIcon" />
                Messages
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link to="/manage" className="link">
              <li className="sidebarListItem">
                <BusinessCenterOutlined className="sidebarIcon" />
                Manage
              </li>
            </Link>
            <Link to="/staff-analytics" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/staff-reports" className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
