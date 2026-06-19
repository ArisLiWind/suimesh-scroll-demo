const progress = document.querySelector(".progress span");
const reveals = [...document.querySelectorAll(".reveal")];
const languageToggle = document.querySelector(".language-toggle");
const controlButtons = [...document.querySelectorAll(".control-button")];
let currentLanguage = "en";
let activeTypingPanel = null;

const traceCaptions = [
  "How SuiMesh generates a verifiable receipt.",
  "Intent. User goal captured.",
  "Proposal. Agent plan preserved.",
  "PTB. Execution source recorded.",
  "Inspect. Facts verified.",
  "Policy. Decision attached.",
  "Claim. Executor locked.",
  "Receipt. Proof generated.",
  "Every critical action becomes recoverable. Every decision becomes verifiable. Every execution becomes accountable."
];

const zhTraceCaptions = [
  "SuiMesh 如何生成可验证回执。",
  "Intent：捕获用户目标。",
  "Proposal：保留 Agent 计划。",
  "PTB：记录执行来源。",
  "Inspect：验证事实。",
  "Policy：附加决策。",
  "Claim：锁定执行者。",
  "Receipt：生成证明。",
  "每个关键行动都可恢复，每个决策都可验证，每次执行都可追责。"
];

const zh = {
  "The Next Communication Layer": "下一代通信层",
  SuiMesh: "SuiMesh",
  "Own the Context. Verify the Action.": "拥有上下文，验证行动。",
  "Own the Context.": "拥有上下文。",
  "Verify the Action.": "验证行动。",
  "The Internet connected networks.": "互联网连接了网络。",
  "The Web connected information.": "Web 连接了信息。",
  "Blockchains connected value.": "区块链连接了价值。",
  "AI made intelligence accessible.": "AI 让智能变得可访问。",
  "Today, a new communication challenge is emerging.": "今天，一个新的通信挑战正在出现。",
  "Today, a new participant is entering the network.": "今天，一个新的参与者正在进入网络。",
  "Agents.": "Agent。",
  "As humans and AI agents begin collaborating, communication is no longer just about messages.": "当人类与 AI Agent 开始协作，通信不再只是消息。",
  "It becomes about context, actions, permissions, and accountability.": "它变成了上下文、行动、权限和责任。",
  "If agents are going to act on behalf of humans, we need answers to two questions.": "如果 Agent 要代表人类行动，我们必须回答两个问题。",
  "Who owns the context? Who verifies the action?": "谁拥有上下文？谁验证行动？",
  "Who owns the context?": "谁拥有上下文？",
  "Who verifies the action?": "谁验证行动？",
  "This is where SuiMesh begins.": "这就是 SuiMesh 开始的地方。",
  "Over four decades, networks expanded what they can carry.": "四十年来，网络不断扩展自己能够承载的东西。",
  "First networks. Then information. Then value. Then intelligence. And now, agents.": "先是网络，然后是信息，然后是价值，然后是智能。现在，是 Agent。",
  "First networks.": "先是网络。",
  "Then information. Then value.": "然后是信息，然后是价值。",
  "Then intelligence. And now, agents.": "然后是智能。现在，是 Agent。",
  "Every technological revolution creates a new coordination need.": "每一次技术革命，都会创造新的协作需求。",
  "Every major computing shift expands what can move across a network.": "每一次重大计算变革，都会扩展网络中可以流动的东西。",
  "1983": "1983",
  "1991": "1991",
  "2009": "2009",
  "2023": "2023",
  "2026+": "2026+",
  "Internet": "互联网",
  "Web": "Web",
  "Blockchain": "区块链",
  "Mobile": "移动互联网",
  "Cloud": "云",
  "Networks became connected.": "网络开始连接。",
  "Information became connected.": "信息开始连接。",
  "Value became connected.": "价值开始连接。",
  "Intelligence became accessible.": "智能变得可访问。",
  "Actions become coordinated across humans and agents.": "行动开始在人类与 Agent 之间协作流动。",
  "Computers needed to communicate.": "计算机需要通信。",
  "People needed to communicate.": "人需要通信。",
  "Services needed to communicate.": "服务需要通信。",
  "Humans and agents need trusted coordination.": "人类和 Agent 需要可信协作。",
  "Agents are becoming actors.": "Agent 正在成为行动主体。",
  "They can plan workflows. They can propose actions. They can use tools. They can execute tasks.": "它们可以规划工作流、提出行动、使用工具、执行任务。",
  "They can initiate transactions with human approval.": "它们可以在人工批准下发起交易。",
  "They can plan. They can decide. They can execute. They can transact.": "它们可以规划，可以决策，可以执行，可以交易。",
  "When actions move across multiple humans, agents, wallets, applications, and protocols, communication becomes infrastructure.": "当行动跨越人类、Agent、钱包、应用和协议，通信就会成为基础设施。",
  "And when actions move across multiple humans and agents, communication becomes infrastructure.": "当行动跨越多个人类和 Agent，通信就会成为基础设施。",
  "Who approved this?": "谁批准了它？",
  "Who executed this?": "谁执行了它？",
  "What exactly happened?": "到底发生了什么？",
  "Can you verify it?": "你能验证它吗？",
  "Today, context is trapped inside products.": "今天，上下文被困在产品内部。",
  "Conversations, memory, task history, approvals, execution records, and audit trails rarely survive across clients.": "对话、记忆、任务历史、批准、执行记录和审计轨迹很难跨客户端保留。",
  "Execution history is fragmented.": "执行历史是碎片化的。",
  "Messages, intents, proposals, policy decisions, transactions, receipts, and final reports are stored in different places.": "消息、意图、提案、策略决策、交易、回执和最终报告被存放在不同地方。",
  "The future will not lack agents. It will be full of them.": "未来不会缺少 Agent，未来会充满 Agent。",
  "Each agent may have its own memory, tasks, decisions, and execution capability.": "每个 Agent 都可能拥有自己的记忆、任务、决策和执行能力。",
  "But these capabilities usually live inside separate products, backends, and databases.": "但这些能力通常被锁在不同产品、后端和数据库里。",
  "Every Agent remembers. Few Agents share.": "每个 Agent 都会记忆，但很少有 Agent 会共享。",
  "The action happened. But the context is gone.": "行动发生了，但上下文消失了。",
  "Context Fragmented": "上下文碎片化",
  "Every Action Has a Receipt": "每个行动都有回执",
  "High-stakes actions become recoverable communication state.": "高风险行动会成为可恢复的通信状态。",
  "Every high-stakes action has a verifiable receipt": "每个高风险行动都有可验证回执",
  "Funds, permissions, and contract state are no longer just chat summaries. They become recoverable, auditable communication state.": "资金、权限与合约状态不再只是聊天总结，而是可恢复、可审计的通信状态。",
  "A nice summary is not enough when money, permissions, or contract state are involved.": "当涉及资金、权限或合约状态时，一个漂亮总结远远不够。",
  "Agent summaries are prose. Economic actions need inspectable facts.": "Agent 总结只是文字，经济行动需要可检查的事实。",
  "Without shared context, there is no agent economy.": "没有共享上下文，就没有 Agent 经济。",
  "This is SuiMesh. The communication layer for agent actions.": "这就是 SuiMesh，Agent 行动的通信层。",
  "SuiMesh is not a chat app. Not an agent wallet. Not a trading bot.": "SuiMesh 不是聊天应用，不是 Agent 钱包，也不是交易机器人。",
  "It is the protocol layer that lets apps, wallets, agents, and clients share trusted context.": "它是让应用、钱包、Agent 和客户端共享可信上下文的协议层。",
  "Heavy Action Trace": "重行动轨迹",
  "High-stakes actions become recoverable communication state, not hidden backend logs.": "高风险行动会成为可恢复的通信状态，而不是隐藏的后端日志。",
  "SuiMesh turns actions into a verifiable lifecycle.": "SuiMesh 将行动转化为可验证生命周期。",
  "SuiMesh separates normal conversation from high-stakes actions.": "SuiMesh 将普通对话与高风险行动分离。",
  "Light Path: UserMessage. AgentMessage. MemoryReceipt.": "轻路径：UserMessage，AgentMessage，MemoryReceipt。",
  "Heavy Path: Intent. Proposal. SuiPtbAction. Inspect. Simulate. PolicyDecision. ActionClaim. ExecutionReceipt. AuditEvent.": "重路径：Intent，Proposal，SuiPtbAction，Inspect，Simulate，PolicyDecision，ActionClaim，ExecutionReceipt，AuditEvent。",
  "Agent summary is not enough. PTB bytes are the source of truth.": "Agent 总结不够，PTB 字节才是真相来源。",
  "Manifest must match inspected PTB facts. Policy approves facts, not prose.": "Manifest 必须匹配被检查的 PTB 事实，策略批准事实，而不是文字。",
  "SuiMesh turns agent actions into shared state.": "SuiMesh 将 Agent 行动转化为共享状态。",
  "Walrus stores the context. Sui proves the trace. Seal controls access.": "Walrus 存储上下文，Sui 证明轨迹，Seal 控制访问。",
  "A user can recover the same verified trace from another client.": "用户可以从另一个客户端恢复同一条已验证轨迹。",
  "They no longer need one chat app or one backend to remember what happened.": "他们不再需要依赖某个聊天应用或后端来记住发生了什么。",
  "The future is multi-agent coordination.": "未来是多 Agent 协调。",
  "The agent economy needs more than intelligence. It needs communication.": "Agent 经济需要的不只是智能，它需要通信。",
  "Shared context. Verifiable actions. Recoverable history. Auditable accountability.": "共享上下文，可验证行动，可恢复历史，可审计责任。",
  "Build agents that others can trust.": "构建让其他人可以信任的 Agent。",
  "Integrate the SuiMesh SDK. Make your agent's actions trusted across agents, wallets, applications, and protocols.": "集成 SuiMesh SDK，让你的 Agent 行动在 Agent、钱包、应用和协议之间可信。",
  "Search SuiMesh.link": "搜索 SuiMesh.link",
  "Use SuiMesh SDK.": "Use SuiMesh SDK。",
  "Use SuiMesh SDK": "Use SuiMesh SDK",
  "Use SuiMesh v0.1 SDK.": "Use SuiMesh v0.1 SDK。",
  "Use SuiMesh v0.1 SDK": "Use SuiMesh v0.1 SDK",
  "Official site repo": "官网仓库",
  "Protocol repo": "协议仓库",
  AI: "AI",
  Agent: "Agent",
  "Agent Economy": "Agent 经济",
  "ChatGPT Agent": "ChatGPT Agent",
  "Claude Agent": "Claude Agent",
  "Wallet Agent": "钱包 Agent",
  "Trading Agent": "交易 Agent",
  "Research Agent": "研究 Agent",
  "Enterprise Agent": "企业 Agent",
  "Coding Agent": "代码 Agent",
  "Data Agent": "数据 Agent",
  "Security Agent": "安全 Agent",
  "Design Agent": "设计 Agent",
  "Strategy Agent": "策略 Agent",
  "Protocol Agent": "协议 Agent",
  "Risk Agent": "风控 Agent",
  "Compliance Agent": "合规 Agent",
  "Audit Agent": "审计 Agent",
  "DeFi Agent": "DeFi Agent",
  "Context Lost": "上下文丢失",
  "Research": "研究",
  "Strategy": "策略",
  "Wallet": "钱包",
  "Enterprise": "企业",
  "Protocol": "协议",
  "Research-Agent": "研究 Agent",
  "Strategy-Agent": "策略 Agent",
  "Wallet-Agent": "钱包 Agent",
  "Enterprise-Agent": "企业 Agent",
  "Protocol-Agent": "协议 Agent",
  "WHY? UNKNOWN": "为什么？未知",
  Intent: "意图",
  Proposal: "提案",
  PTB: "PTB",
  Policy: "策略",
  Execution: "执行",
  Receipt: "回执",
  Audit: "审计",
  "Shared Communication State": "共享通信状态",
  Proposal: "提案",
  Approval: "批准",
  Backend: "后端",
  Wallet: "钱包",
  Chain: "链上",
  Logs: "日志",
  Database: "数据库",
  Missing: "缺失",
  Claim: "声明",
  Walrus: "Walrus",
  Sui: "Sui",
  Transaction: "交易",
  "Action Receipt": "行动回执",
  Executor: "执行者",
  "Alice Wallet": "Alice 钱包",
  "Transfer < 1000 USDC": "转账 < 1000 USDC",
  "Transfer 1000 USDC": "转账 1000 USDC",
  "Prepared by Trading Agent": "Trading Agent 生成",
  "0x7a...91f3": "0x7a...91f3",
  "✓ inspected": "✓ 已检查",
  "Max transfer < 1000 USDC": "单笔转账 ≤ 1000 USDC",
  "✓ approved": "✓ 已通过",
  "Executor: Alice Wallet": "Alice 钱包",
  "✓ claimed": "✓ 已认领",
  "Tx: 0x9c...42ab": "Tx: 0x9c...42ab",
  "✓ success": "✓ 成功",
  "Walrus archive: bafy...": "Walrus Archive: bafy...",
  "Sui trace: 0x...": "Sui Trace: 0x...",
  "✓ recoverable": "✓ 可恢复",
  Timestamp: "时间戳",
  Status: "状态",
  Executed: "已执行",
  Verify: "验证",
  "user goal": "用户目标",
  "agent plan": "Agent 计划",
  "source of truth": "真相来源",
  facts: "事实",
  decision: "决策",
  "executor lock": "执行者锁定",
  "execution proof": "执行证明",
  "encrypted details and audit archive": "加密细节与审计归档",
  "refs, hashes, status, claim state": "引用、哈希、状态、声明状态"
};

function translate(text) {
  return currentLanguage === "zh" ? zh[text] || text : text;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function decorateTypedLine(line) {
  if (!line.closest(".network-expansion-slide")) return;
  const text = translate(line.dataset.en || line.dataset.text || line.textContent.trim());
  const terms = currentLanguage === "zh"
    ? ["网络", "信息", "价值", "智能", "Agent"]
    : ["networks", "information", "value", "intelligence", "agents"];
  let html = escapeHtml(text);
  terms.forEach((term) => {
    html = html.replace(new RegExp(escapeRegExp(term), "gi"), (match) => `<strong class="keyword">${match}</strong>`);
  });
  line.innerHTML = html;
}

function allPanels() {
  return [...document.querySelectorAll(".panel")];
}

function narrativePanels() {
  return [...document.querySelectorAll(".narrative-panel")];
}

function getCurrentPanel() {
  const viewportCenter = window.innerHeight / 2;
  return allPanels().reduce((best, panel) => {
    const rect = panel.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
    if (!best || distance < best.distance) return { panel, distance };
    return best;
  }, null)?.panel;
}

function scrollToPanel(panel) {
  if (!panel) return;
  panel.classList.add("is-visible");
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(startVisiblePanels, 420);
}

function updateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const value = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
  document.documentElement.style.setProperty("--scroll-progress", value.toFixed(4));
  if (progress) progress.style.width = `${value * 100}%`;
}

function clearTyping(line) {
  if (line._typingTimer) {
    window.clearInterval(line._typingTimer);
    line._typingTimer = null;
  }
  if (line._typingDelay) {
    window.clearTimeout(line._typingDelay);
    line._typingDelay = null;
  }
  line.classList.remove("is-typing", "is-typed");
  line.dataset.typed = "false";
}

function typeText(line) {
  return new Promise((resolve) => {
    if (line.dataset.typed === "true") {
      resolve();
      return;
    }

    if (!line.dataset.en) {
      line.dataset.en = line.dataset.text || line.textContent.trim();
    }

    clearTyping(line);

    const text = translate(line.dataset.en);
    line.textContent = "";
    line.dataset.typed = "true";
    line.classList.add("is-typing");

    const delay = Number.parseInt(line.dataset.delay || "0", 10);

    line._typingDelay = window.setTimeout(() => {
      let index = 0;
      const speed = text.length > 72 ? 42 : text.length > 38 ? 50 : 62;
      line._typingTimer = window.setInterval(() => {
        line.textContent = text.slice(0, index + 1);
        index += 1;
        if (index >= text.length) {
          window.clearInterval(line._typingTimer);
          line._typingTimer = null;
          line.classList.remove("is-typing");
          line.classList.add("is-typed");
          decorateTypedLine(line);
          window.setTimeout(resolve, 520);
        }
      }, speed);
    }, delay);
  });
}

function resetPanel(panel) {
  panel.dataset.panelTyped = "false";
  panel.querySelectorAll(".type-line").forEach((line) => {
    clearTyping(line);
    line.textContent = "";
  });
}

function completePanel(panel) {
  panel.querySelectorAll(".type-line").forEach((line) => {
    if (!line.dataset.en) line.dataset.en = line.dataset.text || line.textContent.trim();
    clearTyping(line);
    line.textContent = translate(line.dataset.en);
    decorateTypedLine(line);
    line.dataset.typed = "true";
    line.classList.add("is-typed");
  });
  panel.dataset.panelTyped = "true";
  if (activeTypingPanel === panel) activeTypingPanel = null;
}

async function typePanel(panel, force = false) {
  if (activeTypingPanel && activeTypingPanel !== panel) return;
  if (!force && panel.dataset.panelTyped === "true") return;

  activeTypingPanel = panel;
  panel.dataset.panelTyped = "typing";

  const lines = [...panel.querySelectorAll(".type-line")];
  for (const line of lines) {
    await typeText(line);
  }

  panel.dataset.panelTyped = "true";
  activeTypingPanel = null;
  startVisiblePanels();
}

function prepareStaticLabels() {
  document.querySelectorAll(".timeline-track i, .agent-grid span, .lost-network span, .lost-network em, .case-chain span, .case-chain strong, .context-terms span, .future-chain span, .future-context span, .suimesh-hub span, .trace-flow b, .trace-flow span, .fragment-list b, .fragment-list i, .receipt-card strong, .receipt-card b, .receipt-card span, .receipt-card em, .preview-body strong, .preview-body p, .preview-body a, .repo-links a, .cta-protocol").forEach((node) => {
    if (!node.dataset.en) node.dataset.en = node.textContent.trim();
    node.textContent = translate(node.dataset.en);
  });
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  if (languageToggle) {
    languageToggle.textContent = currentLanguage === "zh" ? "EN" : "中文";
    languageToggle.setAttribute("aria-label", currentLanguage === "zh" ? "Switch to English" : "切换到中文");
  }
  prepareStaticLabels();
  document.querySelectorAll(".type-line").forEach((line) => {
    clearTyping(line);
    line.textContent = "";
  });
  narrativePanels().forEach((panel) => {
    panel.dataset.panelTyped = "false";
  });
  document.querySelectorAll(".heavy-trace-slide").forEach((panel) => setTraceStep(panel, Number.parseInt(panel.dataset.traceStep || "0", 10)));
  activeTypingPanel = null;
  startVisiblePanels();
}

function startVisiblePanels() {
  if (activeTypingPanel) return;
  const currentPanel = getCurrentPanel();
  if (!currentPanel?.classList.contains("narrative-panel")) return;
  currentPanel.classList.add("is-visible");
  if (currentPanel.dataset.panelTyped !== "true") typePanel(currentPanel);
}

function setTraceStep(panel, step) {
  const safeStep = Math.max(0, Math.min(step, traceCaptions.length - 1));
  panel.dataset.traceStep = String(safeStep);
  panel.querySelectorAll("[data-step]").forEach((node) => {
    const nodeStep = Number.parseInt(node.dataset.step, 10);
    node.classList.toggle("is-active", nodeStep <= safeStep);
    node.classList.toggle("is-current", nodeStep === safeStep);
  });
  const caption = panel.querySelector(".trace-caption");
  if (caption) caption.textContent = currentLanguage === "zh" ? zhTraceCaptions[safeStep] : traceCaptions[safeStep];
}

function advanceTrace(panel) {
  if (panel.dataset.panelTyped !== "true") return;
  const current = Number.parseInt(panel.dataset.traceStep || "0", 10);
  setTraceStep(panel, current + 1);
}

function movePanel(direction) {
  const panels = allPanels();
  const current = getCurrentPanel();
  const index = Math.max(0, panels.indexOf(current));
  if (direction === "next") {
    if (current?.classList.contains("narrative-panel") && current.dataset.panelTyped !== "true") {
      completePanel(current);
      return;
    }
    if (current?.classList.contains("heavy-trace-slide")) {
      const step = Number.parseInt(current.dataset.traceStep || "0", 10);
      if (step < traceCaptions.length - 1) {
        advanceTrace(current);
        return;
      }
    }
    scrollToPanel(panels[Math.min(index + 1, panels.length - 1)]);
    return;
  }
  scrollToPanel(panels[Math.max(index - 1, 0)]);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      startVisiblePanels();
    });
  },
  { threshold: 0.72, rootMargin: "-8% 0px -8% 0px" }
);

document.querySelectorAll(".type-line").forEach((line) => {
  line.dataset.en = line.dataset.text || line.textContent.trim();
});
prepareStaticLabels();
reveals.forEach((section) => observer.observe(section));

document.querySelectorAll(".heavy-trace-slide").forEach((panel) => {
  setTraceStep(panel, 0);
  panel.addEventListener("click", () => advanceTrace(panel));
  panel.addEventListener("keydown", (event) => {
    if (event.key !== " " && event.key !== "Enter" && event.key !== "ArrowRight") return;
    event.preventDefault();
    advanceTrace(panel);
  });
});

languageToggle?.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  applyLanguage();
});

controlButtons.forEach((button) => {
  button.addEventListener("click", () => movePanel(button.dataset.direction));
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("scroll", () => window.setTimeout(startVisiblePanels, 120), { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
