export default class RoomModel {
  id: string | null;

  branchId: string | null;
  roomNumber: string | null;
  roomType: string | null;

  price: number | null;
  capacity: number | null;

  isAvailable: boolean | null;

  description: string | null;

  floor: number | null;
  bedType: string | null;
  totalBeds: number | null;

  area: string | null;

  amenities: string[] | null;
  roomFacilities: string[] | null;
  policyInformation: string[] | null;

  createdAt: string | null;
  updatedAt: string | null;

  constructor(data: any = {}) {
    this.id = data._id ?? "";

    this.branchId = data.branchId ?? "";
    this.roomNumber = data.roomNumber ?? "";
    this.roomType = data.roomType ?? "";

    this.price = data.price ?? 0;
    this.capacity = data.capacity ?? 0;

    this.isAvailable = data.isAvailable ?? true;

    this.description = data.description ?? "";

    this.floor = data.floor ?? 0;
    this.bedType = data.bedType ?? "";
    this.totalBeds = data.totalBeds ?? 0;

    this.area = data.area ?? "";

    this.amenities = data.amenities ?? [];
    this.roomFacilities = data.roomFacilities ?? [];
    this.policyInformation = data.policyInformation ?? [];

    this.createdAt = data.createdAt ?? "";
    this.updatedAt = data.updatedAt ?? "";
  }

  static fromJson(json: any): RoomModel {
    return new RoomModel(json);
  }

  static fromJsonList(json: any[]): RoomModel[] {
    return json.map((item) => new RoomModel(item));
  }
}