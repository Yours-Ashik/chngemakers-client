import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaMailBulk, FaPaperPlane, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_jnx350g', 'template_4g5rh0v', form.current, '7tuN22vyz0HkYZRVx')
            .then(
                () => {
                    Swal.fire({
                        title: 'Success',
                        text: 'Mail sent successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });

                    form.current.reset();
                },
                (error) => {
                    Swal.fire({
                        title: 'Error',
                        text: `Failed to send email: ${error.text}`,
                        icon: 'error',
                        confirmButtonText: 'Try Again',
                    });
                }
            );
    };
    return (
        <div>
            <div id="contact" className="   mx-auto lg:min-h-[600px] ">
                <h1 className="uppercase text-3xl font-bold  lg:mt-20 mb-10 mt-10 text-center">contact us</h1>
                <div className="lg:flex justify-center lg:p-10 p-7 items-center rounded-xl  gap-5 bg-[#F8F5F2]">
                    {/* Contact Text */}
                    <div className="w-full space-y-5   ">
                        <h1 className="lg:text-2xl text-xl">
                            If You Face Any Problem Or You Want To Say Something Feel Free To Inform Us
                        </h1>
                        <p className="lg:text-xl text-lg flex items-center gap-3">
                            <FaPhone /> 017-26567341
                        </p>
                        <p className="lg:text-xl text-lg flex items-center gap-3">
                            <FaMailBulk /> changemakers@gmail.com
                        </p>
                        <p className="lg:text-xl text-lg flex items-center gap-3">
                            <FaMapMarkerAlt /> Dhaka, Bangladesh
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-full mt-10">
                        <section className="lg:p-8  text-black">
                            <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
                                {/* Name and Email */}
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        name="from_name"
                                        placeholder="Your Name"
                                        required
                                        className="input input-bordered w-full md:w-1/2 text-black bg-[#ebaa8f] border-[1px] border-[#DAC5A7] placeholder:text-black"
                                    />
                                    <input
                                        type="email"
                                        name="reply_to"
                                        placeholder="Your Email"
                                        required
                                        className="input input-bordered w-full md:w-1/2 text-black bg-[#ebaa8f] border-[1px] placeholder:text-black border-[#DAC5A7]"
                                    />
                                </div>

                                {/* Message */}
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    required
                                    className="textarea textarea-bordered w-full text-black bg-[#ebaa8f] border-[1px] placeholder:text-black border-[#DAC5A7]"
                                ></textarea>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    value="Send"
                                    className="btn btn-primary flex items-center gap-2 w-full text-black bg-[#ebaa8f] md:w-auto border-[1px] border-[#DAC5A7]"
                                >
                                    <FaPaperPlane className="text-lg" />
                                    Send Message
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;