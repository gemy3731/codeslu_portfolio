import { IoSettingsOutline } from "react-icons/io5";

const Maintenance = () => {
  return (
    <div className="flex flex-col items-center justify-around !overflow-hidden fixed  bg-black top-0 left-0 right-0 bottom-0 z-[99999999999]">
      <h3 className="text-white text-[50px] font-bold">Site Under Maintenance</h3>
      <div className="flex items-center justify-center">
      <IoSettingsOutline className="text-white text-[100px] font-bold firstIcon" />
      <IoSettingsOutline className="text-white text-[50px] font-bold  secondIcon self-start" />

      </div>
      <div className="flex flex-col items-center justify-center">
      <p className="text-white text-[20px] ">Sorry for the inconvenience</p>
      <p className="text-white text-[20px] ">We will be back soon</p>
      <p className="text-white text-[20px] ">To contact us in the meantime please email <a href="mailto:mohamed@codeslu.com" className="font-bold underline underline-offset-2">mohamed@codeslu.com</a> </p>
      <p className="text-white text-[20px]">Or call us on <span className="font-bold">+201204888888</span></p>
      </div>
    </div>
  )
}

export default Maintenance
