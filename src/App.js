import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

let allCategories = ['All', ...new Set(items.map((item) => item.category))]

function App() {
  let [menuItems, setMenuItems] = useState(items)
  let [categories, setCategories] = useState(allCategories)

  let filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items)
      return
    }
    {
      let newItems = items.filter((item) => item.category === category)
      setMenuItems(newItems)
    }
  }

  return (
    <>
      <main>
        <section className='menu section'>
          <h2 className='title'>Menu</h2>
          <div className='underline'></div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  )
}

export default App
