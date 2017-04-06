/**
 * Created by private on 2017/3/31.
 */

const HOST = 'https://api.douban.com';

export default DouBanApi = {

    getNewMovies() {
        this.doFetch(HOST + '/v2/movie/new_movies');
    },

    async searchMovieById(id: string) {
        let result = await this.doFetch(HOST + `/v2/movie/subject/${id}`);
        return result;
    },

    async searchMovie(name: string) {
        let result = await this.doFetch(HOST + `/v2/movie/search?q={${name}}&count=10`);
        if (result.total) {
            return result;
        }
        return null;
    },

    async doFetch(url: string) {
        try {
            let response = await fetch(url);
            let data = response.json();
            return data;
        } catch (e) {
            console.log("Oops, error", e);
        }
    }

}
