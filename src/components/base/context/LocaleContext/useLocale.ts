import enUS from '@/config/locales/en-US';
import zhCN from '@/config/locales/zh-CN';
import { useMemoizedFn } from '@/hooks/memoized/useMemoizedFn';
import { Storage } from '@/utils/storage';
import { useMemo, useState } from 'react';

// 根据浏览器api获取当前语言
const getBrowserLanguage = () => {
  // 获取浏览器语言字符串
  const languageString = navigator.language || navigator.languages[0];
  // 将语言字符串拆分成语言和地区
  const [language, region] = languageString.split('-');
  // 返回语言
  return language;
};

const localesMap = { enUS, zhCN, default: getBrowserLanguage() === 'zh' ? zhCN : enUS };

/** 管理user */
export const localeStorage = new Storage<IProjectLocale>('locale', undefined as unknown as IProjectLocale);

export default () => {
  const [locale, _setLocale] = useState<IProjectLocale>(localeStorage.getItem() || 'default');

  const locales = useMemo(() => (locale ? localesMap[locale] : localesMap.default), [locale]);

  const setLocale = useMemoizedFn((value: IProjectLocale | ((value: IProjectLocale) => IProjectLocale)) => {
    if (typeof value === 'function') {
      value = value(locale!);
    }
    localeStorage.setItem(value);
    _setLocale(value);
  });
  return {
    ...locales,
    locale,
    setLocale,
  };
};