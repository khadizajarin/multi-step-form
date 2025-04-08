# 🧩 Multi-Step Form - Front-End Developer Task

This project is a **Multi-Step Form** built with **Next.js App Router**, **React Hook Form**, **Zod**, and **TailwindCSS**. The form collects user information across three steps with validation and a final summary. It ensures a smooth user experience by providing **real-time validation**, **error handling**, and **step-by-step navigation**. The project also includes **dark mode support**, is **fully responsive**, and uses **local state** to preserve input data between steps. Also, it simulates form submission using **React Query** to mimic a real API interaction.

## 🛠 Tech Stack

- ✅ Next.js (App Router)
- ✅ React Hook Form
- ✅ Zod (Schema validation)
- ✅ TailwindCSS (Styling & dark mode)
- ✅ TypeScript

### ✅ Bonus Features

- Dark mode support
- Fully responsive design
- Password visibility toggle
- Final form summary before submission

---

## 📸 Demo

- 🔗 **Live Site**: [https://y-xi-nine.vercel.app/](https://y-xi-nine.vercel.app/)
- 🎥 **Video Demo**: [Watch on Loom](https://www.loom.com/share/d8b3f4e58ccc4b9481c44472c9d69b71?sid=18bd5539-604a-4e40-99a2-c2d778d4a4ed)

---

## 🧭 Form Steps

### 🔹 Step 1: Personal Information
- Full Name (required)
- Email (valid format, required)
- Phone Number (min 10 digits, required)

### 🔹 Step 2: Address Details
- Street Address (required)
- City (required)
- Zip Code (min 5 digits, numbers only)

### 🔹 Step 3: Account Setup
- Username (min 4 characters)
- Password (min 6 characters)
- Confirm Password (must match)

### 🔹 Final Step
- Review all entered information
- Submit (logs data to console)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/khadizajarin/multi-step-form
cd multi-step-form

```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser to see the app.

### 📂 Project Structure
```bash
app/
  ├──form/
    ├── components/
    │   ├── Step1.tsx
    │   ├── Step2.tsx
    │   ├── Step3.tsx
    │   ├── FormSummary.tsx
    │   └── types.ts
    ├── ui/
    │   └── Input.tsx
    │   └── Button.tsx
    ├── page.tsx
```
### 🧪 Validation with Zod
Each form step uses Zod to validate fields with instant feedback and error messages shown under inputs.

### 💬 Feedback
If you have suggestions or want to contribute, feel free to open an issue or a PR!

### 🧑‍💻 Author
Built by Khadiza Jarin Roza

aaac