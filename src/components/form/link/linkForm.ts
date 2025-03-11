export interface IPlatform {
  id: string;
  name: string;
  iconURL?: string;
}

export interface ILinkData {
  id: string;
  platform: string;
  url: string;
}
