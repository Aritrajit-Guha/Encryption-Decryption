# Encryption-Decryption
# 🔐 Caesar Cipher Web Tool

This project is a **simple web-based Caesar Cipher** encryption and decryption tool. It allows users to input text, apply a shift value, and either encrypt or decrypt the text using classic character shifting.

---

## 📁 Project Structure

```bash
.
├── index.html         # Main HTML structure
├── sstyle.css         # Styling for layout and components
├── practice.js        # JavaScript logic for encryption, decryption & output
└── images-removebg-preview.png # Icon used in Result button (transparent PNG)
```

---

## 🚀 Features

- Encrypt or decrypt any alphabetical text using Caesar Cipher.
- Accepts custom **shift value** from user input.
- Displays result on clicking a **Result** button.
- Visually indicates selected mode (Encrypt / Decrypt).
- Responsive and clean UI with transparent image support.

---

## 🖥️ How It Works

1. **User Inputs:**
   - Text to encrypt/decrypt
   - Shift value (number of positions to shift)

2. **Buttons:**
   - `Encrypt 🔵`: Encodes the text
   - `Decrypt 🔵`: Decodes the text
   - `Result 🟢`: Displays the final output

3. **Output:**
   - Displayed in a styled container at the bottom.

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Layout and styling (with Flexbox)
- **JavaScript** – Core logic for Caesar Cipher and UI interaction

---

## 🧠 Caesar Cipher Logic (Inside `practice.js`)

- Converts letters using ASCII manipulation:
  ```js
  ((ascii - base ± shift) % 26 + 26) % 26 + base;
  ```
- Preserves non-alphabet characters.
- Handles both uppercase and lowercase letters.

---

## 🖼️ Notes

- The result button uses a **background-less PNG icon** (`images-removebg-preview.png`).
- The image's parent container and CSS ensure it stays transparent on any background.
- All styles are defined in `sstyle.css`.

---

## 📸 Preview

> Add a screenshot here if needed

---

## ✅ To Run

Simply open `index.html` in any modern browser.
