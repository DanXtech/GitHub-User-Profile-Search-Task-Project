// import axios from 'axios';

// const GITHUB_API_BASE_URL = 'https://api.github.com';

// export const fetchUserProfile = async (username: string) => {
//     try {
//         const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
//         return response.data;
//     } catch (error) {
//         throw new Error('User not found');
//     }
// };

// export const fetchUserRepos = async (username: string, page: number = 1) => {
//     try {
//         const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}/repos`, {
//             params: { page, per_page: 30 },
//         });
//         return response.data;
//     } catch (error) {
//         throw new Error('Repositories not found');
//     }
// };
