import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio-vhrs.vercel.app';

  return [
    {
      url: `${baseUrl}/pt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'en': `${baseUrl}/en`,
          'pt-BR': `${baseUrl}/pt`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'en': `${baseUrl}/en`,
          'pt-BR': `${baseUrl}/pt`,
        },
      },
    },
    {
      url: `${baseUrl}/pt/projetos/instituto-maua`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/projects/instituto-maua`,
          'pt-BR': `${baseUrl}/pt/projetos/instituto-maua`,
        },
      },
    },
    {
      url: `${baseUrl}/en/projects/instituto-maua`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/projects/instituto-maua`,
          'pt-BR': `${baseUrl}/pt/projetos/instituto-maua`,
        },
      },
    },
    {
      url: `${baseUrl}/pt/projetos/revox-systems`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/projects/revox-systems`,
          'pt-BR': `${baseUrl}/pt/projetos/revox-systems`,
        },
      },
    },
    {
      url: `${baseUrl}/en/projects/revox-systems`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/projects/revox-systems`,
          'pt-BR': `${baseUrl}/pt/projetos/revox-systems`,
        },
      },
    },
  ];
}
