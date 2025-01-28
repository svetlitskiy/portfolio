export interface i18nNumberFormatInterface {
  thousandSeparator: string;
  decimalSeparator: string;
}

export interface I18nLocaleInterface {
  numbers: i18nNumberFormatInterface;
  main: {
    name: string;
  };
  home: {
    title: string;
  };
  blog: {
    title: string;
  };
  portfolio: {
    title: string;
  };
  resume: {
    title: string;
    contacts: {
      title: string;
      email: string;
      telegram: string;
      socials: string;
    };
    projects: {
      title: string;
    };
    education: {
      title: string;
    };
    summary: {
      title: string;
    };
    experience: {
      title: string;
    };
  };
}
