const cropURL = (url: string) => {
  if (!url) return ""; // temporary change to handle games with no images, will fix it later
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default cropURL;
