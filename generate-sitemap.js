import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap"; // Correct import for ES Modules

// URL of your website
const baseUrl = "https://codexdevware.com";

// List all your pages manually
const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/aboutus", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "weekly", priority: 0.8 },
  { url: "/featured-product", changefreq: "weekly", priority: 0.8 },
  { url: "/portfolio", changefreq: "weekly", priority: 0.8 },
  { url: "/services/web-development/3", changefreq: "weekly", priority: 0.8 },
  { url: "/blogs", changefreq: "weekly", priority: 0.8 },
  // Add other pages as needed
];

// Create a sitemap stream
const sitemapStream = new SitemapStream({ hostname: baseUrl });

// Add URLs to the sitemap
urls.forEach((url) => sitemapStream.write(url));

// End the stream
sitemapStream.end();

// Generate and write the sitemap
streamToPromise(sitemapStream).then((sm) => {
  fs.writeFileSync("./public/sitemap.xml", sm.toString());
  console.log("Sitemap generated!");
});
