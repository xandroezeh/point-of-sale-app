import Chart from '../../components/chart/Chart';
import FeaturedStats from '../../components/featuredstats/FeaturedStats';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import './home.css';
import { salesdata } from './salesdata';

function Home() {
  return (
    <div className='home'>
        <FeaturedStats/>
        <Chart data={salesdata} dataKey="sales" title="Sales Analytics" grid/>
        <div className="widgets">
            <WidgetSm/>
            <WidgetLg/>
        </div>
    </div>
  )
}

export default Home