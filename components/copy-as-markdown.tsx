"use client";

import { CopyToLLM } from "copy2llm-react";

export function CopyAsMarkdown() {
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
