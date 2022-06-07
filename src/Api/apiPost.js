export const API_POST = 'https://bloggy-api.herokuapp.com/posts';

export const getPostFromServer = async () => {
    const response = await fetch(API_POST);
    return response.json();
}