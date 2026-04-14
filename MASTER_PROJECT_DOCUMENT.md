# 📘 MASTER PROJECT DOCUMENT

## AI‑Powered Online Computer Centre Platform

**(CMS + AI Agents + Multi‑Service Digital Hub)**

***

## 1. Executive Overview

This project is a **fully AI-powered online computer centre** that digitizes and automates traditional cyber café services—enhanced with artificial intelligence, workflow automation, and a customizable CMS.

The platform allows clients to submit jobs (typing, assignments, NIN issues, document services, etc.), while **AI agents handle intake, validation, execution, quality assurance, and delivery**, with optional human oversight.

The system is:

*   Highly customizable (CMS-driven)
*   AI-trainable and extensible
*   cPanel-compatible
*   Convertible into Android and iOS apps
*   Built for scalability, security, and monetization

***

## 2. Core Services

### 2.1 Included Services

*   Typing services
*   Virtual assistance
*   Assignment solver / academic assistance
*   NIN issue resolution support
*   Project writing
*   Surveys
*   General document typing

### 2.2 Additional Verified Money‑Making Services

**Academic & Professional**

*   CV & Resume writing
*   Cover letters
*   Statement of Purpose (SOP)
*   Scholarship assistance
*   Thesis formatting (APA / MLA / Harvard)
*   PowerPoint & pitch deck creation

**Government & Business**

*   Online form filling (NYSC, JAMB, Immigration, FRSC)
*   Business name registration assistance
*   TIN assistance
*   Grant & NGO application assistance

**Digital & AI‑Enhanced**

*   Data entry
*   Lead generation
*   Transcription (audio → text)
*   Document summarization
*   Translation
*   Grammar & plagiarism checks

✅ All services are configurable via CMS.

***

## 3. Functional Requirements

### 3.1 User Side

*   Account registration/login
*   Service browsing
*   Dynamic job submission forms
*   File uploads
*   Job tracking dashboard
*   Revision requests
*   Notifications (email/WhatsApp)

### 3.2 Admin Side

*   Full CMS control (pages, branding, SEO, profile settings)
*   Dynamic access control (toggle which profile fields clients can edit)
*   AI training & prompt management
*   Job pipeline oversight
*   Service pricing & bundling
*   Analytics & revenue dashboards
*   Role‑based staff management

***

## 4. AI Architecture

### 4.1 AI Model Strategy

*   Prompt‑based intelligence
*   Dataset‑assisted retrieval (RAG)
*   Admin-uploadable training data
*   Continuous reinforcement via feedback loops

### 4.2 AI Autonomy Levels

*   AI only
*   AI + Human review
*   Human only

***

## 5. AI Agent Workflow Design

### 5.1 AI Agent Types

| Agent                  | Responsibility                    |
| ---------------------- | --------------------------------- |
| Intake Agent           | Validates job submission          |
| Analysis Agent         | Understands scope & complexity    |
| Data Sufficiency Agent | Ensures required info is provided |
| Execution Agent        | Performs AI work                  |
| QA Agent               | Reviews output quality            |
| Escalation Agent       | Routes complex tasks              |
| Learning Agent         | Improves prompts & datasets       |

***

### 5.2 AI Workflow (Step‑by‑Step)

    Client Submission
            ↓
    Intake Agent
       └─ Checks service type
       └─ Validates fields & files
            ↓
    Data Sufficiency Agent
       └─ Requests missing info (if any)
            ↓
    Analysis Agent
       └─ Determines complexity
       └─ Assigns AI autonomy level
            ↓
    Execution Agent
       └─ Uses AI models & datasets
            ↓
    QA Agent
       └─ Quality control
       └─ Confidence scoring
            ↓
    Escalation Agent (Optional)
       └─ Human review if flagged
            ↓
    Delivery to Client
            ↓
    Learning Agent
       └─ Updates prompts based on feedback

***

## 6. CMS & Customization Framework

### CMS Capabilities

*   Logo, favicon, colors
*   Full SEO (meta tags, sitemap)
*   Page builder (drag & drop)
*   Media library
*   Client Profile Controls (toggle editability of phone numbers, emails, location, etc.)
*   Service & pricing management
*   AI API key management
*   AI dataset uploads
*   Blog & content marketing tools

***

## 7. System Architecture Design

### 7.1 High‑Level System Architecture

    [ Frontend Web / Mobile PWA ]
            |—— HTML5, Tailwind CSS / Vanilla CSS, JavaScript
            |—— Progressive Web App (PWA) Standards
            v
    [ Laravel Backend (CMS + API) ]
            |
            |—— Job Management
            |—— User/Auth
            |—— Payments
            |
            v
    [ AI Service Layer (Python / FastAPI) ]
            |
            |—— AI Agents
            |—— RAG / Vector Store
            |
            v
    [ Storage & Database Layer ]

***

### 7.2 Deployment Architecture (Railway Multi-Service)

    Client Browser / Mobile App
            |
         Cloudflare (Optional)
            |
    [ Railway Public Network ]
            |
     Railway Service 1: Laravel + PHP + Vite Frontend (Nixpacks Builder)
            | <---- Private Internal Network ----> |
     Railway Service 2: Python FastAPI (AI Microservice)
            |
     Railway Service 3: MySQL Managed Database

✅ Fully automated CI/CD deployments via GitHub  
✅ Internal Private Networking secures AI endpoints  
✅ Microservice scaling (scale AI separate from CMS)
***

## 8. Draft Database Schema (High‑Level)

### 8.1 Core Tables

#### Users

*   id
*   name
*   email
*   phone
*   role (admin, staff, client)
*   password\_hash
*   created\_at

#### Services

*   id
*   title
*   description
*   base\_price
*   turnaround\_time
*   ai\_autonomy\_level
*   status

#### Jobs

*   id
*   user\_id
*   service\_id
*   status
*   priority
*   complexity\_score
*   confidence\_score
*   created\_at

#### Job\_Details

*   job\_id
*   field\_name
*   field\_value

#### Job\_Files

*   id
*   job\_id
*   file\_path
*   file\_type
*   uploaded\_at

***

### 8.2 AI‑Specific Tables

#### AI\_Prompts

*   id
*   service\_id
*   prompt\_text
*   version
*   active

#### AI\_Training\_Data

*   id
*   service\_id
*   file\_path
*   data\_type
*   uploaded\_by

#### AI\_Logs

*   id
*   job\_id
*   agent\_type
*   action
*   confidence\_score
*   timestamp

***

### 8.3 CMS Tables

#### Pages

*   id
*   title
*   slug
*   content
*   seo\_meta
*   published

#### Media

*   id
*   file\_path
*   type
*   uploaded\_at

#### Settings

*   key
*   value

***

## 9. Mobile App Bundling

### Strategy

*   Progressive Web App (PWA)
*   Wrapped using Capacitor / Cordova
*   Auto‑syncs with CMS
*   Downloadable APK / IPA
*   Admin-triggered rebuilds

***

## 10. Security, Compliance & Trust

*   Encrypted file storage
*   Role‑based access
*   Activity & audit logs
*   Explicit user consent
*   AI use disclosure
*   Academic integrity notices
*   Rate limiting & spam defense

***

## 11. Monetization & Business Controls

*   Service pricing rules
*   Express / priority fees
*   Bundled packages
*   Wallet system
*   Invoices & receipts
*   Paystack / Flutterwave integration
*   Discount & coupon logic

***

## 12. Scalability & Future Extensions

*   Multi‑tenant mode
*   Franchise system
*   White‑label deployments
*   Public API access
*   Human freelancer marketplace (optional)

***

## ✅ Final Summary

This is a **production‑ready, enterprise‑grade AI service platform** that:

✔ Replaces physical computer centres  
✔ Automates service workflows  
✔ Learns and improves over time  
✔ Is CMS‑driven and customizable  
✔ Is deployable on Railway (Multi-Service Cloud)  
✔ Can scale into a national platform
