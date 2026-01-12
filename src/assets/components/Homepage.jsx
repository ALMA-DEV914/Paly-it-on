import  { motion } from "framer-motion";


export const Home = () => {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Feel the Music
        </motion.h1>

        <p>Stream and enjoy your favorite songs anytime.</p>

        <button className="cta">Start Listening</button>
      </section>

      {/* Featured Images */}
      <section className="featured">
        <motion.img src="/photos/notes.jpg" whileHover={{ scale: 1.05 }} />
        <motion.img src="/photos/notes1.jpg" whileHover={{ scale: 1.05 }} />
        <motion.img src="/photos/notes2.jpg" whileHover={{ scale: 1.05 }} />
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">🎧 Instant Play</div>
        <div className="feature-card">❤️ Favorites</div>
        <div className="feature-card">📂 Organized</div>
      </section>
    </div>
  );
}
