import React, {useEffect, useRef} from 'react'
import {generateIcon} from '../../icons'
import useWindowScrollBottom from '../../utils/useWindowScrollBottom'

import {Item} from './components/item'
import {
    IAgent
} from '../../reducers'

import './style.scss'
const LoadingSvg = generateIcon('loading')

interface IProps{
    tableList: IAgent[],
    pager: any,
    loading: boolean,
    agentActions: any
}
let init = false
let eventBind = false

const Agent = (props:IProps) => {
    let pager = props.pager
    const pagerRef = useRef(null) as any
    pagerRef.current = pager
    const loadingRef = useRef(0) as any
    loadingRef.current = props.loading
    //const pagerRef = useRef(pager)
    //pagerRef.current = pager
    //@ts-ignore
    let listSize = props.tableList.length
    ///
    useWindowScrollBottom(bindScrollDown)
    /* const store = useStore()
    const state = store.getState()
    const agentState = state.agent */
    // @ts-ignore
    //console.log('pager=========', agentState.get('pagination').toJS())
    function loadTableList(current:number, pageSize:number){
        console.log('start load', pager)
        props.agentActions.fetchTableList({
            current:current, pageSize:pageSize
        })
    }
    
    function loadMoreHandle(){
        loadTableList(pager.current+1, pager.pageSize)
    }

    function bindScrollDown(){
        if(!loadingRef.current && listSize<pagerRef.current.total){
            console.log('callback state not change:', pagerRef.current)
            loadTableList(pagerRef.current.current+1, pagerRef.current.pageSize)
        }
    }

    useEffect(() => {
        //console.log('pager ...............', pager)
        //changeMainContainerHeight()
        if(!init){
            init = true
            loadTableList(pager.current+1, pager.pageSize)
        }
        
    })
    
    let loadingCls = 'iconw loading'
    const initText = 'Load More'
    let loadingText = initText
    let nomoreText = 'No more data to load'
    if(listSize>=pager.total){
        loadingText = nomoreText
    }
    if(props.loading){
        loadingCls = 'iconw loading show'
        loadingText = 'Loading...'
        nomoreText = 'Loading...'
    }

    let loadMore = (<div className="li">
        <div className="load_more" onClick={loadMoreHandle}>
            <div className="tx">
                <span className="tx">{loadingText}</span>
                <span className={loadingCls}>
                    <LoadingSvg />
                </span>
            </div>
        </div>
    </div>)

    return(
        <div className="agent-ul" id="agent-ul">
            {props.tableList.map(item =><Item 
                data={item} 
                key={'agi_' + item.id}
                agentActions={props.agentActions}
                />)
            }
            {loadMore}
        </div>
    )
}

export default Agent