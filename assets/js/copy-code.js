document.querySelectorAll(".highlight").forEach((block) => {
  const code = block.querySelector("pre code") || block.querySelector("pre");
  if (!code) return;

  const copyIcon = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 4.75A1.75 1.75 0 0 1 5.75 3h6.5A1.75 1.75 0 0 1 14 4.75v8.5A1.75 1.75 0 0 1 12.25 15h-6.5A1.75 1.75 0 0 1 4 13.25zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25zM2 2.75C2 1.784 2.784 1 3.75 1h6.5a.75.75 0 0 1 0 1.5h-6.5a.25.25 0 0 0-.25.25v8.5a.75.75 0 0 1-1.5 0z"/></svg>';
  const copiedIcon = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 5.97-5.97a.75.75 0 0 1 1.06 0"/></svg>';
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-code-button";
  button.innerHTML = copyIcon;
  button.setAttribute("aria-label", "Copy code to clipboard");
  button.title = "Copy code";

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.innerText);
      button.innerHTML = copiedIcon;
      button.setAttribute("aria-label", "Code copied to clipboard");
      button.title = "Copied!";
      window.setTimeout(() => {
        button.innerHTML = copyIcon;
        button.setAttribute("aria-label", "Copy code to clipboard");
        button.title = "Copy code";
      }, 1500);
    } catch {
      button.innerHTML = copyIcon;
      button.setAttribute("aria-label", "Copy to clipboard failed");
      button.title = "Copy failed";
    }
  });

  block.appendChild(button);
});