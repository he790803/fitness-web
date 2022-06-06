export default function (KEY) {
  // 匯出 function
  return {
    load() {
      return JSON.parse(window.localStorage.getItem(KEY) || 'null');
    },
    save(data) {
      window.localStorage.setItem(KEY, JSON.stringify(data));
    },
  };
}
// let a = [{ username: 'AAA', phone: 123123123, soppingCart: [{ name: 'A課程' }, { name: 'B課程' }] }];
