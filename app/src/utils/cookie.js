import merge from 'merge';

export const cookie = {
    set(cObj) {
        let obj = {
            name: 'default',
            val: '',
            expires: '',
            path: '/'
        }
        var date = new Date();
        obj.expires = new Date(date.setDate(date.getDate() + 7));

        let nObj = merge(obj, cObj);

        let cookieStr = `${nObj.name}=${nObj.val};expires=${nObj.expires};path=${nObj.path}`;
        console.log(cookieStr)
        // 写入
        document.cookie = cookieStr;
    },
    get(name) {

        // 先获取所有cookie
        var cookie = document.cookie;
        if (cookie.length === 0) {
            return '';
        }
        cookie = cookie.split('; ');

        // 遍历cookie
        var res = '';
        cookie.forEach(function (item) {
            var arr = item.split('=');

            if (arr[0] === name) {
                res = arr[1];
            }
        });
        
        return res;
        console.log(res)
    },
    remove(name) {
        // 设置过期时间删除
        var now = new Date();
        now.setDate(now.getDate() - 100);

        // document.cookie = name +'=xxx;expires=' + now.toUTCString();
        this.set({
            name,
            expires: now
        });
    }
}