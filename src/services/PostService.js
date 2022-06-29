import axios from 'axios';

class PostService {
    constructor() {
      this.client = axios.create({
        baseURL: 'http://localhost:3000/api',
      });
    }
  
    async getAll() {
      try {
        const { data } = this.client.get('/posts');
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    async getById(postId) {
        try {
          const { data } = this.client.get(`/posts/${postId}`);
          return data;
        } catch (error) {
          console.log(error);
          return null;
        }
      }
  }

export default new PostService();