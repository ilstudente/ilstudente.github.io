"use client";

import React, { useState, useRef, useEffect } from "react";

interface TerminalLine {
  type: "command" | "output" | "error" | "page" | "contact";
  text: string;
  page?: string;
}

/**
 * IMPORTANT: This Terminal component serves ALL page content for the website.
 * The layout.tsx renders ONLY this component, ignoring all Next.js route files.
 *
 * TO UPDATE CONTENT:
 * - Edit the PAGES object below - this is the ONLY place to update page content
 * - Available pages: home, resume, portfolio, blog, about
 * - Do NOT edit files in /app/[page]/page.tsx - they are not used
 */
const PAGES = {
  home: `ABOUT ME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hi, I'm David Ettel, a senior at Harvard studying pure mathematics and computer science.

Mathematically, I am fascinated by algebraic geometry and algebraictopology. Recently, I wrote a thesis on theta characteristics on algebraic curves and how they can be used in combinatorial counting problems.

On the computer science side, my main interest lies in mathematical machine learning. I have been working on research projects in geometric and topological deep learning covering, among other things, the scaling of approximately equivariant networks.

I am also passionate about reasoning machines and using machine learning for mathematical discovery.

INTERESTS
  → Pure Math         Algebraic geometry, algebraic topology
  → Mathematical ML   Geometric & topological deep learning
  → MathxAI           Reasoning machines for mathematical discovery

RESEARCH PROJECTS
  • Theta Characteristics of Quadric Curves{{MENTOR:Thomas Brazelton:https://tbrazel.github.io}}
  • Almost Equivariant ML{{MENTOR:Melanie Weber:https://www.melanie-weber.com}}
  • Non-conflicting flows on cubic bridgeless graphs{{MENTOR:Dr. Philip Wood:https://people.math.harvard.edu/~pmwood/}}
  • Topological Deep Learning{{MENTOR:Vikas Garg:https://people.csail.mit.edu/vgarg/}}
  • HARDMath2: A Benchmark for Applied Mathematics{{MENTOR:Roggeveen:https://www.jamesroggeveen.com}}

CONTACT
  {{CONTACTFORM:Send me a message}}
  GitHub:   {{LINK:github.com/ilstudente:https://github.com/ilstudente}}
  LinkedIn: {{LINK:linkedin.com/in/david-ettel:https://www.linkedin.com/in/david-ettel/}}`,

  resume: `RESUME - David Ettel
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 {{LINK:Click here:/Resume-26.pdf}} to download full CV (PDF)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EDUCATION
  Harvard University | Sept. 2022 - May 2026
  B.A. in Mathematics, Minor in Computer Science, GPA: 3.91

CURRENT RESEARCH
  • Mathematical Researcher, Graph Theory (Harvard, Summer 2025)
  • Research Assistant, Almost Equivariant ML (Harvard, 2024-Present)
    Principal investigator on 6k Harvard KURE grant
  • Research Assistant, Topological Deep Learning (AALTO, Summer 2024)

PUBLICATIONS
  • Effects of Network Pruning on LLM Interpretability (THURJ 2025)
    {{LINK:Paper:https://doi.org/10.62571/gujf5t1klb25jbcbde}} | {{LINK:Code:https://github.com/camilobrownpinilla/Explain-This-Pruner}}
  • HARDMath2: A Benchmark for Applied Mathematics (NeurIPS 2025)
    {{LINK:arXiv:https://arxiv.org/abs/2505.11774}}

TEACHING
  Teaching Assistant for Physical Mathematics (Graduate), Differential
  Topology, Real Analysis, Algebra I, Classical Geometry (2024-Present)

AWARDS
  • Mathematics Olympiads: Honorable Mentions at Cyber Math Competition
    2020 and Middle European Math Olympiad 2020
  • Best Mathematical Pre-scientific Paper in Austria (ÖMG 2021)

SKILLS
  Languages: Python, C/C++, SQL, JavaScript, HTML/CSS, Bash
  ML/Math: PyTorch, PyTorch Geometric, NumPy, Matplotlib, SymPy
  Tools: Git, Docker, LaTeX, Jupyter

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT
  {{CONTACTFORM:Send me a message}}
  GitHub:   {{LINK:github.com/ilstudente:https://github.com/ilstudente}}
  LinkedIn: {{LINK:linkedin.com/in/david-ettel:https://www.linkedin.com/in/david-ettel/}}`,

  portfolio: `PORTFOLIO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REVERSE ENGINEERING DEEPMIND'S CO-MATHEMATICIAN HARNESS
─────────────────────────────────────────────────────────
  DeepMind's co-mathematician system ({{LINK:paper:https://arxiv.org/abs/2605.06651}}) pairs an
  LLM with a formal proof assistant to collaboratively explore mathematical
  conjectures. This project reverse-engineers the harness architecture:
  how the system structures LLM↔solver interaction, manages proof state,
  and orchestrates conjecture generation and verification loops.

  Goal: understand the scaffolding well enough to replicate and extend it
  for use in algebraic geometry and topology research.

  {{LINK:GitHub → ilstudente/comath:https://github.com/ilstudente/comath}}`,

  blog: `BLOG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Coming soon...

Future posts on mathematics, machine learning, and research.`,

  about: `ABOUT ME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hi, I'm David Ettel, a senior at Harvard studying pure mathematics and computer science.

Mathematically, I am fascinated by algebraic geometry and algebraictopology. Recently, I wrote a thesis on theta characteristics on algebraic curves and how they can be used in combinatorial counting problems.

On the computer science side, my main interest lies in mathematical machine learning. I have been working on research projects in geometric and topological deep learning covering, among other things, the scaling of approximately equivariant networks.

I am also passionate about reasoning machines and using machine learning for mathematical discovery.

INTERESTS
  → Pure Math         Algebraic geometry, algebraic topology
  → Mathematical ML   Geometric & topological deep learning
  → MathxAI           Reasoning machines for mathematical discovery

RESEARCH PROJECTS
  • Theta Characteristics of Quadric Curves{{MENTOR:Thomas Brazelton:https://tbrazel.github.io}}
  • Almost Equivariant ML{{MENTOR:Melanie Weber:https://www.melanie-weber.com}}
  • Non-conflicting flows on cubic bridgeless graphs{{MENTOR:Dr. Philip Wood:https://people.math.harvard.edu/~pmwood/}}
  • Topological Deep Learning{{MENTOR:Vikas Garg:https://people.csail.mit.edu/vgarg/}}
  • HARDMath2: A Benchmark for Applied Mathematics{{MENTOR:Roggeveen:https://www.jamesroggeveen.com}}

CONTACT
  {{CONTACTFORM:Send me a message}}
  GitHub:   {{LINK:github.com/ilstudente:https://github.com/ilstudente}}
  LinkedIn: {{LINK:linkedin.com/in/david-ettel:https://www.linkedin.com/in/david-ettel/}}`,
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState<string>("home");
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [history]);

  const addOutput = (text: string, type: "output" | "error" | "page" = "output", page?: string) => {
    setHistory((prev) => [...prev, { type, text, page }]);
  };

  const showPage = (page: string) => {
    if (page in PAGES) {
      setCurrentPage(page);
      // Clear previous content and show only the new page
      setHistory([{ type: "page", text: PAGES[page as keyof typeof PAGES], page }]);
    }
  };

  const handleCommand = (cmd: string) => {
    setHistory((prev) => [...prev, { type: "command", text: cmd }]);

    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = trimmedCmd.split(" ");
    const command = parts[0];
    const args = parts.slice(1);

    if (!command) return;

    switch (command) {
      case "help":
        setHistory([{
          type: "output",
          text: `COMMANDS
  help              Show this help message
  ls                List available pages
  contact           Send me a message
  clear             Clear terminal history

PAGES
  about             About me, research, and contact info
  resume            Professional experience and CV download
  portfolio         Projects (coming soon)
  blog              Blog posts (coming soon)

NAVIGATION
  Simply type a page name to navigate:
  about, resume, portfolio, or blog

TIPS
  • Press Tab to autocomplete
  • Use ↑/↓ arrow keys for command history
  • Click anywhere to focus the command line

EXAMPLES
  about             Navigate to about page
  contact           Open contact form
  clear             Clear the screen`
        }]);
        break;

      case "contact":
        setHistory([{ type: "contact", text: "" }]);
        setContactForm({ name: '', email: '', message: '' });
        break;

      case "ls":
        setHistory([{
          type: "output",
          text: "about  resume  portfolio  blog"
        }]);
        break;

      case "clear":
        setHistory([]);
        setCurrentPage("home");
        break;

      case "home":
        // Redirect home to about (hidden alias)
        showPage("about");
        break;

      case "resume":
      case "portfolio":
      case "blog":
      case "about":
        showPage(command);
        break;

      default:
        setHistory([{
          type: "error",
          text: `Command not found: ${command}\nType 'help' for available commands`
        }]);
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setCommandHistory((prev) => [...prev, input]);
      setInput("");
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const commands = ["help", "ls", "cd", "cat", "clear", "pwd", ...Object.keys(PAGES)];
      const matches = commands.filter((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  return (
    <div
      onClick={(e) => {
        // Don't focus command input if clicking inside a form element
        const target = e.target as HTMLElement;
        if (!target.closest('form') && !target.closest('input') && !target.closest('textarea') && !target.closest('button')) {
          inputRef.current?.focus();
        }
      }}
      style={{ width: '61.8vw', minWidth: '40rem', maxWidth: '60rem', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'text' }}
    >
      {/* Output area - scrolls up */}
      {history.length > 0 && (
        <div
          ref={outputRef}
          className="w-full overflow-y-auto font-mono mb-4"
          style={{
            fontSize: '0.95rem',
            maxHeight: '60vh',
            minHeight: '200px',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {history.map((line, i) => {
            // Dim all items except the last command and its output
            const isRecent = i >= history.length - 2;
            const textColor = isRecent ? '#ffffff' : '#666666';
            const arrowColor = isRecent ? '#ffffff' : '#666666';
            const isLast = i === history.length - 1;

            return (
              <div key={i} className="mb-3" ref={isLast ? lastItemRef : null}>
                {line.type === "command" && (
                  <div className="flex items-start">
                    <span style={{ color: arrowColor, marginRight: '0.5rem' }}>⇒</span>
                    <span style={{ color: textColor }}>{line.text}</span>
                  </div>
                )}
                {line.type === "output" && (
                  <div
                    className={`rounded p-6 leading-relaxed ${line.text.includes('Welcome to davidettel.com') ? 'text-center' : ''}`}
                    style={{
                      backgroundColor: '#000000',
                      color: textColor,
                      fontSize: '0.95rem',
                      fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Consolas', 'Courier New', monospace",
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {line.text}
                  </div>
                )}
                {line.type === "page" && (
                  <div
                    className="ml-6 leading-relaxed font-mono"
                    style={{
                      color: textColor,
                      fontSize: '0.95rem',
                      fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Consolas', 'Courier New', monospace"
                    }}
                  >
                    {line.text.split('\n').map((textLine, idx) => {
                      // Parse line for links and mentors
                      const parts: React.ReactElement[] = [];
                      let remainingText = textLine;
                      let key = 0;

                      // Check for mentor tag with URL at the end of line
                      const mentorMatch = remainingText.match(/^(.+?){{MENTOR:(.+?):(.+?)}}$/);
                      if (mentorMatch) {
                        return (
                          <div key={idx} className="flex justify-between items-start">
                            <span className="whitespace-pre">{mentorMatch[1]}</span>
                            <a
                              href={mentorMatch[3]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="whitespace-pre ml-4 underline hover:text-cyan-400"
                              style={{ color: 'inherit', cursor: 'pointer' }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              ({mentorMatch[2]})
                            </a>
                          </div>
                        );
                      }

                      // Parse inline links {{LINK:text:url}} and contact form {{CONTACTFORM:text}}
                      while (remainingText.length > 0) {
                        const contactFormMatch = remainingText.match(/{{CONTACTFORM:(.+?)}}/);
                        const linkMatch = remainingText.match(/{{LINK:(.+?):(.+?)}}/);

                        // Check which match comes first
                        const contactFormIndex = contactFormMatch?.index ?? Infinity;
                        const linkIndex = linkMatch?.index ?? Infinity;

                        if (contactFormIndex < linkIndex && contactFormMatch && contactFormIndex !== Infinity) {
                          // Add text before contact form button
                          if (contactFormIndex > 0) {
                            parts.push(
                              <span key={`text-${key++}`} className="whitespace-pre-wrap">
                                {remainingText.substring(0, contactFormIndex)}
                              </span>
                            );
                          }
                          // Add contact form button
                          parts.push(
                            <button
                              key={`contact-${key++}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setHistory([{ type: "contact", text: "" }]);
                                setContactForm({ name: '', email: '', message: '' });
                              }}
                              className="underline hover:text-cyan-400"
                              style={{ color: 'inherit', cursor: 'pointer', background: 'none', border: 'none', padding: 0, font: 'inherit' }}
                            >
                              {contactFormMatch[1]}
                            </button>
                          );
                          remainingText = remainingText.substring(contactFormIndex + contactFormMatch[0].length);
                        } else if (linkMatch && linkMatch.index !== undefined) {
                          // Add text before link
                          if (linkMatch.index > 0) {
                            parts.push(
                              <span key={`text-${key++}`} className="whitespace-pre-wrap">
                                {remainingText.substring(0, linkMatch.index)}
                              </span>
                            );
                          }
                          // Add link
                          parts.push(
                            <a
                              key={`link-${key++}`}
                              href={linkMatch[2]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-cyan-400"
                              style={{ color: 'inherit', cursor: 'pointer' }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {linkMatch[1]}
                            </a>
                          );
                          remainingText = remainingText.substring(linkMatch.index + linkMatch[0].length);
                        } else {
                          // No more links, add remaining text
                          parts.push(
                            <span key={`text-${key++}`} className="whitespace-pre-wrap">
                              {remainingText}
                            </span>
                          );
                          break;
                        }
                      }

                      return <div key={idx}>{parts}</div>;
                    })}
                  </div>
                )}
                {line.type === "error" && (
                  <div
                    className="rounded p-6 leading-relaxed"
                    style={{
                      backgroundColor: '#000000',
                      color: isRecent ? 'var(--terminal-red)' : '#664444',
                      fontSize: '0.95rem',
                      fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Consolas', 'Courier New', monospace",
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {line.text}
                  </div>
                )}
                {line.type === "contact" && (
                  <div
                    className="rounded p-6"
                    style={{
                      backgroundColor: '#000000',
                      color: textColor
                    }}
                  >
                    <h2 className="text-lg mb-4" style={{ color: '#ffffff' }}>
                      Contact Form
                    </h2>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const subject = encodeURIComponent(`Message from ${contactForm.name}`);
                        const body = encodeURIComponent(`From: ${contactForm.name} (${contactForm.email})\n\n${contactForm.message}`);
                        window.location.href = `mailto:davidettel@proton.me?subject=${subject}&body=${body}`;
                      }}
                      className="space-y-4 font-mono"
                      style={{ fontSize: '0.95rem' }}
                    >
                      <div>
                        <label className="block mb-1">Name:</label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full bg-transparent border rounded p-2 outline-none"
                          style={{
                            borderColor: 'var(--border-color)',
                            color: 'var(--text-primary)',
                            fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Consolas', 'Courier New', monospace"
                          }}
                        />
                      </div>
                      <div>
                        <label className="block mb-1">Email:</label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full bg-transparent border rounded p-2 outline-none"
                          style={{
                            borderColor: 'var(--border-color)',
                            color: 'var(--text-primary)',
                            fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Consolas', 'Courier New', monospace"
                          }}
                        />
                      </div>
                      <div>
                        <label className="block mb-1">Message:</label>
                        <textarea
                          required
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          rows={6}
                          className="w-full bg-transparent border rounded p-2 outline-none resize-none"
                          style={{
                            borderColor: 'var(--border-color)',
                            color: 'var(--text-primary)',
                            fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Consolas', 'Courier New', monospace"
                          }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="rounded px-6 py-2 hover:bg-white hover:text-black transition-colors"
                        style={{
                          border: '1px solid #ffffff',
                          color: '#ffffff',
                          backgroundColor: 'transparent',
                          fontSize: '0.95rem',
                          fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Consolas', 'Courier New', monospace"
                        }}
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Input area - centered */}
      <div className="w-full">
        <div className="border rounded p-7 shadow-2xl" style={{
          backgroundColor: '#000000',
          borderColor: 'var(--border-color)'
        }}>
          <form onSubmit={handleSubmit} className="flex items-center">
            <span style={{ color: '#ffffff', marginRight: '0.5rem', fontSize: '1.1rem' }}>⇒</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none font-mono"
              style={{
                fontSize: '0.95rem',
                fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Consolas', 'Courier New', monospace",
                color: 'var(--text-primary)',
                caretColor: 'var(--terminal-green)'
              }}
              placeholder="type something, for example: about, resume, portfolio, blog or help"
              autoFocus
            />
            <span className="w-2 h-5 animate-pulse" style={{ backgroundColor: 'var(--terminal-green)' }}></span>
          </form>
        </div>
      </div>
    </div>
  );
}
