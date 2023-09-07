export interface Option {
    label: string;
    value: string;
}
export interface Language extends Option {
    disabled?: boolean;
    code: string
}
export const intlLanguages: Language[] = [
    { value: "English", label: "English", code: 'en' },
    { value: "Spanish", label: "Español", code: 'es' },
    { value: "French", label: "Français", code: 'fr' },
    { value: "German", label: "Deutsch", code: 'de' },
    { value: "Italian", label: "Italiano", code: 'it' },
    { value: "Japanese", label: "日本語", code: 'ja' },
    { value: "Korean", label: "한국어", code: 'ko' },
    { value: "Portuguese", label: "Português", code: 'pt' },
    { value: "Russian", label: "Русский", code: 'ru' },
    { value: "Chinese - Simplified", label: "简体中文", code: 'zh_CN' },
    { value: "Chinese - Traditional", label: "繁體中文", code: 'zh_TW' },
    { value: "Arabic", label: "العربية", code: 'ar' },
    { value: "Dutch", label: "Nederlands", code: 'nl' },
    { value: "Greek", label: "Ελληνικά", code: 'el' },
    { value: "Hindi", label: "हिन्दी", code: 'hi' },
    { value: "Indonesian", label: "Bahasa Indonesia", code: 'id' },
    { value: "Polish", label: "Polski", code: 'pl' },
    { value: "Swedish", label: "Svenska", code: 'sv' },
    { value: "Turkish", label: "Türkçe", code: 'tr' },
    { value: "Vietnamese", label: "Tiếng Việt", code: 'vi' },
    { value: "Danish", label: "Dansk", code: 'da' },
    { value: "Norwegian", label: "Norsk", code: 'no' },
    { value: "Finnish", label: "Suomi", code: 'fi' },
    { value: "Czech", label: "Čeština", code: 'cs' },
    { value: "Hungarian", label: "Magyar", code: 'hu' },
    { value: "Romanian", label: "Română" , code: 'ro'},
    { value: "Thai", label: "ไทย", code: 'th' },
    { value: "Ukrainian", label: "Українська", code: 'uk' },
    { value: "Hebrew", label: "עברית", code: 'he' },
    { value: "Persian", label: "Farsi", code: 'fa' },
];



export const fileTypes: Option[] = [
    { value: "json", label: "json" },
    { value: "yaml", label: "yaml" },
];
