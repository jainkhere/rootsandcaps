# 🦷 Dental Clinic Website — Product Requirements Document (PRD)

## 1. Overview

### Product Name
Dental Clinic Website (CMS-powered static website)

### Summary
A modern, fast, SEO-optimized dental clinic website that showcases services, builds trust, and converts visitors into patients via Call and WhatsApp CTAs. The website will be fully editable by a non-technical dentist using a Git-based CMS.

### Core Idea
- Static frontend for performance + SEO
- GitHub-based content management (no backend/server)
- CMS-driven content updates
- Conversion-focused UI (Call + WhatsApp)

---

## 2. Goals & Objectives

### Primary Goals
- Increase patient inquiries via Call / WhatsApp
- Provide clear visibility of services
- Enable easy content updates without developer dependency
- Ensure strong local SEO presence

### Secondary Goals
- Enable blogging for SEO growth
- Build foundation for analytics, ads, and A/B testing in future
- Keep infrastructure cost near zero

---

## 3. Target Users

### Patients
- Searching for dental services locally
- Want quick trust signals (reviews, doctor info, services)

### Dentist / Clinic Owner
- Non-technical user
- Needs easy content editing via CMS UI

---

## 4. Tech Stack

### Frontend
- Next.js (static export)

### Hosting
- GitHub Pages (free hosting)

### CMS
- Pages CMS (Git-based CMS)

### Content Storage
- GitHub repository (Markdown + JSON files)

### Integrations
- Google Maps (embed)
- WhatsApp click-to-chat
- Google Analytics (future)

---

## 5. Website Structure

### Routes

| Route | Description |
|------|------------|
| `/` | Home page |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog detail page |

---

### Navigation

- Home
- Our Services (scroll to section)
- About Us (scroll to section)
- Contact Us (scroll to section)
- Our Blog (route `/blog`)

---

## 6. Functional Requirements

---

## 6.1 Home Page

### 6.1.1 Hero Section
- Clinic introduction image
- Headline + subheadline
- CTA: Call Now button

---

### 6.1.2 Services Section
- Grid layout (2–3 columns desktop)
- Each service includes:
  - Title
  - Description
  - Image
- CTA: Call Now button

---

### 6.1.3 About Section
- Dentist profile:
  - Name
  - Degree
  - Biography
  - Image
- CTA: Call Now

---

### 6.1.4 Testimonials Section
- Carousel layout
- Each testimonial includes:
  - Customer image
  - Name
  - Review text

---

### 6.1.5 Contact Section (3 Panels)

#### Panel 1: Clinic Info
- Address
- Facebook link
- Instagram link
- Call CTA

#### Panel 2: Clinic Hours + Map
- Weekly opening hours
- Embedded Google Map

#### Panel 3: Contact Form
- First Name
- Last Name
- Phone Number
- Submit button → opens WhatsApp chat with prefilled message

---

### 6.1.6 Reviews Section
- Static testimonials initially
- Future: Google Reviews integration

---

## 6.2 Blog Module

### Features
- Blog listing page
- Blog detail page
- Markdown-based content

### Content Source
- GitHub repository `/content/blog`

---

## 7. Content Management System

### CMS Tool
Pages CMS (Git-based CMS)

### Responsibilities
- Manage all site content without code changes:
  - Services
  - Testimonials
  - Doctor profile
  - Clinic details
  - Blog posts

---

### Content Storage Structure
/content
  home.json
  doctor.json
  clinic.json
  /services
  /testimonials
  /blog


---

### Content Editing Flow

1. Dentist logs into Pages CMS
2. Edits content via UI
3. CMS commits changes to GitHub
4. GitHub Pages rebuilds site automatically

---

## 8. Integrations

---

### 8.1 WhatsApp Integration
- Click-to-chat using wa.me link
- Pre-filled message from contact form or CTA

---

### 8.2 Google Maps
- Embedded iframe (no API required in V1)

---

### 8.3 Reviews
- Phase 1: Static testimonials
- Phase 2: Google Places API integration

---

## 9. Design Requirements

### Visual Style
- Clean, medical, trust-focused design

### Color Palette
- Primary: Blue (trust, healthcare)
- Secondary: Green (calm, wellness)
- Background: White

### Typography
- Modern sans-serif font (e.g., Inter / Poppins)

### UI Principles
- Mobile-first design
- Large CTAs
- Simple navigation
- High readability

---

## 10. SEO Requirements

- Meta titles & descriptions for all pages
- Open Graph tags
- Sitemap.xml
- Robots.txt
- Structured data (LocalBusiness schema)

---

## 11. Performance Requirements

- Fully static site
- Lazy loading images
- Optimized assets
- Fast load (<2s target)

---

## 12. Analytics Requirements (Future Ready)

### Tools
- Google Analytics
- Google Tag Manager

### Events to Track
- Call button clicks
- WhatsApp clicks
- Form submissions
- Scroll depth

---

## 13. Security Requirements

- No API keys exposed in frontend
- CMS access restricted to authorized users only
- Input validation for contact form
- Static site reduces attack surface

---

## 14. Deployment Requirements

- Build static site using Next.js export
- Deploy to GitHub Pages
- Custom domain support (optional)
- HTTPS enabled

---

## 15. Future Enhancements

- Online appointment booking system
- Google Reviews API integration
- Multi-language support
- Paid ads integration (Google/Meta)
- A/B testing system
- Patient CRM integration

---

## 16. Constraints

- No backend server
- No database
- CMS tied to Git-based workflow
- Limited real-time interactivity

---

## 17. Success Metrics

- High CTA conversion rate (Call / WhatsApp)
- Fast page load times
- SEO ranking improvement locally
- Dentist can update content without developer help
- Increased blog traffic over time

---

## 18. Open Questions

- Do we need appointment booking in V1?
- Should testimonials be CMS-only or include Google Reviews?
- Do we want multilingual support (English + Hindi etc.)?
- Should blog be manually curated or SEO-automated?

---
