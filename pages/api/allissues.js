//* we are using fs to read all the files inside the directory
//* we are giving the path of the dir we want to read

//* next we are running a for-loop which basically goes through all the files of the folder
//* singlefile has the content of each file karon amra readFile use korchi on the filename

//* contents peye jawar por we are simply pushing the data into an array which can be used in the frontend.
//* http://localhost:3000/api/allissues

import * as fs from "fs";

export default async function readallissues(req, res) {
  let issues = await fs.promises.readdir("issuedata");
  let singlefile;
  let allissues = [];

  for (let index = 0; index < issues.length; index++) {
    singlefile = await fs.promises.readFile(
      "issuedata/" + issues[index],
      "utf-8"
    );

    allissues.push(JSON.parse(singlefile));
  }
  res.status(200).json(allissues);
}
