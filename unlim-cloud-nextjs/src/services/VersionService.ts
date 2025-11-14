const compareVersions = (v1: string, v2: string): number => {
  const parts1 = v1.split('.').map(Number);
  const parts2 = v2.split('.').map(Number);
  
  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const part1 = parts1[i] || 0;
    const part2 = parts2[i] || 0;
    
    if (part1 > part2) return 1;
    if (part1 < part2) return -1;
  }
  
  return 0;
};

export const checkVersion = async (currentVersion: string) => {
  const response = await fetch(process.env.NEXT_PUBLIC_VERSION_CHECK_URL!);
  const { version: latestVersion } = await response.json();
  const hasUpdate = compareVersions(latestVersion, currentVersion) === 1;
  
  return { latestVersion, hasUpdate };
};
