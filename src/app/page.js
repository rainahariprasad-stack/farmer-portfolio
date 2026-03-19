export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="glass container" style={{ position: 'sticky', top: '20px', zIndex: 100, display: 'flex', justifyContent: 'space-between', padding: '16px 32px', alignItems: 'center', marginBottom: '80px', marginTop: '20px' }}>
        <h1 className="text-gradient" style={{ fontSize: '1.5rem', margin: 0 }}>Rajaiah Nanaboina Farmer</h1>
        <div style={{ display: 'flex', gap: '24px', fontWeight: 500 }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#equipment" className="nav-link">Equipment</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', borderRadius: '32px', marginBottom: '80px', backgroundImage: 'url(/images/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10, 46, 18, 0.4)', zIndex: 0 }}></div>
        <div className="glass" style={{ padding: '60px', maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 1, margin: '0 40px' }}>
          <h2 className="text-gradient" style={{ fontSize: '4rem', lineHeight: '1.1' }}>Sustainable Farming,<br/>Modern Roots.</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '500px' }}>
            Join our cooperative society. Discover premium yields through 100% natural farming practices, and rent heavy agricultural equipment with ease.
          </p>
          <div style={{ marginTop: '10px' }}>
            <a href="#products" className="btn-primary" style={{ display: 'inline-block' }}>Explore Harvest</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container" style={{ margin: '140px auto' }}>
        <div className="glass glass-interactive" style={{ padding: '60px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-green-accent)' }}>Decades of Experience</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.85, marginBottom: '20px' }}>
              As a dedicated member of the local Farmers' Cooperative Society, we specialize in <strong>Natural Farming</strong>. By eliminating chemical inputs, we enrich the soil and produce nutrient-dense, organic crops. Our methods blend traditional wisdom with modern precision.
            </p>
            <p style={{ fontSize: '1.1rem', opacity: 0.85 }}>
              Banding together with other farmers ensures fair pricing, shared resources, high-quality standards, and a consistent produce supply year-round.
            </p>
          </div>
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '350px', backgroundImage: 'url(/images/farmer.png)', backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', padding: '40px 30px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '3rem', margin: 0, color: 'var(--color-green-light)', lineHeight: 1 }}>25+</h4>
              <p style={{ fontSize: '1.1rem', marginTop: '5px', fontWeight: 500, color: '#f0fdf4' }}>Years Shaping the Earth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container" style={{ margin: '140px auto' }}>
        <h3 style={{ fontSize: '3rem', marginBottom: '50px', textAlign: 'center', color: 'var(--color-green-accent)' }}>Our Premium Yields</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {[
            { name: 'Mirchi (Chilli)', icon: '🌶️', desc: 'Vibrant, spicy, and naturally grown red chillies that are a staple of our organic yield.' },
            { name: 'Corn', icon: '🌽', desc: 'Our golden corn is cultivated with utmost care, perfect for both food production and livestock feed.' },
            { name: 'Paddy', icon: '🌾', desc: 'High-quality rice paddies nurtured in nutrient-dense soil, ensuring rich grains and reliable harvests.' },
            { name: 'Cotton', icon: '☁️', desc: 'Premium grade cotton boasting long fibers, grown with eco-friendly pest management techniques.' }
          ].map((crop, index) => (
            <div key={index} className="glass glass-interactive" style={{ padding: '40px 30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '90px', height: '90px', background: 'var(--color-green-primary)', borderRadius: '50%', margin: '0 auto 25px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.2)' }}>
                <span style={{ fontSize: '2.5rem' }}>{crop.icon}</span>
              </div>
              <h4 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{crop.name}</h4>
              <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: '1.6' }}>{crop.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Equipment Rental Section */}
      <section id="equipment" className="container" style={{ margin: '140px auto' }}>
        <div className="glass" style={{ padding: '0', display: 'flex', overflow: 'hidden', borderRadius: '24px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px', background: 'linear-gradient(135deg, rgba(15, 61, 27, 0.9), rgba(21, 93, 39, 0.6))', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-green-accent)' }}>Tractors & Combine Harvesters</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '30px', lineHeight: '1.7' }}>
              Available for rent directly from our farm. From well-maintained heavy-duty tractors for plowing to high-efficiency combine harvesters for crop collection, these core cooperative assets are ready to support your harvest.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', opacity: 0.8, display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '1.05rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--color-green-light)' }}>✓</span> 150 HP Tractors & Advanced Harvesters</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--color-green-light)' }}>✓</span> Perfect for large-scale operations</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--color-green-light)' }}>✓</span> Flexible Weekly/Monthly Rates</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--color-green-light)' }}>✓</span> Operator Available on Request</li>
            </ul>
            <div>
              <button className="btn-primary">Inquire for Rental</button>
            </div>
          </div>
          <div style={{ flex: '1 1 300px', minHeight: '400px', backgroundImage: 'url(/images/tractor.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 61, 27, 0.9), transparent 70%)', pointerEvents: 'none' }}></div>
             <div style={{ zIndex: 1, padding: '30px', width: '100%', textAlign: 'center' }}>
               <span style={{ fontSize: '1rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, color: '#f0fdf4' }}>High-Efficiency Fleet</span>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container glass" style={{ margin: '140px auto 40px auto', padding: '50px 40px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--color-green-light)' }}>Rajaiah Nanaboina Farmer</h3>
        <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Cultivating success and sustainability together.</p>
      </footer>
    </main>
  );
}
