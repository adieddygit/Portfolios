  "use client";

  const Contact = () => {
    return (
<>
  {/* Contact */}
    <section id="contact" className="bg-indigo-950 text-white py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-4">
        Feel free to reach out via email: 
        {" "}
        <a
          href="mailto:adiemmanuel10@gmail.com"
          className="text-pink-200 font-semibold"
          >adiemmanuel10@gmail.com</a>
        
      </p>

        <form className="text-black grid gap-4 max-w-md  shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-white border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-white border p-2 rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="bg-white border p-2 rounded resize-none"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full font-sans transform transition duration-300 ease-in-out hover:translate-y-2"
        >
          Send Message
        </button>
      </form>
    </section>
        </>
    );
  };

  export default Contact;