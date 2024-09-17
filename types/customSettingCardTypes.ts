export type CustomSettingsCardProps = {
    onPress?: () => void;
    description: string;
    iconName:
    | undefined
    | "user"
    | "bank"
    | "dollar"
    | "exchange"
    | "bandcamp"
    | "calendar"
    | "balance-scale"
    | "signal"
    | 'lock'
    | 'desktop'
    | 'cogs'
    | 'bell-o'
    | 'file-text'
    | 'rss'
    | 'facebook'
    | 'twitter'
    | 'twitch'
    | 'instagram'
    | 'envelope-o'
    | 'times-circle-o'
    | 'question-circle-o'
    | 'bolt'
    iconSize: number;
    iconColor: any;
    switchComponent?: any;
    displaySwtich?: "flex" | "none";
    diaplayDownloadButton?: "flex" | "none";
    download?: () => void
  };
  