"use client";

import { useState } from "react";
import { barriers } from "@/lib/content";
import { LuArrowDown, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { ChatBubble, ChatFrame } from "../Shared";

export default function BarrierExplorer() {
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState<Set<number>>(new Set([0]));
  const [revealed, setRevealed] = useState(false);
  const b = barriers[active];

  const go = (i: number) => {
    const n = (i + barriers.length) % barriers.length;
    setActive(n);
    setRevealed(false);
    setSeen((prev) => new Set(prev).add(n));
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Hambatan yang sering dirasakan</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Enam hal yang sering bikin ragu.
          </h2>
        </div>
        <div className="text-right hidden md:block" aria-live="polite">
          <p className="text-xs text-muted">
            Sudah kamu lihat:{" "}
            <strong className="text-ink">
              {seen.size} dari {barriers.length}
            </strong>
          </p>
          <div className="mt-2 flex gap-1.5" aria-hidden>
            {barriers.map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-7 rounded-full border-[1.5px] border-ink ${seen.has(i) ? "bg-ink" : "bg-white"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[22rem_1fr]">
        <ul className="flex flex-wrap gap-2 lg:grid lg:content-start lg:gap-3">
          {barriers.map((x, i) => {
            const on = i === active;
            return (
              <li key={x.title}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-pressed={on}
                  className={`flex items-center gap-4 rounded-xl border-[1.5px] border-ink p-1 text-left text-sm font-bold transition-all duration-300 ease-spring active:scale-95 lg:w-full lg:rounded-2xl lg:px-4 lg:py-3.5 ${
                    on
                      ? "bg-ink text-white shadow-[5px_5px_0_var(--color-lavender)]"
                      : "bg-white hover:-translate-y-0.5"
                  }`}
                >
                  <span
                    className={`tone-${x.tone} grid size-8 shrink-0 place-items-center rounded-lg border-[1.5px] border-ink text-xs text-ink`}
                  >
                    {i + 1}
                  </span>
                  <span className="sr-only lg:not-sr-only lg:flex-1">
                    {x.title}
                  </span>
                  <LuChevronRight size={16} className="hidden lg:block" />
                </button>
              </li>
            );
          })}
        </ul>

        <div
          className={`tone-${b.tone} brutal rounded-[28px] p-5 transition-colors duration-500 sm:p-8`}
        >
          <div className="flex items-start justify-between gap-4">
            <span key={active} className="chip fade-up">
              Hambatan {active + 1}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Hambatan sebelumnya"
                className="grid size-11 place-items-center rounded-full border-[1.5px] border-ink bg-white transition-all duration-300 ease-spring hover:-translate-x-0.5 hover:bg-cream active:scale-90"
              >
                <LuChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Hambatan berikutnya"
                className="grid size-11 place-items-center rounded-full border-[1.5px] border-ink bg-ink text-white transition-all duration-300 ease-spring hover:translate-x-0.5 active:scale-90"
              >
                <LuChevronRight size={16} />
              </button>
            </div>
          </div>

          <div key={active} className="fade-up">
            <h3 className="mt-5 text-3xl leading-tight font-extrabold sm:text-4xl">
              {b.title}
            </h3>
            <p className="mt-3 text-sm text-muted">
              <strong className="text-ink">Yang sering dirasakan:</strong>{" "}
              {b.felt}
            </p>

            <ChatFrame className="mt-6" header="bg-white">
              <ChatBubble {...b.chat[0]} />
              {revealed ? (
                <ChatBubble {...b.chat[1]} />
              ) : (
                <button
                  type="button"
                  onClick={() => setRevealed(true)}
                  className="nudge flex items-center gap-2 justify-self-end rounded-full border-[1.5px] border-ink bg-white py-1 pr-3 pl-1 text-xs font-semibold shadow-[3px_3px_0_var(--color-ink)] transition-all duration-300 ease-spring hover:-translate-y-0.5 active:scale-95"
                >
                  <span className="grid size-6 place-items-center rounded-full border-[1.5px] border-ink bg-mint text-[0.65rem] font-bold text-ink">
                    D
                  </span>
                  Lihat balasan Dian
                  <LuArrowDown size={12} />
                </button>
              )}
            </ChatFrame>
          </div>
        </div>
      </div>
    </>
  );
}
