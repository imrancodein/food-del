import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2>Explore Our Menu</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga totam aperiam ex pariatur labore quod et voluptatibus sapiente similique, quas odio nisi aliquam ipsa nulla hic excepturi doloremque itaque?</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>
                )
            })}
        </div>
        <hr />
      
    </div>
  )
}

export default ExploreMenu
