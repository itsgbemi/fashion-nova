import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
return (
<>
<Header />
<main>
<section className="relative h-screen overflow-hidden">
<video 
autoPlay 
muted 
loop 
playsInline
className="absolute w-full h-full object-cover"
>
<source src="https://res.cloudinary.com/dqhawdcol/video/upload/v1764508376/mdk8rc7vbhbfdv960xbz.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-black bg-opacity-30"></div>
</section>
</main>
<Footer />
</>
)
}
