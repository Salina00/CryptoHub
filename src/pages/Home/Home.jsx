import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
import { FiSearch, FiArrowUpRight, FiArrowDownRight, FiFilter } from "react-icons/fi";
import { motion } from "framer-motion";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
  const [showFilters, setShowFilters] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") setDisplayCoin(allCoin);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if (input && allCoin) {
      setDisplayCoin(
        allCoin.filter((item) =>
          item.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setDisplayCoin(allCoin);
    }
  };

  const applyFilters = () => {
    let filtered = [...allCoin];
    if (minPrice) filtered = filtered.filter((coin) => coin.current_price >= Number(minPrice));
    if (maxPrice) filtered = filtered.filter((coin) => coin.current_price <= Number(maxPrice));
    setDisplayCoin(filtered);
    setShowFilters(false);
  };

  const loadMoreHandler = () => {
    setVisibleCount(prev => prev + 10);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home-container">
      {/* 
        -------------------------------------------
        COSMIC HERO SECTION
        -------------------------------------------
      */}
      <section className="cosmic-hero">
        {/* Background Gradients & Glows */}
        <div className="hero-glow-center"></div>
        <div className="hero-planet"></div>

        {/* Floating Elements (Orbitals) */}
        <motion.div
          className="orbital-element orb-1 glass-card"
          animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Bitcoin</span>
          <span className="text-gradient-cyan">+5.2%</span>
        </motion.div>

        <motion.div
          className="orbital-element orb-2 glass-card"
          animate={{ y: [0, 20, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <span>Ethereum</span>
          <span className="text-gradient-purple">+3.8%</span>
        </motion.div>

        <motion.div
          className="orbital-element orb-3 glass-card"
          animate={{ y: [0, 25, 0], x: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <span>Solana</span>
          <span className="text-gradient-cyan">+8.5%</span>
        </motion.div>

        <motion.div
          className="orbital-element orb-4 glass-card"
          animate={{ y: [0, -20, 0], x: [0, 15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <span>Cardano</span>
          <span className="text-gradient-purple">+2.1%</span>
        </motion.div>

        <motion.div
          className="orbital-element orb-5 glass-card"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <span>BNB</span>
          <span className="text-gradient-cyan">+1.2%</span>
        </motion.div>

        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sailing The Seas Of <br />
            <span className="text-gradient-cyan">Crypto Universe</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore real-time data across the blockchain galaxy.
          </motion.p>

          <motion.div
            className="search-orbit-container"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <form className="search-bar-cosmic glass-panel" onSubmit={searchHandler}>
              <FiSearch className="search-icon" />
              <input
                value={input}
                onChange={inputHandler}
                list="coinlist"
                placeholder="Search Tokens..."
              />
              <button type="button" className="filter-trigger" onClick={() => setShowFilters(!showFilters)}>
                <FiFilter />
              </button>
            </form>

            {showFilters && (
              <motion.div
                className="cosmic-filters glass-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <input type="number" placeholder="Min Price" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                <input type="number" placeholder="Max Price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                <button className="btn-neon-purple" onClick={applyFilters}>Apply</button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 
        -------------------------------------------
        MARKET DATA SECTION
        -------------------------------------------
      */}
      <section className="market-section">
        <div className="section-header">
          <h2>Market Overview</h2>
          <div className="live-indicator">
            <span className="dot-pulse"></span>
            Live Updates
          </div>
        </div>

        <div className="table-container glass-panel">
          <div className="table-header">
            <div className="col-rank">#</div>
            <div className="col-name">Asset</div>
            <div className="col-price">Price</div>
            <div className="col-change">24h Change</div>
            <div className="col-mcap">Market Cap</div>
          </div>

          <div className="table-body">
            {displayCoin && displayCoin.length > 0 ? (
              displayCoin.slice(0, visibleCount).map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <Link to={`/coin/${item.id}`} className="table-row">
                    <div className="col-rank">{item.market_cap_rank}</div>
                    <div className="col-name">
                      <img src={item.image} alt={item.name} className="coin-icon" />
                      <div className="coin-info">
                        <span className="coin-symbol">{item.symbol.toUpperCase()}</span>
                        <span className="coin-fullname">{item.name}</span>
                      </div>
                    </div>
                    <div className="col-price">
                      {currency.Symbol}{item.current_price.toLocaleString()}
                    </div>
                    <div className={`col-change ${item.price_change_percentage_24h > 0 ? "positive" : "negative"}`}>
                      {item.price_change_percentage_24h > 0 ? <FiArrowUpRight /> : <FiArrowDownRight />}
                      {Math.abs(item.price_change_percentage_24h).toFixed(2)}%
                    </div>
                    <div className="col-mcap">
                      {currency.Symbol}{item.market_cap.toLocaleString()}
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div style={{ 
                padding: '40px', 
                textAlign: 'center', 
                color: '#fff',
                fontSize: '1.1rem' 
              }}>
                {allCoin && allCoin.length === 0 ? 'Loading crypto data...' : 'No coins found. Try adjusting your filters.'}
              </div>
            )}
          </div>
        </div>

        {visibleCount < displayCoin.length && (
          <div className="load-more-wrapper">
            <button className="btn-neon" onClick={() => setVisibleCount(visibleCount + 10)}>
              Discover More
            </button>
          </div>
        )}
      </section>

      <datalist id="coinlist">
        {allCoin?.map((c, i) => (
          <option key={i} value={c.name} />
        ))}
      </datalist>
    </div>
  );
};

export default Home;
