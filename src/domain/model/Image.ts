export class Image {
  private _id!: bigint;
  private _url!: string;

  toPersistence() {
    return {
      url: this._url,
    };
  }

  fromJson(data: any) {
    this._id = data.id;
    this._url = data.url;
    return this;
  }

  get id(): bigint {
    return this._id;
  }
  set id(id: bigint) {
    this._id = id;
  }
  get url(): string {
    return this._url;
  }
  set url(url: string) {
    this._url = url;
  }
}
