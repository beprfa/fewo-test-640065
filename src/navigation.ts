import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Startseite',
      href: getPermalink('/'),
    },
    {
      text: 'Ferienwohnungen',
      href: '/#ferienwohnungen',
    },
    {
      text: 'Landhaus',
      href: '/#landhaus',
    },
    {
      text: 'Anreise',
      href: '/#anreise',
    },
    {
      text: 'Preise',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Buchungsanfrage', href: getPermalink('/contact'), variant: 'secondary' }],
};

export const headerDataEn = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/en'),
    },
    {
      text: 'Apartments',
      href: '/en#apartments',
    },
    {
      text: 'The Estate',
      href: '/en#the-estate',
    },
    {
      text: 'Getting Here',
      href: '/en#getting-here',
    },
    {
      text: 'Prices',
      href: getPermalink('/en/contact'),
    },
  ],
  actions: [{ text: 'Booking Request', href: getPermalink('/en/contact'), variant: 'secondary' }],
};

export const footerData = {
  links: [
    {
      title: 'Ferienwohnungen',
      links: [
        { text: 'Alpenpanorama', href: '/#ferienwohnungen' },
        { text: 'Bergwiese', href: '/#ferienwohnungen' },
      ],
    },
    {
      title: '%%%BUILDING_NAME%%%',
      links: [
        { text: 'Über uns', href: '/#landhaus' },
        { text: 'Die Region', href: '/#landhaus' },
        { text: 'Buchungsanfrage', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Rechtliches',
      links: [
        { text: 'Impressum', href: getPermalink('/terms') },
        { text: 'Datenschutz', href: getPermalink('/privacy') },
        %%%FOOTER_AGB_LINK_DE_START%%%{ text: 'AGB', href: getPermalink('/agb') },%%%FOOTER_AGB_LINK_DE_END%%%
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} %%%BUILDING_NAME%%% – Eine Seite von <a href="https://www.meinfewosite.de" target="_blank" rel="noopener" class="underline hover:text-gray-700">MeineFeWoSeite.de</a>.
  `,
};

export const footerDataEn = {
  links: [
    {
      title: 'Apartments',
      links: [
        { text: 'Alpenpanorama', href: '/en#apartments' },
        { text: 'Bergwiese', href: '/en#apartments' },
      ],
    },
    {
      title: '%%%BUILDING_NAME%%%',
      links: [
        { text: 'About Us', href: '/en#the-estate' },
        { text: 'The Region', href: '/en#the-estate' },
        { text: 'Booking Request', href: getPermalink('/en/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Legal Notice', href: getPermalink('/en/terms') },
        { text: 'Privacy Policy', href: getPermalink('/en/privacy') },
        %%%FOOTER_AGB_LINK_EN_START%%%{ text: 'Terms', href: getPermalink('/en/agb') },%%%FOOTER_AGB_LINK_EN_END%%%
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} %%%BUILDING_NAME%%% – A site by <a href="https://www.meinfewosite.de" target="_blank" rel="noopener" class="underline hover:text-gray-700">MeineFeWoSeite.de</a>.
  `,
};
