"use client";

const Services = () => {
  return (
<>
<section id="services" className=" bg-indigo-950 px-6">
      {/* Services */}
      <h2 className="text-3xl text-white font-bold mb-6">Services</h2>
      <ul className="grid md:grid-cols-3 gap-6">
        <li className="bg-black text-white p-6 rounded shadow">
          <h3 className="font-semibold">Service 1</h3>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore hic aperiam molestias blanditiis illo fugiat consectetur? Aut velit labore beatae, sed vero saepe cum hic. Beatae dolor recusandae modi dolores!
          </p>
        </li>
        <li className="bg-black text-white p-6 rounded shadow">
          <h3 className="font-semibold">Service 2</h3>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero officiis iure provident ducimus. Obcaecati, iusto? Dicta dolore explicabo distinctio laborum quisquam sunt deserunt quas a earum! Numquam libero perferendis quia!.
          </p>
        </li>
        <li className="bg-black text-white p-6 rounded shadow">
          <h3 className="font-semibold">Service 3</h3>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi necessitatibus aut ipsa assumenda ut quod eos sit est aliquid corporis in officia fugiat tempore, temporibus, labore exercitationem provident. Et, cum!.
          </p>
        </li>
      </ul>

    {/* Testimonials */}
      <div className="py-16">
        <h2 className="text-3xl text-white font-bold mb-6">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="bg-black text-white p-6 rounded shadow">
            <p>
            &quot; This person was fantastic to work with – highly skilled and
              professional!&quot;
            </p>
            <footer className="mt-4 text-sm text-blue-200">Markitz Consult</footer>
          </blockquote>
          <blockquote className="bg-black text-white p-6 rounded shadow">
            <p>
              &quot;Delivered above expectations and always on time. Highly
              recommended.&quot;
            </p>
            <footer className="mt-4 text-sm text-blue-200">Marcus Vigils</footer>
          </blockquote>
        </div>
      </div>
    </section>
        </>
  );
};

export default Services;