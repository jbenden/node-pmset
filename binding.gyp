{
    "targets": [
      {
          "target_name": "pmset",
          "sources": [ "pmset.cc" ],
          "include_dirs": [
              "/Applications/Xcode6-Beta5.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.10.sdk/System/Library/Frameworks/IOKit.framework/Headers"
          ],
          "conditions": [[
              "OS=='mac'", {
                  'link_settings': {
                      'libraries': ['-framework','IOKit']
                  }
          }]]
      }
    ]
}
