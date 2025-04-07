import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <section
      className="home-section about-section"
      id="about"
      data-section="about"
    >
      <SectionHeader section="About" />

      <p className="about-contents">
        Welcome to the official digital portfolio of Zachary Betters, where I
        showcase a selection of my latest programming projects. Using HTML,
        SCSS, and jQuery, this custom-built website highlights a few key pieces
        that demonstrate my technical skills, problem-solving abilities, and
        passion for clean, efficient code.
      </p>
    </section>
  );
}
