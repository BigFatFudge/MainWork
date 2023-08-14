
import axios from 'axios';

export const helpHttp = () => {
    // Define a function that returns an object with HTTP request methods
    const customRequest = async (method, url, data = null, headers = {}) => {
        try {
            // Use Axios to make an HTTP request with the provided method, URL, data, and headers
            const response = await axios({
                method,              // HTTP method (GET, POST, PUT, DELETE)
                url,                 // URL to send the request to
                data,                // Request payload for POST and PUT requests
                headers: {
                    accept: 'application/json',  // Set default 'accept' header
                    ...headers,                  // Allow additional headers to be provided
                },
                timeout: 3000,       // Abort request after 3 seconds
            });

            // If the response is successful (status 200-299), return the parsed response data
            return response.data;
        } catch (error) {
            // If an error occurs during the request, construct an error object
            return {
                err: true,
                status: error.response ? error.response.status : '00',  // Status code of the error response
                statusText: error.response ? error.response.statusText : 'Ocurrió un error',  // Status text of the error response
            };
        }
    };

    // Define a function to make a GET request using the customRequest function
    const get = async (url, headers = {}) => await customRequest('GET', url, null, headers);

    // Define a function to make a POST request using the customRequest function
    const post = async (url, data, headers = {}) => await customRequest('POST', url, data, headers);

    // Define a function to make a PUT request using the customRequest function
    // const put = async (url, data, headers = {}) => await customRequest('PUT', url, data, headers);

    // Define a function to make a DELETE request using the customRequest function
    // const del = async (url, headers = {}) => await customRequest('DELETE', url, null, headers);

    // Return an object containing the HTTP request methods
    return {
        get,
        post,
        put,
        del,
    };
};
