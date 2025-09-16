function ButtonCarousel({ direction, carouselRef }) {
  const icon = direction === "left" ? "❮" : "❯";
  const label = direction === "left" ? "Previous channels" : "Next channels";

  const handleClick = () => {
    if (!carouselRef.current) return;
    const itemWidth =
      carouselRef.current.firstChild?.offsetWidth || 150; // fallback 150px
    const gap = 16; // ajustalo al gap que uses en el CSS
    const scrollAmount = (itemWidth + gap) * 5;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`carousel-btn ${direction}`}
      onClick={handleClick}
      aria-label={label}
    >
      {icon}
    </button>
  );
}

export default ButtonCarousel;
