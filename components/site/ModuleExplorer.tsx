'use client';

import React, { useRef, useState } from 'react';
import { content } from '@/lib/content-v2';

/** Tabbed explorer for the four masterclass modules. Arrow keys move between tabs. */
export const ModuleExplorer: React.FC = () => {
  const modules = content.curriculum.modules;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const m = modules[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + modules.length) % modules.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <div role="tablist" aria-label="Masterclass modules" aria-orientation="vertical" className="flex flex-col gap-2">
        {modules.map((mod, i) => {
          const selected = i === active;
          return (
            <button
              key={mod.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`module-tab-${mod.id}`}
              aria-selected={selected}
              aria-controls="module-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                selected
                  ? 'border-[var(--navy)] bg-white shadow-[0_16px_32px_-20px_rgba(10,18,96,0.55)]'
                  : 'border-[var(--line)] bg-white/60 hover:border-[#0048A8]/40 hover:bg-white'
              }`}
            >
              <span className={`font-serif text-2xl leading-none ${selected ? 'text-[var(--gold)]' : 'text-[var(--muted)]'}`}>
                {mod.id}
              </span>
              <span>
                <span className="block text-[15px] font-semibold leading-snug text-[var(--ink)]">{mod.title}</span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                  {mod.stagesCovered}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="module-panel"
        role="tabpanel"
        aria-labelledby={`module-tab-${m.id}`}
        className="rounded-3xl border border-[var(--line)] bg-white p-7 sm:p-9"
      >
        <div key={m.id} className="animate-[site-panel_0.45s_cubic-bezier(0.16,1,0.3,1)]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--royal)]">
            Module {m.id} · {m.stagesCovered}
          </p>
          <h3 className="font-serif mt-4 text-2xl leading-snug text-[var(--ink)] sm:text-3xl">{m.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{m.outcome}</p>
          <ul className="mt-7 space-y-3 border-t border-[var(--line)] pt-7 text-[15px] text-[var(--text)]">
            {m.bullets.map((b, i) => (
              <li key={b} className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--royal-soft)] text-xs font-semibold text-[var(--royal)]">
                  {i + 1}
                </span>
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl bg-[var(--paper)] px-4 py-3 text-sm text-[var(--muted)]">
            Workbook tool: <span className="font-semibold text-[var(--ink)]">{m.deliverable}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
