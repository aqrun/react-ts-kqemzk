import React, { useEffect, useContext, useState } from 'react';

//import logo from './logo.svg';
import './styles/app.scss';
import {
  Agent,
} from './pages'
import {
  HistoryList,
  Navigation,
  Footer,
  Header
} from './components'
import {
    routes,
    IAgent
} from './reducers'

export function App() {
    const [tableList, setTableList] = useState([])
    const [pager, setPager] = useState({current:0, pageSize:5})
    const [loading, setLoading] = useState(false)


  //let win:any = window
  //win.s = history
  const agentActions = {
      
  }

  return (
    <div className="main-container" id="main-container">
      <Header/>
      <div className="content-w max-width">
        <div className="side-a">
          <Navigation routes={routes}/>
          <HistoryList />
        </div>
        <div className="side-a1"></div>
        <div className="main">
            <Agent 
                tableList={tableList} 
                pager={pager} 
                loading={loading}
                agentActions
            />,
        </div>
      </div>
      <Footer />
    </div>
  )
}

