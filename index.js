import * as t from  "yeoman-test";
import * as e from  "yeoman-environment";
import fs from "node:fs";

const env = e.createEnv();
env.lookup()
.then((app) => {
    console.log(JSON.stringify(app));
    const answers = JSON.parse(fs.readFileSync('./prompt-answer.json', 'utf8')))
    fs.mkdirSync("dist");
    t.default.create(app.find(a => a.namespace == "cpp-github:app").resolved, {cwd: "dist"}, {})
    .withAnswers(answers/*{
        ProjectName: "test-application",
        ProjectNamePretty: "Test C++ Application",
        ProjectDescription: "Dummy description for the application",
        ProjectWebPage: "http://example.com",
        ProjectMaintainersEmail: "tester@testerenko.com",
    }*/
    .then((a) => {
        console.log("done");
    })
});





