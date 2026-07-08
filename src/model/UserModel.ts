export default class UserModel {
     userID: string | null;
    createdAt: string | null;
    updatedAt:string|null
  userFirstName: string | null;
  userLastName: string | null;
  userEmail: string | null;
  userDOB: string | null;
  userIDProf: string | null;
  userImage: string | null;
  userPhoneNumber: string | null;
  userAddress: string | null;
  role: string = "user";

  constructor(data: any = {}) {
       this.userID = data.userID?? data._id?? "";
      this.createdAt = data.createdAt ?? "";
      this.updatedAt = data.updatedAt ?? "";
    this.userFirstName = data.userFirstName ?? "";
    this.userLastName = data.userLastName ?? "";
this.userEmail = data.userEmail ?? data.email ?? "";    this.userDOB = data.userDOB ?? "";
    this.userIDProf = data.userIDProf ?? "";
    this.userImage = data.userImage ?? "";
    this.userPhoneNumber = data.userPhoneNumber ?? "";
    this.userAddress = data.userAddress ?? "";
    this.role = data.role ?? "";
    }
    
    static fromJson(json: any): UserModel { 
        return new UserModel(json);
    }
    update(data: Partial<UserModel>): UserModel {
    return new UserModel({
      ...this,
      ...data,
    });
    }
    clear(): UserModel {
    return new UserModel();
  }
}
