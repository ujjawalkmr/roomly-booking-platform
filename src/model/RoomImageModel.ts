class RoomImage {
  id: string | null;
  imageUrl: string | null;
  publicId: string | null;
  isPrimary: boolean | null;

  constructor(data: any = {}) {
    this.id = data._id ?? "";
    this.imageUrl = data.imageUrl ?? "";
    this.publicId = data.publicId ?? "";
    this.isPrimary = data.isPrimary ?? false;
  }

  static fromJson(json: any): RoomImage {
    return new RoomImage(json);
  }

  static fromJsonList(json: any[]): RoomImage[] {
    return json.map((item) => new RoomImage(item));
  }
}

export default class RoomImageModel {
  id: string | null;
  roomId: string | null;
  images: RoomImage[];

  createdAt: string | null;
  updatedAt: string | null;

  constructor(data: any = {}) {
    this.id = data._id ?? "";
    this.roomId = data.roomId ?? "";

    this.images = Array.isArray(data.images)
      ? data.images.map((item: any) => new RoomImage(item))
      : [];

    this.createdAt = data.createdAt ?? "";
    this.updatedAt = data.updatedAt ?? "";
  }

  static fromJson(json: any): RoomImageModel {
    return new RoomImageModel(json);
  }

  static fromJsonList(json: any[]): RoomImageModel[] {
    return json.map((item) => new RoomImageModel(item));
  }
}