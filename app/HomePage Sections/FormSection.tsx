"use client"
import { isValidName, isValidEmail, isValidPhone, isValidAddress, formatDateTime } from "@/lib";
import useDebounce from "@/lib/Hooks/UseDebounce";
import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaPhone, FaStar, FaAsterisk, FaAddressBook, FaIdCard, FaCalendarDay } from "react-icons/fa6";
import arrImg from "@/lib/arrow.svg";
import PopUp from "../components/PopUp";
import { FaTimes } from "react-icons/fa";
import { BrevoEmailClient } from "@/lib/Classes/Email";
import { eligibilityCheck, generateAcknowledgementEmail } from "@/lib/Email Templates";
import { fadeIn } from "@/lib/AnimationVariants";
import InViewWrapper from "../components/InViewWrapper";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

interface Payload {
    firstName: string;
    lastName: string;
    medId?: string; // Assuming medId can be either a string or a number
    email: string;
    phone: string;
    dob: string; // Assuming dob is a string in a date format
    address: string;
    startDate: string; // Assuming startDate is a string in a date format
}

enum ErrorState {
    IDLE = "idle",
    GOOD = "good",
    BAD = "bad"
}

interface ErrorStateObj {
    status: ErrorState;
    error: string;
}

interface ErrorObj {
    [key: string]: ErrorStateObj; // Index signature
}

export default function FormSection() {
    const [firstNameText, setFirstNameText] = useState<string>("");
    const [firstNameTextPop, setFirstNameTextPop] = useState<string>("");
    const [lastNameText, setLastNameText] = useState<string>("");
    const [emailText, setEmailText] = useState<string>("");
    const [phoneText, setPhoneText] = useState<string>("");
    const [medId, setMedId] = useState<string>("");
    const [dob, setDob] = useState<string>("2007-01-01");
    const [startDate, setStartDate] = useState<string>(new Date().toISOString().slice(0, 16));
    const [address, setAddress] = useState<string>("");
    const [showThanks, setShowThanks] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [errorObj, setErrorObj] = useState<ErrorObj>({
        firstName: { error: "", status: ErrorState.IDLE },
        lastName: { error: "", status: ErrorState.IDLE },
        email: { error: "", status: ErrorState.IDLE },
        phone: { error: "", status: ErrorState.IDLE },
        address: { error: "", status: ErrorState.IDLE },
        dob: { error: "", status: ErrorState.GOOD },
        medID: { error: "", status: ErrorState.GOOD },
        startDate: { error: "", status: ErrorState.GOOD },
    });

    // Debounced Variables
    const debounceFirstNameText = useDebounce(firstNameText);
    const debounceLastNameText = useDebounce(lastNameText);
    const debounceEmailText = useDebounce(emailText);
    const debouncePhoneText = useDebounce(phoneText);
    const debounceAddress = useDebounce(address);

    const goodToGo = useMemo(() => {
        const result = Object.keys(errorObj).every((key) =>
            errorObj[key as keyof ErrorObj].status === ErrorState.GOOD
        );

        return result
    }, [errorObj]);

    // Validate first name
    useEffect(() => {
        if (!debounceFirstNameText) {
            setErrorObj((prev) => ({ ...prev, firstName: { error: "", status: ErrorState.IDLE } }));
            return;
        }

        if (!isValidName(debounceFirstNameText)) {
            setErrorObj((prev) => ({ ...prev, firstName: { error: "Invalid first name", status: ErrorState.BAD } }));
            return;
        }

        setErrorObj((prev) => ({ ...prev, firstName: { error: "", status: ErrorState.GOOD } }));
    }, [debounceFirstNameText]);

    // Validate last name
    useEffect(() => {
        if (!debounceLastNameText) {
            setErrorObj((prev) => ({ ...prev, lastName: { error: "", status: ErrorState.IDLE } }));
            return;
        }

        if (!isValidName(debounceLastNameText)) {
            setErrorObj((prev) => ({ ...prev, lastName: { error: "Invalid last name", status: ErrorState.BAD } }));
            return;
        }
        setErrorObj((prev) => ({ ...prev, lastName: { error: "", status: ErrorState.GOOD } }));
    }, [debounceLastNameText]);

    // Validate Email address
    useEffect(() => {
        if (!debounceEmailText) {
            setErrorObj((prev) => ({ ...prev, email: { error: "", status: ErrorState.IDLE } }));
            return;
        }

        if (!isValidEmail(debounceEmailText)) {
            setErrorObj((prev) => ({ ...prev, email: { error: "Invalid email address", status: ErrorState.BAD } }));
            return;
        }

        setErrorObj((prev) => ({ ...prev, email: { error: "", status: ErrorState.GOOD } }));
    }, [debounceEmailText]);

    // Validate Phone
    useEffect(() => {
        if (!debouncePhoneText) {
            setErrorObj((prev) => ({ ...prev, phone: { error: "", status: ErrorState.IDLE } }));
            return;
        }

        if (!isValidPhone(debouncePhoneText)) {
            setErrorObj((prev) => ({ ...prev, phone: { error: "Invalid phone number", status: ErrorState.BAD } }));
            return;
        }

        setErrorObj((prev) => ({ ...prev, phone: { error: "", status: ErrorState.GOOD } }));
    }, [debouncePhoneText]);


    // Validate Address
    useEffect(() => {
        if (debounceAddress === "") {
            setErrorObj((prev) => ({ ...prev, address: { error: "", status: ErrorState.IDLE } }));
            return;
        }

        const { error, isValid } = isValidAddress(debounceAddress);
        if (!isValid) {
            setErrorObj((prev) => ({ ...prev, address: { error: error, status: ErrorState.BAD } }));
            return;
        }

        setErrorObj((prev) => ({ ...prev, address: { error: "", status: ErrorState.GOOD } }));
    }, [debounceAddress]);

    // Handle dat processing when submitted
    const performSubmit = async () => {
        setIsLoading(true)
        const payload: Payload = {
            firstName: debounceFirstNameText,
            lastName: debounceLastNameText,
            medId: medId,
            email: debounceEmailText,
            phone: debouncePhoneText,
            dob: dob,
            address: address,
            startDate: formatDateTime(startDate),
        }

        const SendWithBrevo = new BrevoEmailClient();

        const ORGANISATION_EMAIL= process.env.NEXT_PUBLIC_ORGANISATION_EMAIL_ELIGIBILITY!
        const ORGANISATION_NAME = process.env.NEXT_PUBLIC_ORGANISATION_NAME!

        const americareECopy = eligibilityCheck(
            {
                email: payload.email,
                firstName: payload.firstName,
                lastName: payload.lastName,
                phone: payload.phone,
                address: payload.address,
                dob: payload.dob,
                startDate: payload.startDate,
                medID: payload.medId
            }
        );

        const clientCopy = generateAcknowledgementEmail(payload.firstName);

        // Send to AmeriCare
        await SendWithBrevo.sendEmail(
            ORGANISATION_NAME,
            ORGANISATION_EMAIL,
            `${payload.firstName} ${payload.lastName}`,
            payload.email,
            "Eligibility Check",
            americareECopy
        );


        // Send to Client
        await SendWithBrevo.sendEmail(
            `${payload.firstName} ${payload.lastName}`,
            payload.email,
            ORGANISATION_NAME,
            ORGANISATION_EMAIL,
            "Confirmation: Eligibility Form Data Received  - AmeriCare",
            clientCopy
        );

        setShowThanks(true);
        handleReset();
        setFirstNameTextPop(payload.firstName);
        setIsLoading(false);
    }

    // Manage Toasts
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (isLoading) return;
        const promise = performSubmit();

        toast.promise(promise, {
            loading: "Submitting information...",
            success: "Form submitted successfully! ✨✔🚀",
            error: "Oops! Failed to submit the form. Please try again.",
        });
    }

    const closeFunction = () => {
        setFirstNameTextPop("");
        setShowThanks(!showThanks);
    }

    const handleReset = () => {
        setFirstNameText('');
        setLastNameText('');
        setEmailText('');
        setPhoneText('');
        setMedId('');
        setDob('');
        setAddress('');
        setStartDate(new Date().toISOString().slice(0, 16)); // Set start date to the current datetime
    };


    return (
        <>
            <PopUp closeFunction={closeFunction} isVisible={showThanks}>
                <div className="relative max-sm:-translate-y-[3.25rem] flex flex-col dark:bg-darkBg sm:max-w-[40rem] max-w-full bg-white overflow-hidden rounded-xl border dark:border-white/25 border-primary/5 shadow-2xl shadow-black/10">
                    <div className="grid place-items-center relative">
                        <Image
                            src="https://americare.sirv.com/icons/Team%20spirit.png"
                            alt="Team spirit"
                            height={2000}
                            width={2000}
                            priority
                            className="w-[20rem] translate-y-2"
                        />
                    </div>
                    <div className="sm:p-8 p-6 text-center mt-3 max-xl:text-sm">
                        <h2 className="sm:text-4xl text-3xl font-bold p-2 text-primary">Thank you {firstNameTextPop}!</h2>
                        <p className="dark:text-white text-black">
                            Thank you for reaching out to us! We have received your message and the details you submitted. Our team will review your message and contact you within 24 hours. We appreciate your patience and look forward to connecting with you soon!
                        </p>
                        <div onClick={closeFunction} className={clsx(
                            "mx-auto mt-5 font-semibold smooth text-primary dark:bg-primary/25 dark:text-white bg-primary/5 sm:py-3 py-2 sm:px-10 whitespace-nowrap px-6 active:rotate-3 hover:text-white cursor-pointer active:scale-90 outline-primary w-fit select-none border-4 dark:border-darkBg border-white outline-2 outline-dashed relative overflow-hidden h-fit",
                            "after:h-2 after:w-2 sm:rounded-xl rounded-lg hover:after:bg-primary hover:after:h-[105%] hover:after:w-full smooth-after after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
                        )}>
                            <span className="relative z-50">Okay</span>

                        </div>
                    </div>

                    <span onClick={closeFunction} className="absolute smooth top-4 right-4 text-3xl text-primary hover:text-red-600 cursor-pointer">
                        <FaTimes />
                    </span>
                </div>
            </PopUp>

            <form action="" onSubmit={handleSubmit} className="dark:bg-darkBg dark:text-white py-12 2xl:px-[10vw] sm:px-[8vw]  px-6 relative bg-white z-40">
                <InViewWrapper animation={fadeIn}>
                    <>
                        <Image
                            src={"https://americare.sirv.com/icons/bbblurry.svg"}
                            alt={"blur shape"}
                            height={800}
                            width={800}
                            id="check_eligibility"
                            className="sm:w-[70rem] w-[80rem] absolute sm:-top-[20rem] -top-[8rem] sm:-left-[20rem] -left-[12rem] dark:opacity-50 max-md:dark:opacity-25"
                        />
                        <div className="sm:mb-12 mb-8">
                            <h1 className={clsx(FontFamily.className, "2xl:text-[3vw] sm:text-5xl text-4xl text-primary font-semibold relative w-fit")}>
                                Check Eligibility
                                <Image
                                    src={arrImg}
                                    alt={"Scribble arrow"}
                                    height={80}
                                    width={80}
                                    className="h-full object-cover max-md:scale-105 max-md:group-hover:scale-100 smooth absolute -top-2 sm:block hidden -right-[25%]"
                                />
                            </h1>
                            <p className="sm:text-base text-sm py-3 grid">
                                <span>You&apos;re likely to be eligible if you have Medicaid. </span>
                                <span className="opacity-50">
                                    Fill out the form below to see haw fast you can get started with pay & benefits.
                                </span>
                            </p>
                        </div>

                        <section>
                            {/* Form input area */}
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(clamp(20rem,35vw,40rem),1fr))] sm:gap-[2rem_1rem] gap-4">
                                {/* first name */}
                                <div className="flex flex-col gap-2 capitalize">
                                    <span className="flex gap-1 sm:text-base text-sm">First name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.firstName.error}</span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        errorObj.firstName.status === ErrorState.BAD ? "border-2 border-red-500" : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaUser className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            errorObj.firstName.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
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
                                            name="firstName"
                                            required
                                            value={firstNameText}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstNameText(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* last name */}
                                <div className="flex flex-col gap-2 capitalize">
                                    <span className="flex gap-1 sm:text-base text-sm">Last name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.lastName.error}</span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        errorObj.lastName.status === ErrorState.BAD ? "border-2 border-red-500" : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaUser className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            errorObj.lastName.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
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
                                            name="lastName"
                                            required
                                            value={lastNameText}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastNameText(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* Medicaid ID */}
                                <div className="flex flex-col gap-2 capitalize">
                                    <span className="flex gap-1 sm:text-base text-sm">Medicaid ID <span className="opacity-60">(optional)</span> <span className="text-red-500"> {errorObj.medID.error}</span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        errorObj.medID.status === ErrorState.BAD ? "border-2 border-red-500" : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaIdCard className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            errorObj.medID.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
                                        )}
                                        />
                                        <input
                                            type="text"
                                            placeholder="123-ABC-4567"
                                            className={clsx(
                                                "peer",
                                                "dark:bg-white/5 bg-primary/5 outline-none",
                                                "bg-transparent",
                                                "w-full py-4 px-12 sm:text-lg",
                                            )}
                                            name="medicAid"
                                            value={medId}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setMedId(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <span className="flex gap-1 sm:text-base text-sm">E-mail <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.email.error}</span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        errorObj.email.status === ErrorState.BAD ? "border-2 border-red-500" : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaEnvelope className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            errorObj.email.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
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
                                            required
                                            value={emailText}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailText(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* phone number */}
                                <div className="flex flex-col gap-2">
                                    <span className="flex gap-1 sm:text-base text-sm">Phone number <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.phone.error}</span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        errorObj.phone.status === ErrorState.BAD ? "border-2 border-red-500" : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaPhone className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            errorObj.phone.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
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
                                            name="phoneNumber"
                                            required
                                            value={phoneText}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneText(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* Date of Birth */}
                                <div className="flex flex-col gap-2 capitalize">
                                    <span className="flex gap-1 sm:text-base text-sm">Date of birth <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.dob.error}</span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        errorObj.dob.status === ErrorState.BAD ? "border-2 border-red-500" : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaCalendarDay className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            errorObj.dob.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
                                        )}
                                        />
                                        <input
                                            type="date"
                                            placeholder="Doe"
                                            className={clsx(
                                                "peer",
                                                "dark:bg-white/5 bg-primary/5 outline-none",
                                                "bg-transparent appearance-none",
                                                "w-full py-4 px-12 sm:text-lg",
                                            )}
                                            name="dob"
                                            max={new Date().toISOString().split('T')[0]}
                                            required
                                            value={dob}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setDob(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* Patient's Address */}
                                <div className="flex flex-col gap-2">
                                    <span className="flex gap-1 sm:text-base text-sm">Address <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.address.error}</span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        errorObj.address.status === ErrorState.BAD ? "border-2 border-red-500" : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaAddressBook className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            errorObj.address.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
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
                                            name="address"
                                            required
                                            value={address}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* Desired Start date */}
                                <div className="flex flex-col gap-2 capitalize">
                                    <span className="flex gap-1 sm:text-base text-sm">Desired Start date <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.startDate.error}</span></span>
                                    <div className={clsx(
                                        "relative smooth rounded-xl overflow-hidden",
                                        errorObj.startDate.status === ErrorState.BAD ? "border-2 border-red-500" : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                    )}>
                                        <FaCalendarDay className={clsx(
                                            "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                            errorObj.startDate.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
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
                                            name="startDate"
                                            required
                                            value={startDate}
                                            min={new Date().toISOString().slice(0, 16)}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit button */}
                            {<div className="flex flex-col gap-2 mt-6 group sm:w-fit">
                                <button
                                    className={clsx(
                                        "smooth border-2 border-dashed",
                                        "border-primary text-primary bg-transparent",
                                        goodToGo ? "grayscale-0 hover:bg-primary hover:text-white hover:border-dotted active:scale-90" : "grayscale cursor-not-allowed",
                                        "sm:w-fit py-4 px-8 sm:text-lg rounded-lg outline-none",
                                        isLoading && "opacity-65"
                                    )}

                                    type={goodToGo && !isLoading ? "submit" : "button"}
                                >
                                    {goodToGo ?
                                        <span>
                                            {!isLoading ?
                                                <span className="flex gap-2 items-center justify-center">
                                                    Send application <FaStar className="group-hover:text-yellow-300" />
                                                </span>
                                                :
                                                <span className="flex gap-2 items-center justify-center">
                                                    <Image
                                                        src={"https://americare.sirv.com/icons/spinner.svg"}
                                                        alt="spinner"
                                                        height={20}
                                                        width={20}
                                                        className="dark:invert-0 invert"
                                                    />
                                                    submitting
                                                </span>
                                            }
                                        </span>
                                        :
                                        <span className="flex gap-2 items-center justify-center">Fill the form</span>
                                    }
                                </button>
                            </div>}

                        </section>
                    </>
                </InViewWrapper>
            </form>
        </>

    );
}