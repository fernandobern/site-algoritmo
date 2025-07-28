interface TitleProps {
  title: string;
  size?: string;
  weight?: string;
  subtitle?: string;
  color?: string;
}

function Title({ title, color = "23d2ff", size = "25px", weight = 'bold'}: TitleProps) {
  return <p style={{ color: color, fontSize: size, fontWeight: weight}}>{title}</p>;
}

export default Title