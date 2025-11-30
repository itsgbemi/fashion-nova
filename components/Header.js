'use client'
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const pathname = usePathname()

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

const getActiveNav = () => {
if (pathname === '/') return 'WOMEN'
if (pathname === '/curve') return 'PLUS+CURVE'
if (pathname === '/men') return 'MEN'
if (pathname === '/novakids') return 'KIDS'
if (pathname === '/beauty') return 'BEAUTY'
return ''
}

return (
<>
<header className="bg-white sticky top-0 z-50 pt-2">
<div className="hidden lg:block">
<div className="max-w-7xl mx-auto px-1">
<div className="flex items-center justify-between h-12">
<div className="flex items-center space-x-3">
<Link href="/">
<img 
src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764186999/gwrlckovluhlu5rjxsik.svg" 
alt="Fashion Nova" 
className="h-5"
/>
</Link>
<nav className="flex space-x-3">
{utilityNav.map((item) => (
<Link 
key={item.name}
href={item.href} 
className={`font-bold text-xs uppercase ${getActiveNav() === item.name ? 'border-b-2 border-black' : ''}`}
>
{item.name}
</Link>
))}
</nav>
</div>

<div className="flex-1 max-w-xl mx-3">
<div className="relative">
<input
type="text"
placeholder="Search within women's clothing"
className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 pl-8 pr-10 text-xs"
/>
<i className="fas fa-search absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs"></i>
<i className="fas fa-camera absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs"></i>
</div>
</div>

<div className="flex items-center space-x-3">
<span className="text-sm">🇳🇬</span>
<i className="fal fa-history text-gray-600 text-sm"></i>
<i className="fa-light fa-circle-user text-gray-600 text-sm"></i>
<i className="far fa-heart text-gray-600 text-sm"></i>
<i className="fa-light fa-bag-shopping text-gray-600 text-sm"></i>
</div>
</div>
</div>
</div>

<div className="hidden lg:block mt-1">
<div className="max-w-7xl mx-auto px-1">
<nav className="flex space-x-4 overflow-x-auto py-2 scrollbar-hide">
{mainNav.map((item) => (
<Link 
key={item.name}
href={item.href} 
className="whitespace-nowrap text-xs font-medium uppercase text-gray-900 hover:text-accent flex-shrink-0"
>
{item.name}
</Link>
))}
</nav>
</div>
</div>

<div className="lg:hidden">
<div className="flex items-center justify-between p-3">
<Link href="/">
<img 
src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764186999/gwrlckovluhlu5rjxsik.svg" 
alt="Fashion Nova" 
className="h-5"
/>
</Link>

<div className="flex items-center space-x-3">
<i className="fa-light fa-circle-user text-gray-600 text-sm"></i>
<i className="far fa-heart text-gray-600 text-sm"></i>
<i className="fa-light fa-bag-shopping text-gray-600 text-sm"></i>
<button onClick={() => setIsMobileMenuOpen(true)}>
<i className="fas fa-bars text-sm"></i>
</button>
</div>
</div>

<nav className="flex overflow-x-auto scrollbar-hide px-2 pb-2">
{utilityNav.map((item) => (
<Link 
key={item.name}
href={item.href} 
className={`whitespace-nowrap px-2 py-1 text-xs font-bold uppercase flex-shrink-0 ${getActiveNav() === item.name ? 'border-b-2 border-black' : ''}`}
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
