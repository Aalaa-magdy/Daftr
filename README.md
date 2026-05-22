## 🎯 Overview

MoneyTrack helps users manage their personal finances by providing an intuitive interface to record, categorize, and analyze income and expenses. The app features a clean history view with filtering capabilities, category-based organization, and visual transaction summaries.

## ✨ Features

### Core Features
- **Add Transactions** - Record income and expenses with amount, category, and date
- **Transaction History** - View all transactions in chronological order
- **Filtering System** - Filter by:
  - Date ranges (This Week, This Month, Last Month, This Year, Custom Range)
  - Transaction type (Income/Expense/All)
  - Categories (Food, Shopping, Education, Bills, etc.)
- **Category Management** - Predefined categories with icons for common expense types
- **Balance Calculator** - Real-time balance calculation based on income and expenses
- **Visual Indicators** - Color-coded entries (green for income, red for expenses)

### Advanced Features
- Custom date range picker
- Persistent storage using AsyncStorage
- Transaction editing and deletion
- Monthly/yearly summaries
- Export transaction history (CSV)
- Charts and statistics (coming soon)

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native** (0.72+) | Mobile framework |
| **Expo** | Development platform |
| **React Navigation** (v6) | Screen navigation |
| **AsyncStorage** | Local data persistence |
| **React Native Paper** | UI components |
| **React Native Calendars** | Date picking |
| **React Native Vector Icons** | Icons and graphics |
| **Moment.js** | Date manipulation |
| **React Native Chart Kit** | Data visualization (planned) |

## 📦 Installation

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Mac only) or Android Emulator
- Expo Go app on physical device

### Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/moneytrack.git
cd moneytrack

# 2. Install dependencies
npm install
# or
yarn install

# 3. Install additional required packages
npm install @react-navigation/native @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npm install @react-native-async-storage/async-storage
npm install react-native-paper
npm install react-native-vector-icons
npm install react-native-calendars
npm install moment
npm install react-native-gesture-handler

# 4. For iOS (Mac only)
cd ios && pod install && cd ..

# 5. Start the development server
npm start
# or
expo start

# 6. Run on device/emulator
# Press 'i' for iOS simulator
# Press 'a' for Android emulator
# Scan QR code with Expo Go app for physical device
