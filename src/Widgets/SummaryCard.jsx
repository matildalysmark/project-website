import '../style/SummaryCard.css';
import data from '/data/supplier_data.json'
import { Atom, TreePine, HandHeart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { getAverageScore } from "../helper/scoreUtils";

export default function SummaryCard({ id }) {
    const supplier = data.suppliers[id]; // supplier id, e.g. 'abc_ab'
    const navigate = useNavigate()

    // if id is missing, no data can be shown, writes out 'supplier missing'
    if (!supplier) {
        return <div className='summary-container'>Supplier missing</div>;
    }

    return (
        <div className='summary-container' onClick={() => navigate(`/app/suppliers/${id}`)}>
            <p className='summary-header'>
                {supplier["display_name"]}
            </p>

            <div className='bar-container'>

                {/*Carbon footprint bar*/}
                <div className='bar-wrapper'>
                    <div className='bar' style={{backgroundColor: '#D6DDD9'}}>
                        <div className='bar-fill' style={{height: `${(supplier.carbon_footprint / 10) * 100}%`, backgroundColor: '#2C594F'}}></div>
                    </div>
                    <Atom size={20} color='#2C594F'/>
                </div>

                {/*Resourcing bar*/}
                <div className='bar-wrapper'>
                    <div className='bar' style={{backgroundColor: '#DDE2D1'}}>
                        <div className='bar-fill' style={{height: `${(supplier.responsible_sourcing / 10) * 100}%`, backgroundColor: '#52732B'}}></div>
                    </div>
                    <TreePine size={20} color='#52732B'/>
                </div>

                {/*Labor bar*/}
                <div className='bar-wrapper'>
                    <div className='bar' style={{backgroundColor: '#F0D4CF'}}>
                        <div className='bar-fill' style={{height: `${(supplier.labor_standards / 10) * 100}%`, backgroundColor: '#A8251D'}}></div>
                    </div>
                    <HandHeart size={20} color='#A8251D'/>
                </div>
            </div>

            <div className='overall-score'>
                <span className='overall-score-label'>Overall score</span>
                <span className='overall-score-value'>{getAverageScore(supplier)}</span>
            </div>
        </div>
    );
}