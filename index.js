// import * as t from  "yeoman-test";
// import path from "node:path";

(async function () {
      const { YeomanTest } = await import("yeoman-test");
      const yeomanTest = new YeomanTest().create("cpp-github:app", {}, {}).withAnswers({
        ProjectName: "test-application",
        ProjectNamePretty: "Test C++ Application",
        ProjectDescription: "Dummy description for the application",
        ProjectWebPage: "http://example.com",
        ProjectMaintainersEmail: "tester@testerenko.com",
      });
      await yeomanTest.run();

})();
