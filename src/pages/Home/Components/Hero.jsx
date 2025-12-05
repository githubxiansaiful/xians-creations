import ProfileImage from '../../../assets/xian-main.png';

const Hero = () => {
  return (
    <div>
      <div className="hero-img max-w-[300px] mx-auto mt-10">
        <img src={ProfileImage} alt="Xian's Creations"></img>
      </div>
      <div className="text-center max-w-[600px] mx-auto mt-10 space-y-4 px-4">
        <h1 className="text-3xl font-bold">Capturing moments that feel real</h1>
        <p>I create soft and natural visuals inspired by everyday moments. Through simple frames and gentle storytelling, I aim to capture feelings that stay with you. This space is where I share the little moments that become memories.</p>
      </div>
    </div>
  );
};
export default Hero;