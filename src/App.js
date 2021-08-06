import React, { useState, useRef, useEffect } from 'react'
import './App.css';
import Tab from './Tab';
import { BsCaretLeftFill } from 'react-icons/bs'
import { BsCaretRightFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'

function App() {

  const randomId = () => {
    return Math.floor(Math.random() * 100000)
  }

  const allTabs = [
    {
      id : randomId(),
      name : 'Tab 1',
      content : 'Tab 1 Content'
    },
  ]

  const [count, setCount] = useState(4)
  const [tabs, setTabs] = useState(allTabs)
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [showChevron, setShowChevron] = useState(false)
  const ref = useRef(null)

  const _setTabs = (arr) => {
    setTabs(arr)
  }

  const _setActiveTab = (obj) => {
    setActiveTab(obj)
  }

  useEffect(() => {
    const createTabs = () => {
      const _tabs = []
      for (let i = 1; i < 4; i++) {
        const _newTab = {
          id : randomId(),
          name : `Tab ${i}`,
          content : `Tab ${i} content`
        }
        _tabs.push(_newTab)
      }
      _setTabs(_tabs)
      _setActiveTab(_tabs[0])
    }

    createTabs()
    
  }, [])

  const closeTab = (tab, e) => {
    e.stopPropagation()
    if (tabs.length > 1) {
      const close = window.confirm('This action will close the tab.')
      if (close) {
        const newTabs = [...tabs]
        const index = newTabs.indexOf(tab)
        if (activeTab === tab) {
          const newActive = index === 0 ? 1 : index - 1;
          setActiveTab(tabs[newActive])
        }
        newTabs.splice(index, 1)
        setTabs(newTabs)
      }
    } else {
      return
    }
  }

  const addTab = () => {
    if (tabs.length < 10) {
      const newTabs = [...tabs]
      setCount(count + 1)
      const newTab = {
        id : randomId(),
        name : `Tab ${count}` ,
        content : `Tab ${count} content`
      }
      newTabs.push(newTab)
      setTabs(newTabs)
      setActiveTab(newTab)
    } else {
      return      
    }
  }

  const handleScroll = (offset) => {
    ref.current.scrollLeft += offset;
  }

  const isOverflow = (el) => {
    return el.scrollWidth > el.offsetWidth
  }

  const _setShow = (val) => {
    setShowChevron(val)
  }

  const handleActive = (id) => {
    const item = tabs.find(tab => tab.id === id)
    setActiveTab(item)
  }

  useEffect(() => {
    const container = document.getElementById('tabsContainer')
    if (isOverflow(container)) {
      _setShow(true)      
    } else {
      _setShow(false)
    }
  })
  
  return (
    <div className="app">
        <div className="app__container">
          <div className="app__tabsContainer" ref={ref} id='tabsContainer'>
            {tabs.map((tab, index) => (
              <Tab 
              tab={tab} key={tab.id} 
              closeTab={closeTab}
              handleActive={handleActive}
              isActive={activeTab === tab ? true : false}
              />
            ))}
            {showChevron && (
              <>
              <BsCaretLeftFill 
              className={`app__chevronLeft icon`}
              onClick={() => handleScroll(-20)} />
              <BsCaretRightFill 
              className='app__chevronRight icon' 
              onClick={() => handleScroll(20)} />
              </>
            )}
            <FaPlus className='app__plusIcon icon' onClick={addTab} />
          </div>
          <div className="app__contentContainer">
            <p>
              {activeTab.content}
            </p>
          </div>
        </div>
    </div>
  );
}

export default App;
