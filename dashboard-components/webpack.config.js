const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        exclude: /(node_modules)/,
        use: ["url-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "components",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header": "./src/components/Header/Header.tsx",
        "./Footer": "./src/components/Footer/Footer.tsx",
        "./BreadCrumb": "./src/components/BreadCrumb/BreadCrumb.tsx",
        "./CalendarComponent": "./src/components/CalendarComponent/CalendarComponent.tsx",
        "./AssetMenu": "./src/components/Asset/AssetMenu/AssetMenu.tsx",
        "./GraphicalOverview": "./src/components/Asset/AssetModel/GraphicalOverview.tsx",
        "./LiveModel": "./src/components/Asset/AssetModel/LiveModel.tsx",
        "./SensorPlot": "./src/components/Asset/SensorPlot/SensorPlot.tsx",
        "./Button": "./src/components/Button/Button.tsx",
        "./Dropdown": "./src/components/Dropdown/Dropdown.tsx",
        "./MenuContainer": "./src/components/MenuContainer/MenuContainer.tsx",
        //"./AssetCard": "./src/components/PmtComponent/AssetCard/AssetCard.tsx",
        // "./PlantAlertList": "./src/components/PmtComponent/PlantAlertList/PlantAlertList.tsx",
        "./ReliablityHeatMap": "./src/components/PmtComponent/ReliablityHeatMap/ReliablityHeatMap.tsx",
        "./Status": "./src/components/Status/Status.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
