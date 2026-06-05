# Adding Speaker and Organizer Images

## Directory Structure

Create the following directories for images:

```
workshop-site/
├── images/
│   ├── speakers/
│   │   ├── azalia-mirhoseini.jpg
│   │   └── bing-liu.jpg
│   └── organizers/
│       ├── azalia-mirhoseini.jpg
│       └── bing-liu.jpg
```

## Image Requirements

### Speakers
- **Filename format**: `first-name-last-name.jpg`
- **Size**: 120×120 pixels (or larger, will be cropped to circle)
- **Format**: JPG, PNG, or WebP
- **Quality**: Professional headshot recommended
- **Location**: `images/speakers/`

### Organizers
- **Filename format**: `first-name-last-name.jpg`
- **Size**: 100×100 pixels (or larger, will be cropped to circle)
- **Format**: JPG, PNG, or WebP
- **Quality**: Professional headshot recommended
- **Location**: `images/organizers/`

## How to Add Images

### 1. **Prepare Images**
   - Take or find professional headshots
   - Crop to approximately square (1:1 aspect ratio)
   - Resize to at least 120×120px for speakers, 100×100px for organizers
   - Save as JPG with good compression

### 2. **Create Directories**
   ```bash
   mkdir -p images/speakers
   mkdir -p images/organizers
   ```

### 3. **Copy Images**
   Place your images in the appropriate directories:
   - `images/speakers/azalia-mirhoseini.jpg`
   - `images/speakers/bing-liu.jpg`
   - `images/organizers/azalia-mirhoseini.jpg`
   - `images/organizers/bing-liu.jpg`

### 4. **Update HTML (if needed)**
   The image paths are already configured in `index.html`:
   ```html
   <img src="images/speakers/azalia-mirhoseini.jpg" alt="Azalia Mirhoseini">
   ```

### 5. **Test Locally**
   ```bash
   python3 -m http.server 8000
   # Visit http://localhost:8000 and verify images appear
   ```

### 6. **Push to GitHub**
   ```bash
   git add images/
   git commit -m "Add speaker and organizer photos"
   git push origin main
   ```

## Adding New Speakers/Organizers

### To add a new speaker:

1. **Add image** to `images/speakers/firstname-lastname.jpg`

2. **Update `index.html`** in the speakers section:
   ```html
   <div class="speaker-card">
       <div class="speaker-image">
           <img src="images/speakers/firstname-lastname.jpg" alt="Full Name">
           <div class="placeholder-image" style="display:none;">XX</div>
       </div>
       <h3>Full Name</h3>
       <p class="speaker-title">Title, University</p>
       <p class="speaker-bio">Bio text here...</p>
   </div>
   ```

### To add a new organizer:

1. **Add image** to `images/organizers/firstname-lastname.jpg`

2. **Update `index.html`** in the organizers section:
   ```html
   <div class="organizer-card">
       <div class="organizer-image">
           <img src="images/organizers/firstname-lastname.jpg" alt="Full Name">
           <div class="placeholder-image" style="display:none;">XX</div>
       </div>
       <h3>Full Name</h3>
       <p class="organizer-title">University</p>
   </div>
   ```

## Placeholder Behavior

If an image file is missing or fails to load:
- The site will automatically show the initials (AM, BL, etc.)
- A gradient background (purple → dark purple) will appear
- This is a graceful fallback, so the site remains functional

## Image Optimization Tips

1. **File Size**: Use JPG format with 70-80% quality for smaller files
2. **Naming**: Use lowercase with hyphens (e.g., `john-doe.jpg`)
3. **Consistency**: Keep all images at similar sizes and aspect ratios
4. **Aspect Ratio**: Headshots should be roughly 1:1 (square)
5. **Format**: JPG or PNG (WebP for best performance, but not all browsers support it yet)

## Tools for Image Processing

**Resize images (command line)**:
```bash
# Using ImageMagick (if installed)
convert input.jpg -resize 120x120 -gravity center -extent 120x120 output.jpg
```

**Online tools**:
- [Squoosh](https://squoosh.app/) — Online image compression and resizing
- [TinyPNG](https://tinypng.com/) — Image compression
- [Pixlr](https://pixlr.com/) — Online photo editor

## Troubleshooting

**Images not appearing?**
- Check file paths match exactly (case-sensitive on Linux/Mac)
- Verify image files exist in the correct directories
- Try refreshing browser cache (Ctrl+Shift+R)
- Check browser console for 404 errors (F12)

**Images look distorted?**
- Ensure original image is roughly square (1:1 aspect ratio)
- Try a different image file
- Check image file is not corrupted

**File too large?**
- Compress using [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
- Target size: 50-100KB per image
- Use JPG instead of PNG (usually smaller)
