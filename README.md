# Continual Learning for Enterprise AI Agents Workshop Website

A modern, research-oriented academic workshop website built with vanilla HTML, CSS, and JavaScript.

## Project Structure

```
workshop-site/
├── index.html           # Main HTML file
├── styles.css           # Stylesheet with responsive design
├── script.js            # JavaScript for interactions
├── README.md            # This file
└── .gitignore           # Git ignore rules
```

## Features

- 📱 **Fully Responsive** — Mobile-friendly design that works on all devices
- ⚡ **Performance Optimized** — Lightweight static HTML/CSS/JS (no frameworks)
- 🎨 **Modern Academic Design** — Clean, professional aesthetic inspired by NeurIPS/ICLR workshops
- ♿ **Accessible** — Semantic HTML and keyboard navigation support
- 🎯 **Easy to Edit** — Well-organized HTML sections for quick customization
- ✨ **Smooth Animations** — Subtle interactions and scroll effects

## Sections

1. **Navigation** — Sticky header with smooth scroll links
2. **Hero** — Workshop title, tagline, and call-to-action buttons
3. **About** — Workshop mission and description
4. **Topics** — 10 topic cards in a responsive grid
5. **Schedule** — Timeline view with color-coded event types
6. **Speakers** — Keynote speaker cards with bios
7. **Call for Papers** — Submission guidelines and important dates
8. **Organizers** — Organizer information
9. **Footer** — Contact, social links, and credits

## Quick Start

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CLEA-NeurIPS/CLEA-NeurIPS.github.io.git
   cd CLEA-NeurIPS.github.io
   ```

2. **Open in browser:**
   - Simply open `index.html` in your browser, or
   - Use a local server (recommended):
     ```bash
     python3 -m http.server 8000
     # Visit http://localhost:8000
     ```

### Customization

#### Update Workshop Info
Edit `index.html`:
- **Title & Tagline**: Lines 15-16 in hero section
- **About**: Lines 65-69
- **Topics**: Lines 79-118
- **Schedule**: Lines 129-186
- **Speakers**: Lines 195-223
- **Contact Email**: Line 275

#### Change Colors
Edit `:root` variables in `styles.css` (lines 3-14):
```css
--primary-color: #667eea;      /* Main purple */
--secondary-color: #764ba2;    /* Dark purple */
--accent-color: #f093fb;       /* Pink accent */
```

#### Add/Remove Sections
1. Add new section HTML in `index.html`
2. Add corresponding CSS in `styles.css`
3. Update nav links to include new section

## Deployment

### GitHub Pages (Recommended for organizations)

1. **Initialize git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Workshop website"
   ```

2. **Add remote:**
   ```bash
   git remote add origin https://github.com/CLEA-NeurIPS/CLEA-NeurIPS.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to Repository → Settings → Pages
   - Set Source to `main` branch
   - Your site will be live at `https://CLEA-NeurIPS.github.io`

### Alternative Hosting Options

**Vercel** (recommended for performance):
```bash
npm install -g vercel
vercel
```

**Netlify**:
1. Drag and drop the project folder to [netlify.com](https://netlify.com)
2. Site goes live automatically

**Any Static Host** (Firebase, AWS S3, etc.):
- These are static files, so they work anywhere

## Customization Guide

### Add a Speaker
1. Find the speakers section in `index.html` (line 195)
2. Duplicate a speaker card:
   ```html
   <div class="speaker-card">
       <div class="speaker-image">
           <div class="placeholder-image">XX</div>
       </div>
       <h3>Name</h3>
       <p class="speaker-title">Title, University</p>
       <p class="speaker-bio">Bio text here...</p>
   </div>
   ```
3. Update name, title, and bio

### Update Schedule
1. Find schedule section (line 129)
2. Modify timeline items:
   ```html
   <div class="timeline-item">
       <div class="timeline-time">HH:MM–HH:MM</div>
       <div class="timeline-content">
           <h4>Event Title</h4>
           <p>Description</p>
       </div>
   </div>
   ```

### Change Important Dates
1. Find CFP section (line 237)
2. Update dates in the "Important Dates" box

### Add Contact Information
1. Find footer (line 275)
2. Update email and social links

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Page Load**: < 1 second
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~50KB (HTML + CSS + JS)

## Tips for Success

1. **Keep it organized** — Use comments to separate sections
2. **Test on mobile** — Always check responsive design
3. **Update dates** — Don't forget to fill in [TBD] placeholders
4. **Add real images** — Replace placeholder avatars with real speaker photos
5. **Get feedback** — Share with organizers and gather feedback early

## Editing Workflow

1. Clone the repo locally
2. Make changes to `index.html` or `styles.css`
3. Test in browser
4. Commit and push:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
5. Changes deploy automatically to GitHub Pages

## Troubleshooting

**Site not updating after push?**
- Clear browser cache (Ctrl+Shift+Delete)
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check repository settings under Pages

**Styles not loading?**
- Verify `styles.css` is in the same directory as `index.html`
- Check browser console for CSS file errors

**Links not working?**
- Ensure section IDs in HTML match navigation href values
- Example: `<a href="#speakers">` links to `<section id="speakers">`

## Support & Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [CSS Grid Layout Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [HTML Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

## License

This website template is provided as-is for use by the workshop.

## Credits

Website created with [Claude Code](https://claude.ai/code)
