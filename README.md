# Loan Calculator App

A simple and responsive **Loan Calculator** web application built with [Next.js](https://nextjs.org/) and TypeScript. This app allows users to calculate loan payments, total interest, and total repayment amount based on the loan amount, interest rate, and loan term.

## Features

- **Dynamic Calculations**: Updates results instantly on submission.
- **User-Friendly UI**: Clean and intuitive interface.
- **Mobile-Responsive**: Optimized for all screen sizes.
- **Customizable**: Easy to modify for additional loan types or calculation logic.

## Getting Started

### Prerequisites

- Node.js (version 16 or above)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/loan-calculator.git
   cd loan-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

1. Enter the **loan amount**, **annual interest rate**, and **loan term** in months or years.
2. View the calculated **monthly payment**, **total interest**, and **total repayment** instantly.

## Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs linting checks.
- `test`: Runs unit tests.

## Folder Structure

```
loan-calculator/
├── public/         # Static assets
├── app/
│   ├── components/ # Reusable UI components
│   ├── page.tsx    # App code
│   └── utils/      # Calculation logic and helpers
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Future Enhancements

- Instant updates to value changes after the first calculation
- Change payments per year to a dropdown with values Monthly, Forthnightly, etc. Default to monthly
- Add an **amortization schedule** to display monthly payment breakdowns.
- Support for multiple currencies and localization.
- Advanced loan options (e.g., extra payments, adjustable rates).

## Contributing

Contributions are welcome. Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 