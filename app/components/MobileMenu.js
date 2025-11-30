import {FontAwesomeIcon}from'@fortawesome/react-fontawesome'
import{faTimes}from'@fortawesome/free-solid-svg-icons'
export default function MobileMenu({isOpen,onClose,items}){
if(!isOpen)return null
return(
<div className="mobile-menu fixed inset-0 z-50 bg-white">
<div className="p-4 border-b border-gray-200 flex justify-between items-center">
<h2 className="text-lg font-bold">Menu</h2>
<button onClick={onClose}>
<FontAwesomeIcon icon={faTimes} className="text-gray-600"/>
</button>
</div>
<nav className="p-4">
<ul className="space-y-4">
{items.map((item)=>(
<li key={item}>
<a className="block py-2 text-lg uppercase border-b border-gray-100 hover:text-[#a6363a]">
{item}
</a>
</li>
))}
</ul>
</nav>
</div>
)
}
