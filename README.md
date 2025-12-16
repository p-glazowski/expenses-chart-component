---
# 📊 Expenses Chart Component

A clean and interactive expenses chart component built with **React** and **Tailwind CSS**.
Visualizes spending data over the last 7 days with dynamic bar heights, and shows monthly total and percentage differences in a sleek, modern interface.
---

## 📸 Preview

![Expenses Chart Screenshot](/screenshot.jpg)

LIVE demo: [https://p-glazowski.github.io/expenses-chart-component](https://p-glazowski.github.io/expenses-chart-component)

---

## 🚀 Features

- 📅 **Last 7 days spend visualization** with bars scaled based on highest spending day
- 💰 **Monthly total spending** displayed, formatted as currency
- 📈 **Monthly percentage difference** compared to previous month, color-coded (red for increase, green for decrease)
- 🎨 Styled using Tailwind CSS for fast, responsive and modern UI
- 🔄 React functional components with hooks for state and calculations

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **Vite** (recommended for building & dev)

---

## 📁 File Structure

```
src/
│
├── comps/
│   └── Wick.jsx              # Bar component with dynamic height & tooltip/info
├── data.json                 # Example expenses data (monthly + daily)
├── App.jsx                   # Main component calculating sums & rendering UI
└── index.css                 # Tailwind and custom styles
public/
└── screenshot.jpg            # Preview screenshot image
```

---

## 🧠 How It Works

- Fetches spending data from `data.json`, grouped by month with daily breakdown
- Calculates total spending for the last month
- Computes percentage difference compared to previous month
- Extracts last 7 days for the bar chart with tallest bar based on max spending
- Bars rendered with dynamic heights relative to the highest spend day

---

## 📦 Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/p-glazowski/expenses-chart-component.git
   cd expenses-chart-component
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the project:**

   ```bash
   npm run dev
   ```

---

## 👨‍💻 Author

**Piotr Głazowski**  

---

## 📝 License

Open source under the [MIT License](LICENSE).
