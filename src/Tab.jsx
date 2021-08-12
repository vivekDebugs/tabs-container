import React from 'react'
import './Tab.css'
import { GrClose } from 'react-icons/gr'

const Tab = ({ tab, closeTab, handleActive, isActive }) => {
	return (
		<div
			className={`tab ${isActive && 'active'}`}
			onClick={() => handleActive(tab.id)}
		>
			<span>{tab.name}</span>
			<GrClose className='tab__close' onClick={e => closeTab(tab, e)} />
		</div>
	)
}

export default Tab
