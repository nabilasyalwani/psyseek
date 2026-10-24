import Link from "next/link";
import type { ReactNode } from "react";
import { chapters, DISCLAIMER, TAGLINE } from "@/lib/content";
import { Container, SpinningBadge } from "@/components/Shared";
import { ScrollLink } from "@/components/ScrollLink";
import { LuArrowRight, LuHeart, LuInfo, LuMessageCircle } from "react-icons/lu";
import { PiSparkleFill } from "react-icons/pi";
import {
  Overwhelmed,
  Doubts,
  GroupHug,
  MirrorPerson,
  NightWindow,
  PeopleCircleNew,
} from "@/components/Illustrations";

const marquee = [
  "Kenali stres akademik",
  "Temukan dukungan",
  "Pahami hambatanmu",
  "Mulai dari langkah kecil",
];

const chapterArt: Record<string, ReactNode> = {
  "01": <Overwhelmed className="h-full w-full" />,
  "02": <PeopleCircleNew className="spin-slower h-full w-full" />,
  "03": <MirrorPerson className="h-full w-full" />,
  "04": <Doubts className="h-full w-full" />,
  "05": <NightWindow className="h-full w-full" />,
};

export default function Home() {
  const [first, second, ...rest] = chapters;
  return (
    <>
      <section className="dots-bg relative overflow-hidden">
        <Container className="grid items-center gap-12 py-14 lg:grid-cols-[1.15fr_1fr] lg:items-stretch lg:pb-0">
          <div className="relative lg:pb-14">
            <PiSparkleFill
              className="absolute top-32 -left-6 hidden size-5 text-orange sm:block"
              color="var(--color-orange)"
            />
            <span className="chip">
              <span className="grid size-6 place-items-center rounded-full border-[1.5px] border-ink bg-mint">
                <LuHeart size={12} />
              </span>
              {TAGLINE}
            </span>
            <h1 className="mt-6 leading-[0.98] font-extrabold text-5xl lg:text-6xl">
              Tidak Harus Menghadapi Semuanya{" "}
              <span className="highlight mt-2 -rotate-2 bg-butter">
                Sendiri
              </span>
            </h1>
            <p className="mt-6 lg:lg:max-w-lg text-lg font-semibold">
              Pernah nggak, kamu merasa tugas kuliah seperti tidak ada habisnya,
              pikiran penuh, atau capek duluan sebelum mulai mengerjakan
              sesuatu?
            </p>
            <div className="mt-8 grid items-start gap-8 max-sm:gap-6 sm:grid-cols-2">
              <div className="max-sm:contents">
                <div className="brutal sm:-rotate-2 rounded-3xl bg-white p-5 transition-transform duration-300 ease-spring hover:-rotate-0">
                  <span className="chip bg-pink!">
                    <span className="grid size-6 place-items-center rounded-full border-[1.5px] border-ink bg-white">
                      <LuMessageCircle size={12} />
                    </span>
                    Kamu nggak sendirian
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Kadang kita tahu ada yang terasa berat, tapi bingung harus
                    mulai cerita dari mana atau harus melakukan apa. Kalau kamu
                    pernah merasakannya,{" "}
                    <strong className="text-ink">kamu nggak sendirian.</strong>
                  </p>
                </div>
                <ScrollLink
                  href="#chapter"
                  className="w-full btn btn-dark sm:mt-7 justify-center px-8! py-3! shadow-[4px_4px_0_var(--color-orange)]! max-sm:order-last max-sm:mt-0"
                >
                  Mulai
                  <span className="btn-icon pulse-ring ml-2 grid size-6 place-items-center rounded-full bg-orange text-ink">
                    <LuArrowRight size={14} />
                  </span>
                </ScrollLink>
              </div>
              <div className="brutal sm:rotate-1 rounded-3xl bg-mint p-5 transition-transform duration-300 ease-spring hover:rotate-0 sm:mt-4">
                <span className="chip">
                  <span className="grid size-6 place-items-center rounded-full border-[1.5px] border-ink bg-butter">
                    <PiSparkleFill size={11} color="var(--color-ink)" />
                  </span>
                  Di website ini
                </span>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Kamu bisa mengenali stres akademik, memahami apa yang kadang
                  bikin kita ragu mencari bantuan, dan menemukan pilihan
                  dukungan yang bisa kamu pertimbangkan. Kamu tidak harus punya
                  semua jawaban.
                </p>
                <p className="mt-3 font-display font-extrabold">
                  Kita mulai pelan-pelan, yuk.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:flex lg:flex-col">
            <div className="brutal relative aspect-4/5 overflow-hidden rounded-t-full rounded-b-4xl bg-linear-to-b from-lavender to-periwinkle lg:aspect-auto lg:min-h-120 lg:flex-1 lg:rounded-b-none lg:border-b-0">
              <div className="spin-slower absolute inset-x-10 top-1/2 aspect-square -translate-y-1/2 rounded-full border-[1.5px] border-dashed border-ink/50" />
              <GroupHug className="absolute inset-0 m-auto w-full" priority />
            </div>

            <div className="brutal-sm floaty absolute top-[22%] -left-4 flex -rotate-3 items-center gap-2 rounded-2xl bg-white px-3 py-2 sm:-left-12">
              <span className="grid size-8 place-items-center rounded-lg border-[1.5px] border-ink bg-pink">
                <LuMessageCircle size={14} />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold">
                  Kamu tidak sendirian
                </span>
                <span className="block text-xs text-muted">
                  Yuk, pahami bareng-bareng
                </span>
              </span>
            </div>

            <div className="brutal-sm floaty absolute -right-2 bottom-10 w-40 rotate-3 rounded-2xl [animation-delay:-2.5s] bg-butter p-4 sm:-right-8">
              <p className="font-display text-4xl font-extrabold">7</p>
              <p className="mt-1 text-xs leading-snug font-medium">
                Langkah sederhana untuk mulai mencari bantuan
              </p>
            </div>

            <SpinningBadge className="absolute -top-4 -right-2 sm:-right-6" />
          </div>
        </Container>
      </section>

      <div className="border-t-[1.5px] border-ink bg-white">
        <Container className="flex items-center justify-center gap-3 py-4">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg border-[1.5px] border-ink bg-periwinkle">
            <LuInfo size={16} />
          </span>
          <p className="text-xs text-muted sm:text-sm">
            <strong className="text-ink">Informasi penting.</strong>{" "}
            {DISCLAIMER}
          </p>
        </Container>
      </div>

      <div
        className="overflow-hidden border-y-[1.5px] border-ink bg-ink py-5 text-white"
        aria-hidden
      >
        <div className="marquee-track flex w-max">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {[...marquee, ...marquee].map((m, i) => (
                <span
                  key={i}
                  className="flex items-center font-display text-xl font-bold whitespace-nowrap sm:text-2xl"
                >
                  <span className="px-8">{m}</span>
                  <PiSparkleFill
                    className="size-3.5"
                    color={i % 2 ? "#fff" : "var(--color-orange)"}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Chapters */}
      <section id="chapter" className="py-20">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Jelajahi materi</p>
              <h2 className="mt-3 lg:max-w-xl text-4xl leading-[1.05] font-extrabold sm:text-5xl">
                Lima bagian singkat buat lebih kenal diri sendiri dan mulai
                melangkah.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-muted">
              Boleh dibaca berurutan, boleh juga langsung loncat ke bagian yang
              paling kamu butuhkan sekarang.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-[1.45fr_1fr]">
            {[first, second].map((c) => (
              <Link
                key={c.no}
                href={c.href}
                className={`tone-${c.tone} brutal lift reveal group relative flex min-h-80 flex-col overflow-hidden rounded-[28px] p-7`}
              >
                <span className="chip self-start">Part {c.no}</span>
                <h3
                  className={`mt-5 max-w-60 ${second ? "text-2xl" : "text-3xl"} leading-[1.05] font-extrabold`}
                >
                  {c.title}
                </h3>
                <p className={`mt-3 max-w-[62%] text-sm text-muted`}>
                  {c.desc}
                </p>
                <span
                  className="relative z-10 mt-auto flex h-10 items-center self-start rounded-full bg-ink px-3 text-white"
                  aria-hidden
                >
                  <span className="max-w-0 overflow-hidden text-sm font-bold whitespace-nowrap opacity-0 transition-all duration-300 group-hover:mx-2 group-hover:max-w-24 group-hover:opacity-100">
                    Baca part
                  </span>
                  <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div
                  className={`pointer-events-none absolute right-0 bottom-0 ${c.no === "02" ? "w-[42%] max-w-52" : "w-[48%] max-w-64"} transition-transform group-hover:scale-105`}
                >
                  {chapterArt[c.no]}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {rest.map((c) => (
              <Link
                key={c.no}
                href={c.href}
                className={`tone-${c.tone} brutal lift reveal group relative flex min-h-72 flex-col overflow-hidden rounded-[28px] p-6`}
              >
                <span className="chip self-start">Part {c.no}</span>
                <h3 className="mt-4 text-2xl leading-tight font-extrabold">
                  {c.title}
                </h3>
                <p className="relative z-10 mt-2 max-w-[62%] text-sm text-muted">
                  {c.desc}
                </p>
                <span
                  className="relative z-10 mt-auto flex h-10 items-center self-start rounded-full bg-ink px-3 text-white"
                  aria-hidden
                >
                  <span className="max-w-0 overflow-hidden text-sm font-bold whitespace-nowrap opacity-0 transition-all duration-300 group-hover:mx-2 group-hover:max-w-24 group-hover:opacity-100">
                    Baca part
                  </span>
                  <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="pointer-events-none absolute right-0 bottom-0 w-[42%] max-w-40 transition-transform group-hover:scale-105">
                  {chapterArt[c.no]}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
