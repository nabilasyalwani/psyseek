import type { Metadata } from "next";
import Link from "next/link";
import { benefits, professionals } from "@/lib/content";
import { ChapterBadge, Container, NextChapter } from "@/components/Shared";
import {
  LuArrowRight,
  LuCheck,
  LuCompass,
  LuMessageCircle,
  LuStethoscope,
  LuX,
} from "react-icons/lu";
import {
  NightWindow,
  FriendsArch,
  MirrorPerson,
} from "@/components/Illustrations";
import MythQuiz from "@/components/bantuan/MythQuiz";

export const metadata: Metadata = {
  title: "Mengapa Mencari Bantuan Itu Penting?",
};

const proIcons = {
  chat: LuMessageCircle,
  compass: LuCompass,
  stetho: LuStethoscope,
};

export default function MencariBantuan() {
  return (
    <>
      {/* Hero */}
      <section className="dots-bg border-b-[1.5px] border-ink bg-mint">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.2fr_1fr] lg:py-16">
          <div>
            <ChapterBadge no="03" tone="mint" />
            <h1 className="mt-5 text-5xl leading-[0.98] font-extrabold sm:text-6xl">
              Mencari Bantuan Bukan Berarti Kamu{" "}
              <span className="highlight inline-block -rotate-1 bg-white">
                Gagal
              </span>
            </h1>
            <p className="mt-6 lg:max-w-xl leading-relaxed text-muted">
              Pernah nggak, kamu ingin cerita ke seseorang, tapi akhirnya
              mengurungkan niat karena berpikir{" "}
              <strong className="text-ink">“Masalahku tidak seberapa”</strong>,
              atau{" "}
              <strong className="text-ink">
                “Saya harusnya bisa mengatasi ini sendiri”
              </strong>
              ? Pikiran seperti itu bisa membuat kita menunda mencari bantuan.
            </p>
            <blockquote className="mt-8 flex lg:max-w-xl gap-4 rounded-[22px] border-[1.5px] border-ink bg-ink p-6 text-white shadow-[6px_6px_0_var(--color-mint-deep)]">
              <span
                className="font-display text-6xl leading-[0.7] text-butter"
                aria-hidden
              >
                “
              </span>
              <p className="text-lg leading-snug font-semibold">
                Padahal, mencari bantuan adalah{" "}
                <span className="text-butter">
                  salah satu cara untuk merawat diri.
                </span>{" "}
                Kamu boleh meminta dukungan meskipun belum tahu persis apa
                masalahmu atau harus mulai dari mana.
              </p>
            </blockquote>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="brutal absolute inset-0 rounded-full bg-periwinkle" />
            <NightWindow
              className="sway absolute inset-0 m-auto w-[82%]"
              priority
            />
            <span className="brutal-sm floaty absolute bottom-10 left-0 -rotate-6 rounded-full bg-pink px-3 py-1.5 text-xs font-bold">
              Berani merawat diri
            </span>
          </div>
        </Container>
      </section>

      {/* Help-seeking + professionals */}
      <section className=" py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="eyebrow">Kenali istilahnya</p>
              <h2 className="mt-3 text-4xl leading-[1.05] font-extrabold">
                Sebenarnya, apa itu mencari bantuan?
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              Mencari bantuan atau{" "}
              <strong>
                <em>help-seeking</em>
              </strong>{" "}
              berarti mengambil langkah untuk{" "}
              <mark className="rounded-md bg-butter px-1 font-semibold text-ink">
                meminta dukungan
              </mark>{" "}
              saat menghadapi masalah. Dukungan bisa datang dari orang yang kamu
              percaya maupun tenaga profesional.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap items-end justify-between gap-2">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Siapa tenaga profesional?
            </h2>
            <p className="text-sm text-muted">Tiga peran, tiga cara membantu</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {professionals.map((p) => {
              const Icon = proIcons[p.icon];
              return (
                <article
                  key={p.no}
                  className="brutal lift reveal group overflow-hidden rounded-3xl bg-white"
                >
                  <div
                    className={`tone-${p.tone} flex items-center justify-between border-b-[1.5px] border-ink p-5`}
                  >
                    <span className="brutal-sm grid size-14 place-items-center rounded-2xl bg-white font-display text-xl font-extrabold">
                      {p.no}
                    </span>
                    <Icon
                      size={44}
                      strokeWidth={1.4}
                      className="group-wiggle opacity-50 transition-opacity group-hover:opacity-90"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-extrabold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted">{p.desc}</p>
                    <span className="chip mt-5">
                      {p.tagIcon === "x" && <LuX size={12} />}
                      {p.tagIcon === "check" && <LuCheck size={12} />}
                      {p.tag}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:grid-rows-[auto_1fr]">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="eyebrow text-orange!">Manfaat bantuan profesional</p>
            <h2 className="mt-3 text-4xl leading-[1.05] font-extrabold sm:text-5xl">
              Apa yang bisa kamu dapatkan dari bantuan profesional?
            </h2>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Ini enam hal yang bisa kamu rasakan kalau berani mencari bantuan
              sejak awal.
            </p>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <li key={b.title} className="reveal group">
                  <span
                    className="block origin-bottom-left font-display text-7xl leading-none font-extrabold text-lavender transition-all duration-300 ease-spring group-hover:-rotate-6 group-hover:text-orange"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="-mt-3 border-t-[1.5px] border-ink/15 pt-3">
                    <h3 className="text-lg leading-tight font-extrabold text-indigo">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col lg:col-start-1 lg:row-start-2">
            <div className="brutal relative overflow-hidden rounded-3xl bg-periwinkle">
              <div
                className="absolute -top-10 -left-10 size-40 rounded-full bg-pink"
                aria-hidden
              />
              <div
                className="absolute -right-10 -bottom-16 size-48 rounded-full bg-butter"
                aria-hidden
              />
              <FriendsArch className="relative mx-auto h-56" />
            </div>
            <Link
              href="/langkah-layanan#layanan"
              className="btn mt-5 flex items-center justify-center gap-2 rounded-full border-[1.5px] border-ink bg-indigo py-3.5 text-sm font-bold text-white shadow-[4px_4px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
            >
              Lihat layanan psikologi <LuArrowRight />
            </Link>
          </div>
        </Container>
      </section>

      {/* Quiz */}
      <section id="kuis" className="scroll-mt-10 bg-ink py-20">
        <Container>
          <MythQuiz
            heading={
              <div>
                <p className="eyebrow text-butter!">Kuis interaktif</p>
                <h2 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
                  Mitos atau{" "}
                  <span className="inline-block -rotate-4 rounded-xl border-[1.5px] border-white bg-mint px-2 text-ink">
                    Fakta
                  </span>
                  ?
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  Menurutmu, mana yang fakta?
                </p>
              </div>
            }
          />
        </Container>
      </section>

      <NextChapter
        no="04"
        title="Apa yang Membuat Ragu Mencari Bantuan?"
        href="/hambatan"
        tone="pink"
        art={<MirrorPerson className="h-full w-full" />}
      />
    </>
  );
}
