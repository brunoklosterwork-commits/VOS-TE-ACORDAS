"""Captura cuadros sueltos de video.html para revisar. Uso: python3 frames.py 1.5 4 8 ..."""
import sys, asyncio
from playwright.async_api import async_playwright

async def main(times):
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--allow-file-access-from-files"])
        pg = await b.new_page(viewport={"width": 1080, "height": 1920})
        await pg.goto("file:///home/claude/work/video.html")
        await pg.evaluate("document.fonts.ready")
        for t in times:
            await pg.evaluate(f"render({t})")
            await pg.screenshot(path=f"frames/f_{t}.jpg", type="jpeg", quality=80)
        await b.close()

asyncio.run(main([float(x) for x in sys.argv[1:]]))
