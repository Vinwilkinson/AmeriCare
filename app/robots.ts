import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/thank-you', '/parallax'],
        },
        sitemap: 'https://americareinhome.com/sitemap.xml',
    }
}