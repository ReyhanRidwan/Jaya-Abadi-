export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  iconName: string;
  imageUrl: string;
  badge: string;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "waterproofing" | "injection";
  tag: string;
  imageUrl: string;
  location: string;
  description: string;
}

export interface ContactData {
  companyName: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  addressMapsLink: string;
  googleMapsEmbedUrl: string;
  operatingHours: string;
}
