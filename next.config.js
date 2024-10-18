const path = require("path");

module.exports = () => {
  const city = process.env.NEXT_PUBLIC_CITY || "detroit"; // Default city
  const appToServe = process.env.NEXT_PUBLIC_APP_NAME || "DCoin"; // Default app if not set

  console.log(`Serving ${appToServe} for ${city}`);

  return {
    // No redirect; instead, directly serve from base URL
    async rewrites() {
      return [
        {
          source: "/",
          destination: `/${city}/${appToServe}`, // Serve the main app at the root
        },
        {
          source: "/:path*",
          destination: `/${city}/${appToServe}/:path*`, // Rewrite all other requests to the app
        },
      ];
    },

    // Aliasing shared components if needed
    webpack: (config) => {
      config.resolve.alias["@shared"] = path.join(__dirname, "shared");
      return config;
    },
  };
};
