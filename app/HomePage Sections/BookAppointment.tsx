"use client"
import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { FaUser, FaEnvelope, FaPhone, FaStar, FaAsterisk, FaAddressBook, FaIdCard, FaCalendarDay, FaList, FaAngleDown } from "react-icons/fa6";
import arrImg from "@/lib/arrow.svg";
import InViewWrapper from "../components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";
import { useEffect } from "react";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function FormSection() {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://www.google.com/recaptcha/api.js';
    //     script.async = true;
    //     script.defer = true;
    //     document.body.appendChild(script);
    
    //     const timestampScript = document.createElement('script');
    //     timestampScript.innerHTML = `
    //       function timestamp() {
    //         var response = document.getElementById("g-recaptcha-response");
    //         if (response == null || response.value.trim() == "") {
    //           var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    //           elems["ts"] = JSON.stringify(new Date().getTime());
    //           document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    //         }
    //       }
    //       setInterval(timestamp, 500);
    //     `;
    //     document.body.appendChild(timestampScript);
    
    //     return () => {
    //       document.body.removeChild(script);
    //       document.body.removeChild(timestampScript);
    //     };
    //   }, []);

    return (
        <>
            <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DHs000008mYi7" method="POST" className="dark:bg-darkBg dark:text-white py-12 2xl:px-[10vw] sm:px-[8vw]  px-6 relative bg-white z-40">
                <InViewWrapper animation={fadeIn}>
                    <>
                        <Image
                            src={"https://americare.sirv.com/icons/bbblurry.svg"}
                            alt={"blur shape"}
                            height={800}
                            width={800}
                            id="book-an-appointment"
                            className="sm:w-[70rem] w-[80rem] absolute sm:-top-[20rem] -top-[8rem] sm:-left-[20rem] -left-[12rem] dark:opacity-50 max-md:dark:opacity-25"
                        />
                        <div className="sm:mb-12 mb-8">
                            <h1 className={clsx(FontFamily.className, "2xl:text-[3vw] sm:text-5xl text-4xl text-primary font-semibold relative w-fit")}>
                                Book an Appointment
                                <Image
                                    src={arrImg}
                                    alt={"Scribble arrow"}
                                    height={80}
                                    width={80}
                                    className="h-full object-cover max-md:scale-105 max-md:group-hover:scale-100 smooth absolute -top-2 sm:block hidden -right-[25%]"
                                />
                            </h1>
                            <p className="sm:text-base text-sm py-3 grid">
                                <span className="opacity-50">
                                    Fill out the form below to book an appointment.
                                </span>
                            </p>
                        </div>

                        <section>
                            {/* Form input area */}
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(clamp(20rem,35vw,40rem),1fr))] sm:gap-[2rem_1rem] gap-4">
                                {/* first name */}
                                <div className="flex flex-col gap-2 capitalize">
                                    <span className="flex gap-1 sm:text-base text-sm">First name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"></span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaUser className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            "group-focus-within:opacity-100 opacity-50 "
                                        )}
                                        />
                                        <input
                                            type="text"
                                            placeholder="John"
                                            className={clsx(
                                                "peer",
                                                "dark:bg-white/5 bg-primary/5 outline-none",
                                                "bg-transparent",
                                                "w-full py-4 px-12 sm:text-lg",
                                            )}
                                            name="first_name"
                                            id="first_name"
                                            maxLength={40}
                                            size={20}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* last name */}
                                <div className="flex flex-col gap-2 capitalize">
                                    <span className="flex gap-1 sm:text-base text-sm">Last name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"></span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaUser className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            "group-focus-within:opacity-100 opacity-50 "
                                        )}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className={clsx(
                                                "peer",
                                                "dark:bg-white/5 bg-primary/5 outline-none",
                                                "bg-transparent",
                                                "w-full py-4 px-12 sm:text-lg",
                                            )}
                                            name="last_name"
                                            id="last_name"
                                            maxLength={80}
                                            size={20}
                                            required
                                        />
                                    </div>
                                </div>
                                
                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <span className="flex gap-1 sm:text-base text-sm">E-mail <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"></span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaEnvelope className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            "group-focus-within:opacity-100 opacity-50 "
                                        )}
                                        />
                                        <input
                                            type="email"
                                            placeholder="example@gmail.com"
                                            className={clsx(
                                                "peer",
                                                "dark:bg-white/5 bg-primary/5 outline-none",
                                                "bg-transparent",
                                                "w-full py-4 px-12 sm:text-lg",
                                            )}
                                            name="email"
                                            id="email"
                                            maxLength={80}
                                            size={20}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* phone number */}
                                <div className="flex flex-col gap-2">
                                    <span className="flex gap-1 sm:text-base text-sm">Phone number <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"></span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaPhone className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            "group-focus-within:opacity-100 opacity-50 "
                                        )}
                                        />
                                        <input
                                            type="text"
                                            placeholder="(555) 555 5555"
                                            className={clsx(
                                                "peer",
                                                "dark:bg-white/5 bg-primary/5 outline-none",
                                                "bg-transparent",
                                                "w-full py-4 px-12 sm:text-lg",
                                            )}
                                            name="phone"
                                            id="phone"
                                            required
                                            maxLength={40}
                                            size={20}
                                        />
                                    </div>
                                </div>

                                {/* Type of service */}
                                <div className="flex flex-col gap-2" title="Type of Service">
                                    <span className="flex gap-1 sm:text-base text-sm">Type of Service <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"></span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden cursor-pointer",
                                        "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaList className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            "group-focus-within:opacity-100 opacity-50 "
                                        )}
                                        />
                                        <select
                                            title="Select positon"
                                            className={clsx(
                                                "peer",
                                                "dark:bg-white/5 bg-primary/5 outline-none",
                                                "bg-transparent appearance-none",
                                                "w-full py-4 px-12 sm:text-lg",
                                            )}
                                            name="00NHs00000wg506"
                                            id="00NHs00000wg506"
                                            required
                                        >
                                            <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={""}>Please choose an option</option>
                                            <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={"Personal Care"}>Personal Care</option>
                                            <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={"Companionship"}>Companionship</option>
                                            <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={"Home Maker"}>Home Maker</option>
                                            <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={"Skilled Nursing"}>Skilled Nursing</option>
                                            <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={"Other"}>Other</option>

                                        </select>
                                        <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none right-6 peer-placeholder-shown:opacity-50" />
                                    </div>
                                </div>

                                {/* Preferred Date and Time for Appointment */}
                                <div className="flex flex-col gap-2 capitalize">
                                    <span className="flex gap-1 sm:text-base text-sm">Preferred Date and Time for Appointment <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"></span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaCalendarDay className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            "group-focus-within:opacity-100 opacity-50 "
                                        )}
                                        />
                                        <input
                                            title="Choose a desired date to start"
                                            type="datetime-local"
                                            className={clsx(
                                                "peer",
                                                "dark:bg-white/5 bg-primary/5 outline-none",
                                                "bg-transparent appearance-none",
                                                "w-full py-4 px-12 sm:text-lg",
                                            )}
                                            name="00NHs00000wg50L"
                                            id="00NHs00000wg50L"
                                            size={20}
                                            min={new Date().toISOString().slice(0, 16)}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* State/Province */}
                                <div className="flex flex-col gap-2">
                                    <span className="flex gap-1 sm:text-base text-sm">Address <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"></span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaAddressBook className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            "group-focus-within:opacity-100 opacity-50 "
                                        )}
                                        />
                                        <input
                                            type="text"
                                            placeholder="123 Main St, City, State ZIP"
                                            className={clsx(
                                                "peer",
                                                "dark:bg-white/5 bg-primary/5 outline-none",
                                                "bg-transparent",
                                                "w-full py-4 px-12 sm:text-lg",
                                            )}
                                            name="00NHs00000whmyT"
                                            id="00NHs00000whmyT"
                                            size={20}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Description */}
                            <div className="flex flex-col gap-2 mt-6">
                                <p className="flex items-center justify-between">
                                    <span className="flex gap-1 sm:text-base text-sm">Description <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"></span></span>
                                </p>
                                <div className={clsx(
                                    "relative smooth rounded-xl overflow-hidden",
                                    "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                )}>
                                    <textarea
                                        className={clsx(
                                            "peer",
                                            "dark:bg-white/5 bg-primary/5 outline-none",
                                            "bg-transparent",
                                            "w-full py-4 px-8 sm:text-lg resize-none outline-none min-h-[calc(2lh+2rem)] max-h-[calc(4lh+2rem)]",
                                        )}
                                        name="description"
                                        required
                                        placeholder="Provide a description of appointment"
                                        rows={10}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="grid gap-2 w-full mt-4">
                                <div className="flex gap-3 items-center">
                                    <div className="content">
                                        <label className="checkBox">
                                            <input id="00NHs00000wg4zr" name="00NHs00000wg4zr" value={1} type="checkbox" title="New Customer?" />
                                            <div className="transition"></div>
                                        </label>
                                    </div>
                                    <span>Are you a New Customer?</span>
                                </div>
                                <div className="flex gap-3 sm:items-center items-start">
                                    <div className="content">
                                        <label className="checkBox">
                                            <input id="00NHs00000wg50Q" name="00NHs00000wg50Q" value={1} type="checkbox" title="By submitting this form, you agree to receive emails from AmeriCare." required />
                                            <div className="transition"></div>
                                        </label>
                                    </div>
                                    <span>By submitting this form, you agree to receive emails from AmeriCare.</span>
                                </div>
                            </div>

                            {/* Hidden elements */}
                            <div className="hidden">
                                {/* <input type="hidden" readOnly name='captcha_settings' value='{"keyname":"AmeriCare","fallback":"true","orgId":"00DHs000008mYi7","ts":""}' /> */}
                                <input type="hidden" readOnly name="oid" value="00DHs000008mYi7" />
                                <input type="hidden" readOnly name="retURL" value="https://americareinhome.com/thank-you" />
                                {/* <input type="hidden" name="debug" value="1"/>                              */}
                                {/* <input type="hidden" name="debugEmail" value="calvin@americareinhome.com" /> */}
                            </div>
                            {/* <div className="g-recaptcha mt-4" data-sitekey="6Lcr2AMqAAAAAEtI4W19UsAL5iMrEEnmxeuyY8Sh"></div> */}
                            {/* Submit button */}
                            <div className="flex flex-col gap-2 mt-6 group sm:w-fit">
                                <button
                                    className={clsx(
                                        "smooth border-2 border-dashed",
                                        "border-primary text-primary bg-transparent",
                                        "grayscale-0 hover:bg-primary hover:text-white hover:border-dotted active:scale-90",
                                        "sm:w-fit py-4 px-8 sm:text-lg rounded-lg outline-none",
                                    )}

                                    name="submit"

                                    type={"submit"}
                                >
                                    <span>
                                        <span className="flex gap-2 items-center justify-center">
                                            Submit
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </section>
                    </>
                </InViewWrapper>
            </form>
        </>

    );
}