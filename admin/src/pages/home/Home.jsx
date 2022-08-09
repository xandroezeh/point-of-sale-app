import Chart from '../../components/chart/Chart';
import FeaturedStats from '../../components/featuredstats/FeaturedStats';
import './home.css';

function Home() {
  return (
    <div className='home'>
        <FeaturedStats/>
        <Chart/>
    </div>
  )
}

export default Home