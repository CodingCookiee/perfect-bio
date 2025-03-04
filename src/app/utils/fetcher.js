/**
 * A utility function for making API requests with fetch
 * This is designed to work well with SWR for data fetching
 * 
 * @param {string} url - The URL to fetch
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} - The parsed JSON response
 * @throws {Error} - If the response is not OK
 */
export async function fetcher(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    
    // Attach extra info to the error object.
    error.info = await response.json().catch(() => null);
    error.status = response.status;
    
    throw error;
  }
  
  return response.json();
}

/**
 * POST request helper
 * 
 * @param {string} url - The URL to post to
 * @param {Object} data - The data to send in the request body
 * @param {Object} options - Additional fetch options
 * @returns {Promise<any>} - The parsed JSON response
 */
export async function postData(url, data, options = {}) {
  return fetcher(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  });
}

/**
 * PUT request helper
 * 
 * @param {string} url - The URL to put to
 * @param {Object} data - The data to send in the request body
 * @param {Object} options - Additional fetch options
 * @returns {Promise<any>} - The parsed JSON response
 */
export async function putData(url, data, options = {}) {
  return fetcher(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options,
  });
}

/**
 * DELETE request helper
 * 
 * @param {string} url - The URL to delete
 * @param {Object} options - Additional fetch options
 * @returns {Promise<any>} - The parsed JSON response
 */
export async function deleteData(url, options = {}) {
  return fetcher(url, {
    method: 'DELETE',
    ...options,
  });
}

// Example usage:
// import { fetcher, postData, putData, deleteData } from '@/app/utils/fetcher';
//
// // With SWR
// const { data, error } = useSWR('/api/bios', fetcher);
//
// // Direct usage
// const createBio = async (bioData) => {
//   try {
//     const response = await postData('/api/bios', bioData);
//     return response;
//   } catch (error) {
//     console.error('Error creating bio:', error);
//     throw error;
//   }
// };
