import Image from "next/image";
import { SITE_NAME } from "@/lib/content";

export default function Logo({
  height = 36,
  priority = false,
}: {
  height?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/illustrations/psyseek-hor.webp"
      alt={SITE_NAME}
      width={1000}
      height={332}
      priority={priority}
      draggable={false}
      className="w-auto shrink-0 transition-transform duration-500 ease-spring select-none group-hover:scale-105 group-hover:-rotate-2"
      style={{ height }}
    />
  );
}
