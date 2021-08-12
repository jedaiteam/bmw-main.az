import React from "react";
import fs from "fs";
const path = require('path');


const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {

  
  const baseUrl = {
    development: "http://localhost:5000",
    production: "https://bmwpartsbaku.az",
  }[process.env.NODE_ENV];


  const resData = await fetch(`https://admin.bmwpartsbaku.az/public/api/products/`)
  const dynamicPages  = await resData.json()
  
  
  const staticPages = fs
  .readdirSync({
    development: 'pages',
    production: './',
  }[process.env.NODE_ENV])
  .filter((staticPage) => {
    return ![
      "_app.js",
      "api",
      "_document.js",
      "_error.js",
      "404",
      "500",
      "product-detail",
      "search.html",
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    return `${baseUrl}/${staticPagePath}`;
  });
  


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://bmwpartsbaku.az</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
        ${staticPages
            .map((url) => {
            return `
                <url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
                </url>
            `;
            })
        .join("")}


        ${dynamicPages.data
            .map((url) => {
            return `
                <url>
                <loc>https://bmwpartsbaku.az/product-detail/${url.id}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
                </url>
            `;
            })
        .join("")}

    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;