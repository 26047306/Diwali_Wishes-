# 🪔 Diwali Greeting & Sharing Platform ✨

A **dynamic and immersive web application** for creating and sharing personalized Diwali greetings.  
This project uses **pure JavaScript** to generate unique, shareable links — all set against a **beautiful video background** with ambient music.
🔗 [Visit Portfolio Website](#) *( https://26047306.github.io/Diwali_Wishes-/)*
<img width="959" height="441" alt="image" src="https://github.com/user-attachments/assets/e5e98579-fd87-474b-bd89-7ecf707babc6" />



## 🚀 Core Features

- ✨ **Dynamic Greeting:** Generates a custom wish using the user's name.  
- 🔗 **Persistent Sharing:** Creates a unique URL `(?name=...)` for each generated wish.  
- 🚀 **Instant Share:** Integrated “Share on WhatsApp” and “Copy Link” functionality.  
- 🎥 **Immersive UI:** Full-screen, looping video background.  
- 🎵 **Ambient Music:** Background music automatically plays on the user's first interaction.  
- 📱 **Fully Responsive:** Clean, mobile-first design that works on all devices.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3  
- **Core Logic:** JavaScript (ES6+)  
- **Media:** HTML5 `<video>` and `<audio>` elements

---

## 🏁 Getting Started

Follow these simple steps to set up the project locally.

### ✅ Prerequisites

- A modern web browser (Chrome, Edge, Firefox, Safari, etc.)

### 📥 Installation

1. **Clone the repository**  
   ```bash
   git clone https://26047306/Diwali_Wishes-.git
   ```

2. **Navigate to the project directory**  
   ```bash
   cd diwali-wishing-project
   ```

3. **Add Your Media Files**  
   Place your chosen files in the root of the project folder:

   - `diwali.mp4` → Your background video  
   - `diwali-music.mp3` → Your background music

   *(If your filenames are different, update them in `index.html`)*

   ```html
   <audio id="bg-music" loop>
       <source src="your-music-file.mp3" type="audio/mpeg">
   </audio>

   <video autoplay loop muted id="bg-video">
       <source src="your-video-file.mp4" type="video/mp4">
   </video>
   ```

4. **Run the Project**  
   Simply open the `index.html` file in your browser.

---

## 📁 File Structure

```
diwali-wishing-project/
│
├── 📄 index.html           # Main HTML structure
├── 🎨 style.css            # All styles for the application
├── 💡 script.js            # All JavaScript logic
│
├── 🎥 diwali.mp4           # REQUIRED: Your background video
├── 🎵 diwali-music.mp3     # REQUIRED: Your background audio
│
└── 📖 README.md            # Project documentation
```

---

## 🌍 Deployment

This is a **static website**, so deployment is simple and free.  
You can host it on platforms like:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

Just upload your entire folder (including `index.html`, `style.css`, `script.js`, and media files).

---

## 📄 License

This project is **open-source** — feel free to use, modify, and share it.  
Made with ❤️ to spread festive joy.

---

## 🪔 Happy Diwali! ✨
May this festival of lights brighten your life with joy, success, and endless happiness.
