"use client";

import { CopyToLLM } from "copy2llm-react";
import { useEffect } from "react";

// The widget renders in a Shadow DOM with `all: initial`, so page styles don't reach it.
// Custom properties still inherit, which lets these rules pick up the page's fonts.
const PORTFOLIO_WIDGET_STYLES = `
  .root {
    top: 32px;
    right: 32px;
    font-family: var(--font-crimson), "Iowan Old Style", Georgia, serif;
    font-size: var(--portfolio-font-size, 1rem);
    font-weight: 300;
    line-height: 1.6;
    color: #0a0a09;
  }

  .split {
    align-items: baseline;
    gap: 6px;
    border-radius: 0;
    box-shadow: none;
  }

  .btn,
  .btn:hover {
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    color: #0a0a09;
  }

  .primary .c2l-ic {
    display: none;
  }

  .primary .c2l-label {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: rgba(10, 10, 9, 0.28);
    text-underline-offset: 4px;
    transition: text-decoration-color 0.2s ease;
  }

  .primary:hover .c2l-label {
    text-decoration-color: #0a0a09;
  }

  .caret {
    align-self: center;
    color: #6b7280;
  }

  .caret:hover {
    color: #0a0a09;
  }

  .caret .c2l-ic {
    width: 11px;
    height: 11px;
    opacity: 1;
  }

  .btn:focus-visible,
  .menuitem:focus-visible {
    outline: 1px solid #0a0a09;
    outline-offset: 4px;
  }

  .menu {
    min-width: 220px;
    margin-top: 12px;
    padding: 6px 0;
    gap: 0;
    background: #ffffff;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    border: 1px solid #ebebea;
    border-radius: 2px;
    box-shadow: none;
  }

  .menuitem {
    padding: 6px 16px;
    gap: 12px;
    border-radius: 0;
    color: #0a0a09;
  }

  .menuitem:hover,
  .menuitem:focus-visible {
    background: #f7f7f6;
  }

  .menuitem .c2l-ic {
    width: 14px;
    height: 14px;
    opacity: 0.45;
  }

  .toast {
    margin-top: 8px;
    padding: 0;
    border-radius: 0;
    background: transparent;
    color: #6b7280;
    font-size: var(--portfolio-font-size, 1rem);
  }

  .overlay {
    background: rgba(255, 255, 255, 0.72);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }

  .sheet {
    background: #ffffff;
    color: #0a0a09;
    border: 1px solid #ebebea;
    border-radius: 2px;
    box-shadow: none;
  }

  .sheet header {
    padding: 16px 16px 16px 24px;
    border-bottom-color: #f0f0ef;
  }

  .sheet h2 {
    font-size: var(--portfolio-font-size, 1rem);
    font-weight: 400;
    letter-spacing: 0;
  }

  .sheet .tools .btn {
    height: auto;
    padding: 0;
    font-size: var(--portfolio-font-size, 1rem);
    font-weight: 300;
    border-radius: 0;
  }

  .sheet .tools {
    gap: 20px;
  }

  .sheet .tools .btn .c2l-ic {
    display: none;
  }

  .sheet .ov-copy,
  .sheet .ov-copy:hover,
  .sheet .ov-close,
  .sheet .ov-close:hover {
    color: #0a0a09;
    background: transparent;
    border: 0;
    opacity: 1;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: rgba(10, 10, 9, 0.28);
    text-underline-offset: 4px;
  }

  .sheet .ov-copy:hover,
  .sheet .ov-close:hover {
    text-decoration-color: #0a0a09;
  }

  .sheet pre {
    padding: 24px;
    font-size: 13px;
    color: #3f3f3e;
  }

  /* On phones the link scrolls away with the header instead of floating over the copy. */
  @media (max-width: 640px) {
    .root {
      position: absolute;
      top: clamp(24px, 9vw, 40px);
      right: clamp(24px, 9vw, 40px);
    }
  }
`;

export function CopyAsMarkdown() {
  useEffect(() => {
    const widget = document.querySelector("[data-copy2llm]");
    const shadowRoot = widget?.shadowRoot;

    if (!shadowRoot) return;

    const style = document.createElement("style");
    style.textContent = PORTFOLIO_WIDGET_STYLES;
    shadowRoot.append(style);

    return () => style.remove();
  }, []);

  return (
    <CopyToLLM
      position="top-right"
      theme="light"
      content=".mh__content"
      items={["copy", "view", "chatgpt", "claude"]}
      label="Copy as Markdown"
      font="serif"
      radius="sharp"
    />
  );
}
