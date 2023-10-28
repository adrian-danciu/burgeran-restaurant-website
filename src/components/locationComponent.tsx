const LocationComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <p className="font-subtitle text-xl">View our location on Google Maps:</p>
      <a
        href={`https://www.google.com/maps?q=44.432470,l26.094214`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5698.063796447746!2d26.097990347291248!3d44.43250789551988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3f9032bbe9%3A0x71a08d3f1c8e3a2b!2sOld%20Town%2C%20Bucharest!5e0!3m2!1sen!2sro!4v1698527139235!5m2!1sen!2sro"
          width="320"
          height="220"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Old Town, Bucharest"
        />
      </a>
    </div>
  );
};

export default LocationComponent;
