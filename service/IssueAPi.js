import Axios from "axios";

export const getallissues = async () => {
  try {
    const alldata = await Axios.get("http://localhost:3000/api/allissues");

    return alldata;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

export const getsingleissue = async (slug) => {
  try {
    const singleissuedata = await Axios.get(
      `http://localhost:3000/api/singleissue?slug=${slug}`
    );
    return singleissuedata;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};
