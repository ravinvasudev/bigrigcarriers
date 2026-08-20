# Big Rig Carriers — Project Instructions

## 1. Project Overview

Build a complete corporate website redesign for **Big Rig Carriers**, a trucking and logistics company based in Bolton, Ontario, Canada.

The existing website is:

[https://bigrigcarriers.com/](https://bigrigcarriers.com/)

The current website is very minimal. The goal is to transform it into a polished, modern, professional corporate website that communicates credibility and makes it easy for prospective customers to request transportation services.

The primary business objective is:

> Generate qualified freight and transportation quote requests.

The website should make Big Rig Carriers look like a credible, established transportation company while remaining truthful to the information actually provided by the business.

---

# 2. Existing Business Information

The following information has been identified from the current website and can be used as confirmed starting content.

### Company

Big Rig Carriers

### Founded

2008

### Current positioning

"Delivering your cargo on time, every time"

Do not necessarily use this as the primary homepage headline. It may be retained as supporting brand language if appropriate.

### Current services

- Refrigerated transportation
    
- Dry van transportation
    
- Flatbed transportation
    
- Intermodal transportation
    

### Current location

12698 Centreville Creek Road  
Bolton, Ontario  
L7C 3A6  
Canada

### Phone

+1 647-745-1185

### Current hours

9:00 AM – 5:00 PM

### Existing company description

The current website presents Big Rig Carriers as a national carrier.

Do not expand "national carrier" into specific Canadian provinces, U.S. states, lanes, cities, or cross-border capabilities unless the business confirms them.

---

# 3. Critical Content Rule

Do not invent company information.

This is especially important for a transportation company because customers may rely on information about equipment, geography, compliance, safety, and capabilities.

Never fabricate:

- Fleet size
    
- Number of trucks
    
- Number of trailers
    
- Number of drivers
    
- Delivery statistics
    
- On-time percentages
    
- Safety ratings
    
- Insurance coverage
    
- Certifications
    
- Regulatory credentials
    
- DOT information
    
- CVOR information
    
- NSC information
    
- CTPAT
    
- FAST
    
- SmartWay
    
- ISO certifications
    
- Awards
    
- Customer logos
    
- Customer testimonials
    
- Major customers
    
- Service areas
    
- Provinces served
    
- U.S. states served
    
- Specific transportation lanes
    
- Warehouses
    
- Terminals
    
- Dispatch availability
    
- 24/7 service
    
- GPS tracking
    
- Real-time shipment tracking
    
- Refrigerated temperature ranges
    
- Trailer specifications
    
- Payload capacities
    
- Number of years in business beyond the confirmed 2008 founding date
    

When information is missing, use:

`[CONTENT REQUIRED]`

or:

`TODO: Confirm with Big Rig Carriers`

Do not use invented placeholder statistics in the production design.

---

# 4. Target Audience

The website should primarily target B2B transportation customers.

Potential visitors include:

- Shippers
    
- Manufacturers
    
- Logistics managers
    
- Supply-chain managers
    
- Procurement teams
    
- Freight brokers
    
- Distribution companies
    
- Retail businesses
    
- Importers/exporters
    
- Businesses requiring transportation services
    

The website should communicate quickly to these visitors:

1. Who Big Rig Carriers is
    
2. What transportation services are available
    
3. What types of freight/equipment can be handled
    
4. Where services are available
    
5. Why customers should consider Big Rig Carriers
    
6. How to request a quote
    
7. How to contact the company
    

---

# 5. Brand Positioning

The visual and verbal identity should communicate:

- Reliability
    
- Professionalism
    
- Experience
    
- Operational capability
    
- Safety
    
- Trust
    
- Dependability
    
- Customer service
    
- Transportation expertise
    

The site should feel like a serious transportation company serving business customers.

Avoid making it feel like:

- A generic trucking template
    
- A small personal trucking site
    
- A SaaS website
    
- A startup landing page
    
- An automotive dealership
    
- A logistics software company
    

---

# 6. Visual Direction

Create a premium corporate transportation aesthetic.

Suggested visual language:

- Deep navy
    
- Dark blue
    
- White
    
- Light gray
    
- Transportation orange
    

Suggested starting palette:

```text
Primary Navy:       #0B1726
Secondary Navy:     #12263A
Accent Orange:      #F97316
Dark Orange:        #EA580C
White:              #FFFFFF
Off White:          #F8FAFC
Light Gray:         #E5E7EB
Slate:              #64748B
Dark Text:          #111827
```

These are starting design values, not mandatory brand colors.

If official Big Rig Carriers brand guidelines or colors become available, use those instead.

---

# 7. Logo

Use the official Big Rig Carriers logo if one is provided.

Do not redesign the official logo.

If no logo asset is available during development, create a temporary text treatment:

BIG RIG  
CARRIERS

Clearly treat this as a temporary development placeholder.

Do not present a newly generated logo as the company's official logo.

Preferred logo assets:

- SVG
    
- PNG with transparent background
    
- High-resolution source
    

Add the final logo to the content/assets TODO list if unavailable.

---

# 8. Photography

The website should use strong transportation photography.

Preferred imagery:

- Semi trucks on highways
    
- Freight transportation
    
- Trucks at distribution facilities
    
- Loading docks
    
- Refrigerated trailers
    
- Dry vans
    
- Flatbeds
    
- Intermodal transportation
    
- Drivers
    
- Logistics operations
    
- Warehouses
    
- Freight loading
    

The visual tone should feel:

- Authentic
    
- Industrial
    
- Professional
    
- North American
    
- Corporate
    

Do not imply that generic stock photographs are actual Big Rig Carriers trucks, employees, customers, or facilities.

If stock photography is used temporarily, organize image references so the assets can easily be replaced by actual company photography.

Create:

```text
/config/images.ts
```

or an equivalent centralized image configuration.

---

# 9. Website Architecture

Create these primary routes:

```text
/
 /about
 /services
 /services/refrigerated
 /services/dry-van
 /services/flatbed
 /services/intermodal
 /industries
 /service-area
 /fleet
 /safety
 /careers
 /contact
 /quote
```

Also create appropriate:

```text
/404
```

Do not expose a page containing substantial fabricated content simply because the route exists.

If a section requires information that has not been supplied, build the page structure but clearly mark missing content.

---

# 10. Homepage

The homepage is the most important page.

It should immediately communicate:

**Big Rig Carriers provides professional transportation solutions for businesses that need their freight moved reliably.**

Suggested structure:

1. Header
    
2. Hero
    
3. Capability/trust strip
    
4. About preview
    
5. Services
    
6. Why Big Rig Carriers
    
7. Service area
    
8. Industries
    
9. Fleet preview
    
10. Safety preview
    
11. Quote CTA
    
12. Contact preview
    
13. Footer
    

The exact order may be adjusted if UX considerations suggest a better flow.

---

# 11. Homepage Hero

Create a large, premium hero section.

Use a strong truck/freight image.

Use a dark overlay to ensure text readability.

Suggested headline direction:

> Reliable Freight Transportation. Built to Deliver.

Do not copy this headline blindly if a better brand-specific alternative is developed.

Supporting copy should explain the business clearly without making unsupported claims.

Suggested direction:

> Professional transportation solutions for businesses that need dependable freight movement across their supply chain.

Primary CTA:

**Request a Quote**

Secondary CTA:

**Explore Our Services**

Also make the phone number prominent:

**647-745-1185**

The hero should not become overloaded with text.

---

# 12. Homepage Trust/Capability Strip

Immediately below the hero, create a visually strong capability section.

Possible themes:

- Reliable Transportation
    
- Experienced Team
    
- Flexible Solutions
    
- Customer-Focused Service
    

Only use claims that can be supported.

Do not use fake numerical statistics.

Never create:

```text
99.8% On-Time Delivery
500+ Trucks
10,000+ Loads
99% Customer Satisfaction
```

unless the client explicitly supplies and confirms these numbers.

---

# 13. About Section

Create a strong homepage About preview.

Suggested headline direction:

> Transportation Experience You Can Count On

Use the confirmed founding date of 2008.

The copy should explain that Big Rig Carriers was founded in 2008 and has experience in transportation.

Do not claim a specific growth story unless the client provides it.

CTA:

**Learn About Big Rig Carriers**

The `/about` page should provide a more detailed company story once additional information is supplied.

---

# 14. Services

The current website identifies four transportation services.

Build dedicated pages for:

### Refrigerated Transportation

Route:

`/services/refrigerated`

Position as temperature-controlled freight transportation.

Do not specify temperature ranges, monitoring technology, trailer specifications, or food-grade capabilities without confirmation.

---

### Dry Van Transportation

Route:

`/services/dry-van`

Position as enclosed transportation for general freight.

Do not invent trailer specifications or payload information.

---

### Flatbed Transportation

Route:

`/services/flatbed`

Position as open-deck transportation for freight requiring flatbed equipment.

Do not claim specialized capabilities unless confirmed.

---

### Intermodal Transportation

Route:

`/services/intermodal`

Position as transportation involving multiple transportation modes where applicable.

Do not claim specific rail partners, ports, terminals, or intermodal lanes without confirmation.

---

# 15. Service Cards

Create reusable service cards.

Each card should contain:

- Image
    
- Icon
    
- Service name
    
- Short description
    
- CTA
    

Example:

```text
Refrigerated Transportation

Temperature-controlled transportation
solutions for freight requiring
appropriate environmental conditions.

Learn More →
```

Do not make unsupported technical claims.

---

# 16. Services Landing Page

Route:

`/services`

Create a professional overview of the company's transportation capabilities.

Hero:

> Transportation Solutions Built Around Your Freight

Then introduce the four confirmed service categories.

Each service should link to its dedicated page.

End with:

> Have freight to move?

CTA:

**Request a Quote**

---

# 17. Why Big Rig Carriers

Create a dedicated section explaining the company's value proposition.

Potential themes:

### Experience

Founded in 2008.

### Reliability

Focus on dependable transportation service.

### Flexible Transportation

Multiple transportation options.

### Customer Focus

Professional communication and service.

### Transportation Expertise

Experience across multiple freight transportation categories.

Do not turn these themes into quantitative claims without evidence.

---

# 18. Industries

Create:

`/industries`

Potential industry categories may include:

- Manufacturing
    
- Food & Beverage
    
- Retail
    
- Agriculture
    
- Automotive
    
- Construction
    
- Industrial
    
- Distribution
    
- Consumer Goods
    

IMPORTANT:

These are potential categories only.

Do not claim that Big Rig Carriers serves these industries until confirmed.

Build the page so industries can be enabled/disabled from configuration.

Example:

```ts
{
  name: "Manufacturing",
  slug: "manufacturing",
  enabled: false,
  description: "[CONTENT REQUIRED]"
}
```

The business owner can later confirm the actual industries.

---

# 19. Service Area

Create:

`/service-area`

The existing site describes Big Rig Carriers as a national carrier.

Do not automatically interpret this as:

- All Canadian provinces
    
- All U.S. states
    
- Canada-US cross-border service
    
- Coast-to-coast service
    

Create a configurable service-area data model.

Example:

```ts
interface ServiceArea {
  name: string
  type: "province" | "state" | "region" | "city" | "lane"
  enabled: boolean
}
```

Create:

```text
/config/serviceAreas.ts
```

Populate only with confirmed information.

If exact coverage is unavailable, use a general description rather than a fabricated map.

---

# 20. Fleet & Equipment

Create:

`/fleet`

The current website mentions:

- Refrigerated
    
- Dry van
    
- Flatbed
    
- Intermodal
    

Use these as the initial equipment/service categories.

Do not assume that every service means Big Rig Carriers owns the corresponding equipment.

The page should be structured so actual equipment can be confirmed later.

Potential fields:

```text
Equipment Name
Description
Typical Application
Trailer Type
Length
Payload
Features
```

Unknown fields should remain:

`[CONTENT REQUIRED]`

Do not guess specifications.

---

# 21. Safety

Create:

`/safety`

The purpose of this page is to reassure corporate customers that transportation is handled professionally.

Suggested sections:

- Safety Philosophy
    
- Driver Safety
    
- Equipment Maintenance
    
- Load Securement
    
- Regulatory Compliance
    
- Operational Procedures
    

Use process-oriented language that does not imply certifications or ratings.

Create a dedicated configuration area for verified credentials.

Do not invent:

- CVOR
    
- NSC
    
- DOT
    
- FAST
    
- CTPAT
    
- SmartWay
    
- ISO
    
- Safety ratings
    
- Insurance amounts
    
- Audit results
    

---

# 22. Quote Request

The quote request is the primary conversion workflow.

Create:

`/quote`

The page should feel like a professional B2B freight quote request rather than a generic contact form.

Suggested headline:

> Request a Freight Quote

Supporting copy:

> Tell us about your shipment and our team can review your transportation requirements.

Do not promise a response time unless the company confirms one.

---

# 23. Quote Form

Create:

```text
/components/forms/QuoteForm.tsx
```

Suggested fields:

## Contact

- Name
    
- Company
    
- Email
    
- Phone
    

## Shipment

- Pickup location
    
- Delivery location
    
- Pickup date
    
- Delivery date
    
- Freight type
    
- Equipment required
    
- Shipment weight
    
- Number of pieces
    
- Dimensions
    
- Special requirements
    

## Additional Information

- Message
    
- File attachments
    

Keep the form practical.

Do not make every field mandatory.

Clearly identify required fields.

---

# 24. Quote API

Create a server-side endpoint:

```text
/app/api/quote/route.ts
```

The API should:

1. Validate all input
    
2. Validate uploaded files
    
3. Sanitize input
    
4. Apply file size/type restrictions
    
5. Apply spam protection/rate limiting where practical
    
6. Send the quote request through a configurable email provider or backend
    
7. Return a safe response
    

Never expose email/API credentials in the browser.

Use environment variables.

Suggested environment variables:

```text
QUOTE_EMAIL_TO=
EMAIL_FROM=
EMAIL_PROVIDER_API_KEY=
```

Do not hardcode actual values.

---

# 25. Contact Page

Create:

`/contact`

Use the confirmed information:

```text
Big Rig Carriers
12698 Centreville Creek Road
Bolton, Ontario
L7C 3A6
Canada

+1 647-745-1185

9:00 AM – 5:00 PM
```

Use a clickable phone link:

```text
tel:+16477451185
```

Do not invent an email address.

If the business provides an email later, add it.

Include:

- Contact information
    
- Contact form
    
- Quote CTA
    
- Map/location section
    
- Directions where appropriate
    

---

# 26. Contact Form

Create a simpler general inquiry form.

Suggested fields:

- Name
    
- Company
    
- Email
    
- Phone
    
- Subject
    
- Message
    

The contact form should not duplicate every quote field.

For freight-related inquiries, direct users toward the quote workflow.

---

# 27. Careers

Create:

`/careers`

The purpose is to allow potential employees/drivers to express interest.

Potential categories:

- Drivers
    
- Operations
    
- Dispatch
    
- Logistics
    
- Administration
    

Do not claim positions are currently open unless actual job listings are provided.

Suggested CTA:

**Interested in Joining Big Rig Carriers?**

Use a general application/contact mechanism until actual job openings are supplied.

---

# 28. Testimonials

Do not fabricate testimonials.

If real testimonials are supplied:

Create a reusable testimonial component.

Suggested structure:

```ts
interface Testimonial {
  quote: string
  name?: string
  company?: string
  role?: string
}
```

If no testimonials are available, omit the section rather than displaying fake content.

---

# 29. Customer Logos

Do not invent customer logos.

If actual approved logos are provided, create a configurable client-logo section.

Make the logos easy to add/remove.

---

# 30. CTA Strategy

The primary CTA throughout the website should be:

**Request a Quote**

Secondary CTA:

**Call 647-745-1185**

Use the primary CTA at appropriate points:

- Homepage hero
    
- Services section
    
- Service pages
    
- Fleet section
    
- End of major content pages
    
- Footer
    

Do not place a giant CTA after every paragraph.

---

# 31. Header

Create a sticky responsive header.

Suggested desktop navigation:

```text
Logo

About
Services
Industries
Fleet
Safety
Careers
Contact

[ GET A QUOTE ]
```

Mobile:

```text
Logo
Menu
```

The quote button should be visually prominent.

The navigation should remain concise.

---

# 32. Footer

Create a professional corporate footer.

### Company

- About
    
- Services
    
- Industries
    
- Fleet
    
- Safety
    
- Careers
    

### Services

- Refrigerated
    
- Dry Van
    
- Flatbed
    
- Intermodal
    

### Contact

Big Rig Carriers

12698 Centreville Creek Road  
Bolton, Ontario  
L7C 3A6  
Canada

647-745-1185

9:00 AM – 5:00 PM

### Legal

- Privacy Policy
    
- Terms & Conditions
    

Do not add social media links until official accounts are confirmed.

---

# 33. SEO

The primary SEO strategy should target transportation and logistics searches relevant to the company's actual geographic and service coverage.

Do not stuff keywords.

Potential keyword themes include:

- Trucking company
    
- Transportation company
    
- Freight transportation
    
- Refrigerated transportation
    
- Dry van transportation
    
- Flatbed transportation
    
- Intermodal transportation
    
- Freight carrier
    
- Logistics services
    

Geographic keywords should only be used where they accurately describe the company's service area.

Do not create hundreds of location pages solely for SEO.

---

# 34. Page Metadata

Create unique metadata for each major page.

Examples:

Homepage:

```text
Title:
Big Rig Carriers | Freight Transportation & Logistics

Description:
Professional freight transportation solutions from Big Rig Carriers, including refrigerated, dry van, flatbed and intermodal transportation.
```

Services:

```text
Big Rig Carriers Transportation Services | Freight Solutions
```

About:

```text
About Big Rig Carriers | Transportation Since 2008
```

These are starting points. Refine them during implementation.

Do not over-optimize titles.

---

# 35. Structured Data

Implement appropriate structured data.

Potential types:

- Organization
    
- LocalBusiness or appropriate transportation-related business schema
    
- Service
    
- BreadcrumbList
    

Use only verified company information.

The organization/location information should use:

```text
Big Rig Carriers
12698 Centreville Creek Road
Bolton, Ontario
L7C 3A6
Canada
+1 647-745-1185
```

Do not include fake:

- Ratings
    
- Reviews
    
- Aggregate ratings
    
- Awards
    

---

# 36. Local SEO

Because Big Rig Carriers has a physical address in Bolton, Ontario, ensure the website has consistent business information.

Use the same:

Name  
Address  
Phone

throughout the site.

Do not create false location pages for other cities.

If the company has a Google Business Profile or other verified business profiles, these can be added later.

---

# 37. Site Navigation

Use the following information architecture:

```text
Home
├── About
├── Services
│   ├── Refrigerated
│   ├── Dry Van
│   ├── Flatbed
│   └── Intermodal
├── Industries
├── Service Area
├── Fleet
├── Safety
├── Careers
├── Contact
└── Request a Quote
```

Keep the quote page accessible from the primary navigation.

---

# 38. Homepage Content Hierarchy

The homepage should answer these questions in order:

### 1. Who are we?

Big Rig Carriers.

### 2. What do we do?

Freight transportation and logistics services.

### 3. What can we handle?

Refrigerated, dry van, flatbed and intermodal transportation.

### 4. Why should I consider you?

Experience, professional service and transportation capabilities.

### 5. Where do you operate?

Clearly communicate confirmed coverage.

### 6. How do I get started?

Request a quote.

---

# 39. Visual Components

Create reusable components for:

```text
Hero
SectionHeading
ServiceCard
ServiceGrid
IndustryCard
EquipmentCard
FeatureCard
CTASection
ContactCard
QuoteForm
ContactForm
Breadcrumbs
Header
MobileMenu
Footer
```

Use the global component architecture wherever possible.

---

# 40. Suggested Project Structure

Use the existing project architecture if one already exists.

For a new project, a suitable structure is:

```text
/app
  /page.tsx
  /about
    /page.tsx
  /services
    /page.tsx
    /refrigerated
      /page.tsx
    /dry-van
      /page.tsx
    /flatbed
      /page.tsx
    /intermodal
      /page.tsx
  /industries
    /page.tsx
  /service-area
    /page.tsx
  /fleet
    /page.tsx
  /safety
    /page.tsx
  /careers
    /page.tsx
  /contact
    /page.tsx
  /quote
    /page.tsx
  /api
    /quote
      /route.ts

/components
  /ui
  /layout
  /navigation
  /hero
  /sections
  /cards
  /forms

/config
  site.ts
  navigation.ts
  services.ts
  industries.ts
  equipment.ts
  serviceAreas.ts
  images.ts

/lib
  validation.ts
  email.ts
  utils.ts

/types
  index.ts

/public
  /images
```

---

# 41. Configuration

Create a central site configuration.

Example:

```ts
export const siteConfig = {
  name: "Big Rig Carriers",
  description:
    "Professional freight transportation and logistics services.",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  phone: "+16477451185",
  phoneDisplay: "+1 647-745-1185",
  address: {
    street: "12698 Centreville Creek Road",
    city: "Bolton",
    province: "Ontario",
    postalCode: "L7C 3A6",
    country: "Canada",
  },
}
```

Keep business information centralized.

---

# 42. Services Configuration

Create a typed service configuration.

Example:

```ts
export const services = [
  {
    slug: "refrigerated",
    name: "Refrigerated Transportation",
    enabled: true,
    description: "...",
  },
  {
    slug: "dry-van",
    name: "Dry Van Transportation",
    enabled: true,
    description: "...",
  },
  {
    slug: "flatbed",
    name: "Flatbed Transportation",
    enabled: true,
    description: "...",
  },
  {
    slug: "intermodal",
    name: "Intermodal Transportation",
    enabled: true,
    description: "...",
  },
]
```

Descriptions must remain factual.

---

# 43. Content TODO

Create:

`CONTENT-TODO.md`

At minimum include:

```text
[ ] Official logo
[ ] Official brand guidelines
[ ] Official company description
[ ] Company email
[ ] Confirm phone number
[ ] Confirm business hours
[ ] Confirm service areas
[ ] Confirm provinces served
[ ] Confirm US states served, if applicable
[ ] Confirm cross-border capabilities
[ ] Confirm fleet size
[ ] Confirm equipment
[ ] Confirm trailer types
[ ] Confirm equipment specifications
[ ] Confirm industries served
[ ] Confirm safety certifications
[ ] Confirm regulatory credentials
[ ] Confirm insurance information
[ ] Customer testimonials
[ ] Customer logos
[ ] Company/fleet photography
[ ] Driver/team photography
[ ] Careers information
[ ] Social media accounts
[ ] Privacy policy
[ ] Terms and conditions
[ ] Quote response process
[ ] Quote email recipient
[ ] File upload requirements
```

---

# 44. Business Questions for Client

Before finalizing the website, obtain answers to:

### Company

- What is the official company description?
    
- What differentiates Big Rig Carriers from competitors?
    
- What are the company's strongest capabilities?
    
- Is the company primarily a carrier, logistics provider, broker, or a combination?
    

### Geography

- What provinces do you serve?
    
- Do you serve the United States?
    
- Which states?
    
- Do you provide cross-border transportation?
    
- What are your most common lanes?
    

### Equipment

- How many trucks?
    
- How many trailers?
    
- What types?
    
- What sizes?
    
- What capabilities?
    
- Do you own the equipment or work with partner carriers?
    

### Freight

- What freight types are most common?
    
- Any weight limitations?
    
- Any specialized freight?
    
- Any temperature-controlled requirements?
    
- Any hazardous materials?
    

### Customers

- What industries do you primarily serve?
    
- Can customer names/logos be displayed?
    
- Are testimonials available?
    

### Safety

- What certifications are held?
    
- What regulatory credentials can be published?
    
- What safety practices should be highlighted?
    

### Operations

- What are normal operating hours?
    
- Is after-hours dispatch available?
    
- Is shipment tracking available?
    
- How are customers updated?
    

### Sales

- Who receives quote requests?
    
- How quickly are quote requests normally answered?
    
- What information is needed to price a shipment?
    

---

# 45. Quote Workflow

The website should be designed around the actual business workflow.

Before finalizing the quote form, determine:

```text
Visitor
   ↓
Request a Quote
   ↓
Quote Form
   ↓
Validation
   ↓
Big Rig Carriers
   ↓
Internal Review
   ↓
Customer Response
```

Do not promise an automated quote unless the company actually has an automated pricing system.

The website should initially be designed around a **quote request**, not instant pricing.

---

# 46. Conversion Optimization

The site should continuously guide visitors toward:

**Request a Quote**

Important conversion opportunities:

- Hero CTA
    
- Services CTA
    
- Individual service pages
    
- Fleet section
    
- Contact section
    
- Footer
    

Phone number should be clickable on mobile.

Do not use aggressive popups.

Do not obstruct the user's ability to read the website.

---

# 47. Mobile UX

On mobile:

- Quote CTA should be highly accessible.
    
- Phone number should be tappable.
    
- Navigation should be simple.
    
- Forms should use appropriate input types.
    
- Service cards should stack cleanly.
    
- Large images should not dominate the entire page.
    
- Tables/specifications should remain readable.
    
- No horizontal scrolling.
    

Consider a subtle mobile call/quote action if it improves conversion, but do not create an intrusive sticky element.

---

# 48. Performance

The website should prioritize performance because the homepage will contain large transportation imagery.

Use:

- Next.js Image
    
- Responsive image sizes
    
- Appropriate image formats
    
- Lazy loading
    
- Optimized fonts
    
- Minimal client JavaScript
    

Do not use an autoplay hero video unless there is a strong reason and properly optimized source material.

A high-quality static image is preferable to a poorly optimized video.

---

# 49. Accessibility

The trucking imagery and dark navy/orange palette must maintain adequate contrast.

Pay particular attention to:

- Orange text on white
    
- White text over photography
    
- Navigation focus states
    
- Quote form errors
    
- Mobile menu
    
- CTA buttons
    

Do not use orange as the only indicator of state.

---

# 50. SEO Content Strategy

Do not create thin pages merely to increase search engine coverage.

Each service page should provide genuinely useful information about that service.

Potential service page structure:

```text
Hero
↓
Service Overview
↓
Who This Service Is For
↓
Typical Freight
↓
Capabilities
↓
Equipment
↓
Why Big Rig Carriers
↓
FAQ
↓
Request a Quote
```

Only include sections for which accurate content is available.

---

# 51. FAQs

Consider FAQs for service pages and the quote page.

Do not create generic SEO questions simply for keyword stuffing.

Potential questions:

- What types of freight can you transport?
    
- What information is required for a quote?
    
- Do you offer refrigerated transportation?
    
- Do you offer flatbed transportation?
    
- Do you offer intermodal transportation?
    
- What areas do you serve?
    
- How do I request a quote?
    

Answers must be based on confirmed company information.

---

# 52. Legal Pages

Create placeholders/routes for:

```text
/privacy
/terms
```

Do not generate legally authoritative claims without review.

Mark initial content for client/legal review.

---

# 53. Social Media

Do not add social media icons unless official company accounts are provided.

If accounts are supplied, add them to:

```text
/config/site.ts
```

rather than hardcoding links throughout the application.

---

# 54. Development Phases

Implement the project in the following order.

## Phase 1

Inspect the existing repository and website.

## Phase 2

Establish:

- Design tokens
    
- Typography
    
- Colors
    
- Global layout
    
- Header
    
- Footer
    

## Phase 3

Build homepage.

## Phase 4

Build services and service detail pages.

## Phase 5

Build:

- About
    
- Industries
    
- Service Area
    
- Fleet
    
- Safety
    

## Phase 6

Build:

- Contact
    
- Quote
    
- Careers
    

## Phase 7

Implement quote/contact APIs and validation.

## Phase 8

Implement:

- SEO
    
- Structured data
    
- Sitemap
    
- Robots
    
- Accessibility
    

## Phase 9

Optimize performance.

## Phase 10

Perform final QA and Vercel deployment testing.

---

# 55. Definition of Done

The Big Rig Carriers website is complete when:

-  The site looks significantly more professional than the existing website.
    
-  The company's services are immediately understandable.
    
-  The four confirmed transportation services are represented.
    
-  The company history is represented accurately.
    
-  Contact information is correct.
    
-  The primary CTA is Request a Quote.
    
-  Quote requests can be submitted successfully.
    
-  Quote form data is validated server-side.
    
-  No company claims have been fabricated.
    
-  Missing information is clearly documented.
    
-  Website works on mobile.
    
-  Website works on desktop.
    
-  Navigation is accessible.
    
-  Images are optimized.
    
-  SEO metadata exists.
    
-  Structured data is implemented appropriately.
    
-  Sitemap exists.
    
-  Robots configuration exists.
    
-  Privacy and terms pages are represented.
    
-  404 page exists.
    
-  No broken links exist.
    
-  No TypeScript errors exist.
    
-  No ESLint errors exist.
    
-  Production build succeeds.
    
-  Vercel deployment works.
    
-  Environment variables are documented.
    
-  No secrets are committed.
    

---

# 56. Final Design Objective

The finished website should give a prospective shipper the immediate impression that:

> Big Rig Carriers is a legitimate, professional transportation company that can handle my freight and is easy to contact.

The design should communicate confidence without exaggeration.

The site should feel established without inventing statistics.

The site should feel premium without becoming flashy.

The site should prioritize:

**Trust → Capability → Clarity → Conversion**

The ultimate conversion should be:

> Request a Quote.