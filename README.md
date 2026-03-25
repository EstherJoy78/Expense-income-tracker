# 💰 Expense & Profit Tracker

A modern, fully-featured financial tracking application built with **Python and Streamlit**. Track your income and expenses, visualize financial trends, and monitor your profit/loss over time.

![Python](https://img.shields.io/badge/Python-3.8+-3776AB?logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-1.31.0-FF4B4B?logo=streamlit&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-2.2.0-150458?logo=pandas&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-5.18.0-3F4F75?logo=plotly&logoColor=white)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Functionality
- ➕ **Add Transactions**: Record income and expenses with categories, amounts, and descriptions
- 📊 **Interactive Visualizations**: Beautiful charts using Plotly (pie charts, line graphs)
- 💵 **Summary Dashboard**: Real-time totals for income, expenses, and net profit/loss
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 💾 **CSV Storage**: Data saved locally in CSV format for easy backup and portability
- 🗂️ **Smart Categories**: Pre-defined categories for income and expenses
- 📅 **Date Tracking**: Record and filter transactions by date
- 🗑️ **Easy Management**: Delete transactions with one click
- 📥 **Export Data**: Download your transactions as CSV anytime
- 🔍 **Advanced Filtering**: Filter by type, category, and sort options

### Data Visualization
- **Summary Metrics**: Quick overview cards with income, expenses, and profit/loss
- **Category Pie Charts**: Visual breakdown of spending and income by category
- **6-Month Trend Line Chart**: Track your financial progress over time
- **Top Categories**: See your biggest expenses and income sources

### User Interface
- Clean, modern design with Streamlit
- Sidebar form for quick transaction entry
- Tabbed interface (Overview, Analytics, Transactions)
- Color-coded transactions (green for income, red for expenses)
- Real-time updates and calculations

## 🎥 Demo

### Main Features:
```
📊 Financial Summary Cards
├── Total Income: $X,XXX.XX
├── Total Expenses: $X,XXX.XX
└── Net Profit/Loss: $X,XXX.XX

📈 Visualizations
├── 6-Month Trend Chart (Line Graph)
├── Expense Breakdown (Pie Chart)
└── Income Breakdown (Pie Chart)

📋 Transaction List
├── Filter by Type/Category
├── Sort by Date/Amount
└── Delete functionality
```

## 🛠️ Tech Stack

### Core Technologies
- **Python 3.8+** - Programming language
- **Streamlit 1.31.0** - Web framework for data apps
- **Pandas 2.2.0** - Data manipulation and analysis
- **Plotly 5.18.0** - Interactive charting library

### Key Features
- **CSV Files** - Simple, portable data storage
- **Datetime** - Built-in Python date handling
- **Session State** - Streamlit's state management

### Why This Stack?
- ✅ **Python** - Easy to learn, widely used for data applications
- ✅ **Streamlit** - Build web apps with pure Python (no HTML/CSS/JavaScript)
- ✅ **Pandas** - Industry standard for data manipulation
- ✅ **Plotly** - Beautiful, interactive charts with minimal code
- ✅ **CSV** - Universal format, easy to backup and import/export

## 📦 Prerequisites

Before you begin, ensure you have:

### Required Software

1. **Python 3.8 or higher**
   - Download: https://www.python.org/downloads/
   - Verify installation:
     ```bash
     python --version
     # Should show: Python 3.8.x or higher
     ```

2. **pip** (Python package manager)
   - Usually comes with Python
   - Verify:
     ```bash
     pip --version
     ```

3. **Text Editor or IDE** (Optional but recommended)
   - VS Code: https://code.visualstudio.com/
   - PyCharm: https://www.jetbrains.com/pycharm/
   - Or any text editor you prefer

### System Requirements
- **Operating System**: Windows 10+, macOS 10.14+, or Linux
- **RAM**: 2GB minimum (4GB recommended)
- **Disk Space**: 500MB for Python and dependencies
- **Internet**: Required for initial installation only

## 🚀 Installation

### Step 1: Get the Project Files

**Option A: Clone from GitHub**
```bash
git clone <repository-url>
cd expense-tracker
```

**Option B: Download ZIP**
```bash
# Extract the ZIP file and navigate to the folder
cd expense-tracker
```

### Step 2: Create Virtual Environment (Recommended)

Creating a virtual environment keeps your project dependencies isolated.

**On Windows:**
```bash
# Create virtual environment
python -m venv venv

# Activate it
venv\Scripts\activate
```

**On macOS/Linux:**
```bash
# Create virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate
```

You should see `(venv)` at the beginning of your terminal prompt.

### Step 3: Install Dependencies

```bash
# Install all required packages
pip install -r requirements.txt
```

**Expected output:**
```
Collecting streamlit==1.31.0
Collecting pandas==2.2.0
Collecting plotly==5.18.0
...
Successfully installed streamlit-1.31.0 pandas-2.2.0 plotly-5.18.0 ...
```

**Installation time:** 2-5 minutes depending on your internet speed.

### Step 4: Verify Installation

```bash
# Check if Streamlit is installed correctly
streamlit --version
```

Should show: `Streamlit, version 1.31.0` (or similar)

## 🏃 Running the Application

### Start the Application

```bash
# Make sure your virtual environment is activated
# You should see (venv) in your terminal

# Run the app
streamlit run app.py
```

**Expected output:**
```
  You can now view your Streamlit app in your browser.

  Local URL: http://localhost:8501
  Network URL: http://192.168.x.x:8501
```

### Access the Application

1. **Automatically**: Your default browser should open automatically
2. **Manually**: Open your browser and go to `http://localhost:8501`

### Stop the Application

- Press `Ctrl+C` in the terminal where the app is running

### Restart the Application

- Just run `streamlit run app.py` again

## 📁 Project Structure

```
expense-tracker/
├── app.py                    # Main Streamlit application (ALL CODE HERE!)
├── requirements.txt          # Python dependencies
├── transactions.csv          # Data file (created automatically)
├── .gitignore               # Git ignore rules
├── README.md                # This file
└── TOOLKIT.md               # Detailed technical guide
```

### Key Files Explained

- **app.py** - The entire application! All Python code is in this single file
  - Transaction management functions
  - Data visualization functions
  - Streamlit UI components
  - All logic and features

- **requirements.txt** - Lists all Python packages needed

- **transactions.csv** - Your data file (created when you add your first transaction)
  - Simple CSV format
  - Easy to backup
  - Can be opened in Excel/Google Sheets

## 📖 Usage Guide

### Adding Your First Transaction

1. **Start the app** with `streamlit run app.py`
2. Look at the **left sidebar** - you'll see the "Add Transaction" form
3. **Fill in the form:**
   - **Type**: Select "Income" or "Expense"
   - **Amount**: Enter the amount (e.g., 150.00)
   - **Category**: Choose from the dropdown
   - **Date**: Pick the transaction date
   - **Description**: (Optional) Add notes
4. **Click "Add Transaction"**
5. See your transaction appear immediately!

### Viewing Your Financial Overview

**Tab 1: Overview**
- Summary cards at the top
- 6-month trend chart
- Category breakdown pie charts

**Tab 2: Analytics**
- Detailed category analysis
- Top spending categories
- Top income sources
- Trend visualization

**Tab 3: Transactions**
- Complete list of all transactions
- **Filters:**
  - Filter by type (Income/Expense/All)
  - Filter by category
  - Sort by date or amount
- **Delete:** Click the 🗑️ button to remove a transaction

### Managing Your Data

**Export Data (Sidebar)**
- Click "📥 Export CSV" button
- Downloads all your transactions
- Opens in Excel, Google Sheets, etc.

**Clear All Data (Sidebar)**
- Click "🗑️ Clear All" button
- Confirms before deleting
- Use with caution - cannot be undone!

### Data Storage

- All data saved in `transactions.csv`
- Automatically created when you add first transaction
- Updates instantly when you add/delete transactions
- **Backup tip:** Copy this file regularly to keep your data safe!

## 🌐 Deployment

### Option 1: Streamlit Cloud (FREE! ⭐ Recommended)

1. **Push to GitHub** (see GitHub section in original README)

2. **Go to Streamlit Cloud**
   - Visit: https://streamlit.io/cloud
   - Sign in with GitHub

3. **Deploy**
   - Click "New app"
   - Select your repository
   - Main file: `app.py`
   - Click "Deploy"

4. **Done!** Your app gets a public URL like:
   - `https://your-app-name.streamlit.app`

**Advantages:**
- ✅ Completely free
- ✅ No credit card required
- ✅ Auto-updates when you push to GitHub
- ✅ HTTPS by default

### Option 2: Run Locally

Just keep running `streamlit run app.py` on your computer!

### Option 3: Other Platforms

- **Heroku**: https://www.heroku.com/
- **Render**: https://render.com/
- **PythonAnywhere**: https://www.pythonanywhere.com/

## 🐛 Troubleshooting

### Issue 1: "Python is not recognized"

**Problem:** `python` command not found

**Solution:**
```bash
# Try python3 instead of python
python3 --version

# Or reinstall Python and check "Add to PATH" during installation
```

### Issue 2: "Module not found" error

**Problem:** `ModuleNotFoundError: No module named 'streamlit'`

**Solution:**
```bash
# Make sure virtual environment is activated
# You should see (venv) in terminal

# Reinstall requirements
pip install -r requirements.txt
```

### Issue 3: Virtual environment not activating

**On Windows:**
```bash
# If activation fails, try:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then activate again:
venv\Scripts\activate
```

**On macOS/Linux:**
```bash
# Make sure you're using the right command:
source venv/bin/activate

# NOT: venv/bin/activate
```

### Issue 4: Port already in use

**Problem:** `Address already in use`

**Solution:**
```bash
# Use a different port
streamlit run app.py --server.port 8502

# Or kill the existing process and try again
```

### Issue 5: Data not saving

**Problem:** Transactions disappear after closing app

**Solution:**
- Check if `transactions.csv` exists in the same folder as `app.py`
- Make sure you have write permissions in the folder
- Check the terminal for error messages

### Issue 6: Charts not displaying

**Problem:** Blank charts or errors

**Solution:**
```bash
# Reinstall plotly
pip install --upgrade plotly

# Clear Streamlit cache
# Press 'C' in the terminal running the app, then press Enter
```

## 💡 Tips & Tricks

### Keyboard Shortcuts (in the terminal)
- `Ctrl + C` - Stop the app
- `R` - Rerun the app (if prompted)
- `C` - Clear cache (if app behaves strangely)

### Data Tips
- **Backup regularly**: Copy `transactions.csv` to another location
- **Import data**: You can edit `transactions.csv` in Excel and it will update in the app
- **Share data**: Send the CSV file to others

### Customization Ideas
Want to modify the app? Edit `app.py`:
- **Line 31-32**: Add more expense/expense categories
- **Line 398-406**: Change chart colors
- **Entire file**: All features in one place, easy to find and modify!

## 📚 Additional Resources

- **Detailed Tech Guide**: See [TOOLKIT.md](./TOOLKIT.md) for in-depth explanations
- **Streamlit Documentation**: https://docs.streamlit.io/
- **Pandas Tutorial**: https://pandas.pydata.org/docs/user_guide/index.html
- **Plotly Charts**: https://plotly.com/python/
- **Python Tutorial**: https://docs.python.org/3/tutorial/

## 🤝 Contributing

Contributions welcome! Here's how:

1. Fork the repository
2. Create a branch (`git checkout -b feature/new-feature`)
3. Make your changes in `app.py`
4. Test thoroughly
5. Commit (`git commit -m 'Add new feature'`)
6. Push (`git push origin feature/new-feature`)
7. Open a Pull Request

### Ideas for Contributions
- Add more chart types
- Implement budget goals
- Add recurring transactions
- Multi-currency support
- Dark mode toggle
- Email notifications

## 📄 License

This project is licensed under the MIT License.

**[Esther Joy]**
- GitHub: [EstherJoy78]

## 🙏 Acknowledgments

- **Streamlit** - For making Python web apps ridiculously easy
- **Plotly** - For beautiful, interactive charts
- **Pandas** - For powerful data manipulation

---

## 🎯 Quick Start Summary

```bash
# 1. Navigate to project folder
cd expense-tracker

# 2. Create virtual environment
python -m venv venv

# 3. Activate it
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# 4. Install dependencies
pip install -r requirements.txt

# 5. Run the app
streamlit run app.py

# 6. Open browser to http://localhost:8501
```
## 🧠 AI Prompt Journal

### Prompt 1: Setting up Git and Project Initialization

**Prompt Used:**  
“How do I initialize a Git repository and connect my local project to GitHub?”

**Curriculum Link:**  
(Add link here)

**AI Response Summary:**  
The AI provided step-by-step guidance on initializing a Git repository, adding a remote origin, committing files, and pushing to GitHub. It also explained the difference between `git init` and `git clone`, and how to resolve issues like untracked files.

**Evaluation:**  
The response was very helpful because it simplified Git concepts and guided me through pushing my project successfully. It helped me understand how version control works in practice.

---

### Prompt 2: Fixing Python Dependency Errors

**Prompt Used:**  
“Why am I getting ‘No matching distribution found for pandas==2.2.0’ when installing requirements?”

**Curriculum Link:**  
(Add link here)

**AI Response Summary:**  
The AI explained that the error was due to an incompatible Python version (Python 3.8) and recommended either upgrading Python or downgrading the pandas version. It guided me through creating a new Conda environment with Python 3.11 and reinstalling dependencies.

**Evaluation:**  
This was very helpful because it identified the root cause quickly and provided a clear fix. It also improved my understanding of environment management and package compatibility.

---

### Prompt 3: Fixing npm and Frontend Setup Issues

**Prompt Used:**  
“Why is npm not working and how do I fix ‘command not found’ in Git Bash?”

**Curriculum Link:**  
(Add link here)

**AI Response Summary:**  
The AI explained that Node.js was not properly added to the system PATH in Git Bash. It guided me through locating the Node.js installation folder and updating the PATH manually. It also helped troubleshoot issues with the dev server and running the React app.

**Evaluation:**  
The response was very practical and solved the issue completely. It helped me understand how environment variables work and how to troubleshoot frontend setup problems.

---
**That's it! Start tracking your finances! 💰**

---

**Made with ❤️ using Python and Streamlit**

*Last Updated: March 25, 2026*
