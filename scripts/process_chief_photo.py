"""Remove white background and place subject on dark premium backdrop."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "chief-instructor-source.png"
OUT = ROOT / "public" / "images" / "chief-instructor.png"
SIZE = 1024


def remove_bg(img: Image.Image) -> Image.Image:
    # Prefer lightweight u2net via rembg; fall back to white-key for studio shots.
    try:
        from rembg import new_session, remove

        session = new_session("u2net")
        return remove(img.convert("RGBA"), session=session).convert("RGBA")
    except Exception:
        rgba = img.convert("RGBA")
        pixels = rgba.load()
        w, h = rgba.size
        for y in range(h):
            for x in range(w):
                r, g, b, a = pixels[x, y]
                if r > 235 and g > 235 and b > 235:
                    pixels[x, y] = (r, g, b, 0)
                elif r > 210 and g > 210 and b > 210:
                    whiteness = (r + g + b) / 3
                    alpha = int(max(0, min(255, (250 - whiteness) * 6)))
                    pixels[x, y] = (r, g, b, alpha)
        alpha = rgba.getchannel("A").filter(ImageFilter.GaussianBlur(1.2))
        rgba.putalpha(alpha)
        return rgba


def dark_backdrop(size: int) -> Image.Image:
    bg = Image.new("RGBA", (size, size), (10, 9, 8, 255))
    draw = ImageDraw.Draw(bg)
    cx = cy = size // 2
    for i in range(size // 2, 0, -2):
        t = i / (size / 2)
        # soft crimson rim toward edges
        crimson = int(28 * (1 - t) ** 2)
        tone = int(14 + 10 * (1 - t))
        draw.ellipse(
            [cx - i, cy - i, cx + i, cy + i],
            fill=(tone + crimson // 3, tone, tone, 255),
        )
    # center slightly lifted
    for i in range(size // 3, 0, -3):
        t = i / (size / 3)
        lift = int(22 * t)
        draw.ellipse(
            [cx - i, cy - int(i * 1.05), cx + i, cy + int(i * 1.05)],
            fill=(lift + 6, lift + 4, lift + 3, 255),
        )
    return bg.filter(ImageFilter.GaussianBlur(18))


def main() -> None:
    src = Image.open(SRC).convert("RGBA")
    cut = remove_bg(src)

    # Trim transparent margins, keep a little padding
    bbox = cut.getbbox()
    if bbox:
        cut = cut.crop(bbox)

    canvas = dark_backdrop(SIZE)
    # Fit subject with margin so full portrait (head to chest) shows
    max_w = int(SIZE * 0.86)
    max_h = int(SIZE * 0.92)
    cut.thumbnail((max_w, max_h), Image.Resampling.LANCZOS)

    x = (SIZE - cut.width) // 2
    y = SIZE - cut.height - int(SIZE * 0.04)
    # soft contact shadow
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    sh = cut.split()[-1].point(lambda a: int(a * 0.35))
    shadow.paste((0, 0, 0, 255), (x + 8, y + 18), sh)
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    canvas = Image.alpha_composite(canvas, shadow)
    canvas.paste(cut, (x, y), cut)

    canvas.convert("RGB").save(OUT, "PNG", optimize=True)
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
