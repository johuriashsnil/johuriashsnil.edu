import React from "react";
import { CustomCalendar } from "./Calender";

const MapSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-start w-full transition-all ease-in-out gap-8">
            <div className="relative w-full max-h-[450px] lg:col-span-2" style={{ paddingBottom: "56.25%" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4240.241433815591!2d89.04783273180071!3d25.855851043426583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e347b8d8a68419%3A0x18c984235caf4e14!2sSinger%20Gari%20High%20School!5e1!3m2!1sen!2sbd!4v1753966684040!5m2!1sen!2sbd"
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="w-full font-nato">
                <div className="px-4 h-1/2">
                    <h1 className="text-3xl underline font-semibold mb-4">Important Links</h1>
                    <ul className="space-y-2 mb-4">
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
                <CustomCalendar />
            </div>
        </div>
    );
};

export default MapSection;
