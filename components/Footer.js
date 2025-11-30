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
title: "SHOP FASTER WITH THE APP",
content: (
<div className="flex space-x-2">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764187001/iyh4mljuwhxgeatmgfwb.webp" alt="App Store" className="h-10"/>
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764187532/qovuzfabg48mfnnvux38.svg" alt="Google Play" className="h-10"/>
</div>
)
},
{
title: "Get help",
content: (
<nav className="space-y-2">
{['Help Center', 'Track Order', 'Shipping Info', 'Returns', 'Contact Us'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-sm hover:text-white">{item}</a>
))}
</nav>
)
},
{
title: "Company",
content: (
<nav className="space-y-2">
{['Careers', 'About', 'Stores', 'Want to Collab?'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-sm hover:text-white">{item}</a>
))}
</nav>
)
},
{
title: "Quick Links",
content: (
<nav className="space-y-2">
{['Size Guide', 'Sitemap', 'Gift Cards', 'Check Gift Card Balance'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-sm hover:text-white">{item}</a>
))}
</nav>
)
},
{
title: "SIGN UP FOR DISCOUNTS + UPDATES",
content: (
<>
<div className="relative mb-4">
<input
type="text"
placeholder="Phone Number or Email"
className="w-full bg-white text-black rounded-full px-4 py-2 text-sm"
/>
<button className="absolute right-1 top-1 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
<i className="fas fa-arrow-right text-black text-sm"></i>
</button>
</div>
<p className="text-xs text-gray-400 mb-4">
By signing up for email, you agree to Fashion Nova's Terms of Service and Privacy Policy.
By submitting your phone number, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Fashion Nova at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. By submitting your phone number, and signing up for texts, you also agree to our Terms & Privacy
</p>
<div className="flex space-x-4">
{['instagram', 'tiktok', 'youtube', 'snapchat', 'facebook', 'pinterest'].map((platform) => (
<i key={platform} className={`fab fa-${platform} text-xl text-gray-400 hover:text-white`}></i>
))}
</div>
</>
)
}
]

return (
<footer className="bg-black text-white">
<div className="max-w-7xl mx-auto px-4 py-8">
<div className="hidden lg:grid lg:grid-cols-12 gap-6">
<div className="lg:col-span-4">
<h3 className="font-bold text-sm uppercase mb-4">SHOP FASTER WITH THE APP</h3>
<div className="flex space-x-2">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764187001/iyh4mljuwhxgeatmgfwb.webp" alt="App Store" className="h-10"/>
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764187532/qovuzfabg48mfnnvux38.svg" alt="Google Play" className="h-10"/>
</div>
</div>

<div className="lg:col-span-2">
<h3 className="font-bold text-sm uppercase mb-4">Get help</h3>
<nav className="space-y-2">
{['Help Center', 'Track Order', 'Shipping Info', 'Returns', 'Contact Us'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-sm hover:text-white">{item}</a>
))}
</nav>
</div>

<div className="lg:col-span-2">
<h3 className="font-bold text-sm uppercase mb-4">Company</h3>
<nav className="space-y-2">
{['Careers', 'About', 'Stores', 'Want to Collab?'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-sm hover:text-white">{item}</a>
))}
</nav>
</div>

<div className="lg:col-span-2">
<h3 className="font-bold text-sm uppercase mb-4">Quick Links</h3>
<nav className="space-y-2">
{['Size Guide', 'Sitemap', 'Gift Cards', 'Check Gift Card Balance'].map((item) => (
<a key={item} href="#" className="block text-gray-400 text-sm hover:text-white">{item}</a>
))}
</nav>
</div>

<div className="lg:col-span-2">
<h3 className="font-bold text-sm uppercase mb-4">SIGN UP FOR DISCOUNTS + UPDATES</h3>
<div className="relative mb-4">
<input
type="text"
placeholder="Phone Number or Email"
className="w-full bg-white text-black rounded-full px-4 py-2 text-sm"
/>
<button className="absolute right-1 top-1 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
<i className="fas fa-arrow-right text-black text-sm"></i>
</button>
</div>
<p className="text-xs text-gray-400 mb-4">
By signing up for email, you agree to Fashion Nova's Terms of Service and Privacy Policy.
By submitting your phone number, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Fashion Nova at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. By submitting your phone number, and signing up for texts, you also agree to our Terms & Privacy
</p>
<div className="flex space-x-4">
{['instagram', 'tiktok', 'youtube', 'snapchat', 'facebook', 'pinterest'].map((platform) => (
<i key={platform} className={`fab fa-${platform} text-xl text-gray-400 hover:text-white`}></i>
))}
</div>
</div>
</div>

<div className="lg:hidden space-y-2">
{footerSections.map((section, index) => (
<div key={index} className="border-b border-gray-800">
<button
className="flex justify-between items-center w-full py-4 text-left"
onClick={() => toggleSection(index)}
>
<span className="font-bold text-sm uppercase">{section.title}</span>
<i className={`fas ${openSections.includes(index) ? 'fa-minus' : 'fa-plus'} text-sm`}></i>
</button>
{openSections.includes(index) && (
<div className="pb-4">
{section.content}
</div>
)}
</div>
))}
</div>

<div className="border-t border-gray-800 mt-8 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm">© {currentYear} Fashion Nova, LLC All Rights Reserved</p>
<nav className="flex space-x-4 mt-4 md:mt-0">
{['Promo T&Cs', 'Privacy Policy', 'Terms of Service', 'CA Supply Chains Act', 'Your privacy choices'].map((item) => (
<a key={item} href="#" className="text-gray-400 text-sm hover:text-white">{item}</a>
))}
</nav>
</div>
</div>
</div>
</footer>
)
}
