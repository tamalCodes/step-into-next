//* we are using fs to read all the files inside the directory
//* we are giving the path of the dir we want to read, and also a calback.

import * as fs from "fs";

export default function readallissues(req, res) {
  fs.readdir("issuedata", (err, data) => {
    if (err) {
      return res.status(404).json("SORRY DIR NOT FOUND");
    }
    // console.log(req.query.slug);
    res.status(200).json(data);
  });
}
