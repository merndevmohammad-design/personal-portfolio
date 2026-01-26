import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="mohammadafatih9@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="03326453422" Image={FiPhone} />
      <SingleInfo text="Multan, Punjab, Pakistan" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
