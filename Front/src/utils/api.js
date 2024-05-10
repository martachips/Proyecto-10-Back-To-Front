export const API = async ({ endpoint, method, payload }) => {
  const body = JSON.stringify(payload);

  const res = await fetch(endpoint, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body
  });

  const response = await res.json();
  return response;
};
