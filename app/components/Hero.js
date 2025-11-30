export default function Hero(){
return(
<section className="hero relative h-screen">
<video autoPlay muted loop className="hero-video w-full h-full">
<source src="https://res.cloudinary.com/dqhawdcol/video/upload/v1764508376/mdk8rc7vbhbfdv960xbz.mp4" type="video/mp4"/>
Your browser does not support the video tag.
</video>
<div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
<div className="text-center text-white">
<h1 className="text-5xl font-bold mb-4">FASHION NOVA</h1>
<p className="text-xl">Discover Your Style</p>
</div>
</div>
</section>
)
}
