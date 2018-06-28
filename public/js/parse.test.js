import { parseBlockers, parseMultipleBlockers, parseBlocker } from "./parse";

import { example } from "./unitExample";

describe("Jira Parser", () => {

  it("Can parse a simple ticket", () => {
    const data = {
      key: "WED-3774"
    };
    expect(parseBlocker(data)).toMatchObject({
      key: "WED-3774",
      blocks: [],
      "is blocked by": []
    });
  });

  it("Can parse a simple ticket with a summary", () => {
    const data = {
      key: "WED-3774",
      fields: {
        summary: "This is an example ticket"
      } 
    };
    expect(parseBlocker(data)).toMatchObject({
      key: "WED-3774",
      blocks: [],
      "is blocked by": [],
      summary: "This is an example ticket"
    });
  });

  it("Can parse a simple ticket with a status", () => {
    const data = {
      key: "WED-3774",
      fields: {
        status: {
          name: "Done"
        }
      }
    };
    expect(parseBlocker(data)).toMatchObject({
      key: "WED-3774",
      status: "Done",
      blocks: [],
      "is blocked by": []
    });
  });

  it("Can parse a simple ticket with an epic", () => {
    const data = {
      key: "WED-3774",
      fields: {
        customfield_11100: "WED-7305"
      }
    };
    expect(parseBlocker(data)).toMatchObject({
      key: "WED-3774",
      epic: "WED-7305",
      blocks: [],
      "is blocked by": []
    });
  });

  it("Can parse a simple ticket in a list", () => {
    const data = {
      issues: [
        {
          key: "WED-3774"
        }
      ]
    };

    expect(parseBlockers(data, "WED-3774")).toMatchObject({
      key: "WED-3774",
      blocks: [],
      "is blocked by": []
    });
  });

  it("Can parse out the linked ticket info", () => {
    expect(parseBlockers(example, "WED-5317")).toMatchObject({
      key: "WED-5317",
      blocks: ["WED-7039"],
      "is blocked by": ["WED-6962", "WED-6960"],
      epic: "WED-7305"
    });
    expect(parseBlockers(example, "WED-7039")).toMatchObject({
      key: "WED-7039",
      blocks: [],
      "is blocked by": ["WED-5317", "WED-911"]
    });
    expect(parseBlockers(example, "WED-3774")).toMatchObject({
      key: "WED-3774",
      blocks: [],
      "is blocked by": []
    });
  });

  it("Parses multiple objects", () => {
    expect(parseMultipleBlockers(example)).toMatchObject([
      {
        key: "WED-5317",
        blocks: ["WED-7039"],
        "is blocked by": ["WED-6962", "WED-6960"]
      },
      {
        blocks: [],
        "is blocked by": ["WED-5317", "WED-911"],
        key: "WED-7039"
      },
      {
        blocks: [],
        "is blocked by": [],
        key: "WED-3774"
      }
    ]);
  });
});
