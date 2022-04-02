import Axios from "axios";
// export const uploadPlasma = async (plasmadonor) => {
//   try {
//     const Post = await Axios.post(
//       "http://localhost:5000/api/plasma",
//       plasmadonor
//     );
//     return Post;
//   } catch (error) {
//     console.log(error);
//     alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
//   }
// };

export const getallissues = async () => {
  try {
    const alldata = await Axios.get("http://localhost:3000/api/allissues");

    return alldata;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};
