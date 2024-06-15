### Project Overview

This project is a comprehensive data visualization dashboard built using React, Victory, and Tailwind CSS. It fetches data from a backend API and displays it in various forms, including pie charts, bar charts, and line charts. The primary components of the project include the Dashboard, PieChart, Barchart, and Data components. Each component is designed to present specific data insights in a user-friendly and interactive manner.

![Untitled design](https://github.com/govinds9/Dashboard_frontend/assets/94511091/d10af892-c395-40c9-bed0-661c22a9f7dd)



### Features

1. **Dashboard Component**
   - **Summary Cards**: Displays summarized data in cards, such as total countries, regions, sectors, and topics.
   - **Line Chart**: Visualizes trends in data fields like likelihood and relevance over different periods.
   - **Pie Chart**: Shows the distribution of projects by regions with a color-coded legend.
   - **Bar Chart**: Illustrates the number of projects started each year.
   - 

2. **PieChart Component**
   - Fetches data from the API and visualizes it as a pie chart with a carousel feature to navigate through different datasets.
   - Provides interactive elements like left and right navigation buttons to switch between different pie charts.
   - Utilizes the VictoryPie component for rendering the pie charts with animated transitions.

3. **Barchart Component**
   - Displays data as bar charts with carousel navigation, allowing users to switch between different datasets.
   - Utilizes the VictoryBar component to render bar charts with detailed axis labels and data points.
   - Provides interactive navigation buttons for seamless data exploration.

4. **Data Component**
   - Fetches and displays tabular data from the API.
   - Utilizes a customizable table with columns such as topic, title, country, start year, end year, sector, region, intensity, likelihood, pestle, relevance, source, and link.
   - Provides a comprehensive view of the dataset with sortable and searchable features.
![image](https://github.com/govinds9/Dashboard_frontend/assets/94511091/b6976e88-ca81-4652-8bcf-105ca8cb6102)

### Technical Stack

- **React**: For building the user interface and managing component state.
- **Victory**: For rendering data visualizations such as pie charts, bar charts, and line charts.
- **Tailwind CSS**: For styling the components and ensuring a responsive design.
- **Fetch API**: For making asynchronous requests to the backend API and handling responses.
- **React Hooks**: Such as `useState` and `useEffect` for managing state and side effects.

### How It Works

1. **Data Fetching**: Each component fetches data from the respective API endpoints upon mounting using the `useEffect` hook.
2. **State Management**: The data is stored in the component's state using the `useState` hook. Loading and error states are also managed to provide feedback to users.
3. **Data Transformation**: The fetched data is transformed into the format required by the Victory components for rendering charts.
4. **Rendering**: The components render the charts and tables using the transformed data. Interactive elements such as buttons are used to navigate through different datasets.

### Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repository-url.git
   cd your-repository-folder
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **Backend Setup**:
   Ensure the backend API is running and accessible. You can find the backend API source code and setup instructions in the corresponding repository.

### Usage

- **Dashboard**: Provides a high-level overview of the data with interactive charts and summary cards.
- **PieChart**: Allows users to explore different datasets using the carousel navigation.
- **Barchart**: Offers detailed bar charts with navigation to switch between datasets.
- **Data Table**: Presents a comprehensive view of the data in a tabular format, suitable for in-depth analysis.

### Contributions

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.

### License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

