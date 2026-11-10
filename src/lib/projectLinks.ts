export function projectUrl(currentUrl: string, projectId: string | null) {
  const url = new URL(currentUrl);
  if (projectId) url.searchParams.set("project", projectId);
  else url.searchParams.delete("project");
  url.hash = "projects";
  return url.href;
}
