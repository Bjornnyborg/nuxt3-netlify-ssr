export const getUrl = () => {
  const currentRoute = useRoute();
  const { $config } = useNuxtApp();

  const params = new URLSearchParams();
  const url = decodeURIComponent(currentRoute.fullPath);

  let endpoint = `${$config.CONTENT_ENDPOINT}/wp-json/wp/v2/pages`;

  if (url == "/") {
    endpoint = `${endpoint}/11`;
  } else {
    params.append("slug", url);
  }

  const reqUrl = new URL(endpoint);
  reqUrl.search = params.toString();

  return reqUrl.toString();
};
