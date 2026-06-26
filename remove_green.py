from PIL import Image

img = Image.open("/root/.gemini/antigravity-cli/brain/f3f6bec7-7a51-4e32-a36d-228dae857f06/feather_green_screen_1782454260809.png")
img = img.convert("RGBA")
datas = img.getdata()

newData = []
for r, g, b, a in datas:
    # Soft chroma key for a white object on a pure green background
    # Since background is (0, 255, 0) and object is (255, 255, 255),
    # the alpha is exactly represented by the Red or Blue channel.
    alpha = int((r + b) / 2)
    newData.append((255, 255, 255, alpha))

img.putdata(newData)
img.save("/root/wifi-4.5/landing_page/public/feather-logo.png", "PNG")
print("Perfectly extracted transparent feather saved.")
