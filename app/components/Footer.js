import {FontAwesomeIcon}from'@fortawesome/react-fontawesome'
import{faInstagram,faTiktok,faYoutube,faSnapchat,faFacebook,faPinterest}from'@fortawesome/free-brands-svg-icons'
export default function Footer(){
const currentYear=new Date().getFullYear()
return(
<footer className="footer">
<div className="max-w-7xl mx-auto px-4 py-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
<div>
<h3 className="footer-heading text-sm font-bold mb-4">SHOP FASTER WITH THE APP</h3>
<div className="flex space-x-2">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764187001/iyh4mljuwhxgeatmgfwb.webp" alt="App Store" className="h-10"/>
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1764187532/qovuzfabg48mfnnvux38.svg" alt="Google Play" className="h-10"/>
</div>
</div>
<div>
<h3 className="footer-heading text-sm font-bold mb-4">Get help</h3>
<ul className="space-y-2 text-sm">
{['Help Center','Track Order','Shipping Info','Returns','Contact Us'].map((item)=>(
<li key={item}><a className="hover:text-white">{item}</a></li>
))}
</ul>
</div>
<div>
<h3 className="footer-heading text-sm font-bold mb-4">Company</h3>
<ul className="space-y-2 text-sm">
{['Careers','About','Stores','Want to Collab?'].map((item)=>(
<li key={item}><a className="hover:text-white">{item}</a></li>
))}
</ul>
</div>
<div>
<h3 className="footer-heading text-sm font-bold mb-4">Quick Links</h3>
<ul className="space-y-2 text-sm">
{['Size Guide','Sitemap','Gift Cards','Check Gift Card Balance'].map((item)=>(
<li key={item}><a className="hover:text-white">{item}</a></li>
))}
</ul>
</div>
<div>
<h3 className="footer-heading text-sm font-bold mb-4">SIGN UP FOR DISCOUNTS + UPDATES</h3>
<div className="flex mb-4">
<input type="text" placeholder="Phone Number or Email" className="subscribe-input flex-1 px-3 py-2 text-sm rounded-l"/>
<button className="subscribe-btn w-10 h-10 rounded-full flex items-center justify-center">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
</svg>
</button>
</div>
<p className="text-xs mb-4">
By signing up for email, you agree to Fashion Nova's Terms of Service and Privacy Policy.
By submitting your phone number, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Fashion Nova at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. By submitting your phone number, and signing up for texts, you also agree to our Terms & Privacy
</p>
<div className="flex space-x-4">
<FontAwesomeIcon icon={faInstagram} className="text-white text-xl"/>
<FontAwesomeIcon icon={faTiktok} className="text-white text-xl"/>
<FontAwesomeIcon icon={faYoutube} className="text-white text-xl"/>
<FontAwesomeIcon icon={faSnapchat} className="text-white text-xl"/>
<FontAwesomeIcon icon={faFacebook} className="text-white text-xl"/>
<FontAwesomeIcon icon={faPinterest} className="text-white text-xl"/>
</div>
</div>
</div>
<div className="border-t border-gray-800 mt-8 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="text-sm mb-4 md:mb-0">
© {currentYear} Fashion Nova, LLC All Rights Reserved
</div>
<nav className="flex flex-wrap justify-center space-x-4 text-sm">
{['Promo T&Cs','Privacy Policy','Terms of Service','CA Supply Chains Act','Your privacy choices'].map((item)=>(
<a key={item} className="hover:text-white mb-2">{item}</a>
))}
</nav>
</div>
</div>
</div>
</footer>
)
}
