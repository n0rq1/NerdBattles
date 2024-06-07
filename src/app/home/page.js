import "../pages.css"; 
import "./home.css";
import Spline from '@splinetool/react-spline/next';
import gsap from "gsap";  

export default function Home() {
  return (
    <div className="bg-image-wrapper">
      <Spline
        scene="https://prod.spline.design/7QG5CF4LfbZXdMLj/scene.splinecode" 
      />
    </div>
  );
}


