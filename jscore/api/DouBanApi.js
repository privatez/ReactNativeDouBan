/**
 * Created by private on 2017/3/31.
 */

const HOST = 'https://api.douban.com';

const DouBanApi = {

    getNewMovies() {
        this.doFetch(HOST + '/v2/movie/new_movies');
    },

    async searchMovie(name: string) {
        let result = await this.doFetch(HOST + `/v2/movie/search?q={${name}}`);
            console.log(result.subjects);
        if (result.total) {
            return result.subjects;
        }
        return null;
    },

    async doFetch(url: string) {
        try {
            let response = await fetch(url);
            let data = response.json();
            console.log(data);
            return data;
        } catch (e) {
            console.log("Oops, error", e);
        }
    }
}

module.exports = DouBanApi;