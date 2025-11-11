import * as t from  "yeoman-test";
import * as e from  "yeoman-environment";
import fs from "node:fs";

const env = e.createEnv();
env.lookup()
.then((app) => {
    console.log(JSON.stringify(app));
    /*
    {
        ProjectName: "test-application",
        ProjectNamePretty: "Test C++ Application",
        ProjectDescription: "Dummy description for the application",
        ProjectWebPage: "http://example.com",
        ProjectMaintainersEmail: "tester@testerenko.com",
    }
    */
    const input = JSON.parse(fs.readFileSync('./input.json', 'utf8'))
    fs.mkdirSync("dist");
    t.default.create(app.find(a => a.namespace == input[0].template).resolved, {cwd: "dist"}, {})
    .withAnswers(input[0].answers)
    .then((a) => {
        console.log("done");
    })
});







