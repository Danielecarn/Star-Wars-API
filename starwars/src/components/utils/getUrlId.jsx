export function getUrlId(url) {
    const splitedUrl = url.split('/');
    const characterId = splitedUrl[splitedUrl.length - 2];
  
    return characterId;
}

export function getUrl(url) {
  const splitedUrl = url.split('/');
  const newUrl= splitedUrl[4];
  return newUrl;
}
  