import { useParams,useNavigate } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { administrationRoles } from "../data";
const CustomerDetails = () => {
  
  const { id } = useParams();
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
const navigate = useNavigate()
  const [loading, setloading] = useState(true);
  const [flag, setflag] = useState(true);
  const [customer, setCustomer] = useState({
    name: "",
    company: "",
    email: "",
    phone_no: "",
    role: "",
  });
  const getCustomer = async (id) => {
    try {
      const res = await axios.get(
        `https://wisdomcrm.onrender.com/api/customer/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data.data);
      setCustomer(res.data.data);
      setloading(false);
    } catch (error) {
      setloading(false);
      setError(error.response.data.message || "Failed to fetch customers.");
    }
  };

  const handleDelete = async () => {
    const confirmUser = confirm("Do you want to delete")
    if(!confirmUser){
      return
    }
    try {
      const res = await axios.delete(
        `https://wisdomcrm.onrender.com/api/customer/delete/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      alert(res.data.message);
      navigate("/dashboard/customers")
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // setCustomer((prev)=> [...prev, {customer[name]:value}])

    setCustomer((prev) => ({
      ...prev,
      [name]: value, // Dynamically update the specific field
    }));
    console.log(name, value);
  };

  const updateCustomer = async (payload, id) => {
    try {
      const res = await axios.put(
        `https://wisdomcrm.onrender.com/api/customer/update/${id}`,

        payload,

        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      alert(res.data.message);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const hangleEdit = () => {
    if (!flag) {
      updateCustomer(customer, id);
      console.log("clicked");
    }
    setflag(!flag);
  };

  useEffect(() => {
    getCustomer(id);
  }, [id]);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div>
          <div className="flex items-center box-shadow my-5 rounded ">
            <div className="py-5 px-7 m-4 bg-[#0052cc] text-white font-bold text-2xl rounded-full ">
              <h1>{customer.name[0].toUpperCase()}</h1>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                {customer.name.toUpperCase()}
              </h1>
              <h3 className="text-xl">{customer.role}</h3>
            </div>
          </div>
          <div className="flex justify-between flex-wrap text-nowrap w-full box-shadow rounded my-5 py-5 px-5 box-border">
            <label className="w-[50%] my-3">
              Name:
              <input
                name="name"
                onChange={(e) => handleOnChange(e)}
                className={`${
                  flag
                    ? ""
                    : "py-2 px-4 mx-2 box-border  border border-gray-400 rounded"
                } w-[50%] font-bold `}
                type="text"
                disabled={flag}
                value={customer.name}
              />
            </label>
            <label className="w-[50%] my-3">
              Email:
              <input
                name="email"
                onChange={(e) => handleOnChange(e)}
                className={`${
                  flag
                    ? ""
                    : "py-2 px-4 mx-2 box-border  border border-gray-400 rounded"
                } w-[50%] font-bold `}
                type="text"
                disabled={flag}
                value={customer.email}
              />
            </label>
            <label className="w-[50%] my-3">
              Phone No.:
              <input
                name="phone_no"
                onChange={(e) => handleOnChange(e)}
                className={`${
                  flag
                    ? ""
                    : "py-2 px-4 mx-2 box-border  border border-gray-400 rounded"
                } w-[50%] font-bold `}
                type="text"
                disabled={flag}
                value={customer.phone_no}
              />
            </label>
            <label className="w-[50%] my-3">
              Company :
              <input
                name="company"
                onChange={(e) => handleOnChange(e)}
                className={`${
                  flag
                    ? ""
                    : "py-2 px-4 mx-2 box-border  border border-gray-400 rounded"
                } w-[50%] font-bold `}
                type="text"
                disabled={flag}
                value={customer.company}
              />
            </label>
            <label className="w-[50%] my-3">
              Role:
              <input
                name="role"
                onChange={(e) => handleOnChange(e)}
                className={`${
                  flag
                    ? ""
                    : "py-2 px-4 mx-2 box-border  border border-gray-400 rounded"
                } w-[50%] font-bold `}
                type="text"
                disabled={flag}
                value={customer.role}
              />
            </label>
          </div>
        </div>
      )}
      <div>
        <button
          onClick={hangleEdit}
          className="px-5 py-3 bg-blue-700 text-white  m-3 rounded-xl"
        >
          {flag ? "Edit" : "Update"}
        </button>

        {(administrationRoles.includes(user.role) ||
          user._id === customer.user_id) && (
          <button
            type="button"
            onClick={handleDelete}
            className=" bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition duration-300 mt-4"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
