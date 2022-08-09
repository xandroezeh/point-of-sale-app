import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './featuredStats.css';

function FeaturedStats() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyWrapper">
                <span className="featuredMoney">₦500,000</span>
                <span className="featuredMoneyRate">-2.32% <ArrowDownward className='featuredIcon negative' /> </span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyWrapper">
                <span className="featuredMoney">₦500,000</span>
                <span className="featuredMoneyRate">-2.32% <ArrowDownward className='featuredIcon negative' /> </span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Expenditure</span>
            <div className="featuredMoneyWrapper">
                <span className="featuredMoney">₦500,000</span>
                <span className="featuredMoneyRate">3.54% <ArrowUpward className='featuredIcon' /> </span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
    </div>
  )
}

export default FeaturedStats