export const example = {
    
    "total": 1,
    "issues": [
      {
        "key": "WED-5317",
        "fields": {
          "issuelinks": [
            {
              "outwardIssue": {
                "key": "WED-7039"
              },
              "type": {  
                "name":"Blocks",
              }
 
            },
            
            {
              "inwardIssue": {
                "key": "WED-6962",
              },
              "type": {  
                "name":"Blocks",
              }
            },
            {
              "outwardIssue": {
                "key": "WED-1112",
              },
              "type":{  
                "name":"Relates"
             },
            },
            {
              "inwardIssue": {
                "key": "WED-6960",
              },
              "type":{  
                "name":"Blocks"
              }
            }
          ]
        }
      },
      {
        "key": "WED-7039",
        "fields": {
          "issuelinks": [
            {
              "inwardIssue": {
                "key": "WED-5317"
              },
              "type":{  
                "name":"Blocks"
              }
            },
            {
              "inwardIssue": {
                "key": "WED-911"
              },
              "type":{  
                "name":"Blocks"
              }
            }
          ]
        }
      },
      {
        "key": "WED-3774"
      }
    ]
  }