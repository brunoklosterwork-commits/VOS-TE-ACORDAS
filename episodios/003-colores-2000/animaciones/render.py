"""Renderiza video.html escena por escena a MP4 (1080x1920, 30 fps) y las une."""
import asyncio, subprocess, os, json, sys
from playwright.async_api import async_playwright

FPS = 30
OUT = "render"
CUTS = [0.0, 4.214, 12.572, 15.482, 20.681, 25.125, 32.846, 40.527, 45.647, 50.763, 56.236]

async def main(only=None):
    os.makedirs(OUT, exist_ok=True)
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--allow-file-access-from-files"])
        pg = await b.new_page(viewport={"width": 1080, "height": 1920})
        await pg.goto("file:///home/claude/work3/video3.html")
        await pg.evaluate("document.fonts.ready")
        for i in range(len(CUTS) - 1):
            if only and i not in only:
                continue
            t0, t1 = CUTS[i], CUTS[i + 1]
            tmp, dst = f"{OUT}/s{i:02d}.tmp.mp4", f"{OUT}/s{i:02d}.mp4"
            ff = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "image2pipe", "-framerate", str(FPS), "-c:v", "mjpeg", "-i", "-",
                                   "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", "-r", str(FPS), tmp],
                                  stdin=subprocess.PIPE)
            for f in range(round(t0 * FPS), round(t1 * FPS)):
                await pg.evaluate(f"render({f / FPS})")
                ff.stdin.write(await pg.screenshot(type="jpeg", quality=92))
            ff.stdin.close()
            if ff.wait() == 0:
                os.replace(tmp, dst)
                print("ok", dst, flush=True)
        await b.close()
    with open(f"{OUT}/lista.txt", "w") as f:
        for i in range(len(CUTS) - 1):
            f.write(f"file 's{i:02d}.mp4'\n")

asyncio.run(main([int(x) for x in sys.argv[1:]] or None))
