// pages/robots.txt.js

const robotsTxt = `User-agent: *
Disallow: /

Allow: /about
Allow: /analytics
Allow: /
Allow: /user/otp-login
Allow: /user/login
Allow: /contact
Allow: /user/register
Allow: /user/verify-otp

Sitemap: https://www.firsthing.earth/sitemap.xml
`;

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}

export default function Robots() {
  // The component itself doesn't render anything
  return null;
}
