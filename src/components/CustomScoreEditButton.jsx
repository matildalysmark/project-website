import { SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../style/CustomScoreEditButton.css';

export default function CustomScoreEditButton() {
    const navigate = useNavigate();
    return (
        <button className="custom-score-edit-button" type="button" onClick={() => navigate("/app/custom_score")}>
            
            <p className='button-text'>
            <SlidersHorizontal color='white'/> 
                Score Tuning
            </p>
        </button>
    )
}