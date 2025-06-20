# Restake Info API

This is a Node.js-based backend service that simulates a Restaking Info API for EigenLayer. The API provides structured data for users who restaked their stETH, metadata about validators, and reward insights for individual wallet addresses.

Since EigenLayer doesn’t currently provide publicly accessible subgraphs or smart contract ABIs for restaking data, this project uses mock data to simulate real responses. The goal here is to demonstrate clean architecture, API design, and readiness to integrate real data when it becomes available.

---

## 📌 Project Overview

This API exposes the following information:

- **Restakers** — Users who have restaked their stETH with a validator
- **Validators** — Operator metadata including stake, slash history, and status
- **Rewards** — Restaking rewards per wallet, with breakdowns

Each endpoint returns mock data designed to match the structure expected from real onchain or subgraph sources.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- File system (for mock data)
- Modular folder structure using controllers and routes

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/restake-info-api.git
cd restake-info-api
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
node server.js
```

The server runs on `http://localhost:3000`

---

## 📂 Folder Structure

```
restake-info-api/
├── mock-data/
│   ├── restakers.json
│   ├── validators.json
│   └── rewards.json
├── src/
│   ├── controllers/
│   ├── routes/
│   └── (optional) services/
├── server.js
└── README.md
```

---

## 📚 API Endpoints

### GET `/restakers`

Returns a list of users who restaked their stETH.

**Response Example:**

```json
[
  {
    "userAddress": "0xAbC123456789...",
    "amountRestaked": "120.50",
    "targetValidator": "0xValidatorA"
  }
]
```

---

### GET `/validators`

Returns a list of validator/operator addresses with metadata.

**Response Example:**

```json
[
  {
    "operatorAddress": "0xValidatorA",
    "totalDelegatedStake": "5000",
    "slashHistory": [
      {
        "timestamp": "2024-12-01T12:00:00Z",
        "amount": "100",
        "reason": "Downtime"
      }
    ],
    "status": "active"
  }
]
```

---

### GET `/rewards/:address`

Returns restaking rewards for a given wallet address.

**Response Example:**

```json
{
  "totalRewards": "150.25",
  "breakdown": [
    {
      "validatorAddress": "0xValidatorA",
      "rewardAmount": "50.25",
      "timestamp": "2024-12-01T12:00:00Z"
    }
  ]
}
```

---

## ⚠️ Assumptions & Limitations

* EigenLayer does not provide public smart contract ABIs or subgraphs for restaking, so this project uses hardcoded mock JSON data stored locally.
* The code is fully structured and ready to connect to Ethers.js or subgraph APIs as soon as those data sources become available.
* This is a demonstration of backend design and not meant for production use at this point.

---

## 🧠 Future Improvements

* Replace mock data with real-time onchain data using Ethers.js or The Graph once the data becomes available.
* Add pagination and filtering support.
* Integrate MongoDB to persist fetched or indexed data.
* Add unit tests and environment-based configs.

