import React from 'react'
import PropTypes from 'prop-types'
import { generateIcon } from '../../../icons'
import { Resources } from './resources'
import images from '../../../images'

import { IAgent } from '../../../reducers'

interface IProps{
    data: IAgent
    agentActions: object
}

const ComputerSvg = generateIcon('computer')
const NoteSvg = generateIcon('note')
const FolderSvg = generateIcon('folder')
const DenySvg = generateIcon('deny')


export const Item = (props: IProps) => {
    let { data } = props
    let deny:any = ''
    if(data.deny === 1){
        deny = (<button className="btn btn_deny" onClick={()=>alert('denyed')}>
            <span className="iconw deny">
                <DenySvg/>
            </span>
            <span className="tx">Deny</span>
        </button>)
    }
    let img = '';
    if(images.hasOwnProperty(data.icon)){
        img = images[data.icon]
    }
    return (
        <div className={`li i${data.id}`}>
            <div className="in clearfix">
                <div className="system">
                    <div className="imgw">
                        <img src={img} alt=""/>
                    </div>
                </div>
                <div className="right">
                    <ul className="info clearfix">
                        <li className="name">
                            <span className="iconw computer">
                                <ComputerSvg />
                            </span>
                            <a href="" className="tx">{data.name}</a>
                        </li>
                        <li className="statusw">
                            <div className={'status ' + data.status}>
                                {data.status}
                            </div>
                        </li>
                        <li className="ip">
                            <span className="iconw note">
                                <NoteSvg/>
                            </span>
                            <span className="tx">{data.ip}</span>
                        </li>
                        <li className="folder">
                            <span className="iconw foler">
                                <FolderSvg />
                            </span>
                            <span className="tx">{data.folder}</span>
                        </li>
                    </ul>
                    <div className="control-w clearfix">
                        <Resources 
                            agentId={data.id}
                            agentActions={props.agentActions}
                            data={data.resources} 
                            />
                        {deny}
                    </div>
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {
    data: PropTypes.object,
    agentActions: PropTypes.object
}