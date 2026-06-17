const progress = document.querySelector(".progress span");
const reveals = [...document.querySelectorAll(".reveal")];
const languageToggle = document.querySelector(".language-toggle");
let currentLanguage = "en";

const zh = {
  "The Next Communication Layer": "下一代通信层",
  "Own the Context. Verify the Action.": "拥有上下文，验证行动。",
  "The Internet connected computers. Blockchains connected value.": "互联网连接了计算机，区块链连接了价值。",
  "Today, agents are becoming actors. A new communication problem is emerging.": "今天，Agent 正在成为行动主体，一个新的通信问题正在出现。",
  "Every revolution creates a new communication need.": "每一次技术革命，都会创造新的通信需求。",
  "1996. Internet.": "1996，互联网。",
  "Computers needed a common way to exchange packets, addresses, and state across networks.": "计算机需要一种通用方式，在网络之间交换数据包、地址和状态。",
  "2006. Mobile.": "2006，移动互联网。",
  "People became always online, so communication moved from places to identities and devices.": "人开始始终在线，通信从固定地点转向身份与设备。",
  "2016. Cloud.": "2016，云。",
  "Services became distributed, so APIs and event streams became the language of software.": "服务开始分布式运行，API 与事件流成为软件之间的语言。",
  "2020. AI.": "2020，人工智能。",
  "Language became an interface, and software started interpreting intent instead of only receiving commands.": "语言成为新的界面，软件开始理解意图，而不只是接收命令。",
  "2025. Agent.": "2025，Agent。",
  "Agents began planning, proposing, and executing actions across tools, wallets, and protocols.": "Agent 开始跨工具、钱包和协议进行规划、提案与执行。",
  "2026+. Agent Economy.": "2026+，Agent 经济。",
  "Agents now need shared context, not just messages, to coordinate economic actions safely.": "Agent 现在需要共享上下文，而不只是消息，才能安全协作经济行动。",
  "The future won't lack agents. It will be full of them.": "未来不会缺少 Agent，未来会充满 Agent。",
  "Each agent has memory, tasks, decisions, and execution capability.": "每个 Agent 都有记忆、任务、决策和执行能力。",
  "But these capabilities live inside separate products, backends, and databases.": "但这些能力被锁在不同产品、后端和数据库里。",
  "Every Agent remembers. No Agent shares.": "每个 Agent 都会记忆，但没有 Agent 会共享。",
  "Context is trapped inside products.": "上下文被困在产品内部。",
  "Conversation, memory, task history, and audit trails rarely survive across clients.": "对话、记忆、任务历史和审计轨迹很难跨客户端恢复。",
  "Execution history is fragmented.": "执行历史是碎片化的。",
  "Messages, proposals, policy decisions, transactions, and final reports are stored in different places.": "消息、提案、策略决策、交易和最终报告被存放在不同地方。",
  "The action happened. But the context is gone.": "行动发生了，但上下文消失了。",
  "A nice summary is not enough when money, permissions, or contract state are involved.": "当涉及资金、权限或合约状态时，一个漂亮总结远远不够。",
  "Agent summaries are prose. Economic actions need inspectable facts.": "Agent 总结只是文字，经济行动需要可检查的事实。",
  "Communication is no longer messages. It is context.": "通信不再只是消息，而是上下文。",
  "Without shared context, there is no agent economy.": "没有共享上下文，就没有 Agent 经济。",
  "Agents cannot coordinate trust if the state of the action disappears between systems.": "如果行动状态在系统之间消失，Agent 就无法协作建立信任。",
  "When Agents become actors, communication becomes infrastructure.": "当 Agent 成为行动主体，通信就会成为基础设施。",
  "TCP/IP enabled computers. HTTP enabled the web. SMTP enabled email.": "TCP/IP 支撑计算机通信，HTTP 支撑网页通信，SMTP 支撑邮件通信。",
  "The agent era needs a communication layer for actions.": "Agent 时代需要一个行动通信层。",
  "This is SuiMesh, the communication layer for agent actions.": "这就是 SuiMesh，Agent 行动的通信层。",
  "SuiMesh is not a chat app, an agent wallet, or a trading bot.": "SuiMesh 不是聊天应用、Agent 钱包或交易机器人。",
  "It is the protocol layer that lets apps, wallets, agents, and clients share trusted context.": "它是让应用、钱包、Agent 和客户端共享可信上下文的协议层。",
  "SuiMesh turns intents, proposals, PTB actions, policy decisions, receipts, and audits into shared state.": "SuiMesh 将意图、提案、PTB 行动、策略决策、回执和审计转化为共享状态。",
  "Chat is light. Money, permissions, and contract state are heavy.": "聊天是轻路径，资金、权限和合约状态是重路径。",
  "SuiMesh separates normal conversation from high-stakes action traces.": "SuiMesh 将普通对话与高风险行动轨迹分离。",
  "Agent summary is untrusted. PTB bytes are the source of truth.": "Agent 总结不可信，PTB 字节才是真相来源。",
  "Policy approves inspected facts, not prose.": "策略批准的是被检查过的事实，而不是文字描述。",
  "Walrus stores the context. Sui proves the trace. Seal controls access.": "Walrus 存储上下文，Sui 证明轨迹，Seal 控制访问。",
  "The result is user-owned, recoverable, and verifiable communication state.": "最终形成用户拥有、可恢复、可验证的通信状态。",
  "A user can recover the same verified trace from another client.": "用户可以从另一个客户端恢复同一条已验证轨迹。",
  "They no longer need one chat app or one backend to remember what happened.": "他们不再需要依赖某个聊天应用或后端来记住发生了什么。",
  "The future is collaborative agents. SuiMesh powers their communication.": "未来属于协作型 Agent，SuiMesh 为它们提供通信能力。",
  "The agent economy needs more than intelligence. It needs communication.": "Agent 经济需要的不只是智能，它需要通信。",
  "Shared context. Verifiable actions. Recoverable history. Auditable accountability.": "共享上下文，可验证行动，可恢复历史，可审计责任。",
  "SuiMesh connects agent communication.": "SuiMesh 连接 Agent 通信。",
  Internet: "互联网",
  Mobile: "移动",
  Cloud: "云",
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
  "Context Lost": "上下文丢失",
  "Research": "研究",
  "Strategy": "策略",
  "Wallet": "钱包",
  "Enterprise": "企业",
  "Protocol": "协议",
  "WHY? UNKNOWN": "为什么？未知",
  Intent: "意图",
  Proposal: "提案",
  PTB: "PTB",
  Policy: "策略",
  Execution: "执行",
  Receipt: "回执",
  Audit: "审计",
  "Shared Communication State": "共享通信状态"
};

function translate(text) {
  return currentLanguage === "zh" ? zh[text] || text : text;
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

function typeText(line, force = false) {
  if (!force && line.dataset.typed === "true") return;

  if (!line.dataset.en) {
    line.dataset.en = line.dataset.text || line.textContent.trim();
  }

  clearTyping(line);

  const text = translate(line.dataset.en);
  line.textContent = "";
  line.dataset.typed = "true";
  line.classList.add("is-typing");

  const baseDelay = Number.parseInt(line.closest("[style*='--delay']")?.style.getPropertyValue("--delay"), 10) || 0;
  const lineIndex = [...line.closest(".panel").querySelectorAll(".type-line")].indexOf(line);
  const delay = baseDelay + lineIndex * 220;

  line._typingDelay = window.setTimeout(() => {
    let index = 0;
    const speed = text.length > 45 ? 22 : 30;
    line._typingTimer = window.setInterval(() => {
      line.textContent = text.slice(0, index + 1);
      index += 1;
      if (index >= text.length) {
        window.clearInterval(line._typingTimer);
        line._typingTimer = null;
        line.classList.remove("is-typing");
        line.classList.add("is-typed");
      }
    }, speed);
  }, delay);
}

function prepareStaticLabels() {
  document.querySelectorAll(".timeline-track i, .agent-grid span, .lost-network span, .case-chain span, .case-chain strong, .context-terms span, .future-chain span, .future-context span, .suimesh-hub span").forEach((node) => {
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
    if (line.closest(".is-visible")) {
      typeText(line, true);
    } else {
      clearTyping(line);
      line.textContent = "";
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      entry.target.querySelectorAll(".type-line").forEach((line) => typeText(line));
    });
  },
  { threshold: 0.34, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll(".type-line").forEach((line) => {
  line.dataset.en = line.dataset.text || line.textContent.trim();
});
prepareStaticLabels();
reveals.forEach((section) => observer.observe(section));

languageToggle?.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  applyLanguage();
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
