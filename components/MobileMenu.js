import Link from 'next/link'

export default function MobileMenu({ isOpen, onClose, mainNav }) {
return (
<div className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`}>
<div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
<div className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl">
<div className="flex items-center justify-between p-4 border-b">
<h2 className="text-lg font-bold">Menu</h2>
<button onClick={onClose}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#374151"></path>
</svg>
</button>
</div>
<nav className="p-4">
{mainNav.map((item) => (
<Link 
key={item.name}
href={item.href} 
className="block py-3 text-sm font-medium uppercase border-b border-gray-200"
onClick={onClose}
>
{item.name}
</Link>
))}
</nav>
</div>
</div>
)
}
