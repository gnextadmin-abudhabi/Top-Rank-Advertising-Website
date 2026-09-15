#!/usr/bin/env python3
"""Process images: convert to WebP, create transparent logo."""

from PIL import Image
import os
import shutil

SRC_DIR = "/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/Work/Projects/Top Rank Advertising/Website/Images"
DST_DIR = "public/images"

# Ensure destination exists
os.makedirs(DST_DIR, exist_ok=True)

# Mapping: source filename -> destination webp name + description
IMAGE_MAP = {
    "Technicians_operating_large_printer_20260915132242.jpeg": ("hero.webp", "Top Rank Advertising large-format printing workshop in Abu Dhabi with technicians operating industrial eco-solvent printers"),
    "Placing_logo_on_construction_banner_20260915120636.jpeg": ("eco-solvent-banner-printing.webp", "Large eco-solvent printed construction hoarding banner installed at Abu Dhabi building site"),
    "Inspecting_printed_banner_on_table_20260915132350.jpeg": ("sticker-printing.webp", "Quality inspection of printed vinyl stickers and branded materials at Top Rank Advertising workshop"),
    "Executive_team_in_corporate_boar…_20260915122435.jpeg": ("branding.webp", "Corporate branding presentation meeting with executive team reviewing brand identity materials in Abu Dhabi"),
    "Logo_on_acrylic_countertop_display_20260915131756.jpeg": ("customized-acrylic-fabrication.webp", "Custom acrylic countertop display holder with Top Rank branding at Yas Mall retail store in Abu Dhabi"),
    "Placing_logo_into_scene_20260915120035.jpeg": ("large-format-digital-printing.webp", "Industrial large-format digital printer producing branded banners at Top Rank Advertising facility"),
    "Delivery_vans_parked_in_industri…_20260915124951.jpeg": ("vehicle-branding.webp", "Fleet of branded delivery vans with Top Rank Advertising vehicle wraps parked in Abu Dhabi industrial area"),
    "Adding_logo_to_storefront_sign_20260915125406.jpeg": ("led-illuminated-signage.webp", "LED illuminated storefront sign for Top Rank Advertising installed on Abu Dhabi commercial building at night"),
    "Booth_staff_greeting_visitors_20260915131458.jpeg": ("exhibition-event-branding.webp", "Professional exhibition booth with branded backdrop, roll-up banners and counter graphics at ADNEC Abu Dhabi trade show"),
    "Installers_mounting_commercial_b…_20260915132116.jpeg": ("promotional-pos-displays.webp", "Commercial sign installation team mounting branded signage with Top Rank Advertising van at Abu Dhabi industrial site"),
    "Graphic_designer_working_at_work…_20260915131943.jpeg": ("design-prepress-services.webp", "Graphic designer working on brand artwork using professional design software and color swatches at Top Rank Advertising studio"),
    # Additional images for About page
    "Account_manager_shaking_client_hand_20260915132619.jpeg": ("about-partnership.webp", "Top Rank Advertising account manager shaking hands with B2B client during corporate branding consultation in Abu Dhabi"),
    "Employees_walking_in_modern_office_20260915124425.jpeg": ("about-office.webp", "Modern Abu Dhabi office interior featuring large-format printed wall graphics and branded environmental design"),
}

# Also copy the original logo for transparency processing
ORIG_LOGO = "/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/Work/Projects/Top Rank Advertising/WhatsApp Image 2026-09-09 at 16.06.48.jpeg"

def convert_to_webp(src_path, dst_path, quality=85):
    """Convert image to WebP with compression."""
    img = Image.open(src_path)
    # Convert to RGB if necessary (WebP doesn't support RGBA with all features)
    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGB')
    img.save(dst_path, 'WEBP', quality=quality, method=6)
    orig_size = os.path.getsize(src_path)
    new_size = os.path.getsize(dst_path)
    print(f"  {os.path.basename(dst_path)}: {orig_size//1024}KB -> {new_size//1024}KB")

def create_transparent_logo(src_path, dst_path):
    """Create transparent PNG logo by removing white background."""
    img = Image.open(src_path).convert("RGBA")
    datas = img.getdata()
    new_data = []
    # Threshold for white - if R,G,B all > 240, make transparent
    for item in datas:
        r, g, b, a = item
        if r > 240 and g > 240 and b > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(dst_path, 'PNG')
    print(f"  Transparent logo saved: {dst_path}")

print("=== Converting images to WebP ===")
for src_name, (dst_name, desc) in IMAGE_MAP.items():
    src_path = os.path.join(SRC_DIR, src_name)
    dst_path = os.path.join(DST_DIR, dst_name)
    if os.path.exists(src_path):
        print(f"Processing: {src_name}")
        convert_to_webp(src_path, dst_path)
    else:
        print(f"WARNING: Not found: {src_name}")

print("\n=== Creating transparent logo ===")
create_transparent_logo(ORIG_LOGO, os.path.join(DST_DIR, "logo.png"))

print("\n=== Done ===")
