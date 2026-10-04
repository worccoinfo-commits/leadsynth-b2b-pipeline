# LeadSynth — High-Throughput B2B Prospecting & Data Enrichment Engine

[![Playwright](https://img.shields.io/badge/Playwright-Headless%20Workers-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![CRM Ready](https://img.shields.io/badge/CRM-HubSpot%20%7C%20Salesforce%20JSON-FF7A59?style=for-the-badge)](https://github.com/worccoinfo-commits/leadsynth-b2b-pipeline)

An automated B2B prospect discovery and enrichment engine designed to harvest, deduplicate, and score high-intent company contacts for outbound growth pipelines.

Designed and product-managed by **Rishav Bhardwaj**.

---

## 🎯 The Growth Problem & Solution

| Problem | Traditional Flaw | LeadSynth Automated Solution |
| :--- | :--- | :--- |
| **Manual Prospecting** | Sales reps spend 30% of their day manually finding emails | **Automated Extraction**: Headless Playwright workers crawl target company domains concurrently |
| **Dirty CRM Data** | Typos, personal Gmail addresses, and duplicate entries | **Normalization Pipeline**: Corporate domain verification + automatic fit scoring (0–100) |
| **Vendor Lock-In** | Lead databases (Apollo, ZoomInfo) charge $5,000+/year | **Proprietary Scraper**: Self-hosted microservice with adaptive rate-limiting and custom tech detection |

---

## 🏗 System Architecture

```
[ Target Domain Ingestion Queue ]
                 │
                 ▼
     [ B2BExtractorWorker ]
      ├── Headless Chromium Instances
      ├── Corporate Email Pattern Extraction
      └── Technology Footprint Detection (Next.js, Shopify, WP)
                 │
                 ▼
 [ LeadNormalizationService ]
      ├── Domain Deduplication
      ├── Corporate vs. Personal Email Filtering
      └── Lead Quality Fit Scoring (0 – 100)
                 │
                 ▼
     [ CRM-Ready JSON / Supabase ]
```

---

## 👨‍💻 Product & Systems Architect
**Rishav Bhardwaj**  
*Technical Product Manager (TPM) | AI Solutions Lead | Founder*  
- Portfolio: [webbree.com](https://www.webbree.com)  
- GitHub: [@worccoinfo-commits](https://github.com/worccoinfo-commits)
