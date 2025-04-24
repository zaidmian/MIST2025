// api-client.js - Core API interaction functions

const API_BASE_URL = '/api/v1';

/**
 * Performs a GET request to fetch data
 * @param {string} endpoint - The API endpoint path (without base URL)
 * @param {string} token - The authorization token
 * @returns {Promise} - Promise resolving to the response data
 */
export async function getData(endpoint, token) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

/**
 * Performs a POST request to create data
 * @param {string} endpoint - The API endpoint path (without base URL)
 * @param {Object} data - The data to be sent in the request body
 * @param {string} token - The authorization token
 * @returns {Promise} - Promise resolving to the response data
 */
export async function postData(endpoint, data, token) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}

/**
 * Performs a PUT request to update data
 * @param {string} endpoint - The API endpoint path (without base URL)
 * @param {Object} data - The data to be sent in the request body
 * @param {string} token - The authorization token
 * @returns {Promise} - Promise resolving to the response data
 */
export async function putData(endpoint, data, token) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
}

/**
 * Performs a DELETE request to remove data
 * @param {string} endpoint - The API endpoint path (without base URL)
 * @param {string} token - The authorization token
 * @returns {Promise} - Promise resolving to the response data or null
 */
export async function deleteData(endpoint, token) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if (response.status === 204) {
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
}
