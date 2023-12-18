import createLocaleStore from './createLocaleStore';
import locales from './useLocale';

const store = () => ({
  locales: locales(),
});

const contextResult = createLocaleStore(store);

export const { useModel, StoreProvider, getModel, connectModel } = contextResult;