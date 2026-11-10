import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import { projects } from "../src/lib/data.ts";
import { projectDetails } from "../src/lib/projectDetails.ts";

test("every project has complete details in both supported languages", () => {
  assert.deepEqual(Object.keys(projectDetails).sort(), projects.map(({ num }) => num).sort());
  for (const project of projects) {
    const details = projectDetails[project.num];
    assert.equal(new URL(details.repository).hostname, "github.com");
    for (const lang of ["pt", "en"]) {
      for (const field of ["category", "overview", "architecture", "validation"]) {
        assert.ok(details[field][lang].trim(), `${project.num}: ${field}.${lang}`);
      }
      assert.equal(details.flow[lang].length, 4);
      assert.ok(details.features[lang].length > 0);
    }
  }
});

test("gallery images are bundled locally with valid optional source links", () => {
  for (const details of Object.values(projectDetails)) {
    for (const image of details.images) {
      assert.ok(existsSync(new URL(`../public/projects/${image.src}`, import.meta.url)), image.src);
      if (image.source) assert.equal(new URL(image.source).protocol, "https:");
      assert.ok(image.caption.pt.trim());
      assert.ok(image.caption.en.trim());
    }
  }
});
