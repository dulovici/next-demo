const Hero = () => {
  return (
    <div>
      {/* Hero Content */}
      <div className="container mx-auto px-8 md:px-16 py-16 text-left md:text-center flex flex-col justify-center items-center">
        <h1 className="text-secondary text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          Definitive IT Solution For Managing Sales And Ordering.
          <br />
          Tailored For <span className="text-primary">FMCG And Retail.</span>
        </h1>
        <p className="font-bold text-lg md:text-xl text-muted mt-6">
          Increase sales, lower costs, and manage stock.
        </p>
        <p className="mt-4 text-base text-foreground max-w-3xl mx-auto md:mx-0">
          From smart order planning to advanced analytics, our solution brings
          efficiency to every step of the ordering process. It enables smart
          decision-making through predictive analytics and AI, real-time order
          tracking, a cost-saving route optimizer, and customizable features
          tailored to your business. DOP is transforming the way suppliers and
          buyers interact.
        </p>
      </div>
    </div>
  );
};

export default Hero;
