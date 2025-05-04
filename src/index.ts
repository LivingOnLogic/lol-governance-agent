import { GovernanceAgent } from './lib/GovernanceAgent';

const agent = new GovernanceAgent({
  dao: "lol.eth",
  strategy: (proposal) => {
    return proposal.title.toLowerCase().includes("curation") ? "For" : "Abstain";
  }
});

agent.run();
