const myFetch = async (
  uri: RequestInfo | URL,
  options: RequestInit | undefined
): Promise<Response> => {
  return fetch(uri, {
    ...options,
  });
};

export default myFetch;
