export default class ImageDetail {
  id: string;
  altDescription?: string;
  urls: {
    regular: string;
    small: string;
  };

  constructor(id: string, urls: any, altDescription: string) {
    this.id = id;
    this.altDescription = altDescription;
    this.urls = urls;
  }
}
