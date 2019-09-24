module.exports = {
  dependency: {
    platforms: {
      android: {
        packageImportPath:
          "import com.idehub.GoogleAnalyticsBridge.GoogleAnalyticsBridgePackage;",
        packageInstance: "new GoogleAnalyticsBridgePackage()"
      },
      ios: {
        sharedLibraries: [
          "CoreData.framework",
          "SystemConfiguration.framework",
          "libz.tbd",
          "libsqlite3.0.tbd"
        ]
      }
    }
  }
};
