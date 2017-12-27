//http://visionmedia.github.io/superagent/
import request from 'superagent'


// const LOCAL_SERVER = ' http://10.3.135.223:888/';

const LOCAL_SERVER = 'http://10.3.135.223:888/';

// const LOCAL_SERVER = ' http://10.3.135.189:8080/';
//  const LOCAL_SERVER = ' http://10.3.135.223:888/';

// const LOCAL_SERVER = 'http://localhost:1155/';


 // const LOCAL_SERVER = 'http://192.168.43.96:888/';
// const LOCAL_SERVER = ' http://10.3.135.189:8080/';
//  const LOCAL_SERVER = ' http://10.3.135.110:888/';


const DEV_SERVER = '';
const PRO_SERVER = '';

function getUrl(path) {
    if (path.startsWith('http')) {
        return path;
    }
    return `${LOCAL_SERVER}${path}`;
}

const HttpClient = {
    get: (path, query) => new Promise((resolve, reject) => {
        var req = request
            .get(getUrl(path))
            .query(query)
            .end((err, res) => {
                // console.log(res);
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body || JSON.parse(res.text));
                }
            });
    }),

    post: (path, formdata, query) => new Promise((resolve, reject) => {
        request
            .post(getUrl(path))
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .query(query)
            .send(formdata)
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body || JSON.parse(res.text));
                }
            });
    })
};

export default HttpClient;
