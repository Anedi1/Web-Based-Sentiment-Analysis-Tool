import React from 'react'; 

function TabNav({ activeTab, setActiveTab }) { 
  return ( 
    <div className="tabs"> 
      <button 
        className={activeTab === 'main' ? 'active' : ''}
        onClick={() => setActiveTab('main')} 
      > 
        Main 
      </button> 
      <button 
        className={activeTab === 'history' ? 'active' : ''} 
        onClick={() => setActiveTab('history')} 
      > 
        History 
      </button> 
    </div> 
  ); 
} 

export default TabNav; 