export default function MobileMenu({ isOpen, onClose, mainNav }) {
return (
<div className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`}>
<div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
<div className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl">
<div className="flex items-center justify-between p-4 border-b">
<h2 className="text-lg font-bold">Menu</h2>
<button onClick={onClose}>
<i className="fas fa-times text-xl"></i>
</button>
</div>
<nav className="p-4">
{mainNav.map((item) => (
<a 
key={item}
href="#" 
className="block py-3 text-sm font-medium uppercase border-b border-gray-200"
>
{item}
</a>
))}
</nav>
</div>
</div>
)
}
