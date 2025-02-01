export interface i18nNumberFormatInterface {
  thousandSeparator: string;
  decimalSeparator: string;
}
export interface i18nRemToPxConvertorFormInterface {
  rem: {
    label: string;
  },
  px: {
    label: string;
  }
  base: {
    label: string;
  }
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
  tools: {
    title: string;
    remToPixConverter: {
      title: string;
      description: string;
      form: i18nRemToPxConvertorFormInterface
    }
  },
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
