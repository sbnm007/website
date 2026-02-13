# Modern Portfolio Website 🚀

A beautiful, responsive portfolio website built with React, featuring smooth animations, modern design, and a clean interface to showcase your skills, projects, and experience.

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with smooth animations and transitions
- **Fully Responsive**: Looks great on desktop, tablet, and mobile devices
- **Tab Navigation**: Easy navigation between Profile, Photos, Interests, Skills, Projects, and Connect sections
- **Animated UI**: Engaging micro-interactions and entrance animations
- **Customizable**: Easy to update with your own information, colors, and branding
- **Performance Optimized**: Built with Vite for fast loading and development

## 🎨 Design Highlights

- Beautiful gradient backgrounds and glassmorphism effects
- Custom avatar with animated gradient border
- Smooth tab transitions with hover effects
- Staggered animations for cards and elements
- Professional typography using Outfit and JetBrains Mono fonts
- Color scheme featuring blue and purple gradients

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **Lucide React** - Beautiful, consistent icons
- **CSS-in-JS** - Styled components with dynamic styling

## 📦 Installation

1. **Extract the files** to your desired location

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

4. **Build for production**:
   ```bash
   npm run build
   ```
   Output will be in the `dist` folder

## 🎯 Customization Guide

### 1. Update Personal Information

Open `src/Portfolio.jsx` and update:

**Your Name and Title** (around line 55-60):
```jsx
<h1 className="hero-title">Your Name</h1>
<p className="hero-subtitle">Full-Stack Software Engineer</p>
<p className="hero-description">
  Your personal bio here...
</p>
```

**Avatar Initials** (around line 50):
```jsx
<span className="avatar-text">YP</span>  // Change to your initials
```

### 2. Update Skills

The `skills` object (around line 10) contains all your technical skills organized by category. Update with your own skills:

```jsx
const skills = {
  "Languages": ["Your", "Languages", "Here"],
  "Frameworks": ["Your", "Frameworks"],
  // ... add or modify categories
};
```

### 3. Update Projects

The `projects` array (around line 25) contains your project showcase. Update each project:

```jsx
{
  id: 1,
  title: "Your Project Name",
  description: "Project description",
  tech: ["Tech1", "Tech2", "Tech3"],
  learnings: ["What you learned", "Key takeaway"],
  diagram: "🎯"  // Any emoji
}
```

### 4. Update Contact Links

Around line 450, update your social media and contact information:

```jsx
<a href="https://linkedin.com/in/yourprofile" ...>
<a href="https://github.com/yourusername" ...>
<a href="mailto:your.email@example.com" ...>
```

### 5. Update Photos Section

The photos section currently shows placeholders. You can either:
- Keep it as a placeholder gallery
- Remove the Photos tab if not needed
- Replace with actual images by modifying the `renderPhotos` function

### 6. Customize Colors

Find the gradient colors in the styles (around line 110+) and update:

```css
background: linear-gradient(135deg, #3b82f6, #8b5cf6);
```

Main colors used:
- Primary Blue: `#3b82f6`
- Purple: `#8b5cf6`
- Dark Background: `#0a0e27`
- Text: `#e4e4e7`

### 7. Update Interests

Modify the `renderInterests` function (around line 95) with your actual interests and hobbies.

## 📁 Project Structure

```
portfolio-website/
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── src/
│   ├── main.jsx        # React entry point
│   └── Portfolio.jsx   # Main portfolio component
└── README.md           # This file
```

## 🚀 Deployment

### Deploy to Netlify
1. Run `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 💡 Tips

- **Fonts**: The project uses Google Fonts (Outfit and JetBrains Mono). No additional setup needed.
- **Icons**: All icons come from lucide-react. Browse available icons at [lucide.dev](https://lucide.dev)
- **Animations**: Adjust animation speeds in the CSS by modifying `transition` and `animation` properties
- **Responsive**: Test on different screen sizes. The design is mobile-first and responsive.

## 🎓 Learning Resources

If you want to extend this portfolio:
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Need Help?

If you need assistance customizing your portfolio:
1. Check the code comments in `Portfolio.jsx`
2. Each section is clearly marked with comments
3. Experiment with the code - it's designed to be easy to modify!

---

**Built with ❤️ using React and Vite**