export const prodUrl = 'https://robust-safe-crafter.glitch.me';

export function getData(url = prodUrl) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch(console.warn);
}

/**
 *
 * @param {string} url
 * @param {Object} whatToPost
 * @returns [successResponse, Error]
 */
export function postData(url, whatToPost) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(whatToPost),
  })
    .then((resp) => resp.json())
    .then((postResult) => [postResult, null])
    .catch((err) => {
      console.warn(err);
      return [null, err.message];
    });
}

export function updateData(url, updateObj) {
  return fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateObj),
  })
    .then((resp) => resp.json())
    .then((updateResult) => [updateResult, null])
    .catch((err) => {
      console.warn(err);
      return [null, err.message];
    });
}

// deleteData funkcija
export async function deleteData(url) {
  try {
    const resp = await fetch(url, {
      method: 'DELETE',
    });
    const deleteResult = await resp.json();
    // sekme
    return [deleteResult, null];
  } catch (error) {
    // jei yra klaida
    console.warn('klaida deleteData fn', error);
    return [null, error.message];
  }
}
