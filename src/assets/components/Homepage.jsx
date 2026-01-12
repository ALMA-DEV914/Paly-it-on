import  { motion } from "framer-motion";

import notes from "../photos/notes.jpg";
import notes1 from "../photos/notes1.jpg";
import notes2 from "../photos/notes2.jpg";

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
        <motion.img src={notes} whileHover={{ scale: 1.05 }} />
        <motion.img src={notes1} whileHover={{ scale: 1.05 }} />
        <motion.img src={notes2} whileHover={{ scale: 1.05 }} />
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
