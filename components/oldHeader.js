'use client'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

export default function Header() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

const utilityNav = [
{ name: 'WOMEN', href: '/' },
{ name: 'PLUS+CURVE', href: '/curve' },
{ name: 'MEN', href: '/men' },
{ name: 'KIDS', href: '/novakids' },
{ name: 'BEAUTY', href: '/beauty' }
]

const mainNav = [
{ name: 'New In', href: '/collections/new' },
{ name: 'Clothing', href: '#' },
{ name: 'Cyber Steals', href: '#' },
{ name: 'Holiday Shop', href: '#' },
{ name: 'Formal Shop', href: '#' },
{ name: 'Dresses', href: '#' },
{ name: 'Matching Sets', href: '#' },
{ name: 'Tops', href: '#' },
{ name: 'Jeans', href: '#' },
{ name: 'Jackets', href: '#' },
{ name: 'Sweaters', href: '#' },
{ name: 'Shoes', href: '#' },
{ name: 'Bottoms', href: '#' },
{ name: 'Jumpsuits', href: '/collections/rompers-and-jumpsuits' },
{ name: 'Lingerie & Sleep', href: '#' },
{ name: 'Accessories', href: '#' },
{ name: 'Loungewear', href: '#' },
{ name: 'Nova Luxe', href: '#' },
{ name: 'Sale', href: '#' }
]

return (
<>
<header className="bg-white sticky top-0 z-50">
<div className="hidden lg:block border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-center justify-between h-12">
<div className="flex items-center space-x-8">
<Link href="/">
<img 
src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764186999/gwrlckovluhlu5rjxsik.svg" 
alt="Fashion Nova" 
className="h-8"
/>
</Link>
<nav className="flex space-x-6">
{utilityNav.map((item) => (
<Link 
key={item.name}
href={item.href} 
className={`font-bold text-sm uppercase ${item.name === 'WOMEN' ? 'border-b-2 border-black' : ''}`}
>
{item.name}
</Link>
))}
</nav>
</div>

<div className="flex-1 max-w-xl mx-8">
<div className="relative">
<input
type="text"
placeholder="Search within women's clothing"
className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pl-10 pr-12 text-sm"
/>
<i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
<i className="fas fa-camera absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
</div>
</div>

<div className="flex items-center space-x-4">
<i className="fas fa-flag hidden lg:block text-gray-600"></i>
<i className="fas fa-clock text-gray-600"></i>
<i className="far fa-user text-gray-600"></i>
<i className="far fa-heart text-gray-600"></i>
<i className="fas fa-shopping-bag text-gray-600"></i>
</div>
</div>
</div>
</div>

<div className="hidden lg:block">
<div className="max-w-7xl mx-auto px-4">
<nav className="flex space-x-8 overflow-x-auto py-4 scrollbar-hide">
{mainNav.map((item) => (
<Link 
key={item.name}
href={item.href} 
className="whitespace-nowrap text-sm font-medium uppercase text-gray-900 hover:text-accent flex-shrink-0"
>
{item.name}
</Link>
))}
</nav>
</div>
</div>

<div className="lg:hidden border-b border-gray-200">
<div className="flex items-center justify-between p-4">
<button onClick={() => setIsMobileMenuOpen(true)}>
<i className="fas fa-bars text-xl"></i>
</button>

<Link href="/">
<img 
src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764186999/gwrlckovluhlu5rjxsik.svg" 
alt="Fashion Nova" 
className="h-6"
/>
</Link>

<div className="flex items-center space-x-4">
<i className="far fa-user text-gray-600"></i>
<i className="fas fa-shopping-bag text-gray-600"></i>
</div>
</div>

<nav className="flex overflow-x-auto scrollbar-hide px-4 pb-2">
{utilityNav.map((item) => (
<Link 
key={item.name}
href={item.href} 
className={`whitespace-nowrap px-3 py-2 text-sm font-bold uppercase flex-shrink-0 ${item.name === 'WOMEN' ? 'border-b-2 border-black' : ''}`}
>
{item.name}
</Link>
))}
</nav>
</div>
</header>

<MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} mainNav={mainNav} />
</>
)
}
