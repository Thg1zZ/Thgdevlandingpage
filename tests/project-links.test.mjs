import assert from "node:assert/strict";
import test from "node:test";
import { projectUrl } from "../src/lib/projectLinks.ts";
import { projects } from "../src/lib/data.ts";

test("share links identify every project and preserve deployment paths", () => {
  for (const base of ["https://example.com/", "https://example.com/landingpage/"]) {
    for (const project of projects) {
      const url = new URL(projectUrl(`${base}?lang=pt#about`, project.num));
      assert.equal(url.searchParams.get("project"), project.num);
      assert.equal(url.searchParams.get("lang"), "pt");
      assert.equal(url.pathname, new URL(base).pathname);
      assert.equal(url.hash, "#projects");
    }
  }
});

test("closing removes only the project selection; opening replaces an old selection", () => {
  const original = "https://example.com/?project=001&lang=en#projects";
  const closed = new URL(projectUrl(original, null));
  assert.equal(closed.searchParams.has("project"), false);
  assert.equal(closed.searchParams.get("lang"), "en");
  const replaced = new URL(projectUrl(original, "004"));
  assert.deepEqual(replaced.searchParams.getAll("project"), ["004"]);
});
