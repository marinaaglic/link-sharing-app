export const platformColors: Record<string, string> = {
  youtube: "#ff0000",
  github: "#000000",
  linkedin: "#0a66c2",
  twitter: "#1da1f2",
  facebook: "#1877f2",
  instagram: "#e1306c",
};

export const getPlatformColor = (platformName: string): string => {
  return platformColors[platformName.toLowerCase()] || "white";
};
