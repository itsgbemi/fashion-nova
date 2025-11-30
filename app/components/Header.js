'use client'
import {useState} from 'react'
import {FontAwesomeIcon}from'@fortawesome/react-fontawesome'
import{faSearch,faHistory,faUser,faHeart,faShoppingBag}from'@fortawesome/free-solid-svg-icons'
import MobileMenu from'./MobileMenu'
export default function Header(){
const[isMobileMenuOpen,setIsMobileMenuOpen]=useState(false)
const mainNavItems=['New In','Clothing','Cyber Steals','Holiday Shop','Formal Shop','Dresses','Matching Sets','Tops','Jeans','Jackets','Sweaters','Shoes','Bottoms','Jumpsuits','Lingerie & Sleep','Accessories','Loungewear','Nova Luxe','Sale']
return(
<>
<header>
<div className="utility-bar">
<div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
<div className="flex items-center space-x-8">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764186999/gwrlckovluhlu5rjxsik.svg" alt="Fashion Nova" className="h-8"/>
<nav className="utility-nav hidden md:flex space-x-6">
{['WOMEN','PLUS+CURVE','MEN','KIDS','BEAUTY'].map((item)=>(
<a key={item} className="font-bold text-sm uppercase hover:text-#a6363a">{item}</a>
))}
</nav>
</div>
<div className="flex-1 max-w-lg mx-4 hidden md:block">
<div className="search-field rounded-full px-4 py-2 flex items-center">
<FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2"/>
<input type="text" placeholder="Search within women's clothing" className="flex-1 bg-transparent outline-none text-sm"/>
<div className="w-6 h-6 border-l border-gray-300 ml-2 pl-2">
<svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400">
<path fill="currentColor" d="M21 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H3a1 1 0 00-1 1v15a1 1 0 001 1h18a1 1 0 001-1V7a1 1 0 00-1-1zm-8-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM4 8h16v4H4V8zm0 6h16v8H4v-8z"/>
</svg>
</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="hidden md:flex items-center space-x-4">
<img src="https://flagcdn.com/w80/ng.png" alt="Nigeria" className="w-6 h-4"/>
<FontAwesomeIcon icon={faHistory} className="text-gray-600"/>
</div>
<FontAwesomeIcon icon={faUser} className="text-gray-600"/>
<FontAwesomeIcon icon={faHeart} className="text-gray-600"/>
<FontAwesomeIcon icon={faShoppingBag} className="text-gray-600"/>
<button className="md:hidden" onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
</svg>
</button>
</div>
</div>
<div className="mobile-utility-nav md:hidden border-t border-gray-200">
<nav className="flex overflow-x-auto space-x-6 px-4 py-2">
{['WOMEN','PLUS+CURVE','MEN','KIDS','BEAUTY'].map((item)=>(
<a key={item} className="font-bold text-xs uppercase whitespace-nowrap">{item}</a>
))}
</nav>
</div>
</div>
<div className="main-nav">
<nav className="max-w-7xl mx-auto px-4 py-3 hidden md:flex overflow-x-auto space-x-8">
{mainNavItems.map((item,index)=>(
<a key={item} className={`nav-item whitespace-nowrap text-sm uppercase ${index===0?'active':''} hover:text-#a6363a`}>
{item}
</a>
))}
</nav>
</div>
</header>
<MobileMenu isOpen={isMobileMenuOpen} onClose={()=>setIsMobileMenuOpen(false)} items={mainNavItems}/>
</>
)
}
