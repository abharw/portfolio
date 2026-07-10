"use client";

import { CopyToLLM } from "copy2llm-react";
import { useEffect } from "react";

const UNIFIED_FONT_SIZE_STYLES = `
  .root,
  .toast,
  .sheet h2,
  .sheet .tools .btn,
  .sheet pre {
    font-size: var(--portfolio-font-size, 1rem);
  }
`;

export function CopyAsMarkdown() {
  useEffect(() => {
    const widget = document.querySelector("[data-copy2llm]");
    const shadowRoot = widget?.shadowRoot;

    if (!shadowRoot) return;

    const style = document.createElement("style");
    style.textContent = UNIFIED_FONT_SIZE_STYLES;
    shadowRoot.append(style);

    return () => style.remove();
  }, []);

  return (
    <CopyToLLM
      position="top-right"
      theme="dark"
      content=".mh__content"
      items={["copy", "view", "chatgpt", "claude"]}
      label="Copy as Markdown"
      font="sans"
      radius="rounded"
    />
  );
}
