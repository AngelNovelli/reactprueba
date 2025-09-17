function ButtonCarousel({ direction, carouselRef }) {
  const icon = direction === "left" ? "❮" : "❯";
  const label = direction === "left" ? "Previous channels" : "Next channels";

  const handleClick = () => {
    if (!carouselRef.current) return;
    const itemWidth = carouselRef.current.firstChild?.offsetWidth || 150; // fallback 150px
    const gap = 32;
    const scrollAmount = (itemWidth + gap) * 9.21;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <button className={`carousel-btn ${direction}`} onClick={handleClick} aria-label={label}> {icon} </button>
  );
}

export default ButtonCarousel;
