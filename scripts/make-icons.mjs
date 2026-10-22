import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const HOR = "assets/img/psyseek-hor.png";
const CREAM = "#fbf6ec";

const meta = await sharp(HOR).metadata();
const mark = await sharp(HOR)
  .extract({
    left: 0,
    top: 0,
    width: Math.round(meta.width * 0.365),
    height: meta.height,
  })
  .trim()
  .png()
  .toBuffer();

const square = (
  size,
  background = { r: 0, g: 0, b: 0, alpha: 0 },
  pad = 0.06,
) => {
  const p = Math.round(size * pad);
  const clear = { r: 0, g: 0, b: 0, alpha: 0 };
  return sharp(mark)
    .resize(size - p * 2, size - p * 2, { fit: "contain", background: clear })
    .extend({ top: p, bottom: p, left: p, right: p, background: clear })
    .flatten(background.alpha === 0 ? false : { background })
    .png();
};

await square(512).toFile("app/icon.png");
await square(180, { r: 255, g: 255, b: 255, alpha: 1 }, 0.12).toFile(
  "app/apple-icon.png",
);

const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((s) => square(s, undefined, 0.02).toBuffer()),
);
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((s, i) => {
  const e = 6 + i * 16;
  header.writeUInt8(s, e);
  header.writeUInt8(s, e + 1);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(pngs[i].length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += pngs[i].length;
});
await writeFile("app/favicon.ico", Buffer.concat([header, ...pngs]));

const logo = await sharp(HOR)
  .resize(900, 400, { fit: "inside" })
  .png()
  .toBuffer();
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: CREAM },
})
  .composite([{ input: logo, gravity: "center" }])
  .png()
  .toFile("app/opengraph-image.png");

console.log(
  "app/icon.png, app/apple-icon.png, app/favicon.ico, app/opengraph-image.png",
);
