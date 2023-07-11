module.exports = function (context) {
  return {
    Program: function (node) {
      const folderPath = context.getFilename();
      var folderName = folderPath.split("\\");
      folderName = folderName[folderName.length - 2];
      const regex = /^[a-z0-9-\\.]+$/;

      if (!regex.test(folderName)) {
        context.report(
          node,
          `Folder name "${folderName}" does not match the naming convention.`
        );
      }
    },
  };
};
