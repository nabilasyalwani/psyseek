import type { Metadata } from "next";
import {
  ChapterBadge,
  Container,
  NextChapter,
  SectionHead,
} from "@/components/Shared";
import {
  Overwhelmed,
  PeopleCircleNew,
  RainCloud,
  Sleepless,
  TangledStudy,
} from "@/components/Illustrations";
import CauseTabs from "@/components/stres/CauseTabs";
import Reflection from "@/components/stres/Reflection";
import BurdenGame from "@/components/stres/BurdenGame";
import { impacts } from "@/lib/content";

export const metadata: Metadata = { title: "Mengenali Stres Akademik" };

const jumps = [
  { href: "#penyebab", label: "Penyebab" },
  { href: "#dampak", label: "Dampak" },
  { href: "#refleksi", label: "Refleksi diri", dark: true },
];

export default function StresAkademik() {
  return (
    <>
      <section className="dots-bg border-b-[1.5px] border-ink">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_1fr] lg:py-16">
          <div>
            <ChapterBadge no="01" tone="lavender" />
            <h1 className="mt-5 text-5xl leading-[0.98] font-extrabold sm:text-6xl">
              Pernah Merasa Penuh, tapi{" "}
              <span className="highlight inline-block -rotate-1 bg-lavender">
                Bingung
              </span>{" "}
              Kenapa?
            </h1>
            <p className="mt-6 lg:max-w-xl leading-relaxed text-muted">
              Pernah nggak, kamu buka laptop buat ngerjain tugas, tapi malah
              menghayal lama? Tugasnya ada, tenggat waktunya makin dekat, tetapi
              kamu bingung harus mulai dari mana. Atau kamu merasa lelah dan
              kepikiran kuliah terus, bahkan saat sedang istirahat?
            </p>
            <div className="brutal relative mt-10 lg:max-w-xl rounded-[22px] bg-white p-6">
              <span className="absolute -top-3 left-5 rounded-full border-[1.5px] border-ink bg-butter px-2.5 py-0.5 text-[0.68rem] font-bold">
                Coba kenali dulu
              </span>
              <p className="text-lg leading-snug font-semibold">
                Pengalaman seperti itu bisa menjadi salah satu tanda bahwa{" "}
                <mark className="rounded-md bg-lavender px-1 text-ink">
                  tuntutan akademik sedang terasa berat
                </mark>{" "}
                buatmu. Tapi, satu-dua pengalaman saja belum tentu berarti kamu
                mengalami stres akademik, kok. Coba lihat lagi situasi dan
                perasaanmu secara keseluruhan.
              </p>
            </div>
            <nav
              aria-label="Lompat ke bagian"
              className="mt-7 flex flex-wrap items-center gap-2 text-xs"
            >
              <span className="mr-1 text-muted">Lompat ke:</span>
              {jumps.map((j) => (
                <a
                  key={j.href}
                  href={j.href}
                  className={`rounded-full border-[1.5px] border-ink px-3 py-1.5 font-semibold ${
                    j.dark ? "bg-ink text-white" : "bg-white hover:bg-cream"
                  }`}
                >
                  {j.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="brutal absolute inset-0 rounded-full bg-butter" />
            <Overwhelmed
              className="floaty absolute inset-0 m-auto w-[86%]"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Penyebab */}
      <section id="penyebab" className="scroll-mt-10 bg-white py-20">
        <Container>
          <SectionHead
            eyebrow="Penyebab stres akademik"
            title="Apa saja yang bisa bikin kuliah terasa berat?"
            aside="Pilih salah satu faktor untuk melihat contoh penyebabnya."
          />
          <CauseTabs />
        </Container>
      </section>

      {/* Dampak */}
      <section id="dampak" className="scroll-mt-10 bg-ink py-20">
        <Container>
          <SectionHead
            dark
            eyebrow="Dampak stres akademik"
            title="Kalau terus menumpuk, apa yang bisa terjadi?"
            aside="Stres yang dibiarkan bisa merembet ke belajar, tubuh, dan hubunganmu dengan orang lain."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="relative min-h-48 overflow-hidden rounded-[26px] border-[1.5px] border-white bg-lavender p-7 shadow-[6px_6px_0_var(--color-orange)] md:row-span-2">
              <span className="chip">{impacts[0].title}</span>
              <ul className="mt-5 grid gap-2.5 text-[0.95rem] font-semibold">
                {impacts[0].content.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-ink" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
              <TangledStudy className="absolute -right-6 -bottom-6 w-[80%] hidden sm:block sm:max-w-60 xl:max-w-80 " />
            </article>

            <article className="relative flex min-h-48 items-center overflow-hidden rounded-[26px] border-[1.5px] border-white bg-butter p-7 shadow-[6px_6px_0_var(--color-orange)]">
              <div className="relative z-10">
                <span className="chip">{impacts[1].title}</span>
                <ul className="mt-5 grid gap-2.5 text-[0.95rem] font-semibold">
                  {impacts[1].content.map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <span
                        className="size-2 rounded-full bg-ink"
                        aria-hidden
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <Sleepless className="absolute right-0 bottom-0  w-[80%] max-w-46 sm:max-w-60 md:max-w-52 lg:max-w-70 xl:max-w-80" />
            </article>

            <article className="relative min-h-48 overflow-hidden rounded-[26px] border-[1.5px] border-white bg-pink p-7 shadow-[6px_6px_0_var(--color-orange)]">
              <span className="chip">{impacts[2].title}</span>
              <ul className="mt-5 grid gap-2.5 text-[0.95rem] font-semibold">
                {impacts[2].content.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-ink" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
              <RainCloud className="absolute -right-4 -bottom-4 w-[80%] hidden sm:block sm:max-w-60 md:hidden lg:block lg:max-w-46 xl:max-w-60" />
            </article>
          </div>
        </Container>
      </section>

      {/* Refleksi */}
      <section id="refleksi" className="scroll-mt-10 py-20">
        <Container>
          <p className="eyebrow">Refleksi</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Apa yang sedang saya alami?
          </h2>
          <p className="mt-2 text-sm text-muted">
            Dalam beberapa waktu terakhir, saya mengalami…{" "}
            <strong className="text-ink">(pilih yang sesuai)</strong>
          </p>
          <Reflection />
        </Container>
      </section>

      {/* Beban */}
      <section className="overflow-hidden bg-ink pt-20">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-butter!">
                Yang sering dipikul mahasiswa
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Beban kecil yang menumpuk.
              </h2>
            </div>
            <span className="chip self-start md:self-auto">
              Gerakkan kursor &amp; klik beban untuk melepasnya
            </span>
          </div>
          <BurdenGame />
        </Container>

        <NextChapter
          no="02"
          title="Dukungan dari Orang Sekitar"
          href="/dukungan"
          tone="butter"
          art={<PeopleCircleNew className="spin-slower h-full w-full" />}
        />
      </section>
    </>
  );
}
