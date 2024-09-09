"use client"
import { isValidName, isValidEmail, isValidPhone, splitText } from "@/lib";
import useDebounce from "@/lib/Hooks/UseDebounce";
import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaPhone, FaList, FaPaperclip, FaAngleDown, FaStar, FaAsterisk } from "react-icons/fa6";
import arrImg from "@/lib/arrow.svg";
import { BrevoEmailClient } from "@/lib/Classes/Email";
import { applicationReceivedEmail, onlineApplication } from "@/lib/Email Templates";
import { FaTimes } from "react-icons/fa";
import PopUp from "@/app/components/PopUp";
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";


const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

enum Positions {
    None = 0,
    Companion = 1,
    HomeMarker = 2,
    PersonalCareWorker = 3,
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
    const handleClickFileUplaod = () => {
        if (!fileUploadRef.current) return;
        fileUploadRef.current.click();
    }

    const fileUploadRef = useRef<HTMLInputElement>(null);

    const [firstNameText, setFirstNameText] = useState<string>("");
    const [lastNameText, setLastNameText] = useState<string>("");
    const [emailText, setEmailText] = useState<string>("");
    const [phoneText, setPhoneText] = useState<string>("");
    const [coverLetterText, setCoverLetterText] = useState<string>("");
    const [positions, setPositions] = useState<Positions>(Positions.None);
    const [attachFile, setAttachFile] = useState<File | null>(null);
    const [showThanks, setShowThanks] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const coverLengthWordCound = coverLetterText.length > 0 ? splitText(coverLetterText).length : 0;

    const [errorObj, setErrorObj] = useState<ErrorObj>({
        firstName: { error: "", status: ErrorState.IDLE },
        lastName: { error: "", status: ErrorState.IDLE },
        email: { error: "", status: ErrorState.IDLE },
        phone: { error: "", status: ErrorState.IDLE },
        position: { error: "", status: ErrorState.IDLE },
        attachFile: { error: "", status: ErrorState.IDLE },
        coverLetter: { error: "", status: ErrorState.IDLE },
    });

    // Debounced Variables
    const debounceFirstNameText = useDebounce(firstNameText);
    const debounceLastNameText = useDebounce(lastNameText);
    const debounceEmailText = useDebounce(emailText);
    const debouncePhoneText = useDebounce(phoneText);
    const debounceCoverLetterText = useDebounce(coverLetterText);

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

    // Validate Phone
    useEffect(() => {
        if (positions === Positions.None) {
            setErrorObj((prev) => ({ ...prev, position: { error: "", status: ErrorState.IDLE } }));
            return;
        }

        setErrorObj((prev) => ({ ...prev, position: { error: "", status: ErrorState.GOOD } }));
    }, [positions]);

    // Validate Cover letter
    useEffect(() => {
        if (!debounceCoverLetterText) {
            setErrorObj((prev) => ({ ...prev, coverLetter: { error: "", status: ErrorState.IDLE } }));
            return;
        }

        if (coverLengthWordCound < 100) {
            setErrorObj((prev) => ({ ...prev, coverLetter: { error: "Cover letter is too short!", status: ErrorState.BAD } }));
            return;
        }

        if (coverLengthWordCound > 500) {
            setErrorObj((prev) => ({ ...prev, coverLetter: { error: "Cover letter is too long!", status: ErrorState.BAD } }));
            return;
        }

        setErrorObj((prev) => ({ ...prev, coverLetter: { error: "", status: ErrorState.GOOD } }));
    }, [debounceCoverLetterText, coverLengthWordCound]);


    const handleFileChange = (e: FileList | null) => {
        if (!e) {
            setErrorObj((prev) => ({ ...prev, attachFile: { error: "Please select a PDF file!", status: ErrorState.BAD } }));
            return;
        }

        const file = e[0];
        const maxSize = 10 * 1024 * 1024;

        if (file.size > maxSize) {
            setErrorObj((prev) => ({ ...prev, attachFile: { error: "File is too large!", status: ErrorState.BAD } }));
            return;
        }

        if (file.type !== "application/pdf") {
            setErrorObj((prev) => ({ ...prev, attachFile: { error: "Please upload a PDF!", status: ErrorState.BAD } }));
            return;
        }

        setErrorObj((prev) => ({ ...prev, attachFile: { error: "", status: ErrorState.GOOD } }));
        setAttachFile(file);
    }

    const performSubmit = async () => {
        setIsLoading(true);
        const positionsList = ["", "Companion", "Home Marker", "Personal Care Worker"];
        const SendWithBrevo = new BrevoEmailClient();

        const resumeUrl = await SendWithBrevo.uploadAttachment(attachFile!);

        const payload = {
            firstName: debounceFirstNameText,
            lastName: debounceLastNameText,
            email: debounceEmailText,
            phone: debouncePhoneText,
            position: positionsList[positions],
            attachFile: resumeUrl,
            coverLetter: debounceCoverLetterText,
        }

        const americareECopy = onlineApplication(
            {
                coverLetter: payload.coverLetter,
                email: payload.email,
                firstName: payload.firstName,
                lastName: payload.lastName,
                phone: payload.phone,
                position: `${payload.position}`,
                resume: payload.attachFile
            }
        )

        const clientCopy = applicationReceivedEmail({
            firstName: payload.firstName,
            lastName: payload.lastName,
            position: `${payload.position}`,
        })


        const ORGANISATION_EMAIL = process.env.NEXT_PUBLIC_ORGANISATION_EMAIL!
        const ORGANISATION_NAME = process.env.NEXT_PUBLIC_ORGANISATION_NAME!

        // Send to AmeriCare
        await SendWithBrevo.sendEmail(
            ORGANISATION_NAME,
            ORGANISATION_EMAIL,
            `${payload.firstName} ${payload.lastName}`,
            payload.email,
            "Online Application",
            americareECopy
        );

        // Send to Client
        await SendWithBrevo.sendEmail(
            `${payload.firstName} ${payload.lastName}`,
            payload.email,
            ORGANISATION_NAME,
            ORGANISATION_EMAIL,
            "Application Recieved - AmeriCare",
            clientCopy
        );

        setIsLoading(false);
        setShowThanks(true);
        handleReset();
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (isLoading) return;
        if (!goodToGo) return;
        const promise = performSubmit();

        toast.promise(promise, {
            error: "Opps! Failed to submit application",
            loading: "Submitting application...",
            success: "Application submitted ✨✔🚀"
        })
    }

    const handleReset = () => {
        setFirstNameText('');
        setLastNameText('');
        setEmailText('');
        setPhoneText('');
        setPositions(Positions.None);
        setCoverLetterText('');
        setAttachFile(null);
        if (fileUploadRef.current) fileUploadRef.current.value = ''; // Reset the file input field
    };

    const closeFunction = () => {
        setShowThanks(!showThanks);
    }

    return (
        <>
            <PopUp closeFunction={closeFunction} isVisible={showThanks}>
                <div className="relative max-sm:-translate-y-[3.25rem] flex flex-col dark:bg-darkBg sm:max-w-[40rem] max-w-full bg-white overflow-hidden sm:rounded-t-2xl rounded-b-2xl border dark:border-white/25 border-primary/5 shadow-2xl shadow-black/10">
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
                        <h2 className="sm:text-4xl text-3xl font-bold p-2 text-primary">Application Recieved!</h2>
                        <p className="dark:text-white text-black">
                            Thanks for submitting your application! We&apos;ll review it and get back to you within 24 hours.
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

            <InViewWrapper animation={fadeIn}>
                <form action="" onSubmit={handleSubmit} className={clsx(isLoading ? "pointer-events-none" : "", "dark:bg-darkBg dark:text-white py-12 2xl:px-[10vw] sm:px-[8vw]  px-6 relative bg-white z-10")}>

                    <Image
                        src={"https://americare.sirv.com/icons/bbblurry.svg"}
                        alt={"blur shape"}
                        height={800}
                        width={800}
                        className="sm:w-[70rem] w-[80rem] absolute sm:-top-[20rem] -top-[8rem] sm:-left-[20rem] -left-[12rem] dark:opacity-50 max-md:dark:opacity-25"
                    />
                    <div className="sm:mb-12 mb-8">
                        <h1 className={clsx(FontFamily.className, "2xl:text-[3vw] sm:text-5xl text-4xl text-primary font-semibold relative w-fit")}>
                            Online Application
                            <Image
                                src={arrImg}
                                alt={"Scribble arrow"}
                                height={80}
                                width={80}
                                className="h-full object-cover max-md:scale-105 max-md:group-hover:scale-100 smooth absolute -top-2 sm:block hidden -right-[25%]"
                            />
                        </h1>
                        <p className="sm:text-base text-sm py-3 grid">
                            <span>This section is your chance to shine! </span>
                            <span className="opacity-50">
                                Here, you can tell us about your skills, experience, and why you&apos;d be a great fit for us.
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
                            {/* Position applying for */}
                            <div className="flex flex-col gap-2">
                                <span className="flex gap-1 sm:text-base text-sm">Position applying for <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.position.error}</span></span>
                                <div className={clsx(
                                    "relative smooth rounded-xl overflow-hidden cursor-pointer",
                                    errorObj.position.status === ErrorState.BAD ? "border-2 border-red-500" : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                                )}>
                                    <FaList className={clsx(
                                        "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                        errorObj.position.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
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
                                        name="position"
                                        required
                                        value={positions}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setPositions(Number(e.target.value) as Positions)}
                                    >
                                        <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={Positions.None}>Please choose an option</option>
                                        <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={Positions.Companion}>Companion</option>
                                        <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={Positions.HomeMarker}>Home maker</option>
                                        <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={Positions.PersonalCareWorker}>Personal care worker</option>

                                    </select>
                                    <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none right-6 peer-placeholder-shown:opacity-50" />
                                </div>
                            </div>
                            {/* Attach resume */}
                            <div className="flex flex-col gap-2">
                                <span className="flex gap-1 sm:text-base text-sm">Attach resume <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.attachFile.error}</span></span>
                                <div className={clsx(
                                    "relative smooth rounded-xl overflow-hidden",
                                    errorObj.attachFile.status === ErrorState.BAD ? "border-2 border-red-500" : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70",
                                    "flex gap-2"
                                )}>
                                    <FaPaperclip className={clsx(
                                        "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                        errorObj.attachFile.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
                                    )}
                                    />
                                    <div
                                        className={clsx(
                                            "peer",
                                            "dark:bg-white/5 bg-primary/5 outline-none",
                                            "bg-transparent",
                                            "w-full py-4 px-14 sm:text-lg",
                                        )}
                                    >
                                        <p className="max-w-[70%] truncate">
                                            {attachFile ? attachFile.name : "No file selected"}
                                        </p>
                                    </div>
                                    <input
                                        type="file"
                                        hidden
                                        accept=".pdf"
                                        ref={fileUploadRef}
                                        name="file"
                                        required
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChange(e.target.files)}
                                    />
                                    <span className="z-20 absolute top-1/2 -translate-y-1/2 select-none right-3 px-3 py-2  bg-primary/10 rounded-xl cursor-pointer hover:bg-primary/50 smooth active:scale-90 border dark:border-white/10 hover:dark:border-white/25 border-darkBg/10 hover:border-darkBg/25" onClick={handleClickFileUplaod}>Import file</span>
                                </div>
                            </div>
                        </div>
                        {/* Cover letter */}
                        <div className="flex flex-col gap-2 mt-6">
                            <p className="flex items-center justify-between">
                                <span className="flex gap-1 sm:text-base text-sm">Cover letter <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.coverLetter.error}</span></span>

                                <span className={clsx(
                                    "",
                                    coverLengthWordCound > 500 ? "text-red-600" : ""
                                )}>
                                    {coverLengthWordCound}/500
                                </span>
                            </p>
                            <div className={clsx(
                                "relative smooth rounded-xl overflow-hidden",
                                errorObj.coverLetter.status === ErrorState.BAD ? "border-2 border-red-500" : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                            )}>
                                <textarea
                                    className={clsx(
                                        "peer",
                                        "dark:bg-white/5 bg-primary/5 outline-none",
                                        "bg-transparent",
                                        "w-full py-4 px-8 sm:text-lg resize-none outline-none min-h-[calc(2lh+2rem)] max-h-[calc(4lh+2rem)]",
                                    )}
                                    name="coverLetter"
                                    required
                                    placeholder="Enter cover letter"
                                    rows={10}
                                    value={coverLetterText}
                                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCoverLetterText(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        {/* Agree to receiving emails */}
                        <div className="grid gap-2 w-full mt-4">
                            <div className="flex gap-3 items-center">
                                <div className="content">
                                    <label className="checkBox">
                                        <input id="00NHs00000wg4zr" name="00NHs00000wg4zr" value={1} type="checkbox" title="New Customer?" required />
                                        <div className="transition"></div>
                                    </label>
                                </div>
                                <span>By checking this box and submitting this form, you agree to receive emails from AmeriCare.</span>
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
                </form>
            </InViewWrapper>
        </>
    )
}