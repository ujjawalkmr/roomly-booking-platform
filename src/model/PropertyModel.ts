export default class PropertyModel {
  id: string | null;
  roomId: string | null;
  propertyId: string | null;
  title: string | null;
  description: string | null;
  roomNumber: string | null;
  roomType: string | null;

  totalRooms: number | null;
  availableRooms: number | null;
  pricePerNight: number | null;
  discountPercentage: number | null;

  currency: string | null;
  status: string | null;

  averageRating: number | null;
  totalReviews: number | null;

  checkInTime: string | null;
  checkOutTime: string | null;

  isActive: boolean | null;

  capacity: {
    adults: number | null;
    children: number | null;
  } | null;

  amenities: string[] | null;
  images: string[] | null;

  constructor(data: any = {}) {
    this.id = data._id ?? "";
    this.roomId = data.roomId ?? "";
    this.propertyId = data.propertyId ?? "";
    this.title = data.title ?? "";
    this.description = data.description ?? "";
    this.roomNumber = data.roomNumber ?? "";
    this.roomType = data.roomType ?? "";

    this.totalRooms = data.totalRooms ?? 0;
    this.availableRooms = data.availableRooms ?? 0;
    this.pricePerNight = data.pricePerNight ?? 0;
    this.discountPercentage = data.discountPercentage ?? 0;

    this.currency = data.currency ?? "";
    this.status = data.status ?? "";

    this.averageRating = data.averageRating ?? 0;
    this.totalReviews = data.totalReviews ?? 0;

    this.checkInTime = data.checkInTime ?? "";
    this.checkOutTime = data.checkOutTime ?? "";

    this.isActive = data.isActive ?? true;

    this.capacity = data.capacity
      ? {
          adults: data.capacity.adults ?? 0,
          children: data.capacity.children ?? 0,
        }
      : null;

    this.amenities = data.amenities ?? "";
    this.images = data.images ?? [];
  }

  static fromJson(json: any): PropertyModel {
    return new PropertyModel(json);
  }
}