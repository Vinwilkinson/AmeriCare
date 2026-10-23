import Image from "next/image";
import CustomBtn from "@/app/components/CustomBtn";

export default function PeopleSection() {

    return (
        <div className="wrap">
            <section className="people">
                <Image
                    src="/why/nursing.jpg"
                    alt="Christine Regis, RN, AmeriCare nursing leadership"
                    height={2180}
                    width={2048}
                />
                <div>
                    <div className="eyebrow">ACCOUNTABILITY HAS A HUMAN FACE</div>
                    <h2>Know the people<br />behind your care.</h2>
                    <p>Confidence starts with knowing who is responsible. Meet the leadership and support professionals behind AmeriCare’s clinical, family communication, and operational functions.</p>
                    <div className="actions">
                        <CustomBtn text="Meet Our Team" linkHref="/why-us/team" noBorder />
                    </div>
                    <small>Ask who will coordinate your inquiry and how clinical questions are directed.</small>
                </div>
            </section>
        </div>
    )
}
