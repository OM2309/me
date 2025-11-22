const About = () => {
  return (
    <div className="p-4">
      <div>
        <h1 className="font-inter font-bold text-white text-[44px] leading-[53px]">
          Anurag Sharma
        </h1>
      </div>
      <div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "28px",
            color: "rgb(86, 86, 86)",
            marginTop: "8px",
            // color:"white"
          }}
        >
          Self-taught software engineer from India, 22.
          <br />I disappear into code for hours, headphones on, world off and
          somehow ship products
        </p>
      </div>
    </div>
  );
};

export default About;
