'use client'
import { useState } from 'react'

export default function Footer() {
const currentYear = new Date().getFullYear()
const [openSections, setOpenSections] = useState([])

const toggleSection = (section) => {
setOpenSections(prev => 
prev.includes(section) 
? prev.filter(s => s !== section)
: [...prev, section]
)
}

const footerSections = [
{
title: "GET HELP",
content: (
<nav className="space-y-5">
{['Help Center', 'Track Order', 'Shipping Info', 'Returns', 'Contact Us'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-xs hover:text-white">{item}</a>
))}
</nav>
)
},
{
title: "COMPANY",
content: (
<nav className="space-y-5">
{['Careers', 'About', 'Stores', 'Want to Collab?'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-xs hover:text-white">{item}</a>
))}
</nav>
)
},
{
title: "QUICK LINKS",
content: (
<nav className="space-y-5">
{['Size Guide', 'Sitemap', 'Gift Cards', 'Check Gift Card Balance'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-xs hover:text-white">{item}</a>
))}
</nav>
)
},
{
title: "LEGAL",
content: (
<nav className="space-y-5">
{['Promo T&Cs', 'Privacy Policy', 'Terms of Service', 'CA Supply Chains Act'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-xs hover:text-white">{item}</a>
))}
</nav>
)
}
]

return (
<footer className="bg-black text-white">
<div className="max-w-7xl mx-auto px-4 py-6">
<div className="hidden lg:grid lg:grid-cols-12 gap-4">
<div className="lg:col-span-3">
<h3 className="font-black text-xs uppercase mb-3">SHOP FASTER WITH THE APP</h3>
<div className="flex space-x-2">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764187001/iyh4mljuwhxgeatmgfwb.webp" alt="App Store" className="h-8"/>
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764187532/qovuzfabg48mfnnvux38.svg" alt="Google Play" className="h-8"/>
</div>
</div>

<div className="lg:col-span-2">
<h3 className="font-black text-xs mb-3">Get help</h3>
<nav className="space-y-5">
{['Help Center', 'Track Order', 'Shipping Info', 'Returns', 'Contact Us'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-xs hover:text-white">{item}</a>
))}
</nav>
</div>

<div className="lg:col-span-2">
<h3 className="font-black text-xs mb-3">Company</h3>
<nav className="space-y-5">
{['Careers', 'About', 'Stores', 'Want to Collab?'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-xs hover:text-white">{item}</a>
))}
</nav>
</div>

<div className="lg:col-span-2">
<h3 className="font-black text-xs mb-3">Quick Links</h3>
<nav className="space-y-5">
{['Size Guide', 'Sitemap', 'Gift Cards', 'Check Gift Card Balance'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-xs hover:text-white">{item}</a>
))}
</nav>
</div>

<div className="lg:col-span-3">
<h3 className="font-black text-xs uppercase mb-3">SIGN UP FOR DISCOUNTS + UPDATES</h3>
<div className="relative mb-3">
<input
type="text"
placeholder="Phone Number or Email"
className="w-full bg-white text-black rounded-md px-3 py-6 text-xs"
/>
<button className="absolute right-1 top-1 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
<i className="fas fa-arrow-right text-black text-xs"></i>
</button>
</div>
<p className="text-xs text-gray-400 mb-3 leading-tight">
By signing up for email, you agree to Fashion Nova's Terms of Service and Privacy Policy.
By submitting your phone number, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Fashion Nova at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. By submitting your phone number, and signing up for texts, you also agree to our Terms & Privacy
</p>
<div className="flex space-x-4 mb-4">
{['instagram', 'tiktok', 'youtube', 'snapchat', 'facebook', 'pinterest'].map((platform) => (
<i key={platform} className={`fab fa-${platform} text-xl text-gray-400 hover:text-white`}></i>
))}
</div>
</div>
</div>

<div className="lg:hidden">
<div className="mb-6">
<h3 className="font-black text-xs uppercase mb-3">SIGN UP FOR DISCOUNTS + UPDATES</h3>
<div className="relative mb-3">
<input
type="text"
placeholder="Phone Number or Email"
className="w-full bg-white text-black rounded-md px-3 py-6 text-xs"
/>
<button className="absolute right-1 top-1 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
<i className="fas fa-arrow-right text-black text-xs"></i>
</button>
</div>
<p className="text-xs text-gray-400 mb-3 leading-tight">
By signing up for email, you agree to Fashion Nova's Terms of Service and Privacy Policy.
By submitting your phone number, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Fashion Nova at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. By submitting your phone number, and signing up for texts, you also agree to our Terms & Privacy
</p>
<div className="flex space-x-4 mb-4">
{['instagram', 'tiktok', 'youtube', 'snapchat', 'facebook', 'pinterest'].map((platform) => (
<i key={platform} className={`fab fa-${platform} text-xl text-gray-400 hover:text-white`}></i>
))}
</div>
</div>

<div className="space-y-0">
{footerSections.map((section, index) => (
<div key={index} className="border-b border-gray-800">
<button
className="flex justify-between items-center w-full py-4 text-left"
onClick={() => toggleSection(index)}
>
<span className="font-black text-xs uppercase">
{section.title}
</span>
<i className={`fas ${openSections.includes(index) ? 'fa-minus' : 'fa-plus'} text-xs`}></i>
</button>
{openSections.includes(index) && (
<div className="pb-4">
{section.content}
</div>
)}
</div>
))}
</div>
</div>

<div className="border-t border-gray-800 mt-6 pt-6">
<div className="flex justify-start">
<p className="text-gray-400 text-xs">© {currentYear} Fashion Nova, LLC All Rights Reserved</p>
</div>
</div>
</div>
</footer>
)
}
