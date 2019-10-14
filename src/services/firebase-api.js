export default class FireBaseApi {
    _apiURL = `https://js-simple-6efdf.firebaseio.com/posts.json`;

    newRequest(method, body = null) {
        return new Request(this._apiURL, {
            method: method,
            body: body
        })
    }

    setPosts = async (data) =>{
        const response = await fetch(this.newRequest('post',data));

         return await response.json()
    }

    getPosts = async () => {
        const response = await fetch(this.newRequest('get'));
        const data = await response.json();
        return this.objectToArray(data);
    };

    objectToArray(data) {
        return Object.keys(data).map(key => {
            const item = data[key];
            item.id = key;
            return item;
        })
    }

    _transformPosts = (posts) => {
        return posts.map(post => {
            return {
                id: post.id,
                title: post.title,
                fulltext: post.fulltext,
                date: post.date,
                note: post.note,
            }
        })

    }
}

const fireBaseApi = new FireBaseApi();

console.log(fireBaseApi.getPosts());
