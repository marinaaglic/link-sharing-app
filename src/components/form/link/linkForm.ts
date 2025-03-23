export interface IPlatform {
  id: string;
  name: string;
  iconURL?: string;
}

export interface ILinkData {
  docId?: string,
  id: string;
  platform: string;
  url: string;
}
