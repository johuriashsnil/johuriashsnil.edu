/* eslint-disable @next/next/no-img-element */
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
    const year: number = new Date().getFullYear();
    return (
        <div data-testid="homeFooter">
            <footer className="font-sans lg:px-40 h-auto pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="px-4">
                        <h1 className="text-2xl underline font-semibold mb-4 text-white">
                            Important Links
                        </h1>
                        <ul className="space-y-2 mb-4 font-nano">
                            <li>
                                <a
                                    href="https://moedu.gov.bd/"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    শিক্ষা মন্ত্রনালয়
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://dinajpureducationboard.gov.bd/"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, দিনাজপুর
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://dshe.gov.bd/"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.abohomanbangla.com/"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    আবহমান বাংলা
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://www.infokosh.gov.bd/"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    ই- তথ্যকোষ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://www.ebook.gov.bd/"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    ই-বুক
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.teachers.gov.bd/"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    শিক্ষক বাতায়ন
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-white lg:border-l-2 px-4 lg:pl-10">
                        <h1 className="text-2xl font-bold">আমাদের সাথে যোগাযোগ করুন</h1>
                        <div className="flex gap-4 mt-10">
                            <Link href="https://www.facebook.com/Kesbafazilmadrasha">
                                <FaFacebook className="text-4xl text-blue-600" />
                            </Link>
                            <Link href="https://www.youtube.com/">
                                <FaYoutube className="text-4xl text-red-600" />
                            </Link>
                            <Link href="https://www.instagram.com/">
                                <FaInstagram className="text-4xl text-orange-600" />
                            </Link>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold mt-4">ঠিকানা</h1>
                            <p className="text-white">
                                {process.env.NEXT_PUBLIC_BANGLA_TITLE} <br />
                                {process.env.NEXT_PUBLIC_ADDRESS_LINE1}
                            </p>
                            <p className="text-white">মোবাইল: {process.env.NEXT_PUBLIC_NOTICE_CONTACT}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-8 lg:mt-0 lg:border-l-2">
                        <h2 className="text-xl font-semibold text-white mb-2">Developed By:</h2>
                        <img
                            src="https://lc42d8585n.ufs.sh/f/buPepfzrG3gdS0XkWNxZt6FMJhwabsnBG2qxryEQoIKU3vuP"
                            alt="Developer"
                            className="w-24 h-24 rounded-full border-2 border-white mb-2 object-cover"
                        />
                        <p className="text-white font-medium">Md Abdur Rahman Sifat</p>
                        <a
                            href="https://mdabdurrahmansifat.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline text-lg font-black"
                        >
                            Portfolio
                        </a>
                        <a href="tel:+8801521788920" className="text-white mt-2 text-lg ">
                            Contact: <span className="text-blue-400 hover:underline">+8801521-788920</span>
                        </a>
                    </div>
                </div>
                <div className="border-t-2 text-white text-center">
                    <p className="text-center pt-4">© {year} All Rights <a href="https://mdabdurrahmansifat.vercel.app" className="text-white" target="_blank" rel="noopener noreferrer">Reserved</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
