import React, {useState} from 'react';
import { NavItem, UserProfile} from './SidebarItems';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom'


export function SidebarBox() {
    const [activeTab, setActiveTab] = useState('Home');
    const navigate = useNavigate()

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
                    label='Home'
                    
                    isActive={activeTab == 'Home'}
                    onClick={() => {
                        navigate(`/app`)
                        setActiveTab('Home')
                    }}
                />
                 <NavItem
                    label='Suppliers'
                 
                    isActive={activeTab == 'Suppliers'}
                    onClick={() => {
                        navigate(`/app/suppliers`)
                        setActiveTab('Suppliers')
                    }}
                />
                 <NavItem
                    label='Compare'
                
                    isActive={activeTab == 'Compare'}
                    onClick= {() => {
                        navigate(`/app/compare`)
                        setActiveTab('Compare')
                    }}
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