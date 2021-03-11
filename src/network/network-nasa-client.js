import axios from 'axios';
import nasa_constants from '../nasa_constant';


const networkNasa = {
    get(url, params, success, failure) {
        return this.request({
            method: 'get',
            url,
            params,
            success,
            failure,
        });
    },
    post(url, data, success, failure) {
        return this.request({
            method: 'post',
            url,
            data,
            success,
            failure,
        });
    },
    put(url, data, success, failure) {
        return this.request({
            method: 'put',
            url,
            data,
            success,
            failure,
        });
    },
    delete(url, success, failure) {
        return this.request({
            method: 'delete',
            url,
            success,
            failure,
        });
    },

    request: (options = {}) => {
        if (!options.url) {
            console.log('URL is required');
            return;
        }

        const data = Object.assign({
            method: 'get',
            baseURL: nasa_constants.url,
        }, options);

        data.params = Object.assign({}, options.params,{api_key: nasa_constants.api_key});

        return new Promise((resolve, reject) => {
            axios(data)
            .then((response) => {
                if (options.success) {
                    options.success(response.data);
                }
                resolve(response.data);
            })
            .catch((error) => {
                if (options.failure) {
                    options.failure(error);
                }
                reject(error);
            });

        })

    },
};

export default networkNasa;