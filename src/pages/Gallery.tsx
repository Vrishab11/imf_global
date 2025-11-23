const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-[url('/images/gallery.jpg')] bg-center bg-cover flex items-center justify-center h-[350px]">
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="text-7xl font-bold text-white px-12 py-4 z-10 rounded">GALLERY</h1>
      </div>
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <img src="/gallery/1.jpg" alt="" className="rounded shadow-xl"/>
        <img src="/gallery/2.jpg" alt="" className="rounded shadow-xl"/>
        <img src="/gallery/3.jpg" alt="" className="rounded shadow-xl"/>
        <img src="/gallery/4.jpg" alt="" className="rounded shadow-xl"/>
        <img src="/gallery/5.jpg" alt="" className="rounded shadow-xl"/>
        <img src="/gallery/6.jpg" alt="" className="rounded shadow-xl"/>
        <img src="/gallery/7.jpg" alt="" className="rounded shadow-xl"/>
        <img src="/gallery/8.jpg" alt="" className="rounded shadow-xl"/>
        <img src="/gallery/9.jpg" alt="" className="rounded shadow-xl"/>
        <img src="/gallery/10.jpg" alt="" className="rounded shadow-xl"/>
        <img src="/gallery/11.jpg" alt="" className="rounded shadow-xl"/>
      </div>
    </div>
  )
}

export default Gallery
