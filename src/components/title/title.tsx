import React from "react";
import './titles.css'

interface TitleProps {
  title: string;
  size?: string;
  weight?: string;
  subtitle?: React.ReactNode; // Corrigido: React.ReactNode, não React.Node
  color?: string;
}

function Title({ title, subtitle, color = "#23d2ff", size = "50px", weight = 'bold' }: TitleProps) {
  return (
    <div>
      <p style={{ color, fontSize: size, fontWeight: weight }}>{title}</p>
      {subtitle && <span className="subtitle">{subtitle}</span>}
    </div>
  );
}

export default Title;
