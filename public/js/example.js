export const example = {
  expand: "schema,names",
  startAt: 0,
  maxResults: 50,
  total: 43,
  issues: [
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93666",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93666",
      key: "FAB-11864",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11864/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-14T16:33:26.000+0000",
        customfield_12000: "0|i0a8a5:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T16:33:26.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/1",
          description: "Task is ready to be picked up and worked on",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/open.png",
          name: "Define Task",
          id: "1",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a business owner, I want to ensure that the spam filter provider, Akismet, used on the site is up to date so that our users are protected from spam\r\n\r\nCurrent : ae26218b7faf\r\nNew: 9ed210995d16\r\n \r\nhttps://akismet.com/\r\nuser: toby.hoon@immediate.co.uk\r\npass: Dejuxe123!\r\n\r\nThis is believed to be a config setting on MFM that should go in alongside a GDPR release.\r\n\r\n*AC*\r\nNew account ID is used\r\nSpam filter continues to function as expected\r\n",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: null,
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "MFM: Akismet account ID change",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11864/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93664",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93664",
      key: "FAB-11863",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T19:42:49.995+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11863/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-14T15:09:13.000+0000",
        customfield_12000: "0|i0a89p:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/2",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/critical.svg",
          name: "Critical",
          id: "2"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:10:02.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/1",
          description: "Task is ready to be picked up and worked on",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/open.png",
          name: "Define Task",
          id: "1",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          '*ISSUE*\r\nDiscover TV Picks endpoint returns an error upon refresh (and subsequently on every 2nd refresh).\r\n\r\nSee screenshot.\r\n\r\nDev notes:\r\nWe will need to inspect Apigee logs\r\n\r\n*STEPS TO REPRODUCE*\r\n # Go to https://immediate-prod.apigee.net/broadcast-discover/v1/picks/2018-03-14\r\n # Refresh the page\r\n\r\n*ACTUAL RESULT*\r\nError message at Apigee (see screenshot)\r\n\r\n{\r\n"fault": {\r\n"faultstring": "The Service is temporarily unavailable",\r\n"detail": {\r\n"errorcode": "messaging.adaptors.http.flow.ServiceUnavailable"\r\n}\r\n}\r\n}\r\n\r\n*EXPECTED RESULT*\r\nError is not thrown. Apigee continues to load Picks data on every refresh of the endpoint.\r\n\r\n*NOTES*\r\nRefresh the page again and Apigee will return results. The error occurs on every 2nd refresh. This is not happening in dev/test, only prod.',
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: null,
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary:
          'Discover TV Apigee error: "The Service is temporarily unavailable"',
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=rhiannon.smith",
          name: "rhiannon.smith",
          key: "rhiannon.smith",
          emailAddress: "rhiannon.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=rhiannon.smith&avatarId=13702",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=rhiannon.smith&avatarId=13702",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=rhiannon.smith&avatarId=13702",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=rhiannon.smith&avatarId=13702"
          },
          displayName: "Rhiannon Smith",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=rhiannon.smith",
          name: "rhiannon.smith",
          key: "rhiannon.smith",
          emailAddress: "rhiannon.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=rhiannon.smith&avatarId=13702",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=rhiannon.smith&avatarId=13702",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=rhiannon.smith&avatarId=13702",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=rhiannon.smith&avatarId=13702"
          },
          displayName: "Rhiannon Smith",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11863/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93654",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93654",
      key: "FAB-11853",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11853/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-13T17:28:19.000+0000",
        customfield_12000: "0|i0a87p:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/2",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/critical.svg",
          name: "Critical",
          id: "2"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=nigel.smith",
          name: "nigel.smith",
          key: "nigel.smith",
          emailAddress: "nigel.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=nigel.smith&avatarId=12610",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=nigel.smith&avatarId=12610",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=nigel.smith&avatarId=12610",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=nigel.smith&avatarId=12610"
          },
          displayName: "Nigel Smith",
          active: true,
          timeZone: "GB"
        },
        updated: "2018-03-14T15:12:53.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/1",
          description: "Task is ready to be picked up and worked on",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/open.png",
          name: "Define Task",
          id: "1",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "*ISSUE*\r\nWhen trying to subscribe to the newsletter on the below brands the following error message is given:\r\n\r\nSorry - something went wrong. Please try again.\r\n\r\nOlive\r\nHE\r\nRT\r\n\r\nRT have not had any signups since 1st March (GW launch date) but HE seem to have a signup on the 8th but this could have come from another source.\r\n\r\n*STEPS*\r\n1. Open the site for one of the above brands\r\n2. Locate the quick newsletter signup widget\r\n3. Enter a valid email address and submit\r\n4. Observe error message\r\n\r\nNote, that changing the input value from www to radiotimes or historyextra will allow the form to complete but it remains to be seen whether the details end up in Adestra.\r\n\r\n*ACTUAL*\r\nGet the error message.\r\n\r\n*EXPECTED*\r\nConfirmation message given to the user and the details end up in Adestra for the relevant brand.",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: null,
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Prod: Newsletter sign up not working ",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11853/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93570",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93570",
      key: "FAB-11795",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11795/watchers",
          watchCount: 2,
          isWatching: false
        },
        created: "2018-03-13T14:40:00.000+0000",
        customfield_12000: "0|i0a7p1:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T09:08:26.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10161",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Shaping",
          id: "10161",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "IE11 (and IE10) show weird img sizing inside of flex containers on the user settings magazine subscription image ([https://slate.release.wcp.imdserve.com/user-settings/#subscriptions)] and the logo on the register page ([https://release-accounts.ict.imdserve.com/Registration/Register/GardenersWorld).]\r\n\r\nThe easy fix seems to be just adding `flex-shrink: 0;` in both places, provided it won't have adverse effects on other browsers.\r\nh4. Acceptance criteria:\r\n * Given I am logged in\r\n * And I view my subscriber user settings\r\n * Then the magazine subscription image should not stretch in IE11\r\n\r\n \r\n * Given I am registering on GW\r\n * Then there shouldn't be unnecessary white space underneath the site logo",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11800",
          value: "Subscriptions",
          id: "11800"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: [
          "com.atlassian.greenhopper.service.sprint.Sprint@4d25e225[id=1451,rapidViewId=442,state=FUTURE,name=GR.2018.06,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=1451]"
        ],
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "IE11 img sizing bug",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=lukas.riho",
          name: "lukas.riho",
          key: "lukas.riho",
          emailAddress: "lukas.riho@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=lukas.riho&avatarId=13831",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=lukas.riho&avatarId=13831",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=lukas.riho&avatarId=13831",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=lukas.riho&avatarId=13831"
          },
          displayName: "Lukas Riho",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=lukas.riho",
          name: "lukas.riho",
          key: "lukas.riho",
          emailAddress: "lukas.riho@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=lukas.riho&avatarId=13831",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=lukas.riho&avatarId=13831",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=lukas.riho&avatarId=13831",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=lukas.riho&avatarId=13831"
          },
          displayName: "Lukas Riho",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11795/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93555",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93555",
      key: "FAB-11789",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:07:41.763+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11789/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-13T12:02:28.000+0000",
        customfield_12000: "0|i0a7m5:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:29:29.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/1",
          description: "Task is ready to be picked up and worked on",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/open.png",
          name: "Define Task",
          id: "1",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "See error:\r\n\r\nhttps://rpm.newrelic.com/accounts/845530/applications/32113604/traced_errors/36af1ebe-26a6-11e8-91e5-0242ac110007_803_3736\r\n\r\nInformation\r\nhttps://stackoverflow.com/questions/2658083/setcookie-cannot-modify-header-information-headers-already-sent",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: null,
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "NewRelic error setting/deleting subs cookies",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11789/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93551",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93551",
      key: "FAB-11786",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/10400",
          id: "10400",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13214&avatarType=issuetype",
          name: "Technical Debt",
          subtask: false,
          avatarId: 13214
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11786/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-13T11:11:19.000+0000",
        customfield_12000: "0|i0a7lh:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-13T11:11:55.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/1",
          description: "Task is ready to be picked up and worked on",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/open.png",
          name: "Define Task",
          id: "1",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As an user I would like to be redirected to the page where I was after finishing login/registration, even if I don't do the straight forward login or registration flow so I can feel a good user experience.\r\n\r\nA.C.\r\n\r\n\r\nGIVEN I am a logged out user in X page\r\nWHEN I click sign in in the header\r\nAND I click register from the sign in page\r\nAND I finish my registration/login process\r\nTHEN I'll be redirected to the same X page.\r\n\r\n\r\nGIVEN I am a logged out user in X page\r\nWHEN I click register in in the header\r\nAND I click sign in from the register\r\nAND I finish my login process\r\nTHEN I'll be redirected to the same X page.\r\n\r\nX being a random page in fabric and a random page in forums.\r\n\r\nGIVEN I AM ",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary:
          "urlReferrer get lost after going from registration to login or vice-versa.",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=eugenio.martinez",
          name: "eugenio.martinez",
          key: "eugenio.martinez",
          emailAddress: "eugenio.martinez@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Eugenio Martinez",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=eugenio.martinez",
          name: "eugenio.martinez",
          key: "eugenio.martinez",
          emailAddress: "eugenio.martinez@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Eugenio Martinez",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11786/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93549",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93549",
      key: "FAB-11785",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:07:48.861+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11785/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-13T11:02:55.000+0000",
        customfield_12000: "0|i0a7l9:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:30:08.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/1",
          description: "Task is ready to be picked up and worked on",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/open.png",
          name: "Define Task",
          id: "1",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a commercial manager, I want extra targeting information specific to programmes made available via Permutive so that we can further enhance our targeting and monetise our traffic\r\n\r\nhttps://docs.google.com/spreadsheets/d/1xtPL2RMcFei4MGglNd-YjQ_Qv6vW-ci8uSbUBNRFPTM/edit#gid=932317029\r\n\r\nTBC: what has already been done (is green in the sheet indicative of data already passed).\r\n\r\n*AC*\r\nExisting implementation remains intact\r\nExtra information designated in the spreadsheet can be found as part of the Permutive data",
        customfield_13000: null,
        customfield_11100: "FAB-11286",
        customfield_13002: null,
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Radio Times further programme information for Permutive",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11785/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93539",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93539",
      key: "FAB-11768",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/10102",
          id: "10102",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13218&avatarType=issuetype",
          name: "Dev Task",
          subtask: false,
          avatarId: 13218
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:08:23.835+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11768/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-12T17:04:37.000+0000",
        customfield_12000: "0|i0a7jh:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/2",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/critical.svg",
          name: "Critical",
          id: "2"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T16:20:20.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/1",
          description: "Task is ready to be picked up and worked on",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/open.png",
          name: "Define Task",
          id: "1",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "ICT team has needed to do a new import of user data, and as a result of this we need to import again the users' subscriber numbers for this new users. The current endpoint for importing the data doesn't allows to import a number for a user that already has one, and this case is present in the new numbers.\r\n\r\n*Acceptance criteria*\r\n\r\nAs a Developer\r\n\r\nGiven that I want to import a user's subs number using the import endpoint\r\n\r\nWhen the user already has a different number saved in the mapping table\r\n\r\nThen the number gets to update after the import instead of returning an error",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: null,
        customfield_13200: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary:
          "Subs import endpoint, allow updating a previously imported number",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=jorge.beltranboix",
          name: "jorge.beltranboix",
          key: "jorge.beltranboix",
          emailAddress: "jorge.beltranboix@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=jorge.beltranboix&avatarId=15302",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=jorge.beltranboix&avatarId=15302",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=jorge.beltranboix&avatarId=15302",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=jorge.beltranboix&avatarId=15302"
          },
          displayName: "Jorge Beltran",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=jorge.beltranboix",
          name: "jorge.beltranboix",
          key: "jorge.beltranboix",
          emailAddress: "jorge.beltranboix@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=jorge.beltranboix&avatarId=15302",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=jorge.beltranboix&avatarId=15302",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=jorge.beltranboix&avatarId=15302",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=jorge.beltranboix&avatarId=15302"
          },
          displayName: "Jorge Beltran",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11768/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93533",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93533",
      key: "FAB-11762",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:08:03.874+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11762/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-12T15:02:53.000+0000",
        customfield_12000: "0|i0a7i5:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T14:10:31.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/1",
          description: "Task is ready to be picked up and worked on",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/open.png",
          name: "Define Task",
          id: "1",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "*ISSUE*\r\n All cards using generic-card.twig template (offers, competitions, editors picks) headlines now have a pipe in front of them. See screenshot\r\n\r\nNotes:\r\n This seems to be related to work for Articles on display labels. Offers do not have the option to add a display label, but they do all use headline.\r\n\r\n*STEPS TO REPRODUCE*\r\n # Go to [https://release.gardenersworld.com/offers/gardening-offers/page/2/]\r\n # Or any page that includes an offer card\r\n # Observe the headline\r\n\r\n*ACTUAL RESULT*\r\n Pipe displays in front of Offer headline\r\n\r\n*EXPECTED RESULT*\r\n Pipe does not display in front of Offer headline\r\n\r\n*NOTES*\r\n After release on 14.03.2018, this is now in Production. See: [https://www.gardenersworld.com/offers/]",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: null,
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "All offer headlines preceded by a pipe",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=rhiannon.smith",
          name: "rhiannon.smith",
          key: "rhiannon.smith",
          emailAddress: "rhiannon.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=rhiannon.smith&avatarId=13702",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=rhiannon.smith&avatarId=13702",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=rhiannon.smith&avatarId=13702",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=rhiannon.smith&avatarId=13702"
          },
          displayName: "Rhiannon Smith",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=rhiannon.smith",
          name: "rhiannon.smith",
          key: "rhiannon.smith",
          emailAddress: "rhiannon.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=rhiannon.smith&avatarId=13702",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=rhiannon.smith&avatarId=13702",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=rhiannon.smith&avatarId=13702",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=rhiannon.smith&avatarId=13702"
          },
          displayName: "Rhiannon Smith",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11762/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93532",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93532",
      key: "FAB-11761",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11761/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-12T14:50:06.000+0000",
        customfield_12000: "0|i0a7hx:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "CACI", "GW_FastFollow"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-12T16:10:31.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10161",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Shaping",
          id: "10161",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          'As a user I would like the opt-in for offers to be removed, so that that I am not signing up for redundant newsletters\r\n\r\n*Acceptance Criteria*\r\n\r\nGIVEN I am an admin\r\n\r\nWHEN I view the newsletter settings for GW\r\n\r\nTHEN there is no option for GW offers\r\n\r\n \r\n\r\nGIVEN I am a product manager\r\n\r\nWHEN I am viewing the claims for an Identity user\r\n\r\nTHEN there is no claim called "nl_gw_offers"\r\n\r\n \r\n\r\nGIVEN I am a registering with GW\r\n\r\nWHEN I see the opt-in checkboxes\r\n\r\nTHEN there is no opt-in for GW offers\r\n\r\n \r\n\r\nGIVEN I am a logged-in user\r\n\r\nWHEN I view the "emails" tab in User Settings\r\n\r\nTHEN there is no opt-in for GW offers\r\n\r\n \r\n\r\n*NOTES:*\r\n\r\nOffers are being merged with the first-party IM permission, so the wording may be similar to GW offers, but it is a property rather than a claim.',
        customfield_13000: null,
        customfield_11100: "FAB-9172",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Remove GW Offers claim",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11761/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93524",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93524",
      key: "FAB-11758",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:07:41.073+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11758/watchers",
          watchCount: 2,
          isWatching: false
        },
        created: "2018-03-12T12:34:39.000+0000",
        customfield_12000: "0|i0a7gd:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: ["HistoryLibrary"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [
          {
            id: "81103",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/81103",
            type: {
              id: "10000",
              name: "Blocks",
              inward: "is blocked by",
              outward: "blocks",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10000"
            },
            inwardIssue: {
              id: "93515",
              key: "FAB-11755",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/93515",
              fields: {
                summary: "OpenID Connect sets user status too late",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/10161",
                  description:
                    "This status is managed internally by JIRA Software",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/subtask.gif",
                  name: "Ready For Shaping",
                  id: "10161",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
                    id: 4,
                    key: "indeterminate",
                    colorName: "yellow",
                    name: "In Progress"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
                  name: "Major",
                  id: "3"
                },
                issuetype: {
                  self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
                  id: "1",
                  description:
                    "A problem which prevents the function of a product",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
                  name: "Bug",
                  subtask: false,
                  avatarId: 13203
                }
              }
            }
          },
          {
            id: "81104",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/81104",
            type: {
              id: "10003",
              name: "Relates",
              inward: "relates to",
              outward: "relates to",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10003"
            },
            outwardIssue: {
              id: "91018",
              key: "FAB-10248",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/91018",
              fields: {
                summary: "Spike: Subscriber/not a subscriber caching logic",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/6",
                  description:
                    "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/statuses/closed.png",
                  name: "Closed",
                  id: "6",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/3",
                    id: 3,
                    key: "done",
                    colorName: "green",
                    name: "Done"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
                  name: "Enhancement",
                  id: "6"
                },
                issuetype: {
                  self:
                    "https://tech.immediate.co.uk/rest/api/2/issuetype/11000",
                  id: "11000",
                  description: "",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=15200&avatarType=issuetype",
                  name: "Spike",
                  subtask: false,
                  avatarId: 15200
                }
              }
            }
          }
        ],
        assignee: null,
        updated: "2018-03-14T16:23:35.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10161",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Shaping",
          id: "10161",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "This is a follow-up ticket of a spike FAB-10248.\r\n\r\nCurrently our Fastly config checks the presence of im-subscriptions cookie, and if it is set, it bypasses the cache and requests the pages from the origin servers. For History Extra to go live, we need to cache subscriber version of the pages, too, as it would create unnecessary heavy load on our origin servers.\r\n\r\nAt the moment, Fastly only checks the presence of the im-subscriptions cookie. It is a JWT and it contains \\{\"user_role\":\"subscriber\"}. The contents of this cookie should be checked and its signature validated.\r\n\r\nOne security issue is that the cookie looks the same for each subscriber. So we need to check the implications of that and possibly improve that. From the spike we found out that if user adds the cookie themselves on a public page, they can see a locked article if they know the URL. One suggestion was just to add a timestamp to the data and invalidate the cookie if the timestamp is older than 24h (which is how often we re-check the subscriber status). We need to check the impact of the cookie renewal process, though, as it would probably only happen thanks to the openid connect user plugin's AJAX POST request.\r\n\r\nWe want to avoid validating the cookie by contacting an API, as that would slow down the response time for subscribers. Currently the JWT hashing secret is configurable on every site in Premium settings. It should be moved to puppet config. Consider implications for current and puppet solution if the secret needs to be changed.\r\n\r\nAlso the POC VCL in FAB-10248 sets a new hashkey based on the existence of the cookie. The future implementation should probably utilise the Vary header. There is a lot of resources in the comments of the spike ticket.\r\nh4. Acceptance criteria:\r\n * Given I am viewing a fastly-enabled environment page e.g. https://release.im-slate.com/\r\n * And the IM Subscriptions plugin is enabled on the site\r\n * When I log in as a subscriber\r\n * I should get the subscriber variant of the page sent to me from Fastly's edge cache and not hit the origin server (on every request, it's okay to hit it once if the page wasn't cached yet).\r\n\r\nh4. Developer notes:\r\n * This should be done using the Vary HTTP header. It's probably okay to send it on nginx level. Consider shielding - e.g. sending the response through multiple layers of fastly servers before it hits the client.\r\n * The JWT should be checked for authenticity and possibly invalidated/reissued on old timestamps. This still allows for cookie reuse, but people would have to do it every day. Is that acceptable? Is there a better solution that doesn't require contacting an API?\r\n * The API secret shouldn't be set per site on Premium settings, it should be passed down as additional_wp_constant from puppet. The value should live in Terraform.\r\n * This is currently considered blocked by FAB-11755. If that won't be able to fix, there may be other solutions utilising for example Cache-Control: private header after the redirect from the first POST request.",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11800",
          value: "Subscriptions",
          id: "11800"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: [
          "com.atlassian.greenhopper.service.sprint.Sprint@4d25e225[id=1451,rapidViewId=442,state=FUTURE,name=GR.2018.06,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=1451]"
        ],
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Fastly: cache subscriber pages",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=lukas.riho",
          name: "lukas.riho",
          key: "lukas.riho",
          emailAddress: "lukas.riho@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=lukas.riho&avatarId=13831",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=lukas.riho&avatarId=13831",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=lukas.riho&avatarId=13831",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=lukas.riho&avatarId=13831"
          },
          displayName: "Lukas Riho",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=lukas.riho",
          name: "lukas.riho",
          key: "lukas.riho",
          emailAddress: "lukas.riho@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=lukas.riho&avatarId=13831",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=lukas.riho&avatarId=13831",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=lukas.riho&avatarId=13831",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=lukas.riho&avatarId=13831"
          },
          displayName: "Lukas Riho",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11758/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93515",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93515",
      key: "FAB-11755",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:07:42.563+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11755/watchers",
          watchCount: 3,
          isWatching: false
        },
        created: "2018-03-12T10:54:36.000+0000",
        customfield_12000: "0|hzzzo7:2404",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [
          {
            id: "81103",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/81103",
            type: {
              id: "10000",
              name: "Blocks",
              inward: "is blocked by",
              outward: "blocks",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10000"
            },
            outwardIssue: {
              id: "93524",
              key: "FAB-11758",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/93524",
              fields: {
                summary: "Fastly: cache subscriber pages",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/10161",
                  description:
                    "This status is managed internally by JIRA Software",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/subtask.gif",
                  name: "Ready For Shaping",
                  id: "10161",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
                    id: 4,
                    key: "indeterminate",
                    colorName: "yellow",
                    name: "In Progress"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
                  name: "Major",
                  id: "3"
                },
                issuetype: {
                  self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
                  id: "26",
                  description: "",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
                  name: "Story",
                  subtask: false,
                  avatarId: 13215
                }
              }
            }
          }
        ],
        assignee: null,
        updated: "2018-03-13T15:28:06.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10161",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Shaping",
          id: "10161",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "During the user login process the Identity servers redirect back to the site's homepage with a POST request, which gets picked up by im-openid-connect, reads the post body, and redirects the user to the page they signed up from, which is then retrieved using GET. On the first POST request, the im-openid-connect UserHelper doesn't report the user as being logged in yet. Because of that, subscriptions cannot set the subscriber cookie on the POST request.\r\n\r\nThe problem shows up on fastly-enabled environments when right after logging in as a subscriber, the first GET pageload still looks as if the user isn't a subscriber, but after hitting refresh, it renders correctly (only coincidentally because there was another AJAX POST request happening to /api/user-logged-in, which sets the cookie). That's because Fastly doesn't cache POST requests, but caches GET requests, so the first GET gets loaded from the cache without the subscription cookie existing, therefore the subscriber sees the page like a logged-out user would.\r\nh4. Steps to reproduce:\r\n * Go to [https://feature-fab-10248-slate.global.ssl.fastly.net/] and login as a subscriber\r\n * Observe no header backdrop, which shows for subscribers\r\n * Reload the page and observe header backdrop\r\n * (more serious problem would appear if there were locked cards on the page)\r\n * (dev note: UserHelper::isUserSignedIn() returns false on the first POST request)\r\n\r\nh4. Acceptance criteria:\r\n * Given I am on a fastly-enabled environment\r\n * When I log in as a subscriber\r\n * Then I should see the subscriber header backdrop immediately after Identity servers redirect me back to Fabric, not only on subsequent requests\r\n * (dev note: UserHelper::isUserSignedIn() should return true on the first POST request)\r\n\r\n ",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "OpenID Connect sets user status too late",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=lukas.riho",
          name: "lukas.riho",
          key: "lukas.riho",
          emailAddress: "lukas.riho@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=lukas.riho&avatarId=13831",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=lukas.riho&avatarId=13831",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=lukas.riho&avatarId=13831",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=lukas.riho&avatarId=13831"
          },
          displayName: "Lukas Riho",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=lukas.riho",
          name: "lukas.riho",
          key: "lukas.riho",
          emailAddress: "lukas.riho@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=lukas.riho&avatarId=13831",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=lukas.riho&avatarId=13831",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=lukas.riho&avatarId=13831",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=lukas.riho&avatarId=13831"
          },
          displayName: "Lukas Riho",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11755/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93422",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93422",
      key: "FAB-11696",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11696/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-07T12:15:13.000+0000",
        customfield_12000: "0|hzzyyy:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: ["GW_FastFollow"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T08:39:45.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As s PO, I would like  the users to have a seamless experience while navigating through the site.\r\n\r\nThis  is an inconsistent behaviour, which can be reproduced on clearing the browser history and testing in private mode.\r\n\r\n*Current scenario:*\r\n\r\nGiven I have cleared my history/ browsing date or I am on a private mode \r\n\r\nAnd I have submitted the registration form \r\n\r\nWhen I  skip the second registration page\r\n\r\nThen  I  get an 404 Oops error\r\n\r\n \r\n\r\n*Acceptance criteria :* \r\n\r\nGiven I am on  private window\r\n\r\nAnd I have submitted the registration form \r\n\r\nWhen I  skip the second registration page \r\n\r\nThen I  can see a thank you message \r\n\r\n \r\n\r\nURL of the 404 page :[https://production-accounts.ict.imdserve.com/Registration/Register/GardenersWorld/RegisterConfirmation?userId=f9b43bce-9ba9-444b-83a5-d2e016565066&email=ZGZhc2ZAamZiaC5kcmc]\r\n\r\n \r\n\r\n ",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary:
          "404 error is displayed on skipping the second registration page ",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=bharati.moily",
          name: "bharati.moily",
          key: "bharati.moily",
          emailAddress: "bharati.moily@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Bharati Moily",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=bharati.moily",
          name: "bharati.moily",
          key: "bharati.moily",
          emailAddress: "bharati.moily@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Bharati Moily",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11696/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93268",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93268",
      key: "FAB-11648",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/10400",
          id: "10400",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13214&avatarType=issuetype",
          name: "Technical Debt",
          subtask: false,
          avatarId: 13214
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:08:01.210+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11648/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-02T10:28:21.000+0000",
        customfield_12000: "0|i0a5yt:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: ["GW_FastFollow"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [
          {
            id: "80856",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/80856",
            type: {
              id: "10003",
              name: "Relates",
              inward: "relates to",
              outward: "relates to",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10003"
            },
            outwardIssue: {
              id: "93232",
              key: "FAB-11619",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/93232",
              fields: {
                summary: "Subscriber widget has caching issues",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/10167",
                  description:
                    "This status is managed internally by JIRA Software",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/subtask.gif",
                  name: "Ready For Release",
                  id: "10167",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/3",
                    id: 3,
                    key: "done",
                    colorName: "green",
                    name: "Done"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
                  name: "Enhancement",
                  id: "6"
                },
                issuetype: {
                  self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
                  id: "1",
                  description:
                    "A problem which prevents the function of a product",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
                  name: "Bug",
                  subtask: false,
                  avatarId: 13203
                }
              }
            }
          },
          {
            id: "80853",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/80853",
            type: {
              id: "10003",
              name: "Relates",
              inward: "relates to",
              outward: "relates to",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10003"
            },
            inwardIssue: {
              id: "87322",
              key: "FAB-9002",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/87322",
              fields: {
                summary: "Ensure live blog functionality has fast purge",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/10161",
                  description:
                    "This status is managed internally by JIRA Software",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/subtask.gif",
                  name: "Ready For Shaping",
                  id: "10161",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
                    id: 4,
                    key: "indeterminate",
                    colorName: "yellow",
                    name: "In Progress"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
                  name: "Major",
                  id: "3"
                },
                issuetype: {
                  self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
                  id: "26",
                  description: "",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
                  name: "Story",
                  subtask: false,
                  avatarId: 13215
                }
              }
            }
          }
        ],
        assignee: null,
        updated: "2018-03-14T15:31:03.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10161",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Shaping",
          id: "10161",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As part of FAB-11619, Fastly configuration was modified to bypass the edge cache for paths matching /unlock-secret-garden.\r\n\r\nThe proper fix for the underlying issue is to modify the response headers issued from the origin server to make Fastly choose not to cache the page.\r\n\r\n*Acceptance criteria*\r\n- Fastly caching of this page is controlled from origin server headers.\r\n- The Fastly cache configuration added as part of FAB-11619 is reverted back to clean behaviour.\r\n- The /unlock-secret-garden page on Gardeners' World remains uncached for all users.",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11800",
          value: "Subscriptions",
          id: "11800"
        },
        customfield_13200: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: [
          "com.atlassian.greenhopper.service.sprint.Sprint@22222f3d[id=1435,rapidViewId=401,state=ACTIVE,name=SR.2018.5,startDate=2018-03-01T12:12:15.780Z,endDate=2018-03-10T13:24:00.000Z,completeDate=<null>,sequence=1435]"
        ],
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Remove Fastly configuration added as part of FAB-11619",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=nigel.smith",
          name: "nigel.smith",
          key: "nigel.smith",
          emailAddress: "nigel.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=nigel.smith&avatarId=12610",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=nigel.smith&avatarId=12610",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=nigel.smith&avatarId=12610",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=nigel.smith&avatarId=12610"
          },
          displayName: "Nigel Smith",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=nigel.smith",
          name: "nigel.smith",
          key: "nigel.smith",
          emailAddress: "nigel.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=nigel.smith&avatarId=12610",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=nigel.smith&avatarId=12610",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=nigel.smith&avatarId=12610",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=nigel.smith&avatarId=12610"
          },
          displayName: "Nigel Smith",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11648/votes",
          votes: 1,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93258",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93258",
      key: "FAB-11639",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/10400",
          id: "10400",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13214&avatarType=issuetype",
          name: "Technical Debt",
          subtask: false,
          avatarId: 13214
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [
          {
            self: "https://tech.immediate.co.uk/rest/api/2/version/16932",
            id: "16932",
            description: "",
            name: "GW_FastFollow ",
            archived: false,
            released: false,
            releaseDate: "2018-03-27"
          }
        ],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11639/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-03-02T07:45:50.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0l9i6",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "GW_FastFollow"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-08T08:44:21.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10154",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "In Progress",
          id: "10154",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "The query detailed below is currently taking in the region of 1s to run in many cases in the production environment.\r\n\r\n{code}\r\nSELECT TOP (?) \r\n    [Extent1].[Id] AS [Id], \r\n    [Extent1].[UserName] AS [UserName], \r\n    ...\r\n    [Extent1].[LockoutEnabled] AS [LockoutEnabled], \r\n    [Extent1].[AccessFailedCount] AS [AccessFailedCount]\r\n    FROM [dbo].[AspNetUsers] AS [Extent1]\r\n    WHERE (((UPPER([Extent1].[Email])) = (UPPER(@p__linq__0))) OR ((UPPER([Extent1].[Email]) IS NULL) AND (UPPER(@p__linq__0) IS NULL))) AND ([Extent1].[TenantId] = @p__linq__1)\r\n{code}\r\n\r\n*Notes*\r\nFrom my experience, I would suggest the following may be the root cause:\r\n- Lack of index covering the TenantId and Email fields\r\n- Performing string conversion on a large number of records\r\n\r\n*Acceptance criteria*\r\n- Querying for the above information takes 20ms or less in the production environment.",
        customfield_13000: null,
        customfield_11100: "FAB-4371",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11901",
          value: "Platform Performance",
          id: "11901"
        },
        customfield_13200: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: [
          "com.atlassian.greenhopper.service.sprint.Sprint@4d25e225[id=1451,rapidViewId=442,state=FUTURE,name=GR.2018.06,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=1451]"
        ],
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "IM Access GetUserByEmailAsync query performance",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=nigel.smith",
          name: "nigel.smith",
          key: "nigel.smith",
          emailAddress: "nigel.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=nigel.smith&avatarId=12610",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=nigel.smith&avatarId=12610",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=nigel.smith&avatarId=12610",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=nigel.smith&avatarId=12610"
          },
          displayName: "Nigel Smith",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=nigel.smith",
          name: "nigel.smith",
          key: "nigel.smith",
          emailAddress: "nigel.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=nigel.smith&avatarId=12610",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=nigel.smith&avatarId=12610",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=nigel.smith&avatarId=12610",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=nigel.smith&avatarId=12610"
          },
          displayName: "Nigel Smith",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: 8.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11639/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93149",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93149",
      key: "FAB-11547",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11547/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-28T11:50:01.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0l9i76",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "GW_FastFollow"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-08T08:50:00.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a user I would like the password containing an exclamation mark that I used for registration and login to be accepted when I change my email address\r\n\r\n \r\n\r\n*Acceptance Criteria*\r\n\r\nGIVEN I am a registered user\r\n\r\nAND my password contains an exclamation mark\r\n\r\nWHEN I change my email address\r\n\r\nAND I enter my password\r\n\r\nTHEN it is accepted\r\n\r\n ",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary:
          "Password not accepted after change of  email from user settings when password has special characters",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=bharati.moily",
          name: "bharati.moily",
          key: "bharati.moily",
          emailAddress: "bharati.moily@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Bharati Moily",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=bharati.moily",
          name: "bharati.moily",
          key: "bharati.moily",
          emailAddress: "bharati.moily@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Bharati Moily",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: 13.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11547/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93104",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93104",
      key: "FAB-11517",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:07:50.170+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11517/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-27T11:34:34.000+0000",
        customfield_12000: "0|i0a51h:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:30:15.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10453",
          description: "An Epic or Story is currently being prepared.",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/generic.png",
          name: "Preparation",
          id: "10453",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "*ISSUE*\r\nIf an editor accidentally passes the Riddle plugin an incorrect Riddle ID then it will break the final page layout.\r\n\r\n*STEPS*\r\nLog in to the CMS\r\nCreate a new article and fill in the required fields\r\nAdd a Riddle quiz with a random ID\r\nPublish the article\r\nObserve the article as a normal consumer would\r\n\r\n*EXAMPLE*\r\nhttp://radiotimes.release.wcp.imdserve.com/quizzes/2018-02-27/rhiannon-riddle-test-for-rt/\r\n\r\n*ACTUAL*\r\nFUBAR.  It seems to be bring in Riddle.com's website content.\r\n\r\n*EXPECTED*\r\nIt should provide an error to the consumer that the quiz could not be found or to the editor to let them know that an incorrect ID has been used.",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: null,
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Riddle quizzes breaking layouts when passed an incorrect ID",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11517/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93058",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93058",
      key: "FAB-11481",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:03:59.286+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11481/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-26T16:54:12.000+0000",
        customfield_12000: "0|hzzzo7:2016x",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: ["GW_FastFollow"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:29:06.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "*ISSUE*\nThe cancel button in the datepicker does not actually cancel the date selected.\n\nIf a date is set and then cancelled, upon publish the cancelled date is the one that is published.\n\n*STEPS TO REPRODUCE*\n # As an admin, create a new offer/competition, or edit an existing offer/competition that has an expiry date set\n # Set an expiry date e.g. 1 April 2018 and click Ok\n # Edit the expiry date again and select a new date e.g. 1 May 2018, but DO NOT CLICK OK\n # Click cancel\n# Click publish/update\n\n*ACTUAL RESULT*\nCancel button doesn't work. The date that is published is the one that should have been cancelled i.e. 1 May 2018.\n\n*EXPECTED RESULT*\nCancel means it's cancelled\nCancelled date is not saved\nIn this example, publish date should be 1 April 2018\n\n*BDD*\nGiven I am creating or editing an offer/competition\nAnd I have already set an expiry date\nWhen I select a new expiry date using the datepicker\nAnd click cancel\nAnd I click publish/update\nThen my original expiry date should be the date that's published\nAnd I should not see the cancelled date",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: null,
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: [
          "com.atlassian.greenhopper.service.sprint.Sprint@69de1b92[id=1441,rapidViewId=370,state=ACTIVE,name=ET.2018.5,startDate=2018-03-02T13:58:58.799Z,endDate=2018-03-12T17:30:00.000Z,completeDate=<null>,sequence=1441]"
        ],
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Offers & Competitions: Datepicker cancel button not working",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=rhiannon.smith",
          name: "rhiannon.smith",
          key: "rhiannon.smith",
          emailAddress: "rhiannon.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=rhiannon.smith&avatarId=13702",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=rhiannon.smith&avatarId=13702",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=rhiannon.smith&avatarId=13702",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=rhiannon.smith&avatarId=13702"
          },
          displayName: "Rhiannon Smith",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=rhiannon.smith",
          name: "rhiannon.smith",
          key: "rhiannon.smith",
          emailAddress: "rhiannon.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=rhiannon.smith&avatarId=13702",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=rhiannon.smith&avatarId=13702",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=rhiannon.smith&avatarId=13702",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=rhiannon.smith&avatarId=13702"
          },
          displayName: "Rhiannon Smith",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11481/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93053",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93053",
      key: "FAB-11478",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [
          {
            self: "https://tech.immediate.co.uk/rest/api/2/version/16932",
            id: "16932",
            description: "",
            name: "GW_FastFollow ",
            archived: false,
            released: false,
            releaseDate: "2018-03-27"
          }
        ],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11478/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-26T16:05:53.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0l9i72",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "CACI", "GW_FastFollow"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [
          {
            id: "80661",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/80661",
            type: {
              id: "10003",
              name: "Relates",
              inward: "relates to",
              outward: "relates to",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10003"
            },
            outwardIssue: {
              id: "91027",
              key: "FAB-10289",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/91027",
              fields: {
                summary: "Endpoint needed on subs mapping table for CACI",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/10452",
                  description: "",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/statuses/generic.png",
                  name: "Complete",
                  id: "10452",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/3",
                    id: 3,
                    key: "done",
                    colorName: "green",
                    name: "Done"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
                  name: "Major",
                  id: "3"
                },
                issuetype: {
                  self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
                  id: "26",
                  description: "",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
                  name: "Story",
                  subtask: false,
                  avatarId: 13215
                }
              }
            }
          }
        ],
        assignee: null,
        updated: "2018-03-08T09:50:29.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a CRM supplier I would like to see the user's subscription ID number in the Identity endpoint so it can be stored in the user's record\r\n\r\n*Acceptance Criteria*\r\n\r\nGIVEN I am viewing the Identity API\r\n\r\nWHEN the record is for a valid subscriber\r\n\r\nTHEN I will see their subs number in the claims",
        customfield_13000: null,
        customfield_11100: "FAB-9172",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: [
          "com.atlassian.greenhopper.service.sprint.Sprint@4d25e225[id=1451,rapidViewId=442,state=FUTURE,name=GR.2018.06,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=1451]"
        ],
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Add Subs ID to Identity endpoint for CACI",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: 5.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11478/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93052",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93052",
      key: "FAB-11477",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [
          {
            self: "https://tech.immediate.co.uk/rest/api/2/version/16932",
            id: "16932",
            description: "",
            name: "GW_FastFollow ",
            archived: false,
            released: false,
            releaseDate: "2018-03-27"
          }
        ],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11477/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-26T16:05:12.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0l9i7i",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "GW_FastFollow"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-08T08:32:28.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a developer, I would like to use a fallback value of the Identity ID to filter the list returned from Identity, so that the ordering remains consistent\r\n\r\n*Acceptance Criteria*\r\n\r\nGIVEN I have searched for a name in the Subs Admin lookup\r\n\r\nWHEN I refresh the list and search on the same details\r\n\r\nTHEN the order doesn't change.",
        customfield_13000: null,
        customfield_11100: "FAB-9110",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Order by Sent parameter and fallback ID",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=keir.lumsden",
          name: "keir.lumsden",
          key: "keir.lumsden",
          emailAddress: "keir.lumsden@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=keir.lumsden&avatarId=14909",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=keir.lumsden&avatarId=14909",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=keir.lumsden&avatarId=14909",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=keir.lumsden&avatarId=14909"
          },
          displayName: "Keir Lumsden",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=keir.lumsden",
          name: "keir.lumsden",
          key: "keir.lumsden",
          emailAddress: "keir.lumsden@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=keir.lumsden&avatarId=14909",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=keir.lumsden&avatarId=14909",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=keir.lumsden&avatarId=14909",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=keir.lumsden&avatarId=14909"
          },
          displayName: "Keir Lumsden",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: 2.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11477/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93045",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93045",
      key: "FAB-11473",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:04:01.472+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11473/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-26T15:05:03.000+0000",
        customfield_12000: "0|i0a4od:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:28:27.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10453",
          description: "An Epic or Story is currently being prepared.",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/generic.png",
          name: "Preparation",
          id: "10453",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "*ISSUE*\nFollowing on from FAB-8960\nIf a user is setting up an offer and they set the expiry date before the start date, it is possible to set a start date that is after the expiry date. Validation does not currently work in this scenario.\n\n*STEPS TO REPRODUCE*\n # Go to admin\n # Create a new offer\n # Set expiry date to a future date e.g. 1 July 2018 and click Ok\n # Set publish date (start date) to a date that's after the expiry date e.g. 2 July 2018\n# Click schedule\n\n*ACTUAL RESULT*\nPost is scheduled\nPublish date is after expiry date\nPost will never actually be published, as it will expire before the publish date\n\n*EXPECTED RESULT*\nValidation error warns user that publish date is after expiry date\nIt is not possible to save a publish date that is after expiry date",
        customfield_13000: null,
        customfield_11100: "FAB-7387",
        customfield_13002: null,
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Offers: Expiry date can be before start date",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=rhiannon.smith",
          name: "rhiannon.smith",
          key: "rhiannon.smith",
          emailAddress: "rhiannon.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=rhiannon.smith&avatarId=13702",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=rhiannon.smith&avatarId=13702",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=rhiannon.smith&avatarId=13702",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=rhiannon.smith&avatarId=13702"
          },
          displayName: "Rhiannon Smith",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=rhiannon.smith",
          name: "rhiannon.smith",
          key: "rhiannon.smith",
          emailAddress: "rhiannon.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=rhiannon.smith&avatarId=13702",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=rhiannon.smith&avatarId=13702",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=rhiannon.smith&avatarId=13702",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=rhiannon.smith&avatarId=13702"
          },
          displayName: "Rhiannon Smith",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11473/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93005",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93005",
      key: "FAB-11453",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:04:00.828+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11453/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-23T14:12:17.000+0000",
        customfield_12000: "0|i0a4hp:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:29:19.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10453",
          description: "An Epic or Story is currently being prepared.",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/generic.png",
          name: "Preparation",
          id: "10453",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          'As a GW website user who is viewing a page with offers on it, when an offer expires whilst I am on the page I would like to be able to read this information clearly.\r\n\r\nCurrently the "expired" CTA button uses the deactivated button state with white text - see screenshot. This is hard to read and probably doesn\'t meet accessibility.\r\n\r\n*AC*\r\nGiven I am on a page that includes an offer that is about to expire\r\nWhen the offer expires\r\nI can clearly read from the card that the offer is expired\r\nAnd the "expired" text meets guidelines for accessibility\r\nAnd other rules concerning expired offers continue to apply e.g. I cannot click on the expired offer',
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: null,
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Expired offer CTA button colour/style",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=rhiannon.smith",
          name: "rhiannon.smith",
          key: "rhiannon.smith",
          emailAddress: "rhiannon.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=rhiannon.smith&avatarId=13702",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=rhiannon.smith&avatarId=13702",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=rhiannon.smith&avatarId=13702",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=rhiannon.smith&avatarId=13702"
          },
          displayName: "Rhiannon Smith",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=rhiannon.smith",
          name: "rhiannon.smith",
          key: "rhiannon.smith",
          emailAddress: "rhiannon.smith@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=rhiannon.smith&avatarId=13702",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=rhiannon.smith&avatarId=13702",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=rhiannon.smith&avatarId=13702",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=rhiannon.smith&avatarId=13702"
          },
          displayName: "Rhiannon Smith",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11453/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "93001",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/93001",
      key: "FAB-11449",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:03:58.571+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11449/watchers",
          watchCount: 2,
          isWatching: false
        },
        created: "2018-02-23T12:17:13.000+0000",
        customfield_12000: "0|hzzzo7:2016v",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: ["GW_FastFollow"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:28:48.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "*ISSUE*\r\nThe user can select a day within a month that isn't accurate such as 31st February or 31st November.\r\n\r\nShould take into account leap years (Feb 29 2020 is the next one).  It should mimic the publishing date picker.\r\n\r\nInvestigate WP solution for publish dates and investigate alternative libraries if necessary to prevent a large burden on our teams having to handle date validation.\r\n\r\n*ACTUAL*\r\nThe offer publishes but still runs out at the correct time.\r\n\r\n*EXPECTED*\r\nThe user should not be able to publish the offer/comp unless the date is correct.",
        customfield_13000: null,
        customfield_11100: "FAB-7387",
        customfield_13002: null,
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: [
          "com.atlassian.greenhopper.service.sprint.Sprint@69de1b92[id=1441,rapidViewId=370,state=ACTIVE,name=ET.2018.5,startDate=2018-03-02T13:58:58.799Z,endDate=2018-03-12T17:30:00.000Z,completeDate=<null>,sequence=1441]"
        ],
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Correcting the day within a month validation",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11449/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "92991",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/92991",
      key: "FAB-11440",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:04:00.017+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11440/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-22T18:00:02.000+0000",
        customfield_12000: "0|i0a4dx:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:29:13.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10453",
          description: "An Epic or Story is currently being prepared.",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/generic.png",
          name: "Preparation",
          id: "10453",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a brand I would like all the call to actions throughout the site to be consistent. On offers we have a drop down of predefined call to actions and these are currently title case. They should be sentence case.\r\n\r\n*Acceptance criteria*\r\n\r\nGiven I have created an offer,\r\n And I have applied one of the predefined call to action button labels,\r\n Then when I view the card,\r\n I should see the label in sentence case",
        customfield_13000: null,
        customfield_11100: "FAB-7387",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12222",
          value: "Offers",
          id: "12222"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Predefined button call to actions should be sentence case",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=annabel.inkpen",
          name: "annabel.inkpen",
          key: "annabel.inkpen",
          emailAddress: "annabel.inkpen@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=annabel.inkpen&avatarId=13310",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=annabel.inkpen&avatarId=13310",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=annabel.inkpen&avatarId=13310",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=annabel.inkpen&avatarId=13310"
          },
          displayName: "Annabel Inkpen",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=annabel.inkpen",
          name: "annabel.inkpen",
          key: "annabel.inkpen",
          emailAddress: "annabel.inkpen@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=annabel.inkpen&avatarId=13310",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=annabel.inkpen&avatarId=13310",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=annabel.inkpen&avatarId=13310",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=annabel.inkpen&avatarId=13310"
          },
          displayName: "Annabel Inkpen",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11440/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "92905",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/92905",
      key: "FAB-11381",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:03:56.639+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11381/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-21T10:29:22.000+0000",
        customfield_12000: "0|i0a3wd:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:28:57.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10453",
          description: "An Epic or Story is currently being prepared.",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/generic.png",
          name: "Preparation",
          id: "10453",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a user, I want to know when an offer that is presented on site has expired so that I do not waste time clicking on it and can hunt for in-date offers\r\n\r\n- currently if an offer is pinned after it has expired (page refresh) it will not state that it has expired\r\n- there is also some UX difficulty that needs addressing in regards to an expired premium offer\r\n\r\nIdeally this sort of scenario should not happen because expired offers are removed from the site.  They do stay put when the user watches them count down but if that offer is pinned and the user refreshes then the card loses the term 'expired'.  The editor has to remove the pinned item.\r\n\r\n*AC*\r\nA method to indicate to the user that the offer has expired on the card\r\nA suitable method exists for premium offers that have expired that can still direct users to the premium hub",
        customfield_13000: null,
        customfield_11100: null,
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12222",
          value: "Offers",
          id: "12222"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Making the 'expired' display persist for expired offers",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11381/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "92602",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/92602",
      key: "FAB-11164",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11164/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-13T12:05:05.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0l9i74",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "GW_FastFollow"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-08T08:49:52.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a developer, I would like to ensure no spurious claims are added to registered user, so that I know that all data for a registered user is correct.\r\n\r\n \r\n\r\n*Acceptance Criteria :*\r\n\r\nGiven  a user has registered with Identity \r\n\r\nWhen I check the claims for the user as an Identity manager \r\n\r\nThen I cannot see the urlreferrer added as a claim\r\n\r\n \r\n\r\n*Current Situation*\r\n\r\nGiven a user has registered with Identity \r\n\r\nWhen I check the claims for the user as an Identity manager \r\n\r\nThen I see a urlreferrer is being added as claims for all registered user. ",
        customfield_13000: null,
        customfield_11100: "FAB-9110",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary:
          "Urlreferrer is added as claims for all registered users  on IdentityManager",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=bharati.moily",
          name: "bharati.moily",
          key: "bharati.moily",
          emailAddress: "bharati.moily@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Bharati Moily",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=bharati.moily",
          name: "bharati.moily",
          key: "bharati.moily",
          emailAddress: "bharati.moily@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Bharati Moily",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: 5.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11164/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "92265",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/92265",
      key: "FAB-11036",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:07:51.195+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11036/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-06T12:26:01.000+0000",
        customfield_12000: "0|hzzzo7:200zjr",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [
          {
            id: "79809",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/79809",
            type: {
              id: "10001",
              name: "Cloners",
              inward: "is cloned by",
              outward: "clones",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10001"
            },
            outwardIssue: {
              id: "87322",
              key: "FAB-9002",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/87322",
              fields: {
                summary: "Ensure live blog functionality has fast purge",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/10161",
                  description:
                    "This status is managed internally by JIRA Software",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/subtask.gif",
                  name: "Ready For Shaping",
                  id: "10161",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
                    id: 4,
                    key: "indeterminate",
                    colorName: "yellow",
                    name: "In Progress"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
                  name: "Major",
                  id: "3"
                },
                issuetype: {
                  self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
                  id: "26",
                  description: "",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
                  name: "Story",
                  subtask: false,
                  avatarId: 13215
                }
              }
            }
          }
        ],
        assignee: null,
        updated: "2018-03-14T15:30:24.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As an editor/admin, I want a method to have a post/images cleared from the cache immediately so that my readers can be sure to get the latest information as it goes live and we can prevent any legal issues that may come up from articles\r\n\r\n--Turn purgely on in a feature env-- Purgely is already network active. Create feature env & see if it's working (is any dev work required for this?) as this may prevent any work being required. (It was my understanding that it didn't work because we were using incorrect keys - if it works then this ticket is closed)\r\n\r\n*Acceptance*\r\n\r\nMethod exists to for editors/admins to instantly purge a URL on Fabric\r\n\r\nImages/resources can be instantly purged\r\n\r\nPosts and pages can be instantly purged",
        customfield_13000: null,
        customfield_11100: "FAB-9011",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12205",
          value: "Edge-cache migration",
          id: "12205"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: [
          "com.atlassian.greenhopper.service.sprint.Sprint@69de1b92[id=1441,rapidViewId=370,state=ACTIVE,name=ET.2018.5,startDate=2018-03-02T13:58:58.799Z,endDate=2018-03-12T17:30:00.000Z,completeDate=<null>,sequence=1441]"
        ],
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Ensure instant purge is available",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11301",
          value: "M - Medium",
          id: "11301"
        },
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-11036/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "92174",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/92174",
      key: "FAB-10978",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-10978/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2018-02-02T17:13:01.000+0000",
        customfield_12000: "0|i001qn:6guzzy0qxar",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:04:20.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a business, I would like to pass a website key along with the subscriber number to the Subscriptions API, so that we can determine which database to query at DSB/CDS.\r\n\r\nCurrently, we only pass the subscriber code, so if we have a valid subscriber number passed through the API to DSB and the response returned is 'valid', a user could technically use this number on both GW and HE and access premium content.\r\n\r\nWe need to pass a website key, e.g gardenersworld or historyextra along with the subscriber code.\r\n\r\n*Acceptance criteria*\r\n- Given a user has entered a subscriber number on site, when we pass that subscriber number to the Subscriptions API, we should also include a website key to inform where the user has come from.",
        customfield_13000: null,
        customfield_11100: "FAB-4282",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11800",
          value: "Subscriptions",
          id: "11800"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary:
          "Passing the source parameter along with the subscriber number",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=linzi.radwell",
          name: "linzi.radwell",
          key: "linzi.radwell",
          emailAddress: "linzi.radwell@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Linzi Radwell",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=linzi.radwell",
          name: "linzi.radwell",
          key: "linzi.radwell",
          emailAddress: "linzi.radwell@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Linzi Radwell",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: 5.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-10978/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "90063",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/90063",
      key: "FAB-9213",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/1",
          id: "1",
          description: "A problem which prevents the function of a product",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13203&avatarType=issuetype",
          name: "Bug",
          subtask: false,
          avatarId: 13203
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [
          {
            self: "https://tech.immediate.co.uk/rest/api/2/version/16932",
            id: "16932",
            description: "",
            name: "GW_FastFollow ",
            archived: false,
            released: false,
            releaseDate: "2018-03-27"
          }
        ],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-9213/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2017-12-11T15:29:20.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0l9i79",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "GW_FastFollow"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [
          {
            id: "78371",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/78371",
            type: {
              id: "10001",
              name: "Cloners",
              inward: "is cloned by",
              outward: "clones",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10001"
            },
            inwardIssue: {
              id: "90967",
              key: "FAB-10231",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/90967",
              fields: {
                summary: "Change email address in forgotten password dialogue",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/10167",
                  description:
                    "This status is managed internally by JIRA Software",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/subtask.gif",
                  name: "Ready For Release",
                  id: "10167",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/3",
                    id: 3,
                    key: "done",
                    colorName: "green",
                    name: "Done"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
                  name: "Enhancement",
                  id: "6"
                },
                issuetype: {
                  self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
                  id: "26",
                  description: "",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
                  name: "Story",
                  subtask: false,
                  avatarId: 13215
                }
              }
            }
          }
        ],
        assignee: null,
        updated: "2018-03-08T08:49:44.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a user, when I receive the email generated from 'Forgotten the Password?' link I would like the verify link to display the new email and not the old email.\r\n\r\n*Steps to reproduce:*\r\n * Register a new user (*[reg44@sharklasers.com|mailto:reg44@sharklasers.com]*) , verify him\r\n * In user settings, change his email to some valid email (*[reg55@sharklasers.com|mailto:reg55@sharklasers.com]*)\r\n * Now Logout, Go to Forgot password, enter email *[reg55@sharklasers.com|mailto:reg55@sharklasers.com]* (Ref screenshot 1)\r\n * In Password reset email, click the verify email link (Ref Screenshot 2 - sharklasers email)\r\n * The Identity page is still displaying the old email, Ref Screenshot 3\r\n\r\n*Acceptance Criteria:*\r\n\r\nGIVEN I am on User Setting page \r\nAND I have changed my email to New valid email\r\nAND I signed out of the account\r\nWHEN I clicked the Forgotten my password link the next time\r\nAND enter the New email address\r\nAND I receive and click on the Reset Password email\r\nTHEN I should see the Reset Password page specifying the new email\r\nAND not my old email",
        customfield_13000: null,
        customfield_11100: "FAB-290",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Forgot Password displays the incorrect email address",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=anusha.adabala",
          name: "anusha.adabala",
          key: "anusha.adabala",
          emailAddress: "anusha.adabala@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=14228",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=14228",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=14228",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=14228"
          },
          displayName: "Anusha Adabala",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=anusha.adabala",
          name: "anusha.adabala",
          key: "anusha.adabala",
          emailAddress: "anusha.adabala@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=14228",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=14228",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=14228",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=14228"
          },
          displayName: "Anusha Adabala",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: 5.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-9213/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "90041",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/90041",
      key: "FAB-9208",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [
          {
            self: "https://tech.immediate.co.uk/rest/api/2/version/16932",
            id: "16932",
            description: "",
            name: "GW_FastFollow ",
            archived: false,
            released: false,
            releaseDate: "2018-03-27"
          }
        ],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-9208/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2017-12-11T12:10:39.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0l9i7",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "GDPR", "GW_FastFollow", "frontend"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [
          {
            id: "77683",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/77683",
            type: {
              id: "10000",
              name: "Blocks",
              inward: "is blocked by",
              outward: "blocks",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10000"
            },
            inwardIssue: {
              id: "90076",
              key: "FAB-9215",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/90076",
              fields: {
                summary: "Opt-in checkboxes on Identity ",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/10167",
                  description:
                    "This status is managed internally by JIRA Software",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/subtask.gif",
                  name: "Ready For Release",
                  id: "10167",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/3",
                    id: 3,
                    key: "done",
                    colorName: "green",
                    name: "Done"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
                  name: "Minor",
                  id: "4"
                },
                issuetype: {
                  self:
                    "https://tech.immediate.co.uk/rest/api/2/issuetype/10300",
                  id: "10300",
                  description: "",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13209&avatarType=issuetype",
                  name: "Design Story",
                  subtask: false,
                  avatarId: 13209
                }
              }
            }
          }
        ],
        assignee: null,
        updated: "2018-03-08T08:44:23.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10154",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "In Progress",
          id: "10154",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a user I would like to be presented with the option to opt-in or out to receive communications from Immediate Media and BBC Worldwide (when applicable) when I register for an Identity account\r\n\r\n*Acceptance Criteria*\r\n\r\nGIVEN I am a registering with an Immediate Media brand\r\n\r\nWHEN I am on the first page of the registration screen\r\n\r\nTHEN unchecked radio buttons with disclaimer text appears, enabling me to opt-in or out to receive communications from Immediate Media\r\n\r\n \r\n\r\nGIVEN I am a registering with a BBC brand\r\n\r\nWHEN I am on the first page of the registration screen\r\n\r\nTHEN two unchecked radio buttons with disclaimer text appear, enabling me to opt-in or out to receive communications from Immediate Media and BBC Worldwide",
        customfield_13000: null,
        customfield_11100: "FAB-306",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12505",
          value: "GDPR",
          id: "12505"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: [
          "com.atlassian.greenhopper.service.sprint.Sprint@4d25e225[id=1451,rapidViewId=442,state=FUTURE,name=GR.2018.06,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=1451]"
        ],
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Add explicit opt-in checkboxes to Identity first screen",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: 13.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-9208/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "88300",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/88300",
      key: "FAB-9003",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:07:52.872+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-9003/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2017-11-01T16:16:51.000+0000",
        customfield_12000: "0|i09e4p:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:30:31.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10453",
          description: "An Epic or Story is currently being prepared.",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/generic.png",
          name: "Preparation",
          id: "10453",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As an engineer, I want the RT site on release to pass all regression tests and to cache things for no longer than editors would like so that we can be confident when migrating from Akamai to Fastly\r\n * Load?\r\n * Correct cache behaviour in client\r\n * Functional testing - have we started caching things that we shouldn't?\r\n * TTFB\r\n\r\nrelease.radiotimes.com is the site to test on.\r\n\r\n*AC*\r\n\r\nLogin and authentication still work (origin splitting as members is on legacy)\r\n\r\nRegression tests pass\r\n\r\nDoes the site continue to function as expected under load (see Andrew vs GA for expectations)?\r\n\r\nPublishing an article/page is cached for 20m\r\n\r\nExploratory testing looking for unanticipated behaviour",
        customfield_13000: null,
        customfield_11100: "FAB-9011",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12205",
          value: "Edge-cache migration",
          id: "12205"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Test edge cache behaviour",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11302",
          value: "L - Large",
          id: "11302"
        },
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-9003/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "88301",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/88301",
      key: "FAB-9001",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:07:55.161+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-9001/watchers",
          watchCount: 2,
          isWatching: false
        },
        created: "2017-11-01T16:17:56.000+0000",
        customfield_12000: "0|i09e79:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=shah.sadeque",
          name: "shah.sadeque",
          key: "shah.sadeque",
          emailAddress: "shah.sadeque@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=shah.sadeque&avatarId=12401",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=shah.sadeque&avatarId=12401",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=shah.sadeque&avatarId=12401",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=shah.sadeque&avatarId=12401"
          },
          displayName: "Shah Sadeque",
          active: true,
          timeZone: "GB"
        },
        updated: "2018-03-14T15:30:37.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10161",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Shaping",
          id: "10161",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As an engineer, I want to switch RT.com over to Fastly so that we can benefit from the improvements Fastly brings as a service and remove a commercial cost at Akamai\r\n\r\nUAT done first and then live is swapped to Fastly.  Using release.radiotimes.com is already using Fastly.\r\n * Lower TTL around migration window\r\n * Don't forget we have split DNS for RT.com (in this building and in the wild)\r\n\r\n*AC*\r\n\r\n[www.radiotimes.com|http://www.radiotimes.com/] can be shown to be being served from fastly\r\n\r\nThe site still functions as expected",
        customfield_13000: null,
        customfield_11100: "FAB-9011",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12205",
          value: "Edge-cache migration",
          id: "12205"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Switch RT.com domain",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11300",
          value: "S - Small",
          id: "11300"
        },
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-9001/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "88305",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/88305",
      key: "FAB-8999",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T23:07:56.129+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-8999/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2017-11-01T16:49:14.000+0000",
        customfield_12000: "0|i09e7h:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/3",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/major.svg",
          name: "Major",
          id: "3"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:30:43.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10453",
          description: "An Epic or Story is currently being prepared.",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/statuses/generic.png",
          name: "Preparation",
          id: "10453",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/4",
            id: 4,
            key: "indeterminate",
            colorName: "yellow",
            name: "In Progress"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a QA, I want to ensure the changes brought in via the Fastly work are covered in regression tests so that future deploys do not break what's been set up\r\n * Make sure that we don't break fastly on future deploys (given that all of its config is now in github).\r\n * Cache times are respected (check headers for cache hits, check cache age), version number appears in headers, \r\n\r\nPark this and speak to [~sean.kingswell] - large amount of work and is it worth it.  No such tests exist for Akamai or Fastly currently.\r\n\r\n*AC*\r\n\r\nRelevant regression tests added to regression packs",
        customfield_13000: null,
        customfield_11100: "FAB-9011",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12205",
          value: "Edge-cache migration",
          id: "12205"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Implement regression tests",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=george.fletcher",
          name: "george.fletcher",
          key: "george.fletcher",
          emailAddress: "george.fletcher@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "George Fletcher",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: null,
        customfield_12500: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11302",
          value: "L - Large",
          id: "11302"
        },
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-8999/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "89361",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/89361",
      key: "FAB-8573",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: "2018-03-14T16:05:59.710+0000",
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-8573/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2017-11-23T15:40:54.000+0000",
        customfield_12000: "0|hzzyyz:i",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "FrontEnd", "HistoryLibrary", "IDT-HE"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [
          {
            id: "76690",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/76690",
            type: {
              id: "10001",
              name: "Cloners",
              inward: "is cloned by",
              outward: "clones",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10001"
            },
            outwardIssue: {
              id: "88425",
              key: "FAB-3408",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/88425",
              fields: {
                summary: "Add Gardeners' World Logo to Identity pages",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/10167",
                  description:
                    "This status is managed internally by JIRA Software",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/subtask.gif",
                  name: "Ready For Release",
                  id: "10167",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/3",
                    id: 3,
                    key: "done",
                    colorName: "green",
                    name: "Done"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
                  name: "Enhancement",
                  id: "6"
                },
                issuetype: {
                  self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
                  id: "26",
                  description: "",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
                  name: "Story",
                  subtask: false,
                  avatarId: 13215
                }
              }
            }
          }
        ],
        assignee: null,
        updated: "2018-03-14T14:10:23.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a product manager I would like the HE Identity pages to be configured with a HE logo, so that HE users are confident they are on the same site.\r\n\r\n \r\n\r\n*Acceptance Criteria*\r\n\r\nGIVEN I am on the History Extra Fabric site\r\n\r\nAND I have selected the Register option\r\n\r\nWHEN the page loads\r\n\r\nTHEN I should be presented with a History Extra Identity registration screen with a HE Logo presented\r\n\r\n \r\n\r\nGIVEN I am on the History Extra Fabric site\r\n\r\nAND I have selected the Sign In option\r\n\r\nWHEN the page loads\r\n\r\nTHEN I should be presented with a History Extra Identity Sign In screen with a HE Logo presented\r\n\r\n \r\n\r\nGIVEN I go through the forgotten password process\r\n\r\nWHEN I receive the verification email\r\n\r\nAND I click on the link\r\n\r\nTHEN I should be presented with the History Extra Identity Replacement Password screen with a HE Logo presented\r\n\r\n \r\n\r\n \r\n\r\n GIVEN I go through an Identity process\r\n\r\nWHEN a screen is presented\r\n\r\nTHEN it should be presented with a HE Logo\r\n\r\n ",
        customfield_13000: null,
        customfield_11100: "FAB-317",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Add History Extra Logo to Identity pages",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=eugenio.martinez",
          name: "eugenio.martinez",
          key: "eugenio.martinez",
          emailAddress: "eugenio.martinez@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Eugenio Martinez",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=eugenio.martinez",
          name: "eugenio.martinez",
          key: "eugenio.martinez",
          emailAddress: "eugenio.martinez@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=10122",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=10122",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=10122"
          },
          displayName: "Eugenio Martinez",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: 5.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-8573/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "88304",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/88304",
      key: "FAB-3298",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-3298/watchers",
          watchCount: 4,
          isWatching: false
        },
        created: "2017-11-01T16:26:38.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0l9i8y",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: ["HistoryLibrary", "IDT-HE", "WEBOPS"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:03:27.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a developer, I would like to have a real database in migration in order to perform any operation over it.\r\n\r\n*Acceptance Criteria*\r\n\r\nGIVEN a developer\r\n\r\nWHEN wants to access to the HE database in develop\r\n\r\nTHEN she can.",
        customfield_13000: null,
        customfield_11100: "FAB-310",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Put HE database CSV in migration server",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: 3.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-3298/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "88303",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/88303",
      key: "FAB-3297",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-3297/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2017-11-01T16:24:58.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0l9i8v",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "HistoryLibrary", "IDT-HE"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T14:59:57.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description: "Run GW DB migration to go live.",
        customfield_13000: null,
        customfield_11100: "FAB-310",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11619",
          value: "Identity Migration",
          id: "11619"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: null,
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Run HE migration",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: [
          {
            self:
              "https://tech.immediate.co.uk/rest/api/2/customFieldOption/10000",
            value: "Impediment",
            id: "10000"
          }
        ],
        customfield_10002: ["Identity_Migration"],
        customfield_10004: 5.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-3297/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "88302",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/88302",
      key: "FAB-3296",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-3296/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2017-11-01T16:22:45.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0l9i8x",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "HistoryLibrary", "IDT-HE"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:00:03.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "Migration script should update brand subscriptions database, setting the WEB ID column for each user to their new Identity ID for each migrated user. As the HE user db only contains email address, these should be migrated as ghost users, with the HE newsletter claim set to TRUE.\r\n\r\n*Acceptance Criteria*\r\n * Given I have details on where the existing HE data should be mapped to, when I run the migration script, then the data should be mapped to the corresponding locations in the identity database.\r\n * Given that the migration script has run, when I check the number of users in the Identity database, then the number should be the same as in the source database\r\n * Given that I am a HE user prior to migration, when the migration script has finished, then when I log in to Identity with the same credentials, and I can see my data in User Settings\r\n\r\n ",
        customfield_13000: null,
        customfield_11100: "FAB-310",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11619",
          value: "Identity Migration",
          id: "11619"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: null,
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Create migration script for HE members into Identity",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: [
          {
            self:
              "https://tech.immediate.co.uk/rest/api/2/customFieldOption/10000",
            value: "Impediment",
            id: "10000"
          }
        ],
        customfield_10002: ["Identity_Migration"],
        customfield_10004: 13.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-3296/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "88290",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/88290",
      key: "FAB-3293",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-3293/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2017-11-01T15:25:52.000+0000",
        customfield_12000: "0|hzzyyz:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "HistoryLibrary", "IDT-HE", "Identity", "WebOps"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [
          {
            id: "75387",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/75387",
            type: {
              id: "10001",
              name: "Cloners",
              inward: "is cloned by",
              outward: "clones",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10001"
            },
            outwardIssue: {
              id: "87342",
              key: "FAB-219",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/87342",
              fields: {
                summary: "Configure GW environment",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/10167",
                  description:
                    "This status is managed internally by JIRA Software",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/subtask.gif",
                  name: "Ready For Release",
                  id: "10167",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/3",
                    id: 3,
                    key: "done",
                    colorName: "green",
                    name: "Done"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
                  name: "Enhancement",
                  id: "6"
                },
                issuetype: {
                  self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
                  id: "26",
                  description: "",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
                  name: "Story",
                  subtask: false,
                  avatarId: 13215
                }
              }
            }
          }
        ],
        assignee: null,
        updated: "2018-03-14T14:10:04.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a product manager I would like the HE Fabric environment to be configured for competitions, user settings, newsletters and OpenID, so HE users can use these features\r\n\r\n \r\n\r\n*Acceptance Criteria*\r\n\r\n \r\n\r\nGIVEN I am on the History Extra Fabric site\r\n\r\nWHEN I view the header\r\n\r\nTHEN Sign In and Register options should be available\r\n\r\n \r\n\r\nGIVEN I am on the History Extra Fabric site\r\n\r\nAND I have selected the Register option\r\n\r\nWHEN the page loads\r\n\r\nTHEN I should be presented with a History Extra Identity registration screen\r\n\r\n \r\n\r\nGIVEN I have registered successfully on History Extra\r\n\r\nWHEN I sign in\r\n\r\nTHEN I am able to access my user settings from the header\r\n\r\n \r\n\r\nGIVEN I have accessed my user settings\r\n\r\nWHEN I browse the options\r\n\r\nTHEN I can see a newsletters option\r\n\r\n \r\n\r\nGIVEN I have selected the newsletters tab\r\n\r\nWHEN the tab loads\r\n\r\nTHEN I will have a number of newsletter options\r\n\r\n \r\n\r\nGIVEN I am on the newsletter tab\r\n\r\nAND I have ticked the box and selected to subscribe to a newsletter\r\n\r\nWHEN I save the changes\r\n\r\nTHEN this change will be reflected in the subscription list\r\n\r\n \r\n\r\nGIVEN I am on the newsletter tab\r\n\r\nAND I have un-ticked the box of a newsletter I already subscribe to\r\n\r\nWHEN I save the changes\r\n\r\nTHEN this change will be reflected in the un-sub list\r\n\r\n \r\n\r\nGIVEN I am signed in to the HE Fabric site\r\n\r\nWHEN I select Sign Out from the header\r\n\r\nTHEN I will be re-directed to the HE main page and signed out\r\n\r\n \r\n\r\nGIVEN I am on the History Extra Fabric site\r\n\r\nAND I have selected the Sign In option\r\n\r\nWHEN the page loads\r\n\r\nTHEN I should be presented with a History Extra Identity Sign In screen\r\n\r\n \r\n\r\nGIVEN I am on the History Extra Sign In screen\r\n\r\nAND I have inputted valid Sign In details\r\n\r\nWHEN I select Sign In\r\n\r\nTHEN I should be presented with a loading screen; signed into the HE site and re-directed to the HE home page.\r\n\r\n ",
        customfield_13000: null,
        customfield_11100: "FAB-317",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: "*Functionality*\r\n\r\n*Usability*",
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Configure HE environment",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        subtasks: [
          {
            id: "88291",
            key: "FAB-3294",
            self: "https://tech.immediate.co.uk/rest/api/2/issue/88291",
            fields: {
              summary: "Configure Develop",
              status: {
                self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
                description:
                  "This status is managed internally by JIRA Software",
                iconUrl:
                  "https://tech.immediate.co.uk/images/icons/subtask.gif",
                name: "Ready For Development",
                id: "10155",
                statusCategory: {
                  self:
                    "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do"
                }
              },
              priority: {
                self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
                iconUrl:
                  "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
                name: "Enhancement",
                id: "6"
              },
              issuetype: {
                self: "https://tech.immediate.co.uk/rest/api/2/issuetype/10001",
                id: "10001",
                description: "The sub-task of the issue",
                iconUrl:
                  "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13216&avatarType=issuetype",
                name: "Sub-Task",
                subtask: true,
                avatarId: 13216
              }
            }
          },
          {
            id: "88292",
            key: "FAB-3295",
            self: "https://tech.immediate.co.uk/rest/api/2/issue/88292",
            fields: {
              summary: "Configure Release",
              status: {
                self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
                description:
                  "This status is managed internally by JIRA Software",
                iconUrl:
                  "https://tech.immediate.co.uk/images/icons/subtask.gif",
                name: "Ready For Development",
                id: "10155",
                statusCategory: {
                  self:
                    "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
                  id: 2,
                  key: "new",
                  colorName: "blue-gray",
                  name: "To Do"
                }
              },
              priority: {
                self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
                iconUrl:
                  "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
                name: "Enhancement",
                id: "6"
              },
              issuetype: {
                self: "https://tech.immediate.co.uk/rest/api/2/issuetype/10001",
                id: "10001",
                description: "The sub-task of the issue",
                iconUrl:
                  "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13216&avatarType=issuetype",
                name: "Sub-Task",
                subtask: true,
                avatarId: 13216
              }
            }
          }
        ],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: null,
        customfield_10004: 5.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-3293/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "88289",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/88289",
      key: "FAB-3292",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-3292/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2017-11-01T15:24:13.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0l9i8i",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "HistoryLibrary", "IDT-HE"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-14T15:02:21.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a user on History Extra I should be able to register, login, change email and forgotten password on an Identity account, so that I can tailor my experience and use other parts of the History Extra site.\r\n\r\n*Acceptance criteria*\r\n * GIVEN I am on the HE Fabric site,\r\n * WHEN I navigate to register or login,\r\n * THEN I should be presented a standard Fabric registration page with HE styling.\r\n\r\n \r\n * GIVEN I am on the HE Fabric site,\r\n * WHEN I run through the forgotten password process,\r\n * THEN I should be presented with a standard Fabric new password page with HE styling.\r\n\r\n \r\n * GIVEN I have populated the registration page details\r\n * WHEN I click submit\r\n * THEN it should be validated in line with standard Fabric validation.\r\n\r\n \r\n * GIVEN I have submitted the page and the page is validated\r\n * WHEN validation fails,\r\n * THEN I should be informed of the reasons for this failure.\r\n\r\n*Developer Notes*\r\n * We need to set up History Extra as Identity clients.\r\n * Use generic Fabric login/reg pages but change styling and logo to HE",
        customfield_13000: null,
        customfield_11100: "FAB-317",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: null,
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: null,
        summary: "Create HE as an Identity client",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: ["Identity_Migration"],
        customfield_10004: 8.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-3292/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "70329",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/70329",
      key: "FAB-262",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-262/watchers",
          watchCount: 2,
          isWatching: false
        },
        created: "2016-11-30T11:53:20.000+0000",
        customfield_12000: "0|hzzzs8:lzy410zv048r0lx",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [
          {
            id: "57813",
            self: "https://tech.immediate.co.uk/rest/api/2/issueLink/57813",
            type: {
              id: "10003",
              name: "Relates",
              inward: "relates to",
              outward: "relates to",
              self:
                "https://tech.immediate.co.uk/rest/api/2/issueLinkType/10003"
            },
            outwardIssue: {
              id: "66837",
              key: "FAB-756",
              self: "https://tech.immediate.co.uk/rest/api/2/issue/66837",
              fields: {
                summary: "SPIKE : WebUserAccounts - Device cookies",
                status: {
                  self: "https://tech.immediate.co.uk/rest/api/2/status/10167",
                  description:
                    "This status is managed internally by JIRA Software",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/subtask.gif",
                  name: "Ready For Release",
                  id: "10167",
                  statusCategory: {
                    self:
                      "https://tech.immediate.co.uk/rest/api/2/statuscategory/3",
                    id: 3,
                    key: "done",
                    colorName: "green",
                    name: "Done"
                  }
                },
                priority: {
                  self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
                  iconUrl:
                    "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
                  name: "Minor",
                  id: "4"
                },
                issuetype: {
                  self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
                  id: "26",
                  description: "",
                  iconUrl:
                    "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
                  name: "Story",
                  subtask: false,
                  avatarId: 13215
                }
              }
            }
          }
        ],
        assignee: null,
        updated: "2018-03-08T08:35:41.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "This ticket is the result of the spike ticket ICT-417.\r\n\r\nBelow are the recommendations for implementing the device cookie security model :\r\n\r\nA proof-of-concept solution that illustrates an implementation of this feature is available in the following GIT repository:\r\nhttps://github.immediate.co.uk/AdrianLewis/ClientDeviceCookies\r\n\r\nThe concept follows the guidance issued by OWASP for implementation of device cookies and mitigates against attacks from untrusted client devices.\r\nThe concept shows that it is possible to perform targeted untrusted lockout for the following scenarios:\r\n\r\n* Untrusted device without cookie trying to access a particular user (this results in the user account being locked out to untrusted devices - the user account can still be logged into from a trusted device)\r\nTrusted device with cookie trying to access a particular user (this results in the device cookie being locked out - the user account can still be logged into from another trusted device or from an untrusted device as long as untrusted login has not already been disabled)\r\n* Untrusted device without cookie trying to access a tenant (we can detect DDoS attacks by logging the number of authentication failures that occur for a particular tenant in a given period of time and lockout untrusted auth attempts if the number of failures exceeds a given threshold)\r\n* Untrusted device without cookie trying to access the entire identity site (we can detect DDoS attacks across the entire identity-based portfolio and lockout untrusted device authentication if the number of failures exceeds a given threshold)\r\n* The concept shows that it is possible to specify independent failure thresholds and lockout durations for each scenario.\r\n\r\nFrom an implementation point of view, the concept shows the use of a signing key that changes on a monthly basis along with a method for testing incoming device cookie against as many keys as to cover the validity period of the device cookie.\r\n\r\nThe current implementation has a device cookie lifespan of three months however if token replay protection is desired then shorter validity periods would be better (as the number of tokens to cache for replay detection would be smaller with shorter validity periods)\r\n\r\nPreventing token replay is a best practice to further harden the code against hackers and is over and above that suggested by OWASP.\r\n\r\nFinally I would recommend that Device Cookies be implemented in Im.Access however the behaviour between untrusted device lockout and the existing account lockout needs to be clarified. If this implementation replaces the existing lockout process then it will require changes to the way users are warned of lockout (do we want to warn users from untrusted devices [probably not] or trusted devices [probably]?)\r\nI suspect that even with this PoC. The integration is still in the region of 13 story points but well worth undertaking.",
        customfield_13000: null,
        customfield_11100: "FAB-4371",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: null,
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: null,
        summary: "WebUserAccounts - Device Cookie Implementation",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=yasir.azmat",
          name: "yasir.azmat",
          key: "yasir.azmat",
          emailAddress: "yasir.azmat@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=yasir.azmat&avatarId=13606",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=yasir.azmat&avatarId=13606",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=yasir.azmat&avatarId=13606",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=yasir.azmat&avatarId=13606"
          },
          displayName: "Yasir Azmat",
          active: false,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=yasir.azmat",
          name: "yasir.azmat",
          key: "yasir.azmat",
          emailAddress: "yasir.azmat@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=yasir.azmat&avatarId=13606",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=yasir.azmat&avatarId=13606",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=yasir.azmat&avatarId=13606",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=yasir.azmat&avatarId=13606"
          },
          displayName: "Yasir Azmat",
          active: false,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: ["Identity"],
        customfield_10004: 13.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-262/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "76804",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/76804",
      key: "FAB-224",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-224/watchers",
          watchCount: 2,
          isWatching: false
        },
        created: "2017-04-04T16:29:45.000+0100",
        customfield_12000: "0|hzzzs8:lzy410zv048r0lz",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/4",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Minor",
          id: "4"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-08T08:35:42.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          'Update WebUserAccounts - User Settings Endpoints to sanitise user output with special characters - double quotes, <>\r\n\r\nSome Test scenarios:\r\n\r\n<a href="details.php?id=<?php echo $userid;?>">\r\n\r\n "><script>window.open("http://hacksite.com");</script>\r\n\r\n test\\{\\{@hacker.com}}\'\r\n\r\n*Acceptance Criteria*\r\n * Unit test coverage\r\n * Single quotes should be accepted (E.g. O\'Reilly)\r\n * User Settings text should not show any special characters\r\n\r\nFew examples of the way the strings are sanitized and encoded in PHP scripts as below,\r\n * Strings are sanitized and encoded in PHP script, few examples of implementation\r\n\r\n ** O\\\'reily – saved as{color:#205081} O\\&#39;reily{color} – displayed as O\\\'reily\r\n ** {color:#333333}<a href="details.php?id=<?php echo $userid;?>"> – Saved as Empty, the HTML tags are stripped{color}\r\n **  "><script>window.open("http://hacksite.com");</script> – saved as {color:#205081}\\">window.open(\\"[http://hacksite.com\\&#34|http://hacksite.com%26/#34]; );{color} – displayed as ">window.open("http://hacksite.com");\r\n ** test\\{\\{@text.com}}\' –saved as {color:#cc0000}test\\{\\{@text.com}}\\&#38;#39;{color} {color:#333333}– displayed as{color} test\\{\\{@text.com}}\'',
        customfield_13000: null,
        customfield_11100: "FAB-4371",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: null,
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary:
          "Update User Settings Endpoints to exclude user output with special characters",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=anusha.adabala",
          name: "anusha.adabala",
          key: "anusha.adabala",
          emailAddress: "anusha.adabala@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=14228",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=14228",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=14228",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=14228"
          },
          displayName: "Anusha Adabala",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=anusha.adabala",
          name: "anusha.adabala",
          key: "anusha.adabala",
          emailAddress: "anusha.adabala@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?avatarId=14228",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&avatarId=14228",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&avatarId=14228",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&avatarId=14228"
          },
          displayName: "Anusha Adabala",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: ["Identity"],
        customfield_10004: 5.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-224/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "82120",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/82120",
      key: "FAB-175",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/26",
          id: "26",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13215&avatarType=issuetype",
          name: "Story",
          subtask: false,
          avatarId: 13215
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-175/watchers",
          watchCount: 2,
          isWatching: false
        },
        created: "2017-07-13T15:41:27.000+0100",
        customfield_12000: "0|i0a5az:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET", "FrontEnd", "PHP"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-08T08:49:38.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a user I would like to be notified that my password does not meet minimum requirements before submitting, so that I save time during the registration process.\r\n\r\n*Acceptance Criteria*\r\n * Given I have entered data in the password field, when I navigate away from the field (unfocus) and the password does not meet minimum requirements, then an error message is displayed.",
        customfield_13000: null,
        customfield_11100: "FAB-290",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_10005: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: null,
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Frontend password validation",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=paul.thorpe",
          name: "paul.thorpe",
          key: "paul.thorpe",
          emailAddress: "paul.thorpe@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=paul.thorpe&avatarId=14105",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=paul.thorpe&avatarId=14105",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=paul.thorpe&avatarId=14105",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=paul.thorpe&avatarId=14105"
          },
          displayName: "Paul Thorpe",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: ["Identity"],
        customfield_10004: 21.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-175/votes",
          votes: 0,
          hasVoted: false
        }
      }
    },
    {
      expand:
        "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      id: "82668",
      self: "https://tech.immediate.co.uk/rest/api/2/issue/82668",
      key: "FAB-135",
      fields: {
        issuetype: {
          self: "https://tech.immediate.co.uk/rest/api/2/issuetype/10400",
          id: "10400",
          description: "",
          iconUrl:
            "https://tech.immediate.co.uk/secure/viewavatar?size=xsmall&avatarId=13214&avatarType=issuetype",
          name: "Technical Debt",
          subtask: false,
          avatarId: 13214
        },
        timespent: null,
        customfield_13100: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/12509",
          value: "Green - Publishing",
          id: "12509"
        },
        project: {
          self: "https://tech.immediate.co.uk/rest/api/2/project/13501",
          id: "13501",
          key: "FAB",
          name: "Fabric",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/projectavatar?pid=13501&avatarId=15703",
            "24x24":
              "https://tech.immediate.co.uk/secure/projectavatar?size=small&pid=13501&avatarId=15703",
            "16x16":
              "https://tech.immediate.co.uk/secure/projectavatar?size=xsmall&pid=13501&avatarId=15703",
            "32x32":
              "https://tech.immediate.co.uk/secure/projectavatar?size=medium&pid=13501&avatarId=15703"
          }
        },
        fixVersions: [],
        aggregatetimespent: null,
        resolution: null,
        customfield_12800: null,
        customfield_12801: null,
        resolutiondate: null,
        workratio: -1,
        lastViewed: null,
        watches: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/issue/FAB-135/watchers",
          watchCount: 1,
          isWatching: false
        },
        created: "2017-07-20T14:27:47.000+0100",
        customfield_12000: "0|i0a5ax:",
        priority: {
          self: "https://tech.immediate.co.uk/rest/api/2/priority/6",
          iconUrl:
            "https://tech.immediate.co.uk/images/icons/priorities/minor.svg",
          name: "Enhancement",
          id: "6"
        },
        customfield_10101: null,
        customfield_12600: null,
        labels: [".NET"],
        timeestimate: null,
        aggregatetimeoriginalestimate: null,
        issuelinks: [],
        assignee: null,
        updated: "2018-03-08T08:36:40.000+0000",
        status: {
          self: "https://tech.immediate.co.uk/rest/api/2/status/10155",
          description: "This status is managed internally by JIRA Software",
          iconUrl: "https://tech.immediate.co.uk/images/icons/subtask.gif",
          name: "Ready For Development",
          id: "10155",
          statusCategory: {
            self: "https://tech.immediate.co.uk/rest/api/2/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        timeoriginalestimate: null,
        customfield_13001: null,
        description:
          "As a developer, I would like to refactor StyleSheet and WhatsMyConfigApi providers and services in order to consume them from any User Interface. This code is present in Im.Access.Portal.DataServices and WebUserAccounts.\r\n\r\n*Acceptance Criteria*\r\n\r\n- All Identity unit and regression tests are passed",
        customfield_13000: null,
        customfield_11100: "FAB-321",
        customfield_13002: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11618",
          value: "Identity",
          id: "11618"
        },
        customfield_13200: null,
        customfield_12701: null,
        customfield_12700: null,
        customfield_10800: "9223372036854775807",
        customfield_12504: null,
        customfield_12900: null,
        customfield_10801: null,
        aggregatetimeestimate: null,
        customfield_12506: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/customFieldOption/11314",
          value: "Not yet Automated",
          id: "11314"
        },
        summary: "Refactor StyleSheetProvider and WhatsMyConfigApiProvider",
        creator: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=daniel.botero-correa",
          name: "daniel.botero-correa",
          key: "daniel.botero-correa",
          emailAddress: "daniel.botero-correa@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=daniel.botero-correa&avatarId=14906",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=daniel.botero-correa&avatarId=14906",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=daniel.botero-correa&avatarId=14906",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=daniel.botero-correa&avatarId=14906"
          },
          displayName: "Daniel Botero Correa",
          active: true,
          timeZone: "GB"
        },
        subtasks: [],
        reporter: {
          self:
            "https://tech.immediate.co.uk/rest/api/2/user?username=daniel.botero-correa",
          name: "daniel.botero-correa",
          key: "daniel.botero-correa",
          emailAddress: "daniel.botero-correa@immediate.co.uk",
          avatarUrls: {
            "48x48":
              "https://tech.immediate.co.uk/secure/useravatar?ownerId=daniel.botero-correa&avatarId=14906",
            "24x24":
              "https://tech.immediate.co.uk/secure/useravatar?size=small&ownerId=daniel.botero-correa&avatarId=14906",
            "16x16":
              "https://tech.immediate.co.uk/secure/useravatar?size=xsmall&ownerId=daniel.botero-correa&avatarId=14906",
            "32x32":
              "https://tech.immediate.co.uk/secure/useravatar?size=medium&ownerId=daniel.botero-correa&avatarId=14906"
          },
          displayName: "Daniel Botero Correa",
          active: true,
          timeZone: "GB"
        },
        customfield_10000: "9223372036854775807",
        aggregateprogress: { progress: 0, total: 0 },
        customfield_10001: null,
        customfield_10002: ["Identity"],
        customfield_10004: 21.0,
        customfield_12500: null,
        progress: { progress: 0, total: 0 },
        votes: {
          self: "https://tech.immediate.co.uk/rest/api/2/issue/FAB-135/votes",
          votes: 0,
          hasVoted: false
        }
      }
    }
  ]
};
