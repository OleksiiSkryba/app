import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};
let axiosInstance = axios.create(options);
const getUsers = () => axiosInstance('/users');
const getAllPosts = () => axiosInstance(`/posts`);
const getUserPosts = (id) => axiosInstance(`/users/${id}/posts`);

export {getUsers, getAllPosts, getUserPosts};