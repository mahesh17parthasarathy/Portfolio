# 👨‍💻 MAHESH P - Portfolio Website

A modern, responsive, and dynamic portfolio website showcasing my skills, projects, and experience as a Data Science & Machine Learning Engineer.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-success) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

### 🎨 Design & User Experience
- **Modern & Clean UI** - Professional design with smooth animations
- **Fully Responsive** - Optimized for all devices (Mobile, Tablet, Desktop)
- **Dark/Light Theme Ready** - Easy to customize color schemes
- **Smooth Animations** - Scroll-triggered animations and transitions
- **Loading Screen** - Beautiful gradient loading animation
- **Scroll Progress Indicator** - Visual scroll progress at the top

### 🚀 Dynamic Features
- **Typing Effect** - Animated typing effect on hero section
- **Animated Counters** - Statistics counter animation on scroll
- **Scroll to Top Button** - Smooth scroll navigation
- **Toast Notifications** - Beautiful notification system for form submissions
- **Smart Form Validation** - Real-time visual feedback
- **Mobile Menu** - Enhanced mobile navigation with smooth transitions

### 📧 Contact Form
- **EmailJS Integration** - Direct email delivery to your inbox
- **Form Validation** - Client-side validation with visual feedback
- **Fallback Support** - Mailto link fallback if EmailJS fails
- **Success/Error Handling** - User-friendly notifications

### 📱 Sections
- **Hero Section** - Eye-catching introduction with profile image
- **About Me** - Professional summary and statistics
- **Education** - Academic qualifications and achievements
- **Experience** - Internship experiences with detailed descriptions
- **Skills** - Technical skills organized by categories
- **Projects** - Featured projects with descriptions and technologies
- **Certifications** - Professional certifications and achievements
- **Contact** - Multiple contact methods and working contact form

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)** - Interactive functionality and dynamic features

### Libraries & Tools
- **Font Awesome** - Icon library for beautiful icons
- **Google Fonts (Inter)** - Modern, clean typography
- **EmailJS** - Email service for contact form

### Features & APIs
- **Intersection Observer API** - Scroll animations
- **Smooth Scrolling** - Native browser smooth scroll
- **CSS Animations** - Keyframe animations and transitions

---

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
├── Mahesh_BB.jpg       # Profile image
│
├── README.md           # Project documentation (this file)
├── DEPLOYMENT_GUIDE.md # Deployment instructions
├── EMAILJS_SETUP.md    # EmailJS configuration guide
└── IMPROVEMENTS.md     # List of improvements and features
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Git (optional, for version control)

### Installation

1. **Clone the repository** (or download ZIP)
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser, or
   - Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Customize the content**
   - Edit `index.html` to update your information
   - Modify `styles.css` to change colors and styling
   - Update `script.js` for custom functionality

---

## ⚙️ Configuration

### EmailJS Setup (Contact Form)

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update credentials in `script.js`:
   ```javascript
   const EMAILJS_CONFIG = {
       PUBLIC_KEY: "your_public_key",
       SERVICE_ID: "your_service_id",
       TEMPLATE_ID: "your_template_id"
   };
   ```

📖 **Detailed instructions**: See [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

### Customization

#### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* Add your custom colors */
}
```

#### Updating Profile Image
Replace `Mahesh_BB.jpg` with your image and ensure it's referenced correctly in `index.html`.

#### Modifying Content
- **Personal Info**: Update hero section in `index.html`
- **About Section**: Edit the about text
- **Projects**: Add/remove project cards
- **Skills**: Modify skill categories and items
- **Contact**: Update contact information

---

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- 📱 **Mobile** (< 480px) - Single column, touch-friendly
- 📱 **Tablet** (481px - 1024px) - Two-column layouts
- 💻 **Desktop** (> 1024px) - Multi-column grids

---

## 🚀 Deployment

### Quick Deploy Options

#### Option 1: Netlify (Recommended - 2 minutes)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your portfolio folder
3. Done! Your site is live

#### Option 2: GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select `main` branch and deploy

#### Option 3: Vercel
1. Import repository to [Vercel](https://vercel.com)
2. Deploy with one click

📖 **Detailed deployment guide**: See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

## 🎯 Key Features Explained

### Animated Counters
Statistics in the About section animate from 0 to the target value when scrolled into view.

### Scroll Animations
All sections fade in and slide up smoothly using the Intersection Observer API for optimal performance.

### Typing Effect
The hero name types out letter by letter on page load for an engaging first impression.

### Form Validation
Real-time validation with visual feedback (green for valid, red for invalid fields).

### Mobile Menu
Enhanced mobile navigation that prevents body scroll, closes on outside click, and supports keyboard navigation.

---

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Customization Guide

### Adding a New Project

In `index.html`, find the projects section and add:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-overlay">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
            <a href="#" class="project-link"><i class="fab fa-github"></i></a>
        </div>
        <div class="image-placeholder-small">
            <i class="fas fa-project-icon"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span>Technology</span>
        </div>
    </div>
</div>
```

### Adding a New Skill

```html
<div class="skill-item">
    <i class="fab fa-skill-icon"></i>
    <span>Skill Name</span>
</div>
```

### Modifying Animations

Edit animation durations in `styles.css`:
```css
transition: opacity 0.8s ease, transform 0.8s ease;
```

---

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths are relative (e.g., `./image.jpg`)
- Ensure image files are in the correct directory
- Verify file names match exactly (case-sensitive)

### Contact Form Not Working
- Verify EmailJS credentials in `script.js`
- Check browser console for errors
- Ensure EmailJS script is loaded
- Test with mailto fallback

### Animations Not Working
- Check browser supports Intersection Observer
- Verify JavaScript is enabled
- Check console for errors

---

## 📊 Performance

- **Lightweight** - Minimal dependencies
- **Fast Loading** - Optimized CSS and JavaScript
- **CDN Ready** - Easy to deploy on CDN
- **SEO Friendly** - Semantic HTML structure

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**MAHESH P**

- 🌐 Portfolio: [Live Demo](https://your-portfolio-url.netlify.app)
- 📧 Email: mastermahesh17@gmail.com
- 💼 LinkedIn: [linkedin.com/in/mahe17](https://linkedin.com/in/mahe17)
- 💻 GitHub: [github.com/mahesh17parthasarathy](https://github.com/mahesh17parthasarathy)
- 📱 Phone: +91 7871133077

---

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography
- [EmailJS](https://www.emailjs.com/) - Email service
- All the developers who shared their knowledge and inspiration

---

## 📈 Future Enhancements

- [ ] Dark mode toggle
- [ ] Project filtering by technology
- [ ] Skills progress bars
- [ ] Blog section
- [ ] Multi-language support
- [ ] Particle background effects
- [ ] Accessibility panel

---

## 📞 Contact

Have questions or want to collaborate? Feel free to reach out!

- **Email**: mastermahesh17@gmail.com
- **LinkedIn**: [linkedin.com/in/mahe17](https://linkedin.com/in/mahe17)
- **GitHub**: [github.com/mahesh17parthasarathy](https://github.com/mahesh17parthasarathy)

---

⭐ **Star this repo if you find it helpful!**

Made with ❤️ by MAHESH P

