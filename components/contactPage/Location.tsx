import MyInfo from "../MyInfo";

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.25160310465!2d-122.10740919999999!3d37.3986808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0981d82e711%3A0x2139abf46eb380c5!2s2400%20W%20El%20Camino%20Real%2C%20Mountain%20View%2C%20CA%2094040!5e0!3m2!1sen!2sus!4v1713169770588!5m2!1sen!2sus"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="phone" value="+15853161857" />
        <MyInfo field="email" value="jingshuhuang97@gmail.com" />
      </ul>
    </div>
  );
}
