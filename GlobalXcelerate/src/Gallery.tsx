import './App.css';

function Gallery() {
    return (
        <div className="gallery-page">
            <section className="svc-hero">
                <div className="svc-hero-particles">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className={`svc-particle svc-particle-${i + 1}`} />
                    ))}
                </div>
                <div className="container svc-hero-inner">
                    <span className="svc-hero-label">Our Moments</span>
                    <h1 className="svc-hero-title">Photo Gallery</h1>
                    <p className="svc-hero-subtitle"><strong style={{ color: '#c9a84c', fontWeight: 700 }}>Every picture tells a story of learning, growth and global exposure.</strong></p>
                    <div className="svc-hero-divider" />
                </div>
            </section>

            <section className="gallery-album-section">
                <div className="container">
                    <div className="gallery-album">
                        <div className="gallery-album-item">
                            <img src="/1.JPG" alt="Gallery 1" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/2.JPG" alt="Gallery 2" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/3.JPG" alt="Gallery 3" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/4.JPG" alt="Gallery 4" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/5.png" alt="Gallery 5" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/6.png" alt="Gallery 6" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/7.png" alt="Gallery 7" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/8.JPG" alt="Gallery 8" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/9.png" alt="Gallery 9" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/10.png" alt="Gallery 10" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/11.png" alt="Gallery 11" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/12.png" alt="Gallery 12" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/13.png" alt="Gallery 13" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/14.png" alt="Gallery 14" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/15.png" alt="Gallery 15" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/16.png" alt="Gallery 16" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/17.png" alt="Gallery 17" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/18.png" alt="Gallery 18" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/19.png" alt="Gallery 19" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/20.png" alt="Gallery 20" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/21.png" alt="Gallery 21" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/22.png" alt="Gallery 22" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/23.png" alt="Gallery 23" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/24.png" alt="Gallery 24" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/25.jpeg" alt="Gallery 25" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/26.jpeg" alt="Gallery 26" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/27.jpeg" alt="Gallery 27" />
                        </div>
                        <div className="gallery-album-item">
                            <img src="/28.jpeg" alt="Gallery 28" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Gallery;
