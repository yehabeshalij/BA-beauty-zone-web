const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "https://ba-admin-strapi.onrender.com",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
// const getService = () => axiosClient.get("/service?populate=*");

const getCategory = () => axiosClient.get("/categories?populate=*");

const getDoctorList = () => axiosClient.get("/stylists?populate=*");

const getDoctorByCategory = (category) =>
  axiosClient.get(
    "/stylists?filters[categories][Name][$in]=" + category + "&populate=*"
  );

const getDoctorById = (id) =>
  axiosClient.get("/stylists/" + id + "?populate=*");

const getWeddingById = (id) =>
  axiosClient.get("/weddings/" + id + "?populate=*");

const bookAppointment = (data) => axiosClient.post("/appointments", data);
const decorAppointment = (data) => axiosClient.post("/decorappointments", data);

const getUserBookingList = (userEmail) =>
  axiosClient.get(
    "/appointments?[filters][Email][$eq]=" +
      userEmail +
      "&populate[stylist][populate][image][populate][0]=url&populate=*"
  );

const deleteBooking = (id) => axiosClient.delete("/appointments/" + id);

// const sendEmail = (data) => axios.post("/api/sendEmail", data);

const getGalleryList = () => axiosClient.get("/galleries?populate=*");
const getGalleryList1 = () => axiosClient.get("/gallery2s?populate=*");
const getGalleryList2 = () => axiosClient.get("/gallery3s?populate=*");
const getWeddingCategory = () => axiosClient.get("/catagoriews?populate=*");

const getWedding = () => axiosClient.get("/weddings?populate=*");

const getimage1 = () => axiosClient.get("/image1s?populate=*");
const getimage2 = () => axiosClient.get("/image2s?populate=*");
const getimage3 = () => axiosClient.get("/image3s?populate=*");

export default {
  getCategory,
  getDoctorList,
  getDoctorByCategory,
  getDoctorById,
  bookAppointment,
  getUserBookingList,
  deleteBooking,
  // sendEmail,
  getGalleryList,
  getGalleryList1,
  getGalleryList2,
  getimage1,
  getimage2,
  getimage3,
  getWeddingCategory,
  getWedding,
  getWeddingById,
  decorAppointment,
};
