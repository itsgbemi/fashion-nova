import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
const categories = [
{
image: "https://res.cloudinary.com/dqhawdcol/image/upload/v1764540566/kimz0p7baj4ej2nmtdho.jpg",
title: "Men",
link: "/men"
},
{
image: "https://res.cloudinary.com/dqhawdcol/image/upload/v1764540565/a20nsdznif7khz3asppg.jpg",
title: "Curve",
link: "/curve"
},
{
image: "https://res.cloudinary.com/dqhawdcol/image/upload/v1764540565/r8iytgashxjbngcyut7c.jpg",
title: "Kids",
link: "/novakids"
},
{
image: "https://res.cloudinary.com/dqhawdcol/image/upload/v1764540565/lanna9lyp5aa42fos52p.jpg",
title: "Collections",
link: "/collections/new"
}
]

return (
<>
<Header />
<main>
<section className="relative overflow-hidden">
<video 
autoPlay 
muted 
loop 
playsInline
className="w-full h-auto object-contain hidden lg:block"
>
<source src="https://res.cloudinary.com/dqhawdcol/video/upload/v1764508376/mdk8rc7vbhbfdv960xbz.mp4" type="video/mp4" />
</video>
<video 
autoPlay 
muted 
loop 
playsInline
className="w-full h-auto object-contain lg:hidden"
>
<source src="https://res.cloudinary.com/dqhawdcol/video/upload/v1764528193/zeri8cgae4e6vypvyos6.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-black bg-opacity-30"></div>
</section>

<section className="py-8">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
{categories.map((category, index) => (
<Link key={index} href={category.link} className="block group">
<div className="aspect-square overflow-hidden rounded-lg">
<img 
src={category.image} 
alt={category.title}
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
</div>
</Link>
))}
</div>
</div>
</section>
</main>
<Footer />
</>
)
}
