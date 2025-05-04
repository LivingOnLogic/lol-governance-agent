# 🗳️ lol-governance-agent

**Autonomous DAO voting agent** for Living On Logic — monitors proposals, applies policy logic, and votes on-chain or via Snapshot.

---

## 🤖 Overview

`lol-governance-agent` enables automated DAO participation through programmable policy scripts. It supports on-chain governance systems and off-chain Snapshot voting for DAOs running across EVM chains.

This agent can:

- Monitor specific DAOs or proposal tags
- Apply logic to determine vote direction (for/against/abstain)
- Cast signed votes or submit transactions via MCPs
- Run continuously or on-demand

---

## 🔁 Example Use Cases

| Scenario                          | Behavior                                                             |
|----------------------------------|----------------------------------------------------------------------|
| Vote yes on proposals by core team | Uses proposer allowlist to match addresses                          |
| Vote yes on all curation incentives | Matches title keywords or JSON payloads                             |
| Auto-abstain on treasury changes | Conditional logic on title or metadata fields                        |

---

## 📂 Project Structure

```
/src
  /lib               → Governance agent logic
  index.ts           → Entry point with execution
```

---

## ⚙️ Configuration

The governance agent accepts a basic config object:

```ts
{
  dao: "lol.eth",
  strategy: (proposal) => "For" | "Against" | "Abstain"
}
```

Strategies can be keyword-based, metadata-aware, or externalized (LLM prompt, off-chain rule file, etc.).

---

## 🚀 Getting Started

```bash
git clone https://github.com/LivingOnLogic/lol-governance-agent.git
cd lol-governance-agent
npm install
npm run dev
```

---

## 🧪 Example Policy Strategy

```ts
(proposal) => {
  if (proposal.title.includes("curation")) return "For";
  if (proposal.title.includes("treasury")) return "Abstain";
  return "Against";
}
```

---

## 📡 MCP Integration

- Uses `snapshot.mcp` for proposal fetching and voting
- Can also interact with governance contracts via `governance.mcp`
- Supports polling or webhook triggers (future)

---

## 📜 Proposal Schema Example

```json
{
  "id": "0xabc123",
  "title": "Enable MCP staking rewards",
  "proposer": "0xdef...",
  "metadata": {
    "tags": ["curation", "rewards"]
  }
}
```

---

## 🛠 Dev Notes

- Votes are currently mocked in the base agent
- You can implement real signing via Wallet MCP or EIP-712
- Add webhook or push notifications for agent feedback loop
