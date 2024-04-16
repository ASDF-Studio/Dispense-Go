type AccountData = {
  name: string;
  sex: "Male" | "Female";
  dateOfBirth: string;
  contactNumber: string;
  completeAddress: string;
  emailAddress: string;
  password: string;
  verifitcationInfo: "verified" | "unverified";
};
export const accountData: AccountData = {
  name: "Marcus Inigo Pascual",
  sex: "Male",
  dateOfBirth: "June 10, 1972",
  contactNumber: "088 1672 9128",
  completeAddress: "House 742, 1242 #123 ABC, Kentucky Avenue, Eugene, Oregon",
  emailAddress: "Marcusinigopascual@Gmail.Com",
  password: "•••••••••••••••",
  verifitcationInfo: "verified",
};
