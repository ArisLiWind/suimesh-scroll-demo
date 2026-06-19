from playwright.sync_api import sync_playwright
import time, glob, shutil, os

OUTPUT_VIDEO = "/Users/zhuanz1mima0000/Documents/New project/suimesh-scroll-demo/demo_recording.webm"
TMP_DIR = "/tmp/playwright_videos"

os.makedirs(TMP_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(channel="chrome", headless=True)
    context = browser.new_context(
        viewport={"width": 1280, "height": 720},
        record_video_dir=TMP_DIR,
        record_video_size={"width": 1280, "height": 720},
    )
    page = context.new_page()
    page.goto("http://localhost:8080")
    page.wait_for_load_state("networkidle")

    # Zoom page to 25% so everything is tiny but text stays crisp
    page.evaluate("document.body.style.zoom = '0.25'")
    time.sleep(0.5)

    # Let opening video play
    time.sleep(2.5)

    panels = page.query_selector_all(".panel")
    print(f"Found {len(panels)} panels")

    for i, panel in enumerate(panels):
        is_narrative = panel.evaluate("el => el.classList.contains('narrative-panel')")
        has_trace = panel.evaluate("el => el.classList.contains('heavy-trace-slide')")

        panel.scroll_into_view_if_needed()
        time.sleep(0.5)

        if is_narrative:
            start_wait = time.time()
            while time.time() - start_wait < 20:
                typed = panel.evaluate("el => el.dataset.panelTyped")
                if typed == "true":
                    break
                time.sleep(0.2)
            time.sleep(1.5)
        elif has_trace:
            time.sleep(3)
        else:
            time.sleep(2)

        print(f"Panel {i+1}/{len(panels)} done")

    time.sleep(2)
    context.close()
    browser.close()

    files = glob.glob(f"{TMP_DIR}/*.webm")
    if files:
        shutil.move(files[0], OUTPUT_VIDEO)
        print(f"Video saved to {OUTPUT_VIDEO}")
    else:
        print("No video file found")
