export interface IPlatform {
  id: string;
  name: string;
  iconURL?: string;
}

export interface ILinkFormFields {
  platform: string;
  url: string;
}
