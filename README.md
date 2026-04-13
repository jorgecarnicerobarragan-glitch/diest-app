# 🍎 Diest App

A mobile diet tracking application built with React Native for iOS and Android.

## Features

- 📊 Track daily calorie intake
- 🍽️ Log meals and foods
- 📈 View nutritional information (proteins, carbs, fats)
- 📉 Calculate BMI
- 📋 Personalized diet plans
- 📊 Progress charts and statistics
- 💾 Local food database

## Getting Started

### Prerequisites

- Node.js and npm installed
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jorgecarnicerobarragan-glitch/diest-app.git
cd diest-app
```

2. Install dependencies:
```bash
npm install
```

3. Run on Android:
```bash
npm run android
```

Or run on iOS:
```bash
npm run ios
```

## Project Structure

```
diest-app/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── HistoryScreen.tsx
│   ├── services/
│   │   └── calorieService.ts
│   └── utils/
├── App.tsx
├── package.json
└── README.md
```

## Technologies

- React Native
- React Navigation
- React Native Chart Kit
- Axios
- AsyncStorage

## Screens

### Home Screen
- Add meals and track calories
- View total daily calories
- See today's meals list

### Profile Screen
- Calculate BMI
- Set personal information
- View health metrics

### History Screen
- View weekly calorie charts
- Statistics and trends
- Daily breakdown

## Contributing

Feel free to fork this repository and submit pull requests.

## Author

Created by jorgecarnicerobarragan-glitch

## License

MIT