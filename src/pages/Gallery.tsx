const galleryImages = Array.from({ length: 11 }, (_, i) => `/gallery/${i + 1}.webp`);

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-[url('/images/gallery.webp')] bg-center bg-cover flex items-center justify-center h-[350px]">
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="text-7xl font-bold text-white px-12 py-4 z-10 rounded">GALLERY</h1>
      </div>
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {galleryImages.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery Image ${idx + 1}`} className="rounded shadow-xl" loading="lazy" />
        ))}
      </div>
    </div>
  );
};
export default Gallery;