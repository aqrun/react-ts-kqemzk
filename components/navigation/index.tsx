import React from 'react'
import PropTypes from 'prop-types'
import { generateIcon } from '../../icons'
//import boatUrl, { ReactComponent as BoatSvg } from '../../icons/boat.svg'
//import BoatSvg from '../../icons/boat.svg'
import { IRoute } from '../../reducers'
import './style.scss'



interface IProps {
    routes: IRoute[]
}



export default function Navigation(props: IProps)
{
    function generateItem(item:IRoute){
        const Icon = generateIcon(item.icon)
        return(
        <li key={'m_' + item.id}>
            <a href={item.url} key={item.id}>
                <span className="faw"><Icon /></span>
                <span className="tx">{item.name}</span>
            </a>
        </li>
        )
    }

    return(
        <div className="navigation">
            <ul>
                {props.routes.map(item => generateItem(item))}
            </ul>
        </div>
    )
}

Navigation.propTypes = {
    routes: PropTypes.array
}