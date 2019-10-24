/* eslint-disable import/prefer-default-export */

const { location } = window;

/**
 * 【初始化】根据url hash值，获取已选的tab名
 * @param {STRING} defaultTab 默认tab
 */
export const getActiveTabFromHash = (defaultTab) => {
  const tabName = location.hash.split('/')[1];
  if (!tabName) {
    location.hash = location.hash.replace(/(#.*)/, `$1/${defaultTab}`);
  }
  return tabName || defaultTab;
};

/**
 * 根据已选tab值，设置当前hash
 * @param {STRING} activeTab 选中的tab
 */
export const setActiveHash = (activeTab) => {
  location.hash = location.hash.replace(/(#.*\/).*/, `$1${activeTab}`);
};
