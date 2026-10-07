import '../style/HomeInfo.css';
import { Coins, BuildingComplex, TriangleAlert, Leaf } from 'lucide-react';

export default function HomeInfo() {
    return (
        <div className='card-wrapper'>

            <div className='card-container'>
                <div className='card-header-row'>
                    <h3>Active suppliers</h3>
                    <div className='icon-box' style={{ backgroundColor: '#E4F3EC' }}>
                        <BuildingComplex size={18} color='#147D55'></BuildingComplex>
                    </div>
                </div>
                <p className='card-value'>283</p>
                <p className='card-subtext' style={{ color: '#147D55' }}>+12 this quarter</p>
            </div>

            <div className='card-container'>
                <div className='card-header-row'>
                    <h3>Annual managed spend</h3>
                    <div className='icon-box' style={{ backgroundColor: '#E7F1FA' }}>
                        <Coins size={18} color='#0058A3'></Coins>
                    </div>
                </div>
                <p className='card-value'>428MKr</p>
                <p className='card-subtext' style={{ color: '#0058A3' }}>64% under active contract</p>
            </div>

            <div className='card-container'>
                <div className='card-header-row'>
                    <h3>Suppliers at risk</h3>
                    <div className='icon-box' style={{ backgroundColor: '#FCE8E6' }}>
                        <TriangleAlert size={18} color='#C43D37'></TriangleAlert>
                    </div>
                </div>
                <p className='card-value'>18</p>
                <p className='card-subtext' style={{ color: '#C43D37' }}>5 require action this week</p>
            </div>

            <div className='card-container'>
                <div className='card-header-row'>
                    <h3>Sustainability standards</h3>
                    <div className='icon-box' style={{ backgroundColor: '#E2F2E9' }}>
                        <Leaf size={18} color='#277455'></Leaf>
                    </div>
                </div>
                <p className='card-value'>83%</p>
                <p className='card-subtext' style={{ color: '#277455' }}>+7 verified</p>
            </div>
        </div>
    );
}