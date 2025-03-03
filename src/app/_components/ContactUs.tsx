import { MdArrowOutward } from "react-icons/md";
const ContactUs = () => {
  return (
    <section id="contactus" className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 flex flex-col gap-8">
          <h2 className="uppercase text-[clamp(24px,56px,56px)] font-semibold  dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-t dark:from-transparent dark:via-white dark:to-transparent after:bg-blacko">
            Lest's Contact
          </h2>
          <p className="max-w-[65%] text-[14px]">
            Whether you have a question, or want to discuss a potential project,
            our team at
            <span className="font-semibold"> CodeSlu</span> is here to help.
            Please fill out the form below!
          </p>
          <div>
            <form className="flex flex-col gap-4">
                <input id="userName" type="text" name="userName" className="w-[70%] dark:bg-black rounded-md focus:outline-none focus:ring-0 dark:focus:border-[#565555] dark:border-[#565555] " placeholder="Name" />
                <div className="flex flex-col md:flex-row gap-4 w-[70%]">
                    <input id="email" type="email" name="email" className="w-[49%] dark:bg-black rounded-md focus:outline-none focus:ring-0 dark:focus:border-[#565555] dark:border-[#565555] " placeholder="Email" />
                    <input id="phone" type="tel" name="phone" className="w-[49%] dark:bg-black rounded-md focus:outline-none focus:ring-0 dark:focus:border-[#565555] dark:border-[#565555] " placeholder="Phone" />
                </div>
                <textarea name="message" id="message" rows={5} className="w-[70%] dark:bg-black rounded-md focus:outline-none focus:ring-0 dark:focus:border-[#565555] dark:border-[#565555] " placeholder="Message"></textarea>
                <button type="submit" className=" w-fit bg-slate-100 border-black hover:bg-black hover:text-white dark:bg-[#1b1b1b] dark:text-white dark:hover:bg-[#fff] dark:hover:text-black rounded-full py-3 px-6 border dark:border-white flex items-center gap-2">Send Message<MdArrowOutward className="text-[20px]" /></button>
            </form>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </section>
  );
};

export default ContactUs;
