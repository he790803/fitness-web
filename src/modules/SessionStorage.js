export default function (KEY) {
  // 匯出 function
  return {
    load() {
      if (window.sessionStorage.getItem(KEY) === null) {
        let storageArray = [];
        window.sessionStorage.setItem(KEY, JSON.stringify(storageArray));
        //當localStorage已存在資料陣列，指定一個內容與陣列資料庫相同的陣列
        return JSON.parse(window.sessionStorage.getItem(KEY) || 'null');
      } else {
        return JSON.parse(window.sessionStorage.getItem(KEY) || 'null');
      }
      // return JSON.parse(window.sessionStorage.getItem(KEY) || 'null');
    },
    save(data) {
      window.sessionStorage.setItem(KEY, JSON.stringify(data));
    },
  };
}
// let a = [{ username: 'AAA', phone: 123123123, soppingCart: [{ name: 'A課程' }, { name: 'B課程' }] }];
