const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-[url('/images/gallery.jpg')] bg-center bg-cover flex items-center justify-center h-[350px]">
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="text-7xl font-bold text-white px-12 py-4 z-10 rounded">GALLERY</h1>
      </div>
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <img src="/faces/Francis3.jpg" alt="" />
        <img src="/faces/Imthi2.jpg" alt="" />
        <img src="/faces/Neethu5.jpg" alt="" />
      </div>
    </div>
  )
}

export default Gallery
