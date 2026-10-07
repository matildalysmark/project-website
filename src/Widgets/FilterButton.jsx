import '../style/FilterButton.css';
import { Funnel } from 'lucide-react';

export default function FilterButton() {
    
    return (
        <div className='button-container'>
            <p className='button-text'>
            <Funnel size={10} strokeWidth={3} color='white'/> 
                Filter
            </p>
        </div>
        
    );
}