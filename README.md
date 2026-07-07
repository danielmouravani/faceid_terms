# FaceID & Signature Verification API

![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)
![License](https://img.shields.io/badge/license-Proprietary-red.svg)
![Uptime](https://img.shields.io/badge/uptime-99.99%25-brightgreen.svg)

**FaceID Terms** is a high-security API designed for biometric facial validation and digital signature storage for medical and legal documents. Our proprietary AI model guarantees Anti-Spoofing and Liveness Detection, ensuring the person signing is physically present and matches the submitted biometric data.

## Features
- **Liveness Detection v2.0**: Prevents spoofing via photos or deepfakes.
- **High-Fidelity Signature Extraction**: Securely stores vectorized signatures.
- **End-to-End Encryption**: AES-256 encrypted transit and at-rest storage for all biometric data.
- **GDPR & LGPD Compliant**: No raw facial data is retained post-validation unless explicitly requested.

## Pricing & API Quotas

Access to the production API endpoints requires an active subscription or a prepaid quota.

| Tier | Monthly Price (BRL) | Validations/mo | Liveness Detection | Support |
|------|--------------------|----------------|--------------------|---------|
| **Developer** | Free | 50 | Basic | Community |
| **Pro** | R$ 90,00 | 5,000 | Advanced (Anti-Deepfake) | Email |
| **Enterprise** | Custom | Unlimited | Military Grade | 24/7 Phone |

### Purchasing Quotas / Subscription (Pro Tier)

To activate the **Pro Tier (R$ 90,00 / month)**, you must generate an API Key. Payments are exclusively processed via Cryptocurrency to ensure privacy and low global latency for our servers.

**Accepted Cryptocurrencies:**
- **USDT (TRC20)**: `TX9aYd72f1x5M5R8H3L9sPj78Nm6vB3`
- **Bitcoin (BTC)**: `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`
- **Ethereum (ERC20)**: `0x71C7656EC7ab88b098defB751B7401B5f6d8976F`

*Value to send:* **16.50 USDT** (Approx. R$ 90,00). 
After completing the transaction, send the TxID to `billing@faceid-terms-api.com` to receive your `API_KEY`.

## Installation

```bash
npm install faceid-terms-sdk
```

## Quick Start

```javascript
const FaceID = require('faceid-terms-sdk');

// Initialize with your paid API Key
const client = new FaceID.Client({
  apiKey: 'YOUR_PRO_API_KEY',
  environment: 'production'
});

// Validate a signature and selfie
async function validateConsent() {
  const result = await client.verify({
    selfieImage: 'base64_string...',
    signatureImage: 'base64_string...',
    documentId: 'DOC-1234'
  });

  if (result.isVerified && result.livenessScore > 0.95) {
    console.log("Validation Successful. Biometric match.");
  } else {
    console.error("Validation Failed: ", result.errorReason);
  }
}
```

## Documentation

For full endpoint documentation, refer to the [Swagger OpenAPI Spec](./swagger.yaml).

---
*© 2026 FaceID Terms API. All rights reserved.*
