export interface IPlatform {
  id: string;
  name: string;
  iconURL?: string;
}

export interface ILinkFormFields {
  id: string;
  platform: string;
  url: string;
}
