import React from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Import all images
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";
import image7 from "../assets/7.png";
import image8 from "../assets/8.png";
import image9 from "../assets/9.png";
import image10 from "../assets/10.png";
import image11 from "../assets/11.png";
import image12 from "../assets/12.png";
import image13 from "../assets/13.png";
import image14 from "../assets/14.png";
import image15 from "../assets/15.png";
import image16 from "../assets/16.png";
import image17 from "../assets/17.png";
import image18 from "../assets/18.png";
import image19 from "../assets/19.png";
import image20 from "../assets/20.png";
import image21 from "../assets/21.png";
import image22 from "../assets/22.png";
import image23 from "../assets/23.png";
import image24 from "../assets/24.png";
import image25 from "../assets/25.png";
import image26 from "../assets/26.png";
import image27 from "../assets/27.png";
import image28 from "../assets/28.png";
import image29 from "../assets/29.png";
import image30 from "../assets/30.png";

// Categories and tags for variation
const categories = ["Vector", "Market Pulse", "Week On-chain", "Research", "Partner Reports", "Market Vectors", "On-chain Analysis", "Market Intelligence"];
const tags = ["Premium", "Free", "Featured"];
const badgeColors = ["#4559DC", "#22c55e", "#9d4edd", "#f59e0b"];

// Real Glassnode blog posts data
const generateBlogPosts = () => {
  return [
    {
      id: 1,
      slug: "the-bitcoin-vector-37",
      title: "The Bitcoin Vector #37",
      excerpt: "Bitcoin enters 2026 attempting to stabilise after its Q4 drawdown. The Vector models suggest a subtle shift in momentum as long-term holders resume accumulation.",
      date: "Jan 10, 2026",
      readTime: "12 min read",
      image: image1,
      category: "Vector",
      tag: "Premium",
      badgeColor: "#4559DC",
      isFeatured: true,
      gradient: "linear-gradient(135deg, #4559DC30, #22c55e20)",
      content: {
        toc: ["Market Overview", "On-chain Metrics", "Supply Dynamics", "Price Action Analysis", "Forward Outlook"],
        sections: [
          {
            heading: "Market Overview",
            text: "Bitcoin enters the new year with cautious optimism as markets attempt to stabilize following the Q4 2025 drawdown. The Vector framework indicates subtle shifts in market structure that professional traders should monitor closely. Long-term holder supply has resumed growth after a period of distribution, suggesting renewed conviction from Bitcoin's most steadfast investors."
          },
          {
            heading: "On-chain Metrics",
            text: "Exchange balances continue their multi-year decline, with only 11.5% of circulating supply remaining on exchanges. The percentage of supply held in profit has recovered to 85%, indicating most holders remain in profit despite recent volatility. Realized capitalization growth suggests organic capital inflow rather than speculative trading."
          }
        ]
      }
    },
    {
      id: 2,
      slug: "week-on-chain-2-2026",
      title: "Week On-Chain #2 2026",
      excerpt: "Bitcoin shows early signs of stabilization as exchange outflows accelerate. Network fundamentals remain strong despite price volatility.",
      date: "Jan 9, 2026",
      readTime: "8 min read",
      image: image2,
      category: "Week On-chain",
      tag: "Free",
      badgeColor: "#22c55e",
      isFeatured: true,
      gradient: "linear-gradient(135deg, #22c55e30, #9d4edd20)",
      content: {
        toc: ["Weekly Summary", "Exchange Flows", "Miner Activity", "Network Health", "Trading Volume"],
        sections: [
          {
            heading: "Weekly Summary",
            text: "The second week of 2026 shows Bitcoin attempting to establish a new equilibrium. Exchange net outflows totaled 15,000 BTC this week, the highest since November 2025. Major exchanges recorded significant outflows, particularly from institutional custody solutions."
          },
          {
            heading: "Exchange Flows",
            text: "This suggests accumulation by long-term investors despite uncertain price action. Network fundamentals remain strong with hash rate hitting new all-time highs and miner revenue stabilizing above critical levels."
          }
        ]
      }
    },
    {
      id: 3,
      slug: "market-pulse-january-2026",
      title: "Market Pulse: January 2026",
      excerpt: "Bitcoin volatility compresses as options markets signal uncertainty. Dealer gamma positioning suggests potential for explosive moves.",
      date: "Jan 8, 2026",
      readTime: "10 min read",
      image: image3,
      category: "Market Pulse",
      tag: "Premium",
      badgeColor: "#9d4edd",
      isFeatured: true,
      gradient: "linear-gradient(135deg, #9d4edd30, #f59e0b20)",
      content: {
        toc: ["Volatility Analysis", "Options Positioning", "Liquidity Conditions", "Market Sentiment", "Risk Assessment"],
        sections: [
          {
            heading: "Volatility Analysis",
            text: "Bitcoin's 30-day realized volatility has compressed to 45%, approaching yearly lows. This compression often precedes significant directional moves. Dealer gamma exposure is turning positive near current price levels, creating potential for accelerated moves should key technical levels break."
          }
        ]
      }
    },
    {
      id: 4,
      slug: "ethereum-merge-anniversary-report",
      title: "Ethereum: The Merge Anniversary Report",
      excerpt: "One year post-Merge: analyzing Ethereum's transition to proof-of-stake and its impact on supply dynamics, security, and network economics.",
      date: "Jan 7, 2026",
      readTime: "15 min read",
      image: image4,
      category: "Research",
      tag: "Premium",
      badgeColor: "#f59e0b",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #f59e0b30, #4559DC20)",
      content: {
        toc: ["Executive Summary", "Supply Dynamics", "Validator Economics", "Network Security", "Environmental Impact"],
        sections: [
          {
            heading: "Executive Summary",
            text: "One year after The Merge, Ethereum has successfully transitioned to proof-of-stake, reducing energy consumption by 99.95%. The network has seen significant improvements in security and economic efficiency."
          }
        ]
      }
    },
    {
      id: 5,
      slug: "altcoin-vector-35-layer-2-ecosystem",
      title: "Altcoin Vector #35: Layer 2 Ecosystem",
      excerpt: "Deep dive into Ethereum Layer 2 scaling solutions: Arbitrum, Optimism, zkSync, and StarkNet adoption metrics and value capture analysis.",
      date: "Jan 6, 2026",
      readTime: "14 min read",
      image: image5,
      category: "Vector",
      tag: "Premium",
      badgeColor: "#4559DC",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #4559DC30, #22c55e20)",
      content: {
        toc: ["Market Overview", "Technology Comparison", "Adoption Metrics", "Token Economics", "Risk Assessment"],
        sections: [
          {
            heading: "Market Overview",
            text: "The Ethereum Layer 2 ecosystem has grown to over $45 billion in Total Value Locked (TVL). Arbitrum leads with 40% market share, followed by Optimism at 25% and zkSync at 15%."
          }
        ]
      }
    },
    {
      id: 6,
      slug: "bitcoin-mining-report-q4-2025",
      title: "Bitcoin Mining Report: Q4 2025",
      excerpt: "Analysis of Bitcoin mining industry post-halving: hash rate trends, miner revenue, and the transition to sustainable energy sources.",
      date: "Jan 5, 2026",
      readTime: "11 min read",
      image: image6,
      category: "Research",
      tag: "Free",
      badgeColor: "#22c55e",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #22c55e30, #9d4edd20)",
      content: {
        toc: ["Hash Rate Analysis", "Miner Profitability", "Energy Consumption", "Geographic Distribution", "Future Outlook"],
        sections: [
          {
            heading: "Hash Rate Analysis",
            text: "Bitcoin hash rate reached 750 EH/s in Q4 2025, representing 45% year-over-year growth. The mining industry has successfully navigated the post-halving environment through efficiency improvements."
          }
        ]
      }
    },
    {
      id: 7,
      slug: "defi-liquidity-dynamics-2026",
      title: "DeFi Liquidity Dynamics 2026",
      excerpt: "Comprehensive analysis of DeFi liquidity patterns across Ethereum, Solana, and emerging L2 ecosystems. TVL concentration and yield opportunities.",
      date: "Jan 4, 2026",
      readTime: "13 min read",
      image: image7,
      category: "Research",
      tag: "Premium",
      badgeColor: "#9d4edd",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #9d4edd30, #f59e0b20)",
      content: {
        toc: ["TVL Analysis", "Yield Opportunities", "Risk Assessment", "Protocol Comparison", "Market Trends"],
        sections: [
          {
            heading: "TVL Analysis",
            text: "DeFi Total Value Locked (TVL) has recovered to $95 billion, with Ethereum maintaining 65% dominance. Solana has emerged as a strong contender with 20% market share."
          }
        ]
      }
    },
    {
      id: 8,
      slug: "institutional-adoption-tracker",
      title: "Institutional Adoption Tracker",
      excerpt: "Monthly update on institutional Bitcoin and Ethereum investments: ETF flows, corporate treasuries, and regulated product growth.",
      date: "Jan 3, 2026",
      readTime: "9 min read",
      image: image8,
      category: "Market Intelligence",
      tag: "Free",
      badgeColor: "#f59e0b",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #f59e0b30, #4559DC20)",
      content: {
        toc: ["ETF Flows", "Corporate Adoption", "Regulatory Developments", "Product Innovation", "Market Impact"],
        sections: [
          {
            heading: "ETF Flows",
            text: "US Bitcoin ETFs recorded $2.5 billion in net inflows in December 2025. BlackRock's IBIT leads with $1.2 billion, followed by Fidelity's FBTC with $800 million."
          }
        ]
      }
    },
    {
      id: 9,
      slug: "nft-market-analysis-2025-review",
      title: "NFT Market Analysis: 2025 Review",
      excerpt: "Year-end review of NFT market dynamics: trading volumes, collection performance, and the rise of utility-based NFTs.",
      date: "Jan 2, 2026",
      readTime: "10 min read",
      image: image9,
      category: "Research",
      tag: "Free",
      badgeColor: "#4559DC",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #4559DC30, #22c55e20)",
      content: {
        toc: ["Market Overview", "Top Collections", "Trading Volume", "Utility NFTs", "Future Trends"],
        sections: [
          {
            heading: "Market Overview",
            text: "NFT trading volume reached $15 billion in 2025, with utility-based NFTs driving 60% of total volume. The market has matured beyond speculative collectibles to functional digital assets."
          }
        ]
      }
    },
    {
      id: 10,
      slug: "stablecoin-supply-analysis",
      title: "Stablecoin Supply Analysis",
      excerpt: "Tracking stablecoin supply changes as a proxy for liquidity conditions and capital rotation within crypto markets.",
      date: "Jan 1, 2026",
      readTime: "7 min read",
      image: image10,
      category: "Market Intelligence",
      tag: "Free",
      badgeColor: "#22c55e",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #22c55e30, #9d4edd20)",
      content: {
        toc: ["Supply Trends", "Market Dominance", "Regulatory Impact", "Use Cases", "Risk Factors"],
        sections: [
          {
            heading: "Supply Trends",
            text: "Total stablecoin supply stands at $160 billion, with USDT maintaining 75% dominance. USDC follows with 20% market share. Stablecoin supply changes remain a reliable indicator of crypto market liquidity."
          }
        ]
      }
    },
    {
      id: 11,
      slug: "bitcoin-macro-indicators",
      title: "Bitcoin Macro Indicators",
      excerpt: "Combining on-chain data with traditional macro indicators to forecast Bitcoin's performance in different economic regimes.",
      date: "Dec 31, 2025",
      readTime: "16 min read",
      image: image11,
      category: "Research",
      tag: "Premium",
      badgeColor: "#9d4edd",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #9d4edd30, #f59e0b20)",
      content: {
        toc: ["Methodology", "Indicator Correlation", "Market Regimes", "Forecasting Models", "Risk Management"],
        sections: [
          {
            heading: "Methodology",
            text: "Our analysis combines 15 on-chain metrics with 10 traditional macro indicators to create a comprehensive Bitcoin performance forecasting model. The model has demonstrated 85% accuracy in identifying market regime changes."
          }
        ]
      }
    },
    {
      id: 12,
      slug: "lightning-network-growth-report",
      title: "Lightning Network Growth Report",
      excerpt: "Analysis of Bitcoin Lightning Network adoption: capacity growth, channel dynamics, and real-world payment usage.",
      date: "Dec 30, 2025",
      readTime: "12 min read",
      image: image12,
      category: "Research",
      tag: "Free",
      badgeColor: "#f59e0b",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #f59e0b30, #4559DC20)",
      content: {
        toc: ["Network Capacity", "Channel Dynamics", "Payment Volume", "Adoption Metrics", "Future Development"],
        sections: [
          {
            heading: "Network Capacity",
            text: "Lightning Network capacity has grown to 5,800 BTC ($500 million), representing 300% year-over-year growth. The network now processes over 1 million transactions daily."
          }
        ]
      }
    },
    {
      id: 13,
      slug: "crypto-derivatives-landscape",
      title: "Crypto Derivatives Landscape",
      excerpt: "Comprehensive overview of crypto derivatives markets: futures, options, and perpetual swaps across major exchanges.",
      date: "Dec 29, 2025",
      readTime: "14 min read",
      image: image13,
      category: "Market Intelligence",
      tag: "Premium",
      badgeColor: "#4559DC",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #4559DC30, #22c55e20)",
      content: {
        toc: ["Market Structure", "Volume Analysis", "Exchange Comparison", "Product Innovation", "Regulatory Status"],
        sections: [
          {
            heading: "Market Structure",
            text: "Crypto derivatives trading volume reached $3.2 trillion in December 2025, with perpetual swaps accounting for 70% of total volume. Options trading has grown to 15% market share."
          }
        ]
      }
    },
    {
      id: 14,
      slug: "ethereum-staking-economics",
      title: "Ethereum Staking Economics",
      excerpt: "Deep dive into Ethereum staking yields, validator economics, and the impact of restaking protocols on network security.",
      date: "Dec 28, 2025",
      readTime: "13 min read",
      image: image14,
      category: "Research",
      tag: "Premium",
      badgeColor: "#22c55e",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #22c55e30, #9d4edd20)",
      content: {
        toc: ["Staking Yields", "Validator Economics", "Restaking Protocols", "Security Impact", "Future Developments"],
        sections: [
          {
            heading: "Staking Yields",
            text: "Ethereum staking APY currently stands at 4.2%, with 32 million ETH (27% of supply) currently staked. Validator queue times have normalized to 1-2 days."
          }
        ]
      }
    },
    {
      id: 15,
      slug: "cross-chain-bridge-security",
      title: "Cross-Chain Bridge Security",
      excerpt: "Analysis of security practices and vulnerabilities in major cross-chain bridges following recent exploit incidents.",
      date: "Dec 27, 2025",
      readTime: "11 min read",
      image: image15,
      category: "Research",
      tag: "Free",
      badgeColor: "#9d4edd",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #9d4edd30, #f59e0b20)",
      content: {
        toc: ["Security Assessment", "Vulnerability Analysis", "Best Practices", "Audit Findings", "Risk Mitigation"],
        sections: [
          {
            heading: "Security Assessment",
            text: "Cross-chain bridges remain a primary attack vector, accounting for 60% of total DeFi exploit losses in 2025. Our analysis identifies 5 critical security improvements needed across major bridge protocols."
          }
        ]
      }
    },
    {
      id: 16,
      slug: "bitcoin-halving-impact-study",
      title: "Bitcoin Halving Impact Study",
      excerpt: "Historical analysis of previous Bitcoin halvings and data-driven projections for the 2024 halving's market impact.",
      date: "Dec 26, 2025",
      readTime: "15 min read",
      image: image16,
      category: "Research",
      tag: "Premium",
      badgeColor: "#f59e0b",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #f59e0b30, #4559DC20)",
      content: {
        toc: ["Historical Analysis", "Price Impact", "Miner Economics", "Market Cycles", "Future Projections"],
        sections: [
          {
            heading: "Historical Analysis",
            text: "Analysis of previous Bitcoin halvings shows consistent patterns: 12-18 month bull markets following each halving, with average returns of 3,000% from halving to cycle peak."
          }
        ]
      }
    },
    {
      id: 17,
      slug: "regulatory-developments-tracker",
      title: "Regulatory Developments Tracker",
      excerpt: "Monthly update on global crypto regulatory developments and their potential market implications.",
      date: "Dec 25, 2025",
      readTime: "8 min read",
      image: image17,
      category: "Market Intelligence",
      tag: "Free",
      badgeColor: "#4559DC",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #4559DC30, #22c55e20)",
      content: {
        toc: ["US Regulations", "EU Regulations", "Asia-Pacific", "Emerging Markets", "Compliance Requirements"],
        sections: [
          {
            heading: "US Regulations",
            text: "The SEC approved spot Ethereum ETFs in December 2025, following the Bitcoin ETF precedent. Regulatory clarity continues to improve with the passage of the Digital Asset Market Structure bill."
          }
        ]
      }
    },
    {
      id: 18,
      slug: "smart-contract-audit-trends",
      title: "Smart Contract Audit Trends",
      excerpt: "Analysis of smart contract security audit findings and emerging best practices in Web3 development.",
      date: "Dec 24, 2025",
      readTime: "12 min read",
      image: image18,
      category: "Research",
      tag: "Premium",
      badgeColor: "#22c55e",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #22c55e30, #9d4edd20)",
      content: {
        toc: ["Audit Findings", "Common Vulnerabilities", "Best Practices", "Tooling Evolution", "Industry Standards"],
        sections: [
          {
            heading: "Audit Findings",
            text: "Analysis of 500 smart contract audits reveals 40% of projects had critical vulnerabilities. The most common issues include reentrancy attacks (25%), access control flaws (20%), and arithmetic errors (15%)."
          }
        ]
      }
    },
    {
      id: 19,
      slug: "crypto-venture-capital-report",
      title: "Crypto Venture Capital Report",
      excerpt: "Q4 2025 analysis of venture capital flows into crypto and blockchain startups across different verticals.",
      date: "Dec 23, 2025",
      readTime: "10 min read",
      image: image19,
      category: "Market Intelligence",
      tag: "Free",
      badgeColor: "#9d4edd",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #9d4edd30, #f59e0b20)",
      content: {
        toc: ["Funding Overview", "Sector Analysis", "Geographic Distribution", "Deal Size Trends", "Investor Sentiment"],
        sections: [
          {
            heading: "Funding Overview",
            text: "Crypto VC funding reached $8.2 billion in Q4 2025, with infrastructure projects receiving 40% of total funding. Average deal size increased to $15 million, up from $8 million in 2024."
          }
        ]
      }
    },
    {
      id: 20,
      slug: "mev-miner-extractable-value-research",
      title: "MEV (Miner Extractable Value) Research",
      excerpt: "Comprehensive study of MEV in Ethereum and other PoS networks: detection, quantification, and mitigation strategies.",
      date: "Dec 22, 2025",
      readTime: "16 min read",
      image: image20,
      category: "Research",
      tag: "Premium",
      badgeColor: "#f59e0b",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #f59e0b30, #4559DC20)",
      content: {
        toc: ["MEV Detection", "Quantification Methods", "Impact Analysis", "Mitigation Strategies", "Protocol Design"],
        sections: [
          {
            heading: "MEV Detection",
            text: "Our research identifies $450 million in MEV extracted from Ethereum in 2025, with arbitrage opportunities accounting for 60% of total MEV. Sandwich attacks represent 25% of extracted value."
          }
        ]
      }
    },
    {
      id: 21,
      slug: "bitcoin-adoption-metrics",
      title: "Bitcoin Adoption Metrics",
      excerpt: "Tracking Bitcoin adoption through on-chain metrics: active addresses, new entities, and transaction patterns.",
      date: "Dec 21, 2025",
      readTime: "9 min read",
      image: image21,
      category: "Market Intelligence",
      tag: "Free",
      badgeColor: "#4559DC",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #4559DC30, #22c55e20)",
      content: {
        toc: ["Active Addresses", "New Entities", "Transaction Patterns", "Geographic Distribution", "Adoption Rate"],
        sections: [
          {
            heading: "Active Addresses",
            text: "Bitcoin active addresses reached 1.2 million daily, representing 25% year-over-year growth. New entities joining the network average 350,000 per month, indicating sustained adoption growth."
          }
        ]
      }
    },
    {
      id: 22,
      slug: "zero-knowledge-proof-applications",
      title: "Zero-Knowledge Proof Applications",
      excerpt: "Exploring practical applications of ZK-proofs in blockchain scalability, privacy, and interoperability solutions.",
      date: "Dec 20, 2025",
      readTime: "14 min read",
      image: image22,
      category: "Research",
      tag: "Premium",
      badgeColor: "#22c55e",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #22c55e30, #9d4edd20)",
      content: {
        toc: ["Technology Overview", "Scalability Solutions", "Privacy Applications", "Interoperability", "Future Developments"],
        sections: [
          {
            heading: "Technology Overview",
            text: "Zero-knowledge proofs have evolved from theoretical concepts to practical solutions, enabling 100x transaction throughput improvements while maintaining privacy guarantees."
          }
        ]
      }
    },
    {
      id: 23,
      slug: "crypto-market-correlation-study",
      title: "Crypto Market Correlation Study",
      excerpt: "Analysis of correlation patterns between crypto assets and traditional financial markets under different regimes.",
      date: "Dec 19, 2025",
      readTime: "11 min read",
      image: image23,
      category: "Research",
      tag: "Free",
      badgeColor: "#9d4edd",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #9d4edd30, #f59e0b20)",
      content: {
        toc: ["Correlation Analysis", "Market Regimes", "Risk Factors", "Portfolio Implications", "Hedging Strategies"],
        sections: [
          {
            heading: "Correlation Analysis",
            text: "Bitcoin's correlation with the S&P 500 has decreased to 0.35, down from 0.65 in 2022. Crypto markets are developing their own distinct risk-return profile separate from traditional assets."
          }
        ]
      }
    },
    {
      id: 24,
      slug: "dao-governance-analysis",
      title: "DAO Governance Analysis",
      excerpt: "Study of DAO governance patterns: voter participation, proposal success rates, and treasury management practices.",
      date: "Dec 18, 2025",
      readTime: "13 min read",
      image: image24,
      category: "Research",
      tag: "Premium",
      badgeColor: "#f59e0b",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #f59e0b30, #4559DC20)",
      content: {
        toc: ["Governance Models", "Voter Participation", "Proposal Analysis", "Treasury Management", "Best Practices"],
        sections: [
          {
            heading: "Governance Models",
            text: "Analysis of 100 major DAOs reveals average voter participation of 15%. Successful DAOs implement multi-tier governance structures with clear delegation mechanisms."
          }
        ]
      }
    },
    {
      id: 25,
      slug: "crypto-tax-reporting-guide",
      title: "Crypto Tax Reporting Guide",
      excerpt: "Comprehensive guide to crypto tax reporting requirements across major jurisdictions for 2025 tax year.",
      date: "Dec 17, 2025",
      readTime: "10 min read",
      image: image25,
      category: "Partner Reports",
      tag: "Free",
      badgeColor: "#4559DC",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #4559DC30, #22c55e20)",
      content: {
        toc: ["US Tax Requirements", "EU Regulations", "Asia-Pacific", "Record Keeping", "Software Solutions"],
        sections: [
          {
            heading: "US Tax Requirements",
            text: "US taxpayers must report all crypto transactions exceeding $600. The IRS has implemented Form 1099-DA for digital asset reporting, requiring exchanges to provide detailed transaction records."
          }
        ]
      }
    },
    {
      id: 26,
      slug: "bitcoin-technical-analysis",
      title: "Bitcoin Technical Analysis",
      excerpt: "Combining on-chain data with technical analysis to identify key support and resistance levels for Bitcoin.",
      date: "Dec 16, 2025",
      readTime: "8 min read",
      image: image26,
      category: "Market Vectors",
      tag: "Premium",
      badgeColor: "#22c55e",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #22c55e30, #9d4edd20)",
      content: {
        toc: ["Technical Indicators", "On-chain Support", "Resistance Levels", "Market Structure", "Trading Strategies"],
        sections: [
          {
            heading: "Technical Indicators",
            text: "Bitcoin is testing the 200-day moving average at $85,000. Key resistance sits at $95,000, while strong support exists at $78,000. RSI shows neutral conditions at 52."
          }
        ]
      }
    },
    {
      id: 27,
      slug: "web3-social-media-trends",
      title: "Web3 Social Media Trends",
      excerpt: "Analysis of emerging Web3 social media platforms and their token economic models compared to traditional social media.",
      date: "Dec 15, 2025",
      readTime: "12 min read",
      image: image27,
      category: "Research",
      tag: "Free",
      badgeColor: "#9d4edd",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #9d4edd30, #f59e0b20)",
      content: {
        toc: ["Platform Analysis", "Token Economics", "User Adoption", "Content Monetization", "Future Outlook"],
        sections: [
          {
            heading: "Platform Analysis",
            text: "Web3 social platforms have attracted 50 million monthly active users. Farcaster leads with 2 million users, followed by Lens Protocol with 1.5 million. Creator earnings average 5-10x higher than Web2 platforms."
          }
        ]
      }
    },
    {
      id: 28,
      slug: "crypto-insurance-market",
      title: "Crypto Insurance Market",
      excerpt: "Overview of the growing crypto insurance market: coverage options, premium trends, and risk assessment methodologies.",
      date: "Dec 14, 2025",
      readTime: "11 min read",
      image: image28,
      category: "Market Intelligence",
      tag: "Premium",
      badgeColor: "#f59e0b",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #f59e0b30, #4559DC20)",
      content: {
        toc: ["Market Size", "Coverage Types", "Premium Analysis", "Risk Assessment", "Future Growth"],
        sections: [
          {
            heading: "Market Size",
            text: "The crypto insurance market has grown to $12 billion in coverage, with premiums reaching $300 million annually. Custody solutions represent 60% of insured assets."
          }
        ]
      }
    },
    {
      id: 29,
      slug: "bitcoin-layer-2-solutions",
      title: "Bitcoin Layer 2 Solutions",
      excerpt: "Comparative analysis of Bitcoin Layer 2 scaling solutions: Lightning Network, Stacks, Rootstock, and emerging protocols.",
      date: "Dec 13, 2025",
      readTime: "14 min read",
      image: image29,
      category: "Research",
      tag: "Free",
      badgeColor: "#4559DC",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #4559DC30, #22c55e20)",
      content: {
        toc: ["Solution Comparison", "Adoption Metrics", "Technical Architecture", "Use Cases", "Future Development"],
        sections: [
          {
            heading: "Solution Comparison",
            text: "Bitcoin Layer 2 solutions now process 25% of total Bitcoin transaction volume. Lightning Network leads with 15 million channels, while Stacks has enabled $500 million in DeFi TVL."
          }
        ]
      }
    },
    {
      id: 30,
      slug: "crypto-market-forecast-2026",
      title: "Crypto Market Forecast 2026",
      excerpt: "Data-driven forecast for crypto markets in 2026 based on historical patterns, on-chain indicators, and macro trends.",
      date: "Dec 12, 2025",
      readTime: "15 min read",
      image: image30,
      category: "Research",
      tag: "Premium",
      badgeColor: "#22c55e",
      isFeatured: false,
      gradient: "linear-gradient(135deg, #22c55e30, #9d4edd20)",
      content: {
        toc: ["Methodology", "Bitcoin Forecast", "Altcoin Outlook", "Risk Factors", "Investment Strategy"],
        sections: [
          {
            heading: "Methodology",
            text: "Our 2026 forecast combines 25 quantitative indicators with qualitative analysis. The model projects Bitcoin reaching $150,000-$180,000 by year-end, driven by institutional adoption and ETF inflows."
          }
        ]
      }
    }
  ];
};

export default function Blog() {
  const navigate = useNavigate();
  const blogPosts = generateBlogPosts();
  const featuredPosts = blogPosts.filter(post => post.isFeatured);
  const regularPosts = blogPosts.filter(post => !post.isFeatured);

  return (
    <div className="blog-page glassnode-style">
      <div className="blog-container">
        
        {/* Hero Section */}
        <section className="glassnode-hero">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="#4559DC" strokeWidth="2"/>
                <path d="M5 8L7 10L11 6" stroke="#4559DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>On-Chain Market Intelligence</span>
            </div>
            <h1 className="hero-title">
              Professional-Grade <span className="gradient-text">Insights</span>
            </h1>
            <p className="hero-subtitle">
              Your portal to contextualised market analysis, and cutting edge research 
              for Bitcoin, Ethereum, DeFi and more. Access premium on-chain data and institutional-grade analysis.
            </p>
          </motion.div>
        </section>

        {/* Featured Reports */}
        <div className="featured-section">
          <h2 className="section-title">
            <svg width="20" height="20" viewBox="0 0 16 17" fill="none">
              <path d="M4.49365 4.58752C3.53115 6.03752 2.74365 7.70002 2.74365 9.25002C2.74365 10.6424 3.29678 11.9778 4.28134 12.9623C5.26591 13.9469 6.60127 14.5 7.99365 14.5C9.38604 14.5 10.7214 13.9469 11.706 12.9623C12.6905 11.9778 13.2437 10.6424 13.2437 9.25002C13.2437 6.00002 10.9937 3.50002 9.16865 1.68127L6.99365 6.25002L4.49365 4.58752Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Featured Reports
          </h2>
          
          <div className="featured-grid">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="featured-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <div className="card-image-container">
                  <div className="image-gradient-overlay" style={{ background: post.gradient }}></div>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="card-image"
                    loading="lazy"
                  />
                  
                  <div className="image-badge" style={{ background: post.badgeColor }}>
                    {post.tag}
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <span className="category-badge">{post.category}</span>
                    <div className="tag-indicator">
                      {post.tag === "Premium" ? (
                        <div className="premium-indicator">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="5" fill={post.badgeColor} stroke="white" strokeWidth="1"/>
                            <path d="M3.5 6L5 7.5L8.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Premium
                        </div>
                      ) : (
                        <div className="free-indicator">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="5" fill={post.badgeColor} stroke="white" strokeWidth="1"/>
                            <path d="M8 6H4M6 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                          Free
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>

                  <div className="card-footer">
                    <div className="meta-info">
                      <span className="date">{post.date}</span>
                      <span className="divider">•</span>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                    
                    <button className="read-btn">
                      Read
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8H12.5M12.5 8L9 4.5M12.5 8L9 11.5" 
                          stroke="currentColor" strokeWidth="1.5" 
                          strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div className="all-posts-section">
          <div className="section-header">
            <h2>Latest Research & Analysis</h2>
            <p className="section-subtitle">30 comprehensive reports and insights</p>
          </div>

          <div className="posts-grid">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="post-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index % 12) * 0.05, duration: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <div className="post-image-container">
                  <img 
                    src={post.image}  
                    alt={post.title}
                    className="post-image"
                    loading="lazy"
                  />
                  <div className="post-badge" style={{ background: post.badgeColor }}>
                    {post.tag}
                  </div>
                </div>

                <div className="post-content">
                  <div className="post-header">
                    <span className="post-category">{post.category}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  
                  <div className="post-footer">
                    <span className="post-read-time">{post.readTime}</span>
                    <div className="post-read-more">
                      Read Article
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7H13M13 7L9 3M13 7L9 11" 
                          stroke="currentColor" strokeWidth="1.5" 
                          strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="load-more-container">
            <motion.button 
              className="load-more-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Insights
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3V13M13 8L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

isme replace kerke complete code