//* here we will be reading one single issue with the help of fs and slug
//* the slug will basically be the file name which comes from the url as a query : http://localhost:3000/api/singleissue?slug=issue3

//* we match the slug with the filename inside the issuedata folder, encode it as string and display in the backend

import * as fs from "fs";

export default function Readsingleissue(req, res) {
  fs.readFile(`issuedata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).json("SORRY SLUG NOT FOUND");
    }
    console.log(req.query.slug);
    res.status(200).json(JSON.parse(data));
  });
}
