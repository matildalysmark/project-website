import React, {useState} from 'react';
import { NavItem, UserProfile} from './SidebarItems';
import './Sidebar.css';


export function SidebarBox() {
    const [activeTab, setActiveTab] = useState('Suppliers');

    return(
        <aside className='sidebar-container'>
            {/*Logotyp och titel*/}
            <div className='sidebar-header'>
                <div className='logo-box'>WS</div>
                <div className='logo-text'>
                    <h3>Wood Source</h3>
                    <p>SUPPLIER INTELLIGENCE</p>
                </div>
            </div>

             {/*MenyLista*/}
            <div className='sidebar-section-title'>WORKSPACE</div>
            <nav className='sidebar-nav'>
                <NavItem
                    label='Dashboard'
                    
                    isActive={activeTab == 'Dashbrod'}
                    onClick={() => setActiveTab('Dashboard')}
                />
                 <NavItem
                    label='Suppliers'
                 
                    isActive={activeTab == 'Suppliers'}
                    onClick={() => setActiveTab('Suppliers')}
                />
                 <NavItem
                    label='Compare'
                
                    isActive={activeTab == 'Compare'}
                    onClick={() => setActiveTab('Comapare')}
                />
            </nav>

            <div className='sidebar-footer'>
                <UserProfile
                    initials='EM'
                    name = 'Johan'
                    role = 'Wood Sourcing Leader'
                />
            </div>
        </aside>
    )
}