import { dummyComments } from "../utils/Constants";

const getVideoComments = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyComments);
    }, 1000);
  });
};

export default getVideoComments;
