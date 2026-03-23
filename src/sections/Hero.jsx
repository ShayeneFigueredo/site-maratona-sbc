export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">★ 10 Years Experience</span>
        <h1>Empowering Brands <br/> Through Creative Solutions</h1>
        <p>From web development to branding, we deliver innovative strategies that elevate your brand and drive growth.</p>
        <div className="hero-btns">
          <button className="btn-primary">Start Your Project</button>
          <button className="btn-secondary">Let's Collaborate</button>
        </div>
      </div>
      <div className="hero-image-box">
         {/* Coloque uma imagem aqui depois */}
         <div className="image-placeholder"></div>
      </div>
    </section>
  );
}